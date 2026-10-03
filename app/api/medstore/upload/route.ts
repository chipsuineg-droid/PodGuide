import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()

    // 1. Verify Authentication & Admin status
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 })
    }

    const { data: adminProfile } = await supabase
      .from("student_profiles")
      .select("is_admin")
      .eq("user_id", user.id)
      .single()

    if (!adminProfile?.is_admin) {
      return NextResponse.json({ error: "Forbidden: Admin clearance required" }, { status: 403 })
    }

    const formData = await req.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 })
    }

    const fileName = file.name || "merch-image.jpg"
    const fileType = file.type || "image/jpeg"
    const timestamp = Date.now()
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9_.-]/g, "_")
    const storagePath = `products/${timestamp}_${cleanFileName}`

    // Buffer conversion
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    let publicUrl = ""
    let uploadedToStorage = false

    // Try uploading to Supabase storage (buckets: medstore, materials, notebooks)
    const buckets = ["medstore", "materials", "notebooks"]
    for (const bucketName of buckets) {
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
          uploadedToStorage = true
          break
        }
      } catch (err) {
        console.warn(`Storage bucket '${bucketName}' upload attempt:`, err)
      }
    }

    // Resilient fallback: Base64 Data URL so images are always guaranteed to work immediately
    if (!uploadedToStorage || !publicUrl) {
      const base64 = buffer.toString("base64")
      publicUrl = `data:${fileType};base64,${base64}`
    }

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName,
      storageType: uploadedToStorage ? "cloud_storage" : "base64_data_uri"
    })
  } catch (err: any) {
    console.error("MedStore upload error:", err)
    return NextResponse.json({ error: err.message || "Failed to upload image" }, { status: 500 })
  }
}
