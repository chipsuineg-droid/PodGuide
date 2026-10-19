import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { PDFParse } from "pdf-parse"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()

    // Verify authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get("file") as File | null
    const notebookId = formData.get("notebookId") as string

    if (!file || !notebookId) {
      return NextResponse.json({ error: "Missing file or notebook ID" }, { status: 400 })
    }

    const fileName = file.name
    const fileType = file.type || "application/octet-stream"
    const fileSize = file.size
    const timestamp = Date.now()
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_")
    const storagePath = `${user.id}/${notebookId}/${timestamp}_${cleanFileName}`

    // Read file buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    let publicUrl: string = ""
    let textContent: string = ""

    // ── 1. Text Extraction Based on File Type ──
    const lowerName = fileName.toLowerCase()
    const isPdf = fileType.includes("pdf") || lowerName.endsWith(".pdf")
    const isText = fileType.startsWith("text/") ||
                   lowerName.endsWith(".txt") ||
                   lowerName.endsWith(".md") ||
                   lowerName.endsWith(".json") ||
                   lowerName.endsWith(".csv")

    if (isPdf) {
      let parser: any = null
      try {
        parser = new PDFParse({ data: buffer })
        await parser.load()
        const parsed = await parser.getText()
        textContent = typeof parsed === "string" ? parsed : (parsed?.text || "")
      } catch (err: any) {
        console.warn("PDF extraction warning:", err?.message)
      } finally {
        if (parser) {
          try { await parser.destroy() } catch {}
        }
      }
    } else if (isText) {
      try {
        textContent = new TextDecoder("utf-8").decode(buffer)
      } catch (err: any) {
        console.warn("Text decode warning:", err?.message)
      }
    }

    // ── 2. Storage Upload (Supabase Storage) ──
    let uploadedSuccessfully = false
    const bucketsToTry = ["notebooks", "materials"]

    for (const bucketName of bucketsToTry) {
      try {
        const { error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(storagePath, buffer, {
            contentType: fileType,
            upsert: true,
          })

        if (!uploadError) {
          const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(storagePath)
          publicUrl = urlData.publicUrl
          uploadedSuccessfully = true
          break
        }
      } catch (err) {
        console.warn(`Bucket ${bucketName} upload failed:`, err)
      }
    }

    // Fallback: If storage bucket isn't active, store base64 data URL for small files
    if (!uploadedSuccessfully) {
      if (fileSize < 2 * 1024 * 1024) {
        const base64 = buffer.toString("base64")
        publicUrl = `data:${fileType};base64,${base64}`
      } else {
        publicUrl = ""
      }
    }

    // ── 3. Normalized Document Type ──
    const normalizedType: "pdf" | "text" = isPdf ? "pdf" : "text"

    // ── 4. Save Record in Supabase notebook_documents ──
    const docPayload: any = {
      notebook_id: notebookId,
      file_name: fileName,
      file_url: publicUrl.length > 250000 ? "" : publicUrl,
      file_type: normalizedType,
      file_size: fileSize,
      processing_status: "ready",
      text_content: textContent ? textContent.slice(0, 150000) : null,
    }

    const { data: doc, error: dbError } = await supabase
      .from("notebook_documents")
      .insert(docPayload)
      .select()
      .single()

    if (dbError) {
      console.error("DB insert error for document:", dbError)
      return NextResponse.json({
        doc: {
          id: `doc-${Date.now()}`,
          notebook_id: notebookId,
          file_name: fileName,
          file_url: publicUrl,
          file_type: normalizedType,
          file_size: fileSize,
          created_at: new Date().toISOString(),
          text_content: textContent ? textContent.slice(0, 150000) : "",
        },
        publicUrl,
        extractedChars: textContent.length,
        message: "Document registered in memory",
      })
    }

    return NextResponse.json({
      doc: {
        ...doc,
        text_content: textContent ? textContent.slice(0, 150000) : doc.text_content,
      },
      publicUrl,
      extractedChars: textContent.length,
      success: true,
    })
  } catch (err: any) {
    console.error("Upload route error:", err)
    return NextResponse.json({ error: err.message || "Upload failed" }, { status: 500 })
  }
}
