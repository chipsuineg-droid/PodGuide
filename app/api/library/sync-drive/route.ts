import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

interface GoogleDriveItem {
  id: string
  name: string
  mimeType: string
  webViewLink?: string
  size?: string
}

interface SyncedFolder {
  id: string
  name: string
  driveUrl: string
  itemCount: number
  programme?: string
}

// Extract folder ID from any Google Drive link or bare ID
function extractFolderId(input: string): string {
  const trimmed = input.trim()
  const folderMatch = trimmed.match(/folders\/([a-zA-Z0-9_-]+)/)
  if (folderMatch) return folderMatch[1]
  const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (idMatch) return idMatch[1]
  const fileMatch = trimmed.match(/file\/d\/([a-zA-Z0-9_-]+)/)
  if (fileMatch) return fileMatch[1]
  return trimmed
}

// Fetch children of a Google Drive folder
async function fetchFolderChildren(
  folderId: string,
  apiKey: string,
  authToken?: string
): Promise<GoogleDriveItem[]> {
  const q = encodeURIComponent(`'${folderId}' in parents and trashed = false`)
  const fields = encodeURIComponent("files(id, name, mimeType, webViewLink, size)")
  let url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&pageSize=1000`

  const headers: Record<string, string> = {}
  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`
  } else if (apiKey) {
    url += `&key=${encodeURIComponent(apiKey)}`
  }

  const res = await fetch(url, { headers, cache: "no-store" })
  if (!res.ok) {
    const errText = await res.text().catch(() => "")
    throw new Error(`Google Drive API error (${res.status}): ${errText || res.statusText}`)
  }

  const data = await res.json()
  return data.files || []
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const rootFolderInput = body.rootFolderId || body.rootUrl || process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID
    const apiKey = body.apiKey || process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY
    const authToken = body.authToken || process.env.GOOGLE_DRIVE_ACCESS_TOKEN

    if (!rootFolderInput) {
      return NextResponse.json(
        { error: "Root folder URL or ID is required. Please provide your Master Google Drive folder link." },
        { status: 400 }
      )
    }

    if (!apiKey && !authToken) {
      return NextResponse.json(
        {
          error:
            "Google Drive API Key is required. Please provide a Google Drive API Key or set GOOGLE_DRIVE_API_KEY in your environment variables.",
        },
        { status: 400 }
      )
    }

    const rootFolderId = extractFolderId(rootFolderInput)
    if (!rootFolderId || rootFolderId.length < 5) {
      return NextResponse.json(
        { error: "Invalid Google Drive folder ID or URL format." },
        { status: 400 }
      )
    }

    // 1. Fetch top-level items in Master Root Folder
    const topItems = await fetchFolderChildren(rootFolderId, apiKey, authToken)
    const isFolder = (item: GoogleDriveItem) => item.mimeType === "application/vnd.google-apps.folder"

    const topFolders = topItems.filter(isFolder)
    const topFiles = topItems.filter(i => !isFolder(i))

    const discoveredFolders: SyncedFolder[] = []

    // 2. Discover subfolders (supports 1 or 2 levels of hierarchy)
    // Level 1 could be Subject folders directly (e.g. "Internal Medicine")
    // OR Programme folders (e.g. "Medicine") containing Subject folders.
    for (const item of topFolders) {
      try {
        const subChildren = await fetchFolderChildren(item.id, apiKey, authToken)
        const subFolders = subChildren.filter(isFolder)
        const subFiles = subChildren.filter(i => !isFolder(i))

        if (subFolders.length > 0) {
          // This is a Programme or Parent category folder (e.g. "Pharmacy" or "Biomedical Sciences")
          for (const sub of subFolders) {
            try {
              const leafChildren = await fetchFolderChildren(sub.id, apiKey, authToken)
              discoveredFolders.push({
                id: sub.id,
                name: sub.name,
                driveUrl: sub.webViewLink || `https://drive.google.com/drive/folders/${sub.id}`,
                itemCount: leafChildren.length,
                programme: item.name,
              })
            } catch {
              discoveredFolders.push({
                id: sub.id,
                name: sub.name,
                driveUrl: sub.webViewLink || `https://drive.google.com/drive/folders/${sub.id}`,
                itemCount: 0,
                programme: item.name,
              })
            }
          }
        } else {
          // Direct subject folder
          discoveredFolders.push({
            id: item.id,
            name: item.name,
            driveUrl: item.webViewLink || `https://drive.google.com/drive/folders/${item.id}`,
            itemCount: subFiles.length,
          })
        }
      } catch (err: any) {
        console.warn(`Could not inspect subfolder ${item.name}:`, err.message)
        discoveredFolders.push({
          id: item.id,
          name: item.name,
          driveUrl: item.webViewLink || `https://drive.google.com/drive/folders/${item.id}`,
          itemCount: 0,
        })
      }
    }

    // 3. Upsert into Supabase `curated_drive_folders`
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    let dbSavedCount = 0
    if (supabaseUrl && supabaseKey && discoveredFolders.length > 0) {
      const supabase = createClient(supabaseUrl, supabaseKey)

      // Fetch existing records to match or update
      const { data: existingRecords } = await supabase.from("curated_drive_folders").select("id, title, folder_id")
      const existingMap = new Map((existingRecords || []).map(r => [r.title.toLowerCase().trim(), r.id]))

      const upsertRows = discoveredFolders.map(df => {
        const existingId = existingMap.get(df.name.toLowerCase().trim())
        return {
          ...(existingId ? { id: existingId } : {}),
          title: df.name,
          category: df.name,
          drive_url: df.driveUrl,
          folder_id: df.id,
          programme: df.programme || "All",
          item_count: df.itemCount,
          icon: "📁",
          color: "brand",
        }
      })

      const { error: upsertErr } = await supabase.from("curated_drive_folders").upsert(upsertRows, { onConflict: "id" })
      if (!upsertErr) {
        dbSavedCount = upsertRows.length
      } else {
        console.warn("Supabase upsert warning:", upsertErr.message)
      }
    }

    return NextResponse.json({
      success: true,
      rootFolderId,
      foldersFound: discoveredFolders.length,
      topLevelFilesCount: topFiles.length,
      dbSavedCount,
      folders: discoveredFolders,
    })
  } catch (err: any) {
    console.error("Sync drive route error:", err)
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred while syncing with Google Drive." },
      { status: 500 }
    )
  }
}
