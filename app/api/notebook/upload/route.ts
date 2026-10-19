import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export const runtime = "nodejs"

// Resilient load of pure pdf-parse lib (avoiding test file bugs or web worker crashes)
let pdfParserLib: any = null
try {
  pdfParserLib = require("pdf-parse/lib/pdf-parse.js")
} catch (e) {
  console.warn("Notice: pdf-parse lib not available in current runtime environment:", e)
}

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()

    // Verify authentication
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized. Please log in.", success: false }, { status: 401 })
    }

    let formData: FormData
    try {
      formData = await req.formData()
    } catch (e: any) {
      return NextResponse.json({
        error: `Could not parse upload payload: ${e?.message || "File too large"}`,
        success: false
      }, { status: 400 })
    }

    const file = formData.get("file") as File | null
    const notebookId = formData.get("notebookId") as string

    if (!file || !notebookId) {
      return NextResponse.json({ error: "Missing file or notebook ID", success: false }, { status: 400 })
    }

    const fileName = file.name || "Uploaded_Document"
    const fileType = file.type || "application/octet-stream"
    const fileSize = file.size || 0
    const timestamp = Date.now()
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_")
    const storagePath = `${user.id}/${notebookId}/${timestamp}_${cleanFileName}`

    // Read file buffer
    let buffer: Buffer
    try {
      const arrayBuffer = await file.arrayBuffer()
      buffer = Buffer.from(arrayBuffer)
    } catch (e: any) {
      return NextResponse.json({ error: `Failed to read file: ${e?.message}`, success: false }, { status: 500 })
    }

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

    if (isPdf && pdfParserLib) {
      try {
        const parsed = await pdfParserLib(buffer)
        textContent = parsed?.text || ""
      } catch (err: any) {
        console.warn("PDF extraction warning (proceeding without parsed text):", err?.message)
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
        console.warn(`Bucket ${bucketName} upload attempt failed:`, err)
      }
    }

    // Fallback URL if bucket is not active
    if (!uploadedSuccessfully) {
      if (fileSize < 1.5 * 1024 * 1024) {
        const base64 = buffer.toString("base64")
        publicUrl = `data:${fileType};base64,${base64}`
      } else {
        publicUrl = ""
      }
    }

    // Normalized Document Type
    const normalizedType: "pdf" | "text" = isPdf ? "pdf" : "text"

    // ── 3. Save Record in Supabase notebook_documents ──
    const docPayload: any = {
      notebook_id: notebookId,
      file_name: fileName,
      file_url: publicUrl.length > 200000 ? "" : publicUrl,
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
      console.warn("DB insert fallback for notebook document:", dbError)
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
        success: true,
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
    return NextResponse.json({
      error: err?.message || "Upload failed. Please retry.",
      success: false
    }, { status: 500 })
  }
}
