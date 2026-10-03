"use client"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import {
  PenSquare, FileUp, Layers, HelpCircle, X,
  Loader2, CheckCircle, Image as ImageIcon
} from "lucide-react"

type Modal = "post" | "resource" | "flashcard" | "question" | null

export default function CreatePage() {
  const [modal, setModal] = useState<Modal>(null)

  const createOptions = [
    {
      name: "Post to Campus Feed",
      icon: PenSquare,
      desc: "Share a thought, question, or achievement with the campus community.",
      color: "text-brand",
      bg: "group-hover:bg-brand/10",
      action: () => setModal("post"),
    },
    {
      name: "Share a Resource",
      icon: FileUp,
      desc: "Share a link, PDF, or study guide with your peers.",
      color: "text-green-500",
      bg: "group-hover:bg-green-500/10",
      action: () => setModal("resource"),
    },
    {
      name: "New Flashcard Deck",
      icon: Layers,
      desc: "Create a custom flashcard deck for spaced repetition study.",
      color: "text-yellow-500",
      bg: "group-hover:bg-yellow-500/10",
      action: () => setModal("flashcard"),
    },
    {
      name: "Submit a Question",
      icon: HelpCircle,
      desc: "Contribute a multiple-choice question to the community question bank.",
      color: "text-purple-500",
      bg: "group-hover:bg-purple-500/10",
      action: () => setModal("question"),
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-2 py-4">
        <h1 className="text-3xl font-display font-bold text-white">Create</h1>
        <p className="text-gray-400 text-sm">Contribute to the PodGuide community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {createOptions.map((opt) => {
          const Icon = opt.icon
          return (
            <button key={opt.name} onClick={opt.action}
              className={`bg-[#111] border border-[#1f1f1f] hover:border-[#333] rounded-2xl p-6 flex items-start gap-5 transition-all group text-left w-full`}>
              <div className={`w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 transition-colors ${opt.bg}`}>
                <Icon size={24} className={opt.color} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">{opt.name}</h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{opt.desc}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Modals */}
      {modal === "post" && <PostModal onClose={() => setModal(null)} />}
      {modal === "resource" && <ResourceModal onClose={() => setModal(null)} />}
      {modal === "flashcard" && <FlashcardModal onClose={() => setModal(null)} />}
      {modal === "question" && <QuestionModal onClose={() => setModal(null)} />}
    </div>
  )
}

function ModalShell({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-[#1f1f1f]">
          <h2 className="font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors"><X size={20} /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}

function PostModal({ onClose }: { onClose: () => void }) {
  const supabase = createClient()
  const router = useRouter()
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!content.trim()) return
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from("posts").insert({ content: content.trim(), author_id: user.id, post_type: "post" })
    setSuccess(true)
    setTimeout(() => { onClose(); router.push("/campus") }, 1200)
  }

  return (
    <ModalShell title="Post to Campus Feed" onClose={onClose}>
      <div className="space-y-4">
        {success ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <CheckCircle size={40} className="text-green-400" />
            <p className="text-white font-semibold">Posted successfully!</p>
          </div>
        ) : (
          <>
            <textarea
              value={content} onChange={e => setContent(e.target.value)}
              placeholder="Share something with your campus community..."
              rows={5}
              className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-3 text-white text-sm outline-none resize-none transition-colors"
            />
            <div className="flex justify-end gap-3">
              <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancel</button>
              <button onClick={handleSubmit} disabled={loading || !content.trim()}
                className="bg-brand text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center gap-2">
                {loading ? <Loader2 size={14} className="animate-spin" /> : null} Post
              </button>
            </div>
          </>
        )}
      </div>
    </ModalShell>
  )
}

function ResourceModal({ onClose }: { onClose: () => void }) {
  const supabase = createClient()
  const [form, setForm] = useState({ title: "", url: "", description: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.url.trim()) return
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from("posts").insert({
      content: `📎 **${form.title}**\n${form.description}\n🔗 ${form.url}`,
      author_id: user.id,
      post_type: "resource_share"
    })
    setSuccess(true)
    setTimeout(onClose, 1200)
  }

  return (
    <ModalShell title="Share a Resource" onClose={onClose}>
      <div className="space-y-4">
        {success ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <CheckCircle size={40} className="text-green-400" />
            <p className="text-white font-semibold">Resource shared!</p>
          </div>
        ) : (
          <>
            {[
              { label: "Title *", key: "title", placeholder: "e.g. ECG Interpretation Guide" },
              { label: "URL / Link *", key: "url", placeholder: "https://..." },
              { label: "Description", key: "description", placeholder: "What is this resource about?" },
            ].map(f => (
              <div key={f.key}>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{f.label}</label>
                <input type="text" placeholder={f.placeholder} value={(form as any)[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-colors" />
              </div>
            ))}
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancel</button>
              <button onClick={handleSubmit} disabled={loading || !form.title || !form.url}
                className="bg-brand text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center gap-2">
                {loading ? <Loader2 size={14} className="animate-spin" /> : null} Share
              </button>
            </div>
          </>
        )}
      </div>
    </ModalShell>
  )
}

function FlashcardModal({ onClose }: { onClose: () => void }) {
  const supabase = createClient()
  const router = useRouter()
  const [form, setForm] = useState({ title: "", description: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!form.title.trim()) return
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from("flashcard_decks").insert({ title: form.title, description: form.description, user_id: user.id, is_public: false, card_count: 0 })
    setSuccess(true)
    setTimeout(() => { onClose(); router.push("/practise/flashcards") }, 1200)
  }

  return (
    <ModalShell title="New Flashcard Deck" onClose={onClose}>
      <div className="space-y-4">
        {success ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <CheckCircle size={40} className="text-green-400" />
            <p className="text-white font-semibold">Deck created!</p>
          </div>
        ) : (
          <>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Deck Title *</label>
              <input type="text" placeholder="e.g. Cardiovascular Pharmacology" value={form.title}
                onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Description</label>
              <input type="text" placeholder="What subjects does this cover?" value={form.description}
                onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-colors" />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancel</button>
              <button onClick={handleSubmit} disabled={loading || !form.title}
                className="bg-brand text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center gap-2">
                {loading ? <Loader2 size={14} className="animate-spin" /> : null} Create Deck
              </button>
            </div>
          </>
        )}
      </div>
    </ModalShell>
  )
}

function QuestionModal({ onClose }: { onClose: () => void }) {
  const supabase = createClient()
  const [form, setForm] = useState({ stem: "", a: "", b: "", c: "", d: "", correct: "a", explanation: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {
    if (!form.stem || !form.a || !form.b || !form.correct) return
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data: q } = await supabase.from("questions").insert({
      stem: form.stem, explanation: form.explanation, type: "mcq",
      difficulty: "medium", creator_id: user.id, status: "pending"
    }).select().single()

    if (q) {
      const options = [
        { question_id: q.id, option_text: form.a, is_correct: form.correct === "a" },
        { question_id: q.id, option_text: form.b, is_correct: form.correct === "b" },
        ...(form.c ? [{ question_id: q.id, option_text: form.c, is_correct: form.correct === "c" }] : []),
        ...(form.d ? [{ question_id: q.id, option_text: form.d, is_correct: form.correct === "d" }] : []),
      ]
      await supabase.from("question_options").insert(options)
    }
    setSuccess(true)
    setTimeout(onClose, 1200)
  }

  return (
    <ModalShell title="Submit a Question" onClose={onClose}>
      <div className="space-y-4">
        {success ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <CheckCircle size={40} className="text-green-400" />
            <p className="text-white font-semibold">Question submitted for review!</p>
          </div>
        ) : (
          <>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Question Stem *</label>
              <textarea value={form.stem} onChange={e => setForm(p => ({ ...p, stem: e.target.value }))} rows={3}
                placeholder="A 45-year-old patient presents with..."
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none resize-none transition-colors" />
            </div>
            {[
              { label: "Option A *", key: "a" }, { label: "Option B *", key: "b" },
              { label: "Option C", key: "c" }, { label: "Option D", key: "d" },
            ].map(f => (
              <div key={f.key}>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{f.label}</label>
                <input type="text" value={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-colors" />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Correct Answer *</label>
              <select value={form.correct} onChange={e => setForm(p => ({ ...p, correct: e.target.value }))}
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none transition-colors">
                {["a", "b", "c", "d"].map(o => <option key={o} value={o}>Option {o.toUpperCase()}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Explanation</label>
              <textarea value={form.explanation} onChange={e => setForm(p => ({ ...p, explanation: e.target.value }))} rows={2}
                placeholder="Why is this the correct answer?"
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none resize-none transition-colors" />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={onClose} className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancel</button>
              <button onClick={handleSubmit} disabled={loading || !form.stem || !form.a || !form.b}
                className="bg-brand text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center gap-2">
                {loading ? <Loader2 size={14} className="animate-spin" /> : null} Submit
              </button>
            </div>
          </>
        )}
      </div>
    </ModalShell>
  )
}