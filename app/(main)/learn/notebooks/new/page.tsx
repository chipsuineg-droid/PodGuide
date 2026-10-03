"use client"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { BookMarked, Loader2, ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

const SUBJECT_SUGGESTIONS = [
  "Cardiology", "Renal Physiology", "Pharmacology", "Anatomy",
  "Microbiology", "Surgery", "Psychiatry", "Paediatrics",
  "Obstetrics & Gynaecology", "Pathology", "Biochemistry", "Radiology"
]

export default function NewNotebookPage() {
  const supabase = createClient()
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [subject, setSubject] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const notebookTitle = title.trim() || "Untitled notebook"
    setLoading(true)
    setError("")

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push("/login"); return }

    const { data, error: err } = await supabase
      .from("notebooks")
      .insert({ title: notebookTitle, subject_area: subject.trim(), user_id: user.id })
      .select()
      .single()

    if (err) { setError(err.message); setLoading(false); return }
    router.push(`/learn/notebooks/${data.id}`)
  }

  const handleQuickCreate = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push("/login"); return }
    const { data, error: err } = await supabase
      .from("notebooks")
      .insert({ title: "Untitled notebook", subject_area: "", user_id: user.id })
      .select()
      .single()
    if (!err && data) router.push(`/learn/notebooks/${data.id}`)
    else setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto py-12 px-4 space-y-6">

      {/* Back */}
      <div className="flex items-center gap-3">
        <Link href="/learn" className="p-1.5 text-gray-600 hover:text-white transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand">New Notebook</p>
          <h1 className="text-xl font-black text-white">Create a notebook</h1>
        </div>
      </div>

      {/* Quick create */}
      <button
        onClick={handleQuickCreate}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand hover:bg-red-700 text-white font-black rounded-2xl text-sm transition-all shadow-lg shadow-brand/20 disabled:opacity-60"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
        Open blank notebook
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#1a1a1a]" />
        <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">or name it first</span>
        <div className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      {/* Detailed form */}
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-5 space-y-4">
        {error && (
          <div className="p-3 bg-brand/10 border border-brand/20 rounded-xl text-xs text-brand">{error}</div>
        )}

        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">
              Notebook Title
            </label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="e.g. Renal Physiology Deep Dive"
              className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-gray-700"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1.5">
              Subject Area
            </label>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="e.g. Physiology, Pharmacology, Surgery"
              className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-gray-700"
            />
            {/* Quick subject chips */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {SUBJECT_SUGGESTIONS.slice(0, 6).map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSubject(s)}
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all ${
                    subject === s
                      ? "bg-brand text-white border-brand"
                      : "bg-[#0d0d0d] text-gray-600 border-[#1a1a1a] hover:text-white hover:border-[#2b2b2b]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[#111] hover:bg-[#181818] border border-[#1f1f1f] hover:border-[#2b2b2b] text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading
              ? <Loader2 size={14} className="animate-spin" />
              : <BookMarked size={14} className="text-brand" />
            }
            Create Notebook
          </button>
        </form>
      </div>
    </div>
  )
}
