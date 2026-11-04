"use client"

import { useEffect, useState, useMemo } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  Search,
  Folder,
  ChevronRight,
  BookOpen,
  Video,
  FileText,
  FileSpreadsheet,
  Clock,
  HelpCircle,
  Presentation,
  Newspaper,
  ArrowLeft,
  Loader2,
  Sparkles,
  Download,
  Eye,
  Play,
  RotateCcw,
  CheckCircle2,
  Filter,
  X,
  FileUp,
} from "lucide-react"
import { toast } from "sonner"
import { StudyMaterialViewer, StudyMaterial } from "@/components/library/StudyMaterialViewer"
import { LibraryResourceFile, SubjectLibraryData } from "@/app/api/library/drive-files/route"

// ── Types ──
export type ResourceCategoryKey =
  | "textbooks"
  | "revision_documents"
  | "past_papers"
  | "notes"
  | "journals"
  | "slides"
  | "videos"
  | "practice_questions"

interface CategoryDef {
  key: ResourceCategoryKey
  title: string
  subtitle: string
  icon: any
  colorClass: string
  bgClass: string
}

const RESOURCE_CATEGORIES: CategoryDef[] = [
  {
    key: "textbooks",
    title: "Textbooks",
    subtitle: "Core reference books",
    icon: BookOpen,
    colorClass: "text-emerald-500",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    key: "revision_documents",
    title: "Revision documents",
    subtitle: "Summaries & cheat sheets",
    icon: FileSpreadsheet,
    colorClass: "text-blue-500",
    bgClass: "bg-blue-500/10 border-blue-500/20",
  },
  {
    key: "past_papers",
    title: "Past papers",
    subtitle: "Previous exams",
    icon: Clock,
    colorClass: "text-amber-500",
    bgClass: "bg-amber-500/10 border-amber-500/20",
  },
  {
    key: "notes",
    title: "Notes",
    subtitle: "Lecture & study notes",
    icon: FileText,
    colorClass: "text-purple-500",
    bgClass: "bg-purple-500/10 border-purple-500/20",
  },
  {
    key: "journals",
    title: "Journals",
    subtitle: "Articles & papers",
    icon: Newspaper,
    colorClass: "text-red-500",
    bgClass: "bg-red-500/10 border-red-500/20",
  },
  {
    key: "slides",
    title: "Slides",
    subtitle: "Presentations",
    icon: Presentation,
    colorClass: "text-orange-500",
    bgClass: "bg-orange-500/10 border-orange-500/20",
  },
  {
    key: "videos",
    title: "Videos",
    subtitle: "Recorded lectures",
    icon: Video,
    colorClass: "text-teal-500",
    bgClass: "bg-teal-500/10 border-teal-500/20",
  },
  {
    key: "practice_questions",
    title: "Practice questions",
    subtitle: "MCQs & question banks",
    icon: HelpCircle,
    colorClass: "text-pink-500",
    bgClass: "bg-pink-500/10 border-pink-500/20",
  },
]

interface ShelfItem {
  key: string
  name: string
  emoji: string
  color: string
}

const DEFAULT_SHELVES: ShelfItem[] = [
  { key: "INTERNAL MEDICINE", name: "Internal Medicine", emoji: "🫀", color: "from-red-500/20 to-rose-500/5" },
  { key: "PAEDIATRICS", name: "Paediatrics", emoji: "👶", color: "from-amber-500/20 to-yellow-500/5" },
  { key: "SURGERY", name: "Surgery", emoji: "🔪", color: "from-indigo-500/20 to-blue-500/5" },
  { key: "OBSTETRICS & GYNECOLOGY", name: "Obstetrics & Gynecology", emoji: "🤰", color: "from-purple-500/20 to-pink-500/5" },
  { key: "DERMATOLOGY", name: "Dermatology", emoji: "💊", color: "from-sky-500/20 to-cyan-500/5" },
  { key: "COMMUNITY MEDICINE", name: "Community Medicine", emoji: "🏥", color: "from-emerald-500/20 to-teal-500/5" },
  { key: "BEHAVIORAL SCIENCE", name: "Psychiatry & Behavioral Science", emoji: "🧠", color: "from-pink-500/20 to-rose-500/5" },
  { key: "PHARMACOLOGY", name: "Pharmacology", emoji: "💊", color: "from-red-500/20 to-amber-500/5" },
  { key: "ANATOMY", name: "Anatomy", emoji: "🦴", color: "from-slate-500/20 to-zinc-500/5" },
  { key: "PHYSIOLOGY", name: "Physiology", emoji: "⚡", color: "from-amber-500/20 to-orange-500/5" },
  { key: "HISTOPATHOLOGY", name: "Histopathology", emoji: "🔬", color: "from-teal-500/20 to-emerald-500/5" },
  { key: "HISTOLOGY", name: "Histology", emoji: "🧬", color: "from-cyan-500/20 to-sky-500/5" },
  { key: "EMBROLOGY", name: "Embryology", emoji: "🌱", color: "from-emerald-500/20 to-lime-500/5" },
  { key: "BIOCHEMISTRY", name: "Biochemistry", emoji: "🧪", color: "from-violet-500/20 to-purple-500/5" },
  { key: "BIOPHYSICS", name: "Biophysics", emoji: "⚛️", color: "from-blue-500/20 to-indigo-500/5" },
  { key: "INFECTIOUS DISEASE", name: "Infectious Disease", emoji: "🦠", color: "from-yellow-500/20 to-amber-500/5" },
  { key: "COMMUNICATION SKILLS", name: "Communication Skills", emoji: "💬", color: "from-blue-500/20 to-cyan-500/5" },
  { key: "SIGN LANGUAGE", name: "Sign Language", emoji: "🤲", color: "from-rose-500/20 to-pink-500/5" },
  { key: "ROBOTICS", name: "Robotics", emoji: "🤖", color: "from-slate-500/20 to-gray-500/5" },
  { key: "MED MICROBIOLOGY", name: "Medical Microbiology", emoji: "🧫", color: "from-teal-500/20 to-green-500/5" },
  { key: "IMMUNOLOGY", name: "Immunology", emoji: "🛡️", color: "from-indigo-500/20 to-violet-500/5" },
  { key: "HEAMATOLOGY", name: "Haematology", emoji: "🩸", color: "from-red-500/20 to-crimson-500/5" },
  { key: "CHEMICAL PATHOLOGY", name: "Chemical Pathology", emoji: "🧪", color: "from-purple-500/20 to-indigo-500/5" },
]

function formatBytes(bytesStr?: string): string {
  if (!bytesStr) return ""
  const b = parseInt(bytesStr, 10)
  if (isNaN(b) || b <= 0) return ""
  if (b < 1024) return `${b} B`
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`
  return `${(b / (1024 * 1024)).toFixed(1)} MB`
}

export default function LibraryPage() {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [libraryData, setLibraryData] = useState<Record<string, SubjectLibraryData>>({})
  const [totalFilesCount, setTotalFilesCount] = useState(0)

  // Navigation states: null = shelf grid; string = active shelf name
  const [activeShelf, setActiveShelf] = useState<ShelfItem | null>(null)
  const [activeCategory, setActiveCategory] = useState<ResourceCategoryKey | null>(null)

  // Search states
  const [searchQuery, setSearchQuery] = useState("")
  const [categorySearch, setCategorySearch] = useState("")

  // Active in-app viewer material
  const [activeViewerMaterial, setActiveViewerMaterial] = useState<StudyMaterial | null>(null)

  // Admin sync trigger
  const [isSyncing, setIsSyncing] = useState(false)

  // ── Load Drive Files ──
  const fetchLibrary = async (forceRefresh = false) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/library/drive-files${forceRefresh ? "?refresh=true" : ""}`)
      const data = await res.json()
      if (res.ok && data.subjects) {
        setLibraryData(data.subjects)
        setTotalFilesCount(data.totalFiles || 0)
      } else {
        console.warn("Drive files API notice:", data.error)
      }
    } catch (err: any) {
      console.error("Fetch library error:", err)
      toast.error("Could not load library from Google Drive.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLibrary()
  }, [])

  const handleRefresh = async () => {
    setIsSyncing(true)
    await fetchLibrary(true)
    setIsSyncing(false)
    toast.success("Synchronised full Google Drive repository!")
  }

  // ── Helper to find Drive data for a shelf ──
  const getSubjectData = (shelf: ShelfItem): SubjectLibraryData | null => {
    const direct = libraryData[shelf.key]
    if (direct) return direct

    // Fuzzy fallback match
    const shelfWords = shelf.name.toLowerCase().split(/\s+/)
    for (const [k, v] of Object.entries(libraryData)) {
      const lowerK = k.toLowerCase()
      if (shelfWords.some(w => w.length > 3 && lowerK.includes(w))) {
        return v
      }
    }
    return null
  }

  // Active subject's data
  const currentSubjectData = activeShelf ? getSubjectData(activeShelf) : null

  // Active category's file list
  const currentCategoryFiles = useMemo(() => {
    if (!currentSubjectData || !activeCategory) return []
    const files = currentSubjectData.resources[activeCategory] || []
    if (!categorySearch.trim()) return files

    const q = categorySearch.toLowerCase()
    return files.filter(
      f =>
        f.name.toLowerCase().includes(q) ||
        (f.path && f.path.some(p => p.toLowerCase().includes(q)))
    )
  }, [currentSubjectData, activeCategory, categorySearch])

  // Global search across all subjects and files
  const globalSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return null
    const q = searchQuery.toLowerCase().trim()
    const results: Array<LibraryResourceFile & { subjectName: string }> = []

    Object.values(libraryData).forEach(subj => {
      Object.values(subj.resources).forEach(fileList => {
        fileList.forEach(file => {
          if (
            file.name.toLowerCase().includes(q) ||
            subj.name.toLowerCase().includes(q) ||
            (file.path && file.path.some(p => p.toLowerCase().includes(q)))
          ) {
            results.push({ ...file, subjectName: subj.name })
          }
        })
      })
    })

    return results
  }, [searchQuery, libraryData])

  // Open resource natively in in-app viewer
  const openResource = (file: LibraryResourceFile, subjectName: string) => {
    const isVideo =
      file.mimeType.startsWith("video/") ||
      file.mimeType.startsWith("audio/") ||
      /\.(mp4|m4a|webm|mov|ogg|mp3)$/i.test(file.name)

    setActiveViewerMaterial({
      id: file.id,
      title: file.name,
      file_url: file.driveUrl,
      material_type: isVideo ? "video" : "drive",
      subject: subjectName,
      programme: "Academic Library",
      description: file.path ? file.path.join(" / ") : "Google Drive Study Material",
    })
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-24">
      
      {/* ── TOP SEARCH BAR (Exactly matching reference Image 2) ── */}
      <div className="relative w-full">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search every document in PodGuide Library..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full bg-[#111] dark:bg-[#0d0d0d] border border-gray-200 dark:border-[#222] focus:border-red-600 rounded-full pl-11 pr-12 py-3 text-sm text-black dark:text-white placeholder:text-gray-500 outline-none transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* ── VIEW 1: GLOBAL SEARCH RESULTS (When user searches at the top) ── */}
      {globalSearchResults !== null ? (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Search Results for</span>
              <span className="text-red-500 font-mono">&quot;{searchQuery}&quot;</span>
            </h2>
            <span className="text-xs text-gray-400 font-semibold bg-[#161616] border border-[#222] px-3 py-1 rounded-full">
              {globalSearchResults.length} files found
            </span>
          </div>

          {globalSearchResults.length === 0 ? (
            <div className="p-12 bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl text-center space-y-2">
              <p className="text-gray-400 text-sm font-semibold">No materials found matching your search.</p>
              <p className="text-gray-600 text-xs">Try searching by topic, author, disease, or medical keyword.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {globalSearchResults.map(f => (
                <div
                  key={f.id}
                  onClick={() => openResource(f, f.subjectName)}
                  className="p-3.5 bg-[#0e0e0e] hover:bg-[#141414] border border-[#1e1e1e] hover:border-red-600/40 rounded-xl flex items-center justify-between gap-3 transition-all cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-red-500 group-hover:scale-105 transition-all flex-shrink-0">
                      {f.category === "videos" ? <Video size={16} /> : <FileText size={16} />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate group-hover:text-red-400 transition-colors">
                        {f.name}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5 truncate">
                        {f.subjectName} · {f.category.replace("_", " ").toUpperCase()} {formatBytes(f.size) ? `· ${formatBytes(f.size)}` : ""}
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded-lg bg-[#1a1a1a] group-hover:bg-red-600 text-gray-300 group-hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1 flex-shrink-0">
                    <Eye size={12} /> Open
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : activeShelf === null ? (

        /* ── VIEW 2: LIBRARY SHELVES GRID (Matches Reference Image 1 exactly) ── */
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-1 border-b border-[#181818]">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              LIBRARY SHELVES
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-400">
                {totalFilesCount > 0 ? `${totalFilesCount.toLocaleString()} files total` : "Checking Drive archive..."}
              </span>
              <button
                onClick={handleRefresh}
                disabled={isSyncing}
                title="Deep scan and update all Google Drive resources"
                className="p-1.5 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#222] text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw size={13} className={isSyncing ? "animate-spin text-red-500" : ""} />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3">
              <Loader2 size={28} className="animate-spin text-red-500" />
              <p className="text-xs text-gray-500 font-semibold tracking-wide">
                Retrieving all curriculum folders from Google Drive...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {DEFAULT_SHELVES.map(shelf => {
                const data = getSubjectData(shelf)
                const count = data ? data.totalFiles : 0

                return (
                  <div
                    key={shelf.key}
                    onClick={() => {
                      setActiveShelf(shelf)
                      setActiveCategory(null)
                    }}
                    className="p-5 bg-white dark:bg-[#0e0e0e] border border-gray-100 dark:border-[#1f1f1f] hover:border-gray-300 dark:hover:border-red-600/40 rounded-2xl flex flex-col justify-between h-32 transition-all duration-200 cursor-pointer group shadow-sm hover:shadow-md hover:-translate-y-0.5 select-none relative"
                  >
                    {/* Top Row: Soft Emoji/Icon Badge & Subtle Folder Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#161616] border border-gray-100 dark:border-[#262626] flex items-center justify-center text-lg shadow-inner group-hover:scale-105 transition-transform">
                        {shelf.emoji}
                      </div>
                      <Folder size={16} className="text-gray-400 dark:text-gray-600 group-hover:text-red-500 transition-colors" />
                    </div>

                    {/* Bottom Row: Subject Title and Item Count */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-red-500 transition-colors line-clamp-1 leading-snug">
                        {shelf.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {count} {count === 1 ? "item" : "items"}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ) : (

        /* ── VIEW 3: SHELF VIEW — BOOK-STYLE CATEGORIES (Matches Reference Image 2 exactly) ── */
        <div className="space-y-6 animate-in fade-in duration-150">
          
          {/* Breadcrumb Header */}
          <div className="flex items-center justify-between border-b border-[#181818] pb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (activeCategory) {
                    setActiveCategory(null)
                  } else {
                    setActiveShelf(null)
                  }
                }}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors p-1"
              >
                <ArrowLeft size={16} />
                <span>All shelves</span>
              </button>

              <span className="text-gray-600">/</span>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <span>{activeShelf.emoji}</span>
                <span>{activeShelf.name}</span>
              </h2>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-[#181818] border border-gray-200 dark:border-[#262626] text-gray-700 dark:text-gray-300">
                {currentSubjectData?.totalFiles || 0} files
              </span>
            </div>

            <button
              onClick={handleRefresh}
              disabled={isSyncing}
              title="Rescan Drive"
              className="p-2 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-[#222] text-gray-400 hover:text-white transition-colors"
            >
              <RotateCcw size={13} className={isSyncing ? "animate-spin text-red-500" : ""} />
            </button>
          </div>

          {/* ── 8 BOOK CATEGORY CARDS (Grid 4 cols) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESOURCE_CATEGORIES.map(cat => {
              const count = currentSubjectData?.counts[cat.key] || 0
              const isSelected = activeCategory === cat.key
              const IconComp = cat.icon

              return (
                <div
                  key={cat.key}
                  onClick={() => setActiveCategory(isSelected ? null : cat.key)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between h-36 select-none relative group shadow-sm ${
                    isSelected
                      ? "bg-[#181212] border-red-600 shadow-md ring-1 ring-red-600/30"
                      : "bg-white dark:bg-[#0e0e0e] border-gray-100 dark:border-[#1f1f1f] hover:border-gray-300 dark:hover:border-red-600/40 hover:-translate-y-0.5"
                  }`}
                >
                  {/* Top: Icon and Folder Symbol */}
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                      isSelected
                        ? "bg-red-600 text-white border-red-600 shadow-sm"
                        : `${cat.bgClass} ${cat.colorClass}`
                    }`}>
                      <IconComp size={18} />
                    </div>
                    <Folder size={16} className={isSelected ? "text-red-500" : "text-gray-400 dark:text-gray-600 group-hover:text-red-500 transition-colors"} />
                  </div>

                  {/* Bottom: Title, Subtitle, and Item Count */}
                  <div>
                    <h4 className={`text-sm font-bold truncate leading-snug transition-colors ${
                      isSelected ? "text-red-500" : "text-gray-900 dark:text-white group-hover:text-red-400"
                    }`}>
                      {cat.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                      {cat.subtitle}
                    </p>
                    <p className={`text-xs font-semibold mt-1 ${isSelected ? "text-red-400" : "text-gray-400 dark:text-gray-500"}`}>
                      {count} {count === 1 ? "item" : "items"}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── RESOURCE FILE LIST (When user clicks on any of the 8 categories) ── */}
          {activeCategory && (
            <div className="p-5 bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl space-y-4 animate-in fade-in duration-150">
              
              {/* Category Subheader */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#181818] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    {RESOURCE_CATEGORIES.find(c => c.key === activeCategory)?.title}
                  </h3>
                  <span className="text-xs text-gray-500">
                    ({currentCategoryFiles.length} available)
                  </span>
                </div>

                {/* Filter within this category */}
                <div className="relative w-full sm:w-64">
                  <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Filter in this folder..."
                    value={categorySearch}
                    onChange={e => setCategorySearch(e.target.value)}
                    className="w-full bg-[#111] border border-[#222] focus:border-red-600 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-gray-500 outline-none"
                  />
                </div>
              </div>

              {/* Files Table / Cards */}
              {currentCategoryFiles.length === 0 ? (
                <div className="py-12 text-center space-y-2">
                  <p className="text-sm text-gray-400 font-semibold">
                    No resources stored under this category yet.
                  </p>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Drop your slides, past papers, or video recordings into the {activeShelf.name} Google Drive folder to automatically populate this section.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                  {currentCategoryFiles.map((file, idx) => {
                    const isVid = activeCategory === "videos" || /\.(mp4|m4a|mov|webm)$/i.test(file.name)

                    return (
                      <div
                        key={file.id}
                        onClick={() => openResource(file, activeShelf.name)}
                        className="p-3 bg-[#111] hover:bg-[#151515] border border-[#1f1f1f] hover:border-red-600/40 rounded-xl flex items-center justify-between gap-3 transition-colors cursor-pointer group shadow-sm"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-red-500 group-hover:scale-105 transition-all flex-shrink-0">
                            {isVid ? <Play size={14} className="fill-current" /> : <FileText size={14} />}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-white truncate group-hover:text-red-400 transition-colors">
                              {file.name}
                            </p>
                            <div className="flex items-center gap-2 mt-0.5 text-[10px] text-gray-500 truncate">
                              {file.path && file.path.length > 0 && (
                                <span>{file.path.join(" / ")}</span>
                              )}
                              {formatBytes(file.size) && (
                                <>
                                  <span>·</span>
                                  <span>{formatBytes(file.size)}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <button className="px-3 py-1.5 rounded-lg bg-[#181818] group-hover:bg-red-600 text-gray-300 group-hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1.5 flex-shrink-0 shadow-sm">
                          {isVid ? <Play size={11} className="fill-current" /> : <Eye size={11} />}
                          <span>{isVid ? "Watch" : "Study"}</span>
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── IN-APP STUDY MATERIAL VIEWER & NATIVE PLAYER ── */}
      {activeViewerMaterial && (
        <StudyMaterialViewer
          material={activeViewerMaterial}
          onClose={() => setActiveViewerMaterial(null)}
        />
      )}
    </div>
  )
}
