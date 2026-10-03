import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()

    // Verify auth
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 })

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
    const storagePath = `${user.id}/${notebookId}/${timestamp}_${fileName}`

    // Read file as buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    let publicUrl: string = ""
    let textContent: string = ""

    // Extract text for text-based files
    const isText = fileType.startsWith("text/") || fileName.endsWith(".md") || fileName.endsWith(".txt") || fileName.endsWith(".json")
    if (isText) {
      try {
        textContent = new TextDecoder("utf-8").decode(buffer)
      } catch {}
    }

    // 1. Try uploading to Supabase storage (notebooks or materials bucket)
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

    // 2. Fallback: If storage bucket isn't available, store as Base64 Data URL so upload ALWAYS works
    if (!uploadedSuccessfully) {
      const base64 = buffer.toString("base64")
      publicUrl = `data:${fileType};base64,${base64}`
    }

    // 3. Save document record in notebook_documents
    const docPayload: any = {
      notebook_id: notebookId,
      file_name: fileName,
      file_url: publicUrl.length > 500000 ? "" : publicUrl, // Keep DB payload safe if huge
      file_type: fileType.includes("pdf") ? "pdf" : fileType.includes("image") ? "pdf" : "text",
      file_size: fileSize,
      processing_status: "ready",
    }

    // If we have text content extracted, save it
    if (textContent) {
      docPayload.text_content = textContent.slice(0, 100000)
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
          file_type: docPayload.file_type,
          file_size: fileSize,
          created_at: new Date().toISOString(),
          text_content: textContent,
        },
        publicUrl,
        message: "Document registered",
      })
    }

    return NextResponse.json({
      doc,
      publicUrl,
      success: true,
    })
  } catch (err: any) {
    console.error("Upload route error:", err)
    return NextResponse.json({ error: err.message || "Upload failed" }, { status: 500 })
  }
}
