"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {
  BookMarked, FolderOpen, FileText, PlaySquare, Search,
  Plus, ChevronRight, Loader2, Download, ExternalLink, Filter,
  Eye, Globe, Lock, Trash2, Copy, Check, X, PenLine, Sparkles
} from "lucide-react"
import { toast } from "sonner"

type Notebook = {
  id: string
  title: string
  subject_area: string
  updated_at: string
  created_at?: string
  content?: string
  is_shared?: boolean
  user_id?: string
}
type Material = { id: string; title: string; material_type: string; subject: string; programme: string; level: string; file_url: string; description: string }

const TYPE_ICONS: Record<string, string> = {
  pdf: "📄", video: "🎬", past_paper: "📋", other: "📁"
}

const TYPE_COLORS: Record<string, string> = {
  pdf: "bg-brand/10 text-brand border-brand/20",
  video: "bg-[#181818] text-gray-300 border-[#2b2b2b]",
  past_paper: "bg-[#181818] text-gray-300 border-[#2b2b2b]",
  other: "bg-[#181818] text-gray-400 border-[#222]",
}

export default function LearnPage() {
  const supabase = createClient()
  const [notebooks, setNotebooks] = useState<Notebook[]>([])
  const [materials, setMaterials] = useState<Material[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [userMeta, setUserMeta] = useState<any>({})

  // Notes controls & Modal state
  const [notebookFilter, setNotebookFilter] = useState<"all" | "published" | "private">("all")
  const [notebookSearch, setNotebookSearch] = useState("")
  const [viewingNotebook, setViewingNotebook] = useState<Notebook | null>(null)
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const meta = user.user_metadata || {}
      setUserMeta(meta)

      const [nbRes, matRes] = await Promise.all([
        supabase.from("notebooks").select("*").eq("user_id", user.id).order("updated_at", { ascending: false }),
        supabase.from("materials").select("*").order("created_at", { ascending: false })
      ])

      setNotebooks(nbRes.data || [])
      setMaterials(matRes.data || [])
      setLoading(false)
    }
    load()
  }, [])

  const handleTogglePublish = async (nb: Notebook) => {
    const newVal = !nb.is_shared
    setActionLoadingId(nb.id)
    setNotebooks(prev => prev.map(n => n.id === nb.id ? { ...n, is_shared: newVal } : n))
    if (viewingNotebook && viewingNotebook.id === nb.id) {
      setViewingNotebook(prev => prev ? { ...prev, is_shared: newVal } : null)
    }

    const { error } = await supabase.from("notebooks").update({ is_shared: newVal }).eq("id", nb.id)
    setActionLoadingId(null)
    if (error) {
      toast.error("Failed to update status: " + error.message)
      setNotebooks(prev => prev.map(n => n.id === nb.id ? { ...n, is_shared: !newVal } : n))
    } else {
      toast.success(newVal ? `Published "${nb.title}" to community!` : `Set "${nb.title}" to private`)
    }
  }

  const handleDeleteNotebook = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title || "this note"}"? This cannot be undone.`)) return
    setActionLoadingId(id)
    const { error } = await supabase.from("notebooks").delete().eq("id", id)
    setActionLoadingId(null)
    if (error) {
      toast.error("Could not delete note: " + error.message)
    } else {
      setNotebooks(prev => prev.filter(n => n.id !== id))
      if (viewingNotebook && viewingNotebook.id === id) setViewingNotebook(null)
      toast.success(`Deleted "${title || "Notebook"}"`)
    }
  }

  const handleCopyNote = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    toast.success("Note content copied to clipboard")
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDownloadNote = (nb: Notebook) => {
    const filename = `${(nb.title || "podguide_notes").replace(/[^a-zA-Z0-9_-]/g, "_")}.md`
    const blob = new Blob([nb.content || `# ${nb.title}\n\nNo written content.`], { type: "text/markdown;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success(`Downloaded "${filename}"`)
  }

  const filteredNotebooks = notebooks.filter(nb => {
    const matchesSearch = notebookSearch === "" ||
      nb.title.toLowerCase().includes(notebookSearch.toLowerCase()) ||
      (nb.subject_area && nb.subject_area.toLowerCase().includes(notebookSearch.toLowerCase())) ||
      (nb.content && nb.content.toLowerCase().includes(notebookSearch.toLowerCase()))

    const matchesFilter = notebookFilter === "all" ||
      (notebookFilter === "published" && nb.is_shared) ||
      (notebookFilter === "private" && !nb.is_shared)

    return matchesSearch && matchesFilter
  })

  const filteredMaterials = materials.filter(m => {
    const matchesSearch = search === "" ||
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase())
    const matchesType = typeFilter === "all" || m.material_type === typeFilter
    return matchesSearch && matchesType
  })

  const programme = userMeta.programme || ""
  const level = userMeta.level || ""

  // Materials for the user's specific programme/level shown first
  const myMaterials = filteredMaterials.filter(m =>
    m.programme?.toLowerCase().includes(programme.toLowerCase().split("(")[0].trim()) ||
    m.level?.toLowerCase().includes(level.toLowerCase().split("(")[0].trim())
  )
  const otherMaterials = filteredMaterials.filter(m => !myMaterials.includes(m))

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-12">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white">Learn</h1>
          <p className="text-gray-400 mt-1 text-sm">Your AI notebooks and academic library of curated materials.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search materials..."
            className="w-full bg-[#111] border border-[#333] rounded-full py-2.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-brand transition-colors"
          />
        </div>
      </div>

      {/* AI Notebooks & Saved Study Notes */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold flex items-center gap-2 text-white">
              <BookMarked className="text-brand" size={20} /> My Notes & AI Notebooks
            </h2>
            <span className="text-xs text-gray-500 font-bold bg-[#141414] border border-[#222] px-2 py-0.5 rounded-full">
              {notebooks.length}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-[#111] border border-[#222] p-1 rounded-xl flex-shrink-0">
              {[
                { id: "all" as const, label: `All (${notebooks.length})` },
                { id: "published" as const, label: `Published (${notebooks.filter(n => n.is_shared).length})` },
                { id: "private" as const, label: `Private (${notebooks.filter(n => !n.is_shared).length})` },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setNotebookFilter(f.id)}
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors flex-shrink-0 ${
                    notebookFilter === f.id
                      ? "bg-brand text-white shadow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Note search */}
            <div className="relative w-32 sm:w-44 flex-shrink-0">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" size={12} />
              <input
                type="text"
                value={notebookSearch}
                onChange={e => setNotebookSearch(e.target.value)}
                placeholder="Filter notes..."
                className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl py-1 pl-7 pr-3 text-xs text-white placeholder:text-gray-600 outline-none"
              />
            </div>

            <Link
              href="/learn/notebooks/new"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-brand/20 flex-shrink-0"
            >
              <Plus size={13} /> <span className="hidden sm:inline">New Notebook</span><span className="sm:hidden">New</span>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 size={24} className="animate-spin text-brand" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/learn/notebooks/new"
              className="bg-[#111] border border-dashed border-[#333] hover:border-brand p-5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all group h-44 shadow-sm hover:shadow-brand/5">
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] group-hover:bg-brand/20 flex items-center justify-center text-gray-400 group-hover:text-brand transition-colors">
                <Plus size={20} />
              </div>
              <div className="text-center">
                <span className="font-bold text-sm text-gray-300 group-hover:text-white block">New AI Notebook</span>
                <span className="text-[10px] text-gray-600 mt-0.5 block">Start fresh notes & attach sources</span>
              </div>
            </Link>

            {filteredNotebooks.map(nb => {
              const wordCount = nb.content ? nb.content.trim().split(/\s+/).filter(Boolean).length : 0
              const isBusy = actionLoadingId === nb.id

              return (
                <div
                  key={nb.id}
                  className="bg-[#101010] border border-[#1f1f1f] hover:border-[#333] p-4 rounded-2xl flex flex-col justify-between transition-all group min-h-44 shadow-sm relative space-y-3"
                >
                  {/* Top Bar: Subject & Publish Status Toggle */}
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-6 h-6 bg-brand/10 border border-brand/20 rounded-md flex items-center justify-center text-brand flex-shrink-0">
                          <BookMarked size={12} />
                        </div>
                        {nb.subject_area ? (
                          <span className="text-[9px] font-bold text-brand bg-brand/10 border border-brand/20 px-1.5 py-0.5 rounded uppercase tracking-wider truncate">
                            {nb.subject_area}
                          </span>
                        ) : (
                          <span className="text-[9px] font-bold text-gray-500 bg-[#161616] px-1.5 py-0.5 rounded uppercase tracking-wider">
                            General
                          </span>
                        )}
                      </div>

                      {/* Interactive Publish Toggle Badge */}
                      <button
                        onClick={() => handleTogglePublish(nb)}
                        disabled={isBusy}
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 transition-all ${
                          nb.is_shared
                            ? "bg-brand/10 border-brand/40 text-brand hover:bg-brand/20"
                            : "bg-[#161616] border-[#252525] text-gray-400 hover:text-white hover:border-[#333]"
                        }`}
                        title={nb.is_shared ? "Click to set private" : "Click to publish to community"}
                      >
                        {isBusy ? (
                          <Loader2 size={9} className="animate-spin" />
                        ) : nb.is_shared ? (
                          <Globe size={9} />
                        ) : (
                          <Lock size={9} />
                        )}
                        <span>{nb.is_shared ? "Published" : "Private"}</span>
                      </button>
                    </div>

                    {/* Note Title */}
                    <h3
                      onClick={() => setViewingNotebook(nb)}
                      className="font-bold text-white text-sm line-clamp-1 hover:text-brand transition-colors cursor-pointer"
                      title={nb.title}
                    >
                      {nb.title}
                    </h3>

                    {/* Note Content Excerpt */}
                    {nb.content ? (
                      <p
                        onClick={() => setViewingNotebook(nb)}
                        className="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed cursor-pointer hover:text-gray-300 transition-colors"
                      >
                        {nb.content.replace(/[#*`_\[\]]/g, "")}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-600 italic mt-1.5">No notes recorded yet</p>
                    )}
                  </div>

                  {/* Bottom Stats & Action Bar */}
                  <div className="pt-2.5 border-t border-[#181818] space-y-2">
                    <div className="flex items-center justify-between text-[10px] text-gray-500">
                      <span>{new Date(nb.updated_at).toLocaleDateString()}</span>
                      <span>{wordCount > 0 ? `${wordCount.toLocaleString()} words` : "Empty"}</span>
                    </div>

                    <div className="flex items-center justify-between gap-1 pt-1">
                      {/* View Button */}
                      <button
                        onClick={() => setViewingNotebook(nb)}
                        className="flex items-center gap-1 text-[11px] font-bold text-gray-300 hover:text-white bg-[#161616] hover:bg-[#202020] border border-[#262626] px-2.5 py-1 rounded-lg transition-colors"
                        title="Quick View Note"
                      >
                        <Eye size={12} className="text-brand" /> View
                      </button>

                      <div className="flex items-center gap-1">
                        {/* Edit in Workspace */}
                        <Link
                          href={`/learn/notebooks/${nb.id}`}
                          className="flex items-center gap-1 text-[11px] font-bold text-gray-400 hover:text-brand px-2 py-1 rounded-lg transition-colors"
                          title="Open full AI workspace"
                        >
                          <PenLine size={11} /> Edit
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteNotebook(nb.id, nb.title)}
                          disabled={isBusy}
                          className="text-gray-600 hover:text-red-500 p-1 rounded-md transition-colors"
                          title="Delete note"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            {filteredNotebooks.length === 0 && (
              <div className="col-span-full bg-[#111] border border-[#1f1f1f] rounded-2xl p-8 text-center space-y-2">
                <p className="text-gray-400 font-semibold text-sm">No notes found matching your filter.</p>
                <p className="text-gray-600 text-xs">Switch filters or create a new note in the AI tab!</p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── NOTE VIEW MODAL ── */}
      {viewingNotebook && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4">
          <div className="bg-[#0c0c0c] border border-[#222] rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90dvh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[#1c1c1c] flex items-center justify-between gap-3 bg-[#0f0f0f]">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                  <FileText size={16} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-sm sm:text-base truncate">
                    {viewingNotebook.title || "Untitled Note"}
                  </h3>
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 text-[10px] text-gray-400 flex-wrap">
                    {viewingNotebook.subject_area && (
                      <span className="text-brand font-bold uppercase tracking-wider">
                        {viewingNotebook.subject_area}
                      </span>
                    )}
                    <span>·</span>
                    <span>Updated {new Date(viewingNotebook.updated_at).toLocaleDateString()}</span>
                    <span>·</span>
                    <span>{viewingNotebook.content ? viewingNotebook.content.trim().split(/\s+/).length.toLocaleString() : 0} words</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                {/* Publish Toggle Button */}
                <button
                  onClick={() => handleTogglePublish(viewingNotebook)}
                  className={`text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all ${
                    viewingNotebook.is_shared
                      ? "bg-brand/10 border-brand/40 text-brand hover:bg-brand/20"
                      : "bg-[#181818] border-[#2b2b2b] text-gray-300 hover:text-white hover:border-[#383838]"
                  }`}
                  title={viewingNotebook.is_shared ? "Click to set private" : "Click to publish to community"}
                >
                  {viewingNotebook.is_shared ? <Globe size={12} /> : <Lock size={12} />}
                  <span className="hidden sm:inline">{viewingNotebook.is_shared ? "Published" : "Private"}</span>
                </button>

                <button
                  onClick={() => setViewingNotebook(null)}
                  className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 break-words">
              {viewingNotebook.content ? (
                <div className="prose prose-invert prose-sm max-w-none text-gray-200 leading-relaxed font-sans break-words [&_table]:overflow-x-auto [&_table]:block [&_table]:w-full">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {viewingNotebook.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-[#222] flex items-center justify-center mx-auto text-gray-500">
                    <PenLine size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white">No content written in this note yet</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Ask questions in the AI mentor workspace and click &quot;Add to Notes&quot; to save clinical summaries directly into this note!
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-3.5 sm:px-6 sm:py-3.5 border-t border-[#1c1c1c] bg-[#0a0a0a] flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <div className="flex items-center justify-between sm:justify-start gap-2">
                <button
                  onClick={() => handleCopyNote(viewingNotebook.content || "", viewingNotebook.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-white bg-[#141414] hover:bg-[#1e1e1e] border border-[#262626] px-3 py-1.5 rounded-xl transition-colors"
                >
                  {copiedId === viewingNotebook.id ? <Check size={12} className="text-brand" /> : <Copy size={12} />}
                  <span>{copiedId === viewingNotebook.id ? "Copied" : "Copy"}</span>
                </button>

                <button
                  onClick={() => handleDownloadNote(viewingNotebook)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-white bg-[#141414] hover:bg-[#1e1e1e] border border-[#262626] px-3 py-1.5 rounded-xl transition-colors"
                >
                  <Download size={12} />
                  <span>Download</span>
                </button>

                <button
                  onClick={() => handleDeleteNotebook(viewingNotebook.id, viewingNotebook.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-400 hover:text-red-300 px-2 py-1.5 transition-colors"
                >
                  <Trash2 size={12} />
                  <span>Delete</span>
                </button>
              </div>

              <Link
                href={`/learn/notebooks/${viewingNotebook.id}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-brand/20 w-full sm:w-auto text-center"
              >
                <Sparkles size={13} /> Open in Workspace ↗
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Academic Library */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold flex items-center gap-2 text-white">
              <FolderOpen className="text-brand" size={20} /> Academic Library
            </h2>
            <Link
              href="/library"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-brand/20"
            >
              <FolderOpen size={13} /> Main Library ↗
            </Link>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href="/create"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#161616] hover:bg-[#202020] border border-[#2b2b2b] text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-colors"
            >
              <Plus size={14} className="text-brand" /> Contribute to the PodGuide library upload
            </Link>

            {/* Type filter */}
            <div className="flex items-center gap-1.5">
              <Filter size={14} className="text-gray-500" />
              {["all", "pdf", "video", "past_paper"].map(t => (
                <button key={t} onClick={() => setTypeFilter(t)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    typeFilter === t
                      ? "bg-brand text-white border-brand"
                      : "bg-[#111] text-gray-400 border-[#333] hover:text-white hover:border-[#555]"
                  }`}>
                  {t === "all" ? "All" : t === "past_paper" ? "Past Papers" : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 size={24} className="animate-spin text-brand" />
          </div>
        ) : filteredMaterials.length === 0 ? (
          <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto text-brand">
              <FolderOpen size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-white text-base">Academic Library Palette</h3>
              <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                Explore the complete subject shelves in our main library, or contribute notes and slides for your cohort.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
              <Link
                href="/library"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-brand/20"
              >
                <FolderOpen size={14} /> Open Main Library ↗
              </Link>
              <Link
                href="/create"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#161616] hover:bg-[#202020] border border-[#2b2b2b] text-gray-300 hover:text-white font-bold rounded-xl text-xs transition-colors"
              >
                <Plus size={14} className="text-brand" /> Contribute to the PodGuide library upload
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Your programme materials first */}
            {myMaterials.length > 0 && (
              <div>
                <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">
                  Your Programme — {programme.split("(")[0].trim()}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {myMaterials.map(m => (
                    <MaterialCard key={m.id} material={m} />
                  ))}
                </div>
              </div>
            )}

            {/* All other materials */}
            {otherMaterials.length > 0 && (
              <div>
                {myMaterials.length > 0 && (
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">All Programmes</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherMaterials.map(m => (
                    <MaterialCard key={m.id} material={m} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  )
}

function MaterialCard({ material: m }: { material: Material }) {
  const isVideo = m.material_type === "video"
  const icon = TYPE_ICONS[m.material_type] || "📁"
  const colorClass = TYPE_COLORS[m.material_type] || TYPE_COLORS.other

  return (
    <div className="bg-[#111] border border-[#1f1f1f] hover:border-brand/40 p-4 rounded-xl transition-all group">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-xl flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-brand transition-colors">
            {m.title}
          </h4>
          <p className="text-xs text-gray-500 mt-0.5 truncate">{m.subject}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${colorClass}`}>
          {m.material_type === "past_paper" ? "Past Paper" : m.material_type}
        </span>
        {m.level && (
          <span className="text-[10px] text-gray-600 truncate">{m.level.split("(")[0].trim()}</span>
        )}
      </div>

      {m.description && (
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">{m.description}</p>
      )}

      <a href={m.file_url} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs font-bold text-brand hover:text-white transition-colors">
        {isVideo ? <ExternalLink size={12} /> : <Download size={12} />}
        {isVideo ? "Watch" : "Download"}
      </a>
    </div>
  )
}
