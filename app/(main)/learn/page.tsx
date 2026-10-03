"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import {
  BookMarked, FolderOpen, FileText, PlaySquare, Search,
  Plus, ChevronRight, Loader2, Download, ExternalLink, Filter
} from "lucide-react"

type Notebook = { id: string; title: string; subject_area: string; updated_at: string; content?: string }
type Material = { id: string; title: string; material_type: string; subject: string; programme: string; level: string; file_url: string; description: string }

const TYPE_ICONS: Record<string, string> = {
  pdf: "📄", video: "🎬", past_paper: "📋", other: "📁"
}

const TYPE_COLORS: Record<string, string> = {
  pdf: "bg-red-500/10 text-red-400 border-red-500/20",
  video: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  past_paper: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  other: "bg-gray-500/10 text-gray-400 border-gray-500/20",
}

export default function LearnPage() {
  const supabase = createClient()
  const [notebooks, setNotebooks] = useState<Notebook[]>([])
  const [materials, setMaterials] = useState<Material[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [userMeta, setUserMeta] = useState<any>({})

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

      {/* AI Notebooks */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold flex items-center gap-2 text-white">
            <BookMarked className="text-brand" size={20} /> My AI Notebooks
          </h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 size={24} className="animate-spin text-brand" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/learn/notebooks/new"
              className="bg-[#111] border border-dashed border-[#444] hover:border-brand p-5 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all group h-36">
              <div className="w-10 h-10 rounded-full bg-[#222] group-hover:bg-brand/20 flex items-center justify-center text-gray-400 group-hover:text-brand transition-colors">
                <Plus size={20} />
              </div>
              <span className="font-semibold text-sm text-gray-300 group-hover:text-white">New Notebook</span>
            </Link>

            {notebooks.map(nb => (
              <Link key={nb.id} href={`/learn/notebooks/${nb.id}`}
                className="bg-[#111] border border-[#1f1f1f] hover:border-brand/50 p-5 rounded-2xl flex flex-col justify-between transition-all group min-h-40">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                      <BookMarked size={16} className="text-brand" />
                    </div>
                    {nb.subject_area && (
                      <span className="text-[10px] font-bold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {nb.subject_area}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-white text-sm line-clamp-1 group-hover:text-brand transition-colors">
                    {nb.title}
                  </h3>
                  {nb.content ? (
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {nb.content.replace(/[#*`_\[\]]/g, "")}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-600 italic mt-1.5">No notes written yet</p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#181818] text-[10px] text-gray-500">
                  <span>{new Date(nb.updated_at).toLocaleDateString()}</span>
                  <span className="text-brand group-hover:underline font-semibold flex items-center gap-0.5">Open ↗</span>
                </div>
              </Link>
            ))}

            {notebooks.length === 0 && (
              <div className="col-span-3 bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 text-center">
                <p className="text-gray-500 text-sm">No notebooks yet. Create your first one!</p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Academic Library */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-lg font-bold flex items-center gap-2 text-white">
            <FolderOpen className="text-brand" size={20} /> Academic Library
          </h2>

          {/* Type filter */}
          <div className="flex items-center gap-2 flex-wrap">
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

        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 size={24} className="animate-spin text-brand" />
          </div>
        ) : filteredMaterials.length === 0 ? (
          <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-12 text-center space-y-3">
            <FolderOpen size={40} className="text-gray-600 mx-auto" />
            <h3 className="font-bold text-gray-400">
              {search ? "No materials match your search" : "Library is being built"}
            </h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto">
              {search
                ? "Try a different search term or clear the filter."
                : "Materials are uploaded by the admin. Check back soon — this library will be filled with PDFs, videos, and past papers for your programme."}
            </p>
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
