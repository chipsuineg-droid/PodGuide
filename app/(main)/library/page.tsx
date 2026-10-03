"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import {
  Library, Search, FileText, Download, ExternalLink,
  BookOpen, Filter, Sparkles, FolderOpen, Award, CheckCircle2,
  FolderPlus, Plus, Trash2, Folder, HardDrive, Eye, X, Check
} from "lucide-react"
import { toast } from "sonner"

interface DriveFolder {
  id: string
  title: string
  description: string
  drive_url: string
  folder_id: string
  programme: string
  level: string
  category: string
  icon: string
  item_count: number
  color?: string
  created_at?: string
}

const DEFAULT_DRIVE_FOLDERS: DriveFolder[] = [
  {
    id: "drive-1",
    title: "Gross Anatomy 3D Atlases & Cadaveric Dissections",
    description: "High-resolution Netter anatomical cross-sections, osteology scans, and regional dissection video manuals.",
    drive_url: "https://drive.google.com/drive/folders/1sample_anatomy_drive_folder",
    folder_id: "1sample_anatomy_drive_folder",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 1 (Pre-clinical / Basic Sciences)",
    category: "Anatomy",
    icon: "🦴",
    item_count: 48,
    color: "emerald"
  },
  {
    id: "drive-2",
    title: "Robbins Pathology Slides & CPC Case Vignettes",
    description: "Microscopic histopathology tissue slides, cellular injury cases, and clinical pathology CPC conference reviews.",
    drive_url: "https://drive.google.com/drive/folders/1sample_pathology_drive_folder",
    folder_id: "1sample_pathology_drive_folder",
    programme: "Biomedical Science (BSc)",
    level: "Part 3",
    category: "Pathology",
    icon: "🔬",
    item_count: 64,
    color: "purple"
  },
  {
    id: "drive-3",
    title: "Clinical Pharmacology Formularies & Monograph Sheets",
    description: "Hospital formularies, renal adjustment calculators, antimicrobial stewardship guidelines, and dosing protocols.",
    drive_url: "https://drive.google.com/drive/folders/1sample_pharmacology_drive_folder",
    folder_id: "1sample_pharmacology_drive_folder",
    programme: "Pharmacy (BPharm / PharmD)",
    level: "Part 3",
    category: "Pharmacology",
    icon: "💊",
    item_count: 35,
    color: "blue"
  },
  {
    id: "drive-4",
    title: "Internal Medicine & Surgery Ward Round Handbooks",
    description: "Oxford Clinical Medicine pocket summaries, acute medical on-call algorithms, and surgical emergency flowcharts.",
    drive_url: "https://drive.google.com/drive/folders/1sample_clinical_drive_folder",
    folder_id: "1sample_clinical_drive_folder",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4 (Clinical Rotations)",
    category: "Clinical Medicine",
    icon: "🏥",
    item_count: 52,
    color: "amber"
  }
]

export default function LibraryPage() {
  const supabase = createClient()
  const [folders, setFolders] = useState<DriveFolder[]>(DEFAULT_DRIVE_FOLDERS)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [user, setUser] = useState<any>(null)

  // Add Folder Modal State
  const [showAddModal, setShowAddModal] = useState(false)
  const [folderTitle, setFolderTitle] = useState("")
  const [folderUrl, setFolderUrl] = useState("")
  const [folderCategory, setFolderCategory] = useState("Core Clinical")
  const [folderProgramme, setFolderProgramme] = useState("Medicine (MBChB / MBBS)")
  const [folderLevel, setFolderLevel] = useState("All Levels")
  const [folderDesc, setFolderDesc] = useState("")
  const [folderIcon, setFolderIcon] = useState("📁")
  const [submitting, setSubmitting] = useState(false)

  // Preview Modal
  const [previewFolder, setPreviewFolder] = useState<DriveFolder | null>(null)

  useEffect(() => {
    const load = async () => {
      const { data: authData } = await supabase.auth.getUser()
      if (authData?.user) setUser(authData.user)

      // Try fetching from database table curated_drive_folders
      try {
        const { data, error } = await supabase
          .from("curated_drive_folders")
          .select("*")
          .order("created_at", { ascending: false })

        if (!error && data && data.length > 0) {
          setFolders(data)
        }
      } catch (err) {
        console.warn("curated_drive_folders table not queried:", err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const extractFolderId = (url: string) => {
    const match = url.match(/folders\/([a-zA-Z0-9_-]+)/)
    return match ? match[1] : url.trim()
  }

  const handleAddFolder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!folderTitle.trim() || !folderUrl.trim()) {
      toast.error("Please provide both a title and Google Drive link")
      return
    }

    setSubmitting(true)
    const folderId = extractFolderId(folderUrl)

    const newFolder: DriveFolder = {
      id: crypto.randomUUID(),
      title: folderTitle.trim(),
      description: folderDesc.trim() || "Curated faculty Google Drive collection.",
      drive_url: folderUrl.trim(),
      folder_id: folderId,
      programme: folderProgramme,
      level: folderLevel,
      category: folderCategory,
      icon: folderIcon,
      item_count: 12,
      color: "brand"
    }

    // Try saving to Supabase
    try {
      if (user) {
        await supabase.from("curated_drive_folders").insert({
          title: newFolder.title,
          description: newFolder.description,
          drive_url: newFolder.drive_url,
          folder_id: newFolder.folder_id,
          programme: newFolder.programme,
          level: newFolder.level,
          category: newFolder.category,
          icon: newFolder.icon,
          item_count: newFolder.item_count,
          created_by: user.id
        })
      }
    } catch (err) {
      console.warn("Could not insert to DB, updating locally:", err)
    }

    // Optimistic UI update
    setFolders(prev => [newFolder, ...prev])
    toast.success("Google Drive Folder Connected!", {
      description: `${newFolder.title} is now available in your faculty library.`
    })

    // Reset Form
    setFolderTitle("")
    setFolderUrl("")
    setFolderDesc("")
    setShowAddModal(false)
    setSubmitting(false)
  }

  const handleDeleteFolder = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!confirm("Remove this Google Drive folder from the library?")) return

    try {
      await supabase.from("curated_drive_folders").delete().eq("id", id)
    } catch (err) {
      console.warn("Delete DB error:", err)
    }

    setFolders(prev => prev.filter(f => f.id !== id))
    toast.success("Folder removed from library")
  }

  const filteredFolders = folders.filter(f => {
    const matchSearch =
      search === "" ||
      f.title.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase()) ||
      f.category.toLowerCase().includes(search.toLowerCase())

    const matchCategory = selectedCategory === "all" || f.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchSearch && matchCategory
  })

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Google Drive Cloud Sync
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">Faculty Library</h1>
          <p className="text-gray-400 mt-1 text-sm max-w-xl">
            Curated Google Drive cloud drives containing high-yield textbooks, OSCE video manuals, slide decks, and question archives.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-5 py-3 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-brand/20 self-start sm:self-auto"
        >
          <FolderPlus size={16} /> Connect Google Drive Folder
        </button>
      </div>

      {/* Google Drive Status Banner */}
      <div className="bg-[#0f1115] border border-[#232936] rounded-2xl p-6 sm:p-7 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              {/* Google Drive SVG Logo */}
              <svg width="24" height="24" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.25z" fill="#00832d"/>
                <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.25z" fill="#2684fc"/>
                <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
              </svg>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Google Drive Cloud Repository Active</h3>
                <span className="text-[10px] font-bold uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  {folders.length} Folders Linked
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xl">
                All folders open seamlessly in Google Drive or directly inside your PodGuide workspace. You can organize folders by specialty, rotation, or academic part.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setShowAddModal(true)}
              className="w-full md:w-auto px-4 py-2.5 bg-[#1a1f2c] hover:bg-[#252c3f] border border-[#2d374d] text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Plus size={14} className="text-blue-400" /> Upload Curated Folder
            </button>
          </div>
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search curated folders by specialty, part, or keywords..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: "all", label: "All Folders" },
            { id: "anatomy", label: "🦴 Anatomy" },
            { id: "pathology", label: "🔬 Pathology" },
            { id: "pharmacology", label: "💊 Pharmacology" },
            { id: "clinical medicine", label: "🏥 Clinical" },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                selectedCategory === cat.id
                  ? "bg-brand text-white border-brand shadow-lg shadow-brand/20"
                  : "bg-[#111] text-gray-400 border-[#222] hover:text-white hover:border-[#333]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Google Drive Curated Folders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredFolders.map(folder => (
          <div
            key={folder.id}
            onClick={() => setPreviewFolder(folder)}
            className="bg-[#111] border border-[#1f1f1f] hover:border-brand/40 rounded-2xl p-6 flex flex-col justify-between transition-all group hover:shadow-xl hover:shadow-brand/5 cursor-pointer relative"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                    {folder.icon || "📁"}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 flex items-center gap-1">
                        <HardDrive size={10} /> Google Drive
                      </span>
                      <span className="text-[10px] font-semibold text-gray-500">
                        {folder.item_count} files
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-brand transition-colors mt-1 line-clamp-1">
                      {folder.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={(e) => handleDeleteFolder(folder.id, e)}
                  className="opacity-0 group-hover:opacity-100 p-2 text-gray-500 hover:text-brand transition-all rounded-lg"
                  title="Remove folder"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                {folder.description}
              </p>

              <div className="flex items-center gap-2 flex-wrap text-[11px] text-gray-500">
                <span className="bg-[#161616] border border-[#222] px-2.5 py-1 rounded-lg text-gray-300 font-medium">
                  {folder.programme}
                </span>
                <span className="bg-[#161616] border border-[#222] px-2.5 py-1 rounded-lg text-gray-400">
                  {folder.level}
                </span>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#1a1a1a] flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 group-hover:text-white flex items-center gap-1.5 transition-colors">
                <Eye size={13} className="text-brand" /> View Curated Contents
              </span>

              <a
                href={folder.drive_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-brand/20 flex-shrink-0"
              >
                Open in Drive <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredFolders.length === 0 && (
        <div className="text-center py-20 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#222] flex items-center justify-center mx-auto text-2xl">
            📁
          </div>
          <h3 className="text-white font-bold text-base">No Matching Folders</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Connect a new Google Drive folder with the button above.
          </p>
        </div>
      )}

      {/* Modal: Connect Google Drive Folder */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111] border border-[#222] rounded-2xl w-full max-w-lg p-6 sm:p-7 space-y-5 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
                📁
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Connect Google Drive Folder</h3>
                <p className="text-xs text-gray-400">Link a shared Google Drive folder to your faculty library catalog.</p>
              </div>
            </div>

            <form onSubmit={handleAddFolder} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Folder Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cardiorespiratory Clinical OSCE Video Guides"
                  value={folderTitle}
                  onChange={e => setFolderTitle(e.target.value)}
                  className="w-full bg-[#0c0c0c] border border-[#2b2b2b] focus:border-brand rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Google Drive Share Link
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/drive/folders/1aBcD_XyZ..."
                  value={folderUrl}
                  onChange={e => setFolderUrl(e.target.value)}
                  className="w-full bg-[#0c0c0c] border border-[#2b2b2b] focus:border-brand rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
                />
                <span className="text-[10px] text-gray-500 mt-1 block">
                  Ensure the folder sharing permission in Google Drive is set to <strong>"Anyone with the link can view"</strong>.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Category / Specialty
                  </label>
                  <select
                    value={folderCategory}
                    onChange={e => setFolderCategory(e.target.value)}
                    className="w-full bg-[#0c0c0c] border border-[#2b2b2b] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  >
                    <option value="Anatomy">Anatomy</option>
                    <option value="Pathology">Pathology</option>
                    <option value="Pharmacology">Pharmacology</option>
                    <option value="Clinical Medicine">Clinical Medicine</option>
                    <option value="Surgery">Surgery</option>
                    <option value="Paediatrics">Paediatrics</option>
                    <option value="Obstetrics & Gynae">Obstetrics & Gynae</option>
                    <option value="Past Papers">Past Papers</option>
                    <option value="General">General Reference</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Emoji Icon
                  </label>
                  <input
                    type="text"
                    value={folderIcon}
                    onChange={e => setFolderIcon(e.target.value)}
                    className="w-full bg-[#0c0c0c] border border-[#2b2b2b] focus:border-brand rounded-xl px-3 py-2.5 text-sm text-white outline-none text-center"
                    maxLength={2}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Programme
                  </label>
                  <select
                    value={folderProgramme}
                    onChange={e => setFolderProgramme(e.target.value)}
                    className="w-full bg-[#0c0c0c] border border-[#2b2b2b] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  >
                    <option value="Medicine (MBChB / MBBS)">Medicine (MBChB)</option>
                    <option value="Biomedical Science (BSc)">Biomedical Science (BMS)</option>
                    <option value="Pharmacy (BPharm / PharmD)">Pharmacy</option>
                    <option value="Nursing (BSc Nursing / BNurs)">Nursing</option>
                    <option value="All Programmes">All Programmes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Level
                  </label>
                  <select
                    value={folderLevel}
                    onChange={e => setFolderLevel(e.target.value)}
                    className="w-full bg-[#0c0c0c] border border-[#2b2b2b] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  >
                    <option value="All Levels">All Levels</option>
                    <option value="Part 1">Part 1 / Year 1</option>
                    <option value="Part 2">Part 2 / Year 2</option>
                    <option value="Part 3">Part 3 / Year 3</option>
                    <option value="Year 4">Year 4 (Clinical)</option>
                    <option value="Year 5">Year 5 (Clinical)</option>
                    <option value="Year 6">Year 6 (Finals)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Description / Folder Contents
                </label>
                <textarea
                  rows={2}
                  placeholder="Outline the high-yield topics, guidelines, or materials included in this drive folder..."
                  value={folderDesc}
                  onChange={e => setFolderDesc(e.target.value)}
                  className="w-full bg-[#0c0c0c] border border-[#2b2b2b] focus:border-brand rounded-xl px-4 py-2 text-xs text-white placeholder:text-gray-600 outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25 disabled:opacity-50"
                >
                  <Check size={14} /> Connect Folder to Library
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-3 bg-[#1a1a1a] hover:bg-[#252525] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Folder Preview & Direct Access */}
      {previewFolder && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111] border border-[#222] rounded-2xl w-full max-w-2xl p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setPreviewFolder(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#161616] border border-[#262626] flex items-center justify-center text-3xl flex-shrink-0">
                {previewFolder.icon || "📁"}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                  Google Drive Folder
                </span>
                <h2 className="text-xl font-bold text-white leading-tight mt-1">
                  {previewFolder.title}
                </h2>
                <p className="text-xs text-gray-400">
                  {previewFolder.programme} &bull; {previewFolder.level}
                </p>
              </div>
            </div>

            <div className="bg-[#0c0c0c] border border-[#1f1f1f] rounded-xl p-4 text-xs text-gray-300 leading-relaxed space-y-3">
              <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Curated Summary</h4>
              <p>{previewFolder.description}</p>
              <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[11px] text-gray-500">
                <span>Google Drive Folder ID:</span>
                <code className="text-gray-300 font-mono bg-[#161616] px-2 py-0.5 rounded">
                  {previewFolder.folder_id}
                </code>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={previewFolder.drive_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25"
              >
                <ExternalLink size={14} /> Open in Google Drive
              </a>

              <a
                href={`https://drive.google.com/embeddedfolderview?id=${previewFolder.folder_id}#list`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 bg-[#181818] hover:bg-[#222] border border-[#333] text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Eye size={14} /> Open Embedded Drive View
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
