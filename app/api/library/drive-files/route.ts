import { NextRequest, NextResponse } from "next/server"

interface GoogleDriveRawFile {
  id: string
  name: string
  mimeType: string
  size?: string
  webViewLink?: string
}

export interface LibraryResourceFile {
  id: string
  name: string
  mimeType: string
  size?: string
  driveUrl: string
  embedUrl: string
  category:
    | "textbooks"
    | "revision_documents"
    | "past_papers"
    | "notes"
    | "journals"
    | "slides"
    | "videos"
    | "practice_questions"
  path: string[]
}

export interface SubjectLibraryData {
  id: string
  name: string
  totalFiles: number
  counts: {
    textbooks: number
    revision_documents: number
    past_papers: number
    notes: number
    journals: number
    slides: number
    videos: number
    practice_questions: number
  }
  resources: {
    textbooks: LibraryResourceFile[]
    revision_documents: LibraryResourceFile[]
    past_papers: LibraryResourceFile[]
    notes: LibraryResourceFile[]
    journals: LibraryResourceFile[]
    slides: LibraryResourceFile[]
    videos: LibraryResourceFile[]
    practice_questions: LibraryResourceFile[]
  }
}

// Global in-memory cache (TTL: 10 minutes)
let cache: {
  timestamp: number
  data: {
    totalFiles: number
    subjects: Record<string, SubjectLibraryData>
  }
} | null = null

const CACHE_TTL_MS = 10 * 60 * 1000

function extractFolderId(input: string): string {
  const trimmed = input.trim()
  const folderMatch = trimmed.match(/folders\/([a-zA-Z0-9_-]+)/)
  if (folderMatch) return folderMatch[1]
  const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/)
  if (idMatch) return idMatch[1]
  return trimmed
}

// Fetch all files in a folder handling pagination
async function fetchFolderFiles(folderId: string, apiKey: string): Promise<GoogleDriveRawFile[]> {
  let allFiles: GoogleDriveRawFile[] = []
  let pageToken: string | null = null

  do {
    const q = encodeURIComponent(`'${folderId}' in parents and trashed = false`)
    const fields = encodeURIComponent("nextPageToken, files(id, name, mimeType, webViewLink, size)")
    let url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&pageSize=1000&key=${encodeURIComponent(apiKey)}`
    if (pageToken) url += `&pageToken=${encodeURIComponent(pageToken)}`

    const res = await fetch(url, { cache: "no-store" })
    if (!res.ok) {
      const err = await res.text().catch(() => "")
      throw new Error(`Google Drive API error (${res.status}): ${err || res.statusText}`)
    }

    const json = await res.json()
    if (json.files) allFiles = allFiles.concat(json.files)
    pageToken = json.nextPageToken || null
  } while (pageToken)

  return allFiles
}

// Recursively traverse folder and collect all files
async function recursiveCrawl(
  folderId: string,
  apiKey: string,
  pathSoFar: string[] = []
): Promise<Array<GoogleDriveRawFile & { path: string[] }>> {
  const items = await fetchFolderFiles(folderId, apiKey)
  let files: Array<GoogleDriveRawFile & { path: string[] }> = []

  for (const item of items) {
    if (item.mimeType === "application/vnd.google-apps.folder") {
      const children = await recursiveCrawl(item.id, apiKey, [...pathSoFar, item.name])
      files = files.concat(children)
    } else {
      files.push({ ...item, path: pathSoFar })
    }
  }

  return files
}

// Accurate categorisation engine
export function categorizeFile(
  name: string,
  mimeType: string,
  path: string[] = [],
  sizeStr?: string
): LibraryResourceFile["category"] {
  const lowerName = name.toLowerCase()
  const lowerPath = path.join(" ").toLowerCase()
  const lowerMime = (mimeType || "").toLowerCase()

  // 1. Presentations & Slides (Must check before video folder check if ppt is in a videos folder)
  if (
    lowerMime.includes("presentation") ||
    lowerMime.includes("powerpoint") ||
    /\.(ppt|pptx|key)$/i.test(lowerName) ||
    lowerName.includes("slides") ||
    lowerName.includes("presentation")
  ) {
    return "slides"
  }

  // 2. Videos & Recorded Lectures / Audio
  if (
    lowerMime.startsWith("video/") ||
    lowerMime.startsWith("audio/") ||
    /\.(mp4|m4a|mov|avi|mkv|webm|mp3|wav|ogg)$/i.test(lowerName) ||
    lowerPath.includes("videos") ||
    lowerPath.includes("vidz") ||
    lowerName.includes("recording")
  ) {
    return "videos"
  }

  // 3. Past Exam Papers
  if (
    lowerName.includes("past paper") ||
    lowerName.includes("exam") ||
    lowerName.includes("supp") ||
    lowerName.includes("mid term") ||
    lowerName.includes("final paper") ||
    lowerName.includes("previous exam") ||
    lowerPath.includes("past paper") ||
    lowerPath.includes("exam")
  ) {
    return "past_papers"
  }

  // 4. Practice Questions & MCQs
  if (
    lowerName.includes("mcq") ||
    lowerName.includes("question bank") ||
    lowerName.includes("emq") ||
    lowerName.includes("quiz") ||
    lowerName.includes("q&a") ||
    lowerPath.includes("mcq") ||
    lowerPath.includes("questions")
  ) {
    return "practice_questions"
  }

  // 5. Revision documents, OSCEs & Summaries
  if (
    lowerName.includes("summary") ||
    lowerName.includes("revision") ||
    lowerName.includes("osce") ||
    lowerName.includes("short cases") ||
    lowerName.includes("cheat sheet") ||
    lowerName.includes("high yield") ||
    lowerName.includes("rapid review") ||
    lowerPath.includes("revision") ||
    lowerPath.includes("summary")
  ) {
    return "revision_documents"
  }

  // 6. Textbooks
  if (
    lowerName.includes("textbook") ||
    lowerName.includes("edition") ||
    lowerName.includes("handbook") ||
    lowerName.includes("atlas") ||
    lowerName.includes("manual") ||
    lowerName.includes("principles of") ||
    lowerName.includes("bailey") ||
    lowerName.includes("guyton") ||
    lowerName.includes("robbins") ||
    lowerName.includes("snell") ||
    lowerName.includes("macleod") ||
    lowerName.includes("harrison") ||
    lowerName.includes("browse") ||
    lowerPath.includes("book") ||
    lowerPath.includes("textbook")
  ) {
    return "textbooks"
  }

  // 7. Journals & Research Articles
  if (
    lowerName.includes("journal") ||
    lowerName.includes("article") ||
    lowerName.includes("study") ||
    lowerName.includes("lancet") ||
    lowerName.includes("nejm") ||
    lowerName.includes("guideline") ||
    lowerPath.includes("journal")
  ) {
    return "journals"
  }

  // 8. Large PDFs (>12MB) are typically textbooks
  if (sizeStr) {
    const bytes = parseInt(sizeStr, 10)
    if (!isNaN(bytes) && bytes > 12 * 1024 * 1024) {
      return "textbooks"
    }
  }

  // 9. Default to Lecture & Study Notes
  return "notes"
}

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY
    const rootFolderInput = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID

    if (!apiKey || !rootFolderInput) {
      return NextResponse.json(
        { error: "Google Drive API credentials not configured in environment." },
        { status: 500 }
      )
    }

    const { searchParams } = new URL(req.url)
    const forceRefresh = searchParams.get("refresh") === "true"

    const now = Date.now()
    if (!forceRefresh && cache && now - cache.timestamp < CACHE_TTL_MS) {
      return NextResponse.json(cache.data)
    }

    const rootFolderId = extractFolderId(rootFolderInput)
    const topItems = await fetchFolderFiles(rootFolderId, apiKey)
    const subjectFolders = topItems.filter(i => i.mimeType === "application/vnd.google-apps.folder")

    const subjects: Record<string, SubjectLibraryData> = {}
    let totalFiles = 0

    // Crawl each subject in parallel / batches
    await Promise.all(
      subjectFolders.map(async subj => {
        try {
          const rawFiles = await recursiveCrawl(subj.id, apiKey, [subj.name])
          totalFiles += rawFiles.length

          const resources: SubjectLibraryData["resources"] = {
            textbooks: [],
            revision_documents: [],
            past_papers: [],
            notes: [],
            journals: [],
            slides: [],
            videos: [],
            practice_questions: [],
          }

          rawFiles.forEach(f => {
            const cat = categorizeFile(f.name, f.mimeType, f.path, f.size)
            resources[cat].push({
              id: f.id,
              name: f.name,
              mimeType: f.mimeType,
              size: f.size,
              driveUrl: f.webViewLink || `https://drive.google.com/file/d/${f.id}/view`,
              embedUrl: `https://drive.google.com/file/d/${f.id}/preview`,
              category: cat,
              path: f.path,
            })
          })

          const key = subj.name.toUpperCase().trim()
          subjects[key] = {
            id: subj.id,
            name: subj.name,
            totalFiles: rawFiles.length,
            counts: {
              textbooks: resources.textbooks.length,
              revision_documents: resources.revision_documents.length,
              past_papers: resources.past_papers.length,
              notes: resources.notes.length,
              journals: resources.journals.length,
              slides: resources.slides.length,
              videos: resources.videos.length,
              practice_questions: resources.practice_questions.length,
            },
            resources,
          }
        } catch (err: any) {
          console.warn(`Error crawling subject ${subj.name}:`, err.message)
        }
      })
    )

    const payload = {
      totalFiles,
      subjects,
    }

    cache = {
      timestamp: now,
      data: payload,
    }

    return NextResponse.json(payload)
  } catch (err: any) {
    console.error("GET drive-files route error:", err)
    return NextResponse.json(
      { error: err.message || "Failed to retrieve Google Drive files." },
      { status: 500 }
    )
  }
}
