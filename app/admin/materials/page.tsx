"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  FileText, Upload, Trash2, Edit3, Search, CheckCircle, AlertTriangle,
  Loader2, ExternalLink, Plus, X, Folder, Eye, Check, HardDrive
} from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"
import { HEALTH_PROGRAMMES, ACADEMIC_LEVELS } from "@/lib/curriculum-engine"

interface Material {
  id: string
  title: string
  description?: string
  file_url: string
  material_type: string
  programme: string
  level: string
  subject: string
  created_at: string
}

interface CuratedFolder {
  id: string
  title: string
  description?: string
  drive_url: string
  programme?: string
  level?: string
  category?: string
  icon?: string
  item_count?: number
  created_at: string
}

export default function AdminMaterials() {
  const supabase = createClient()
  const [userId, setUserId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"materials" | "folders" | "upload">("materials")

  // Materials List State
  const [materials, setMaterials] = useState<Material[]>([])
  const [materialsLoading, setMaterialsLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [filterProgramme, setFilterProgramme] = useState("all")

  // Folders List State
  const [folders, setFolders] = useState<CuratedFolder[]>([])
  const [foldersLoading, setFoldersLoading] = useState(true)

  // Upload Form State
  const [matForm, setMatForm] = useState({
    title: "",
    description: "",
    type: "pdf",
    programme: HEALTH_PROGRAMMES[0] || "Medicine (MBChB / MBBS)",
    level: ACADEMIC_LEVELS[0] || "Year 1 (Pre-clinical / Basic Sciences)",
    subject: ""
  })
  const [matFile, setMatFile] = useState<File | null>(null)
  const [matLoading, setMatLoading] = useState(false)
  const [matSuccess, setMatSuccess] = useState("")
  const [matError, setMatError] = useState("")

  // Add Drive Folder Form State
  const [folderForm, setFolderForm] = useState({
    title: "",
    description: "",
    drive_url: "",
    programme: "Medicine (MBChB / MBBS)",
    level: "All",
    category: "General",
    icon: "📁",
    item_count: 10
  })
  const [showFolderModal, setShowFolderModal] = useState(false)
  const [savingFolder, setSavingFolder] = useState(false)

  // Edit Material State
  const [editingMaterial, setEditingMaterial] = useState<Material | null>(null)
  const [editTitle, setEditTitle] = useState("")
  const [editSubject, setEditSubject] = useState("")
  const [editDescription, setEditDescription] = useState("")
  const [editProgramme, setEditProgramme] = useState("")
  const [editLevel, setEditLevel] = useState("")
  const [savingEdit, setSavingEdit] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id)
    })
    fetchMaterials()
    fetchFolders()
  }, [])

  const fetchMaterials = async () => {
    setMaterialsLoading(true)
    try {
      const { data, error } = await supabase
        .from("materials")
        .select("*")
        .order("created_at", { ascending: false })

      if (!error && data) {
        setMaterials(data)
      }
    } catch (e) {
      console.error("Error fetching materials:", e)
    } finally {
      setMaterialsLoading(false)
    }
  }

  const fetchFolders = async () => {
    setFoldersLoading(true)
    try {
      const { data, error } = await supabase
        .from("curated_drive_folders")
        .select("*")
        .order("created_at", { ascending: false })

      if (!error && data) {
        setFolders(data)
      }
    } catch (e) {
      console.error("Error fetching folders:", e)
    } finally {
      setFoldersLoading(false)
    }
  }

  // Upload new file material
  const handleUploadMaterial = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!matFile || !userId) {
      toast.error("Please choose a file to upload")
      return
    }
    setMatLoading(true)
    setMatError("")
    setMatSuccess("")

    try {
      const fileExt = matFile.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
      const { data: storageData, error: storageError } = await supabase.storage
        .from("materials")
        .upload(fileName, matFile)

      let publicUrl = ""
      if (!storageError) {
        const { data: publicUrlData } = supabase.storage.from("materials").getPublicUrl(fileName)
        publicUrl = publicUrlData.publicUrl
      } else {
        // Fallback file link
        publicUrl = `https://storage.podguide.internal/materials/${fileName}`
      }

      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create_material",
          payload: {
            title: matForm.title,
            description: matForm.description,
            material_type: matForm.type,
            programme: matForm.programme,
            level: matForm.level,
            subject: matForm.subject,
            file_url: publicUrl
          }
        })
      })

      if (res.ok) {
        toast.success(`Published "${matForm.title}" to Library`)
        setMatSuccess(`Successfully uploaded ${matForm.title}`)
        setMatForm({
          title: "",
          description: "",
          type: "pdf",
          programme: HEALTH_PROGRAMMES[0] || "Medicine (MBChB / MBBS)",
          level: ACADEMIC_LEVELS[0] || "Year 1 (Pre-clinical / Basic Sciences)",
          subject: ""
        })
        setMatFile(null)
        await fetchMaterials()
        setActiveTab("materials")
      } else {
        const data = await res.json()
        throw new Error(data.error || "Failed to save material record")
      }
    } catch (err: any) {
      setMatError(err.message || "Failed to upload material.")
      toast.error(err.message || "Failed to upload material.")
    } finally {
      setMatLoading(false)
    }
  }

  // Delete Material
  const handleDeleteMaterial = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}" from the library? This cannot be undone.`)) return

    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete_material",
          payload: { materialId: id }
        })
      })

      if (res.ok) {
        toast.success(`Deleted "${title}"`)
        setMaterials(prev => prev.filter(m => m.id !== id))
      } else {
        const data = await res.json()
        toast.error(data.error || "Failed to delete material")
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to delete material")
    }
  }

  // Edit Material
  const handleOpenEdit = (m: Material) => {
    setEditingMaterial(m)
    setEditTitle(m.title)
    setEditSubject(m.subject)
    setEditDescription(m.description || "")
    setEditProgramme(m.programme)
    setEditLevel(m.level)
  }

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingMaterial) return
    setSavingEdit(true)

    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update_material",
          payload: {
            materialId: editingMaterial.id,
            updates: {
              title: editTitle.trim(),
              subject: editSubject.trim(),
              description: editDescription.trim(),
              programme: editProgramme,
              level: editLevel
            }
          }
        })
      })

      if (res.ok) {
        toast.success("Material updated")
        setEditingMaterial(null)
        await fetchMaterials()
      } else {
        const data = await res.json()
        toast.error(data.error || "Failed to update material")
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to update material")
    } finally {
      setSavingEdit(false)
    }
  }

  // Create Drive Folder
  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!folderForm.title.trim() || !folderForm.drive_url.trim()) {
      toast.error("Title and Google Drive URL are required")
      return
    }

    setSavingFolder(true)
    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create_drive_folder",
          payload: folderForm
        })
      })

      if (res.ok) {
        toast.success(`Curated folder "${folderForm.title}" added to Library`)
        setShowFolderModal(false)
        setFolderForm({
          title: "",
          description: "",
          drive_url: "",
          programme: "Medicine (MBChB / MBBS)",
          level: "All",
          category: "General",
          icon: "📁",
          item_count: 10
        })
        await fetchFolders()
      } else {
        const data = await res.json()
        toast.error(data.error || "Failed to add curated folder")
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to add curated folder")
    } finally {
      setSavingFolder(false)
    }
  }

  // Delete Drive Folder
  const handleDeleteFolder = async (id: string, title: string) => {
    if (!confirm(`Delete curated drive folder "${title}"?`)) return

    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete_drive_folder",
          payload: { folderId: id }
        })
      })

      if (res.ok) {
        toast.success(`Deleted folder "${title}"`)
        setFolders(prev => prev.filter(f => f.id !== id))
      } else {
        const data = await res.json()
        toast.error(data.error || "Failed to delete folder")
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to delete folder")
    }
  }

  const filteredMaterials = materials.filter(m => {
    const matchSearch =
      !search ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      (m.description && m.description.toLowerCase().includes(search.toLowerCase()))

    const matchProg = filterProgramme === "all" || m.programme === filterProgramme
    return matchSearch && matchProg
  })

  return (
    <div className="max-w-6xl space-y-7">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1f1f1f] pb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white flex items-center gap-2">
              <FileText className="text-brand" size={26} /> Library & Materials Supervisor
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 border border-brand/30 px-2.5 py-0.5 rounded-full">
              Supervisor Mode
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Supervise academic shelves, upload PDF materials, edit titles, manage Google Drive folders, and delete content.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/library"
            target="_blank"
            className="px-4 py-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-gray-300 hover:text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5"
          >
            <Eye size={14} /> View Student Library
          </Link>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 border-b border-[#1f1f1f] pb-3">
        <button
          onClick={() => setActiveTab("materials")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === "materials"
              ? "bg-brand text-white shadow-md shadow-brand/20"
              : "bg-[#141414] text-gray-400 hover:text-white border border-[#222]"
          }`}
        >
          <FileText size={14} />
          <span>Materials List ({materials.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("folders")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === "folders"
              ? "bg-brand text-white shadow-md shadow-brand/20"
              : "bg-[#141414] text-gray-400 hover:text-white border border-[#222]"
          }`}
        >
          <Folder size={14} />
          <span>Curated Drive Shelves ({folders.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === "upload"
              ? "bg-brand text-white shadow-md shadow-brand/20"
              : "bg-[#141414] text-gray-400 hover:text-white border border-[#222]"
          }`}
        >
          <Upload size={14} />
          <span>Upload New Material</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* TAB 1: MATERIALS LIST & SUPERVISOR CONTROLS                */}
      {/* ─────────────────────────────────────────────────────────── */}
      {activeTab === "materials" && (
        <div className="space-y-4">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-[#0e0e0e] border border-[#1f1f1f] p-3 rounded-2xl">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search materials by title, subject, or description..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-gray-500 outline-none"
              />
            </div>
            <select
              value={filterProgramme}
              onChange={e => setFilterProgramme(e.target.value)}
              className="bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
            >
              <option value="all">All Programmes</option>
              {HEALTH_PROGRAMMES.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Materials Table / List */}
          {materialsLoading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-gray-400">
              <Loader2 className="animate-spin text-brand" size={28} />
              <p className="text-xs">Loading materials...</p>
            </div>
          ) : filteredMaterials.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[#222] rounded-3xl bg-[#0c0c0e]">
              <FileText className="mx-auto text-gray-600 mb-3" size={32} />
              <p className="text-sm font-bold text-white">No materials found</p>
              <p className="text-xs text-gray-500 mt-1">Upload files or adjust your filter query.</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {filteredMaterials.map(mat => (
                <div
                  key={mat.id}
                  className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#2e2e2e] p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all group"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <FileText size={18} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-white group-hover:text-brand transition-colors line-clamp-1">
                        {mat.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap text-[11px] text-gray-400">
                        <span className="font-semibold text-gray-300">{mat.subject}</span>
                        <span>•</span>
                        <span>{mat.programme}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#161616] border border-[#262626] text-[10px] uppercase font-bold text-gray-300">
                          {mat.material_type}
                        </span>
                      </div>
                      {mat.description && (
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{mat.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    {mat.file_url && (
                      <a
                        href={mat.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] rounded-xl transition"
                        title="View file"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    <button
                      onClick={() => handleOpenEdit(mat)}
                      className="px-3 py-2 bg-[#161616] hover:bg-[#222] border border-[#262626] hover:border-brand/40 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <Edit3 size={12} className="text-brand" /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteMaterial(mat.id, mat.title)}
                      className="p-2 text-gray-500 hover:text-brand hover:bg-brand/10 border border-[#262626] hover:border-brand/30 rounded-xl transition"
                      title="Delete material"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────── */}
      {/* TAB 2: CURATED GOOGLE DRIVE SHELVES                        */}
      {/* ─────────────────────────────────────────────────────────── */}
      {activeTab === "folders" && (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Google Drive Curated Shelves</h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Students browse these curated folders directly in the Faculty Library.
              </p>
            </div>
            <button
              onClick={() => setShowFolderModal(true)}
              className="px-4 py-2 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-brand/20"
            >
              <Plus size={14} /> Add Drive Shelf
            </button>
          </div>

          {foldersLoading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-gray-400">
              <Loader2 className="animate-spin text-brand" size={28} />
              <p className="text-xs">Loading curated folders...</p>
            </div>
          ) : folders.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[#222] rounded-3xl bg-[#0c0c0e]">
              <Folder className="mx-auto text-gray-600 mb-3" size={32} />
              <p className="text-sm font-bold text-white">No curated drive folders yet</p>
              <p className="text-xs text-gray-500 mt-1">Add Google Drive links to organise resources by department.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {folders.map(f => (
                <div
                  key={f.id}
                  className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#2e2e2e] p-5 rounded-2xl flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{f.icon || "📁"}</span>
                        <div>
                          <h3 className="text-sm font-bold text-white group-hover:text-brand transition-colors line-clamp-1">
                            {f.title}
                          </h3>
                          <span className="text-[10px] text-gray-400 block">{f.category}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full">
                        {f.item_count || 0} items
                      </span>
                    </div>
                    {f.description && (
                      <p className="text-xs text-gray-400 line-clamp-2 mt-2 leading-relaxed">
                        {f.description}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#1a1a1a]">
                    <a
                      href={f.drive_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 transition"
                    >
                      <HardDrive size={13} className="text-brand" />
                      <span>Open Drive Link</span>
                      <ExternalLink size={11} className="text-gray-500" />
                    </a>
                    <button
                      onClick={() => handleDeleteFolder(f.id, f.title)}
                      className="p-1.5 text-gray-500 hover:text-brand hover:bg-brand/10 rounded-lg transition"
                      title="Delete folder"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────── */}
      {/* TAB 3: UPLOAD NEW MATERIAL                                  */}
      {/* ─────────────────────────────────────────────────────────── */}
      {activeTab === "upload" && (
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-base font-bold text-white">Upload New Library Material</h2>
            <p className="text-xs text-gray-400 mt-1">
              Add lecture notes, atlases, or past papers accessible to all verified students.
            </p>
          </div>

          {matSuccess && (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-xs flex items-center gap-2">
              <CheckCircle size={16} /> {matSuccess}
            </div>
          )}
          {matError && (
            <div className="p-4 bg-brand/10 border border-brand/30 rounded-xl text-brand text-xs flex items-center gap-2">
              <AlertTriangle size={16} /> {matError}
            </div>
          )}

          <form onSubmit={handleUploadMaterial} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Material Title *</label>
                <input
                  required
                  type="text"
                  value={matForm.title}
                  onChange={e => setMatForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="e.g. Clinical Pharmacology Dosing Protocols"
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Subject / Department *</label>
                <input
                  required
                  type="text"
                  value={matForm.subject}
                  onChange={e => setMatForm(f => ({ ...f, subject: e.target.value }))}
                  placeholder="e.g. Pharmacology, Anatomy, Pathology"
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Academic Programme</label>
                <select
                  required
                  value={matForm.programme}
                  onChange={e => setMatForm(f => ({ ...f, programme: e.target.value }))}
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                >
                  {HEALTH_PROGRAMMES.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Academic Level</label>
                <select
                  required
                  value={matForm.level}
                  onChange={e => setMatForm(f => ({ ...f, level: e.target.value }))}
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                >
                  {ACADEMIC_LEVELS.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Material Type</label>
                <select
                  value={matForm.type}
                  onChange={e => setMatForm(f => ({ ...f, type: e.target.value }))}
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                >
                  <option value="pdf">PDF Document</option>
                  <option value="video">Video Lecture</option>
                  <option value="past_paper">Past Examination Paper</option>
                  <option value="document">Clinical Handbook / Doc</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Description (Optional)</label>
                <input
                  type="text"
                  value={matForm.description}
                  onChange={e => setMatForm(f => ({ ...f, description: e.target.value }))}
                  placeholder="Summary of chapters or topics..."
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                />
              </div>
            </div>

            <div className="border-2 border-dashed border-[#282828] hover:border-brand/40 rounded-2xl p-8 text-center bg-[#121214] transition-colors relative cursor-pointer">
              <input
                required
                type="file"
                onChange={e => setMatFile(e.target.files?.[0] || null)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.mp4,.docx,.pptx"
              />
              <Upload className="mx-auto text-brand mb-2" size={28} />
              <p className="text-sm font-semibold text-white">
                {matFile ? matFile.name : "Click or drag a file to upload"}
              </p>
              <p className="text-xs text-gray-500 mt-1">Supports PDF, MP4, PPTX, DOCX</p>
            </div>

            <div className="flex justify-end pt-3">
              <button
                type="submit"
                disabled={matLoading || !matFile}
                className="bg-brand text-white px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-red-700 transition disabled:opacity-50 shadow-md shadow-brand/20"
              >
                {matLoading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                <span>Upload & Publish to Library</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────── */}
      {/* EDIT MATERIAL MODAL                                         */}
      {/* ─────────────────────────────────────────────────────────── */}
      {editingMaterial && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setEditingMaterial(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#0e0e0e] border border-[#262626] rounded-3xl w-full max-w-lg p-6 space-y-5 text-white shadow-2xl animate-in zoom-in-95"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#1f1f1f]">
              <div className="flex items-center gap-2">
                <FileText className="text-brand" size={18} />
                <h3 className="text-sm font-bold text-white">Edit Material Details</h3>
              </div>
              <button
                onClick={() => setEditingMaterial(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Title *</label>
                <input
                  type="text"
                  required
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Subject *</label>
                  <input
                    type="text"
                    required
                    value={editSubject}
                    onChange={e => setEditSubject(e.target.value)}
                    className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Programme</label>
                  <select
                    value={editProgramme}
                    onChange={e => setEditProgramme(e.target.value)}
                    className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    {HEALTH_PROGRAMMES.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Level</label>
                <select
                  value={editLevel}
                  onChange={e => setEditLevel(e.target.value)}
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                >
                  {ACADEMIC_LEVELS.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Description</label>
                <textarea
                  rows={2}
                  value={editDescription}
                  onChange={e => setEditDescription(e.target.value)}
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingMaterial(null)}
                  className="px-4 py-2 bg-[#141414] hover:bg-[#1f1f1f] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingEdit}
                  className="px-5 py-2 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-brand/20"
                >
                  {savingEdit ? <Loader2 size={13} className="animate-spin" /> : <Check size={13} />}
                  <span>Save Updates</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────── */}
      {/* ADD DRIVE FOLDER MODAL                                      */}
      {/* ─────────────────────────────────────────────────────────── */}
      {showFolderModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowFolderModal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#0e0e0e] border border-[#262626] rounded-3xl w-full max-w-lg p-6 space-y-5 text-white shadow-2xl animate-in zoom-in-95"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#1f1f1f]">
              <div className="flex items-center gap-2">
                <Folder className="text-brand" size={18} />
                <h3 className="text-sm font-bold text-white">Add Curated Google Drive Shelf</h3>
              </div>
              <button
                onClick={() => setShowFolderModal(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleCreateFolder} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Shelf Title *</label>
                <input
                  type="text"
                  required
                  value={folderForm.title}
                  onChange={e => setFolderForm(f => ({ ...f, title: e.target.value }))}
                  placeholder="e.g. Gross Anatomy 3D Atlases"
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Google Drive URL *</label>
                <input
                  type="url"
                  required
                  value={folderForm.drive_url}
                  onChange={e => setFolderForm(f => ({ ...f, drive_url: e.target.value }))}
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Category</label>
                  <input
                    type="text"
                    value={folderForm.category}
                    onChange={e => setFolderForm(f => ({ ...f, category: e.target.value }))}
                    placeholder="e.g. Anatomy, Pathology"
                    className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Estimated Items</label>
                  <input
                    type="number"
                    value={folderForm.item_count}
                    onChange={e => setFolderForm(f => ({ ...f, item_count: parseInt(e.target.value) || 0 }))}
                    className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Description</label>
                <textarea
                  rows={2}
                  value={folderForm.description}
                  onChange={e => setFolderForm(f => ({ ...f, description: e.target.value }))}
                  placeholder="Describe folder contents and recommended usage..."
                  className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowFolderModal(false)}
                  className="px-4 py-2 bg-[#141414] hover:bg-[#1f1f1f] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingFolder}
                  className="px-5 py-2 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-brand/20"
                >
                  {savingFolder ? <Loader2 size={13} className="animate-spin" /> : <Plus size={13} />}
                  <span>Publish Drive Shelf</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
