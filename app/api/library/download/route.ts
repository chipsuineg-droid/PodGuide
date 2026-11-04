import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "Google Drive API credentials not configured in environment." },
        { status: 500 }
      )
    }

    const { searchParams } = new URL(req.url)
    const fileId = searchParams.get("fileId")
    const fileName = searchParams.get("fileName") || "download"

    if (!fileId) {
      return NextResponse.json({ error: "fileId query parameter is required." }, { status: 400 })
    }

    // Attempt direct media download from Google Drive API
    const driveMediaUrl = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(
      fileId
    )}?alt=media&key=${encodeURIComponent(apiKey)}`

    const response = await fetch(driveMediaUrl, {
      method: "GET",
      // allow streaming large files
      cache: "no-store",
    })

    if (!response.ok) {
      // Fallback: If Google Drive API rejects alt=media (e.g. large file virus scan warning or Google Docs type),
      // redirect safely to the direct web download link
      const fallbackUrl = `https://drive.google.com/uc?export=download&id=${encodeURIComponent(fileId)}`
      return NextResponse.redirect(fallbackUrl, 302)
    }

    const contentType = response.headers.get("content-type") || "application/octet-stream"
    const contentLength = response.headers.get("content-length")

    // Clean filename for content-disposition header
    const safeFileName = fileName.replace(/[^\w\s.-]/gi, "_")

    const headers = new Headers()
    headers.set("Content-Type", contentType)
    headers.set("Content-Disposition", `attachment; filename="${safeFileName}"`)
    if (contentLength) {
      headers.set("Content-Length", contentLength)
    }
    headers.set("Cache-Control", "public, max-age=3600")

    return new NextResponse(response.body, {
      status: 200,
      headers,
    })
  } catch (err: any) {
    console.error("Error downloading file from Google Drive:", err)
    return NextResponse.json(
      { error: err?.message || "Failed to download file" },
      { status: 500 }
    )
  }
}
