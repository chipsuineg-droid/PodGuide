"use client"
import { useState, useRef, useEffect, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useDropzone } from "react-dropzone"
import { useSearchParams } from "next/navigation"
import {
  ChevronLeft, Sparkles, Send, Loader2, Plus,
  Upload, Trash2, Share2, Globe, Lock, Copy, Check,
  Search, Bold, Italic, List, Heading1, Heading2, Download,
  UserPlus, ExternalLink, X, FileUp, Link2, AlertCircle,
  Maximize2, Minimize2, GitBranch, Brain, PenLine,
  BookOpen, FlaskConical, ChevronRight, ChevronDown, Wand2,
  HardDrive, ChevronUp, RotateCcw, ArrowRight, ArrowLeft,
  Save, Clipboard, Table as TableIcon, FileText
} from "lucide-react"
import { toast } from "sonner"

// ─── Types ───────────────────────────────────────────────────
type Message = {
  role: "user" | "assistant"
  content: string
  id: string
}
type Source = {
  id: string
  name: string
  type: "pdf" | "link" | "text" | "paste" | "drive"
  url?: string
  content?: string
  created_at: string
}
type Collaborator = { email: string; access: "view" | "edit" }
type StudioTool = "mindmap" | "flashcards" | "quiz" | "notes" | "scholar" | null
type AddSourceMode = "file" | "link" | "paste" | "drive" | null

interface Notebook {
  id: string
  title: string
  subject_area: string
  description: string
  is_shared: boolean
  content: string
  user_id: string
  created_at: string
}

interface MindNode {
  id: string
  label: string
  level: number
  children: MindNode[]
  expanded: boolean
}

interface Flashcard {
  q: string
  a: string
}

const inputCls = "w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"
const SCHOLAR_BASE = "https://api.crossref.org/works"
let msgCounter = 0
const nextId = () => `msg-${++msgCounter}`

// ── Parse markdown into hierarchical tree ──
function parseMindMap(text: string): MindNode[] {
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean)
  const roots: MindNode[] = []
  const stack: MindNode[] = []

  lines.forEach((line, idx) => {
    let level = 0
    let label = ""

    if (line.startsWith("# ")) { level = 0; label = line.slice(2) }
    else if (line.startsWith("## ")) { level = 1; label = line.slice(3) }
    else if (line.startsWith("### ")) { level = 2; label = line.slice(4) }
    else if (line.startsWith("- ") || line.startsWith("* ")) { level = 3; label = line.slice(2) }
    else return

    const node: MindNode = { id: `mn-${idx}`, label, level, children: [], expanded: true }

    if (level === 0) {
      roots.push(node)
      stack.length = 0
      stack.push(node)
    } else {
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop()
      }
      const parent = stack[stack.length - 1]
      if (parent) parent.children.push(node)
      else roots.push(node)
      stack.push(node)
    }
  })

  return roots
}

// ── Parse flashcard text into Q&A pairs ──
function parseFlashcards(text: string): Flashcard[] {
  const cards: Flashcard[] = []
  const cardBlocks = text.split(/🃏\s*Card\s*\d+/i).filter(b => b.trim())
  cardBlocks.forEach(block => {
    const qMatch = block.match(/[Qq]:?\s*([\s\S]+?)(?=\n[Aa]:?|\n🃏|$)/)
    const aMatch = block.match(/[Aa]:?\s*([\s\S]+?)(?=\n🃏|$)/)
    if (qMatch && aMatch) {
      cards.push({
        q: qMatch[1].replace(/\*\*/g, "").trim(),
        a: aMatch[1].trim()
      })
    }
  })
  return cards
}

// ─── Custom Rich Medical Markdown Renderer ──────────────────
function RichMedicalMarkdown({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-sm max-w-none text-gray-200 leading-relaxed font-sans">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <div className="my-4 pb-2 border-b border-[#222] flex items-center gap-2">
              <span className="w-1.5 h-5 bg-brand rounded-full inline-block" />
              <h1 className="text-base font-bold text-white tracking-wide m-0">{children}</h1>
            </div>
          ),
          h2: ({ children }) => (
            <div className="mt-5 mb-2.5 pb-1 border-b border-[#1a1a1a] flex items-center gap-2">
              <span className="w-1 h-4 bg-brand/80 rounded-full inline-block" />
              <h2 className="text-sm font-bold text-white tracking-wide uppercase text-xs m-0">{children}</h2>
            </div>
          ),
          h3: ({ children }) => (
            <h3 className="text-xs font-bold text-gray-300 mt-4 mb-1.5 uppercase tracking-wider">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-xs text-gray-300 my-2 leading-relaxed">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),
          ul: ({ children }) => (
            <ul className="my-2.5 pl-4 space-y-1 text-xs text-gray-300 list-disc marker:text-brand">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-2.5 pl-4 space-y-1 text-xs text-gray-300 list-decimal marker:text-brand font-medium">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed pl-1">{children}</li>
          ),
          blockquote: ({ children }) => (
            <div className="my-3 p-3.5 bg-[#0f0f0f] border-l-2 border-brand rounded-r-xl text-xs text-gray-300 italic shadow-sm">
              {children}
            </div>
          ),
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto rounded-xl border border-[#222] bg-[#0c0c0c]">
              <table className="w-full text-left border-collapse text-xs">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[#181818] text-white border-b border-[#2a2a2a] text-[11px] uppercase tracking-wider font-bold">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="px-3.5 py-2.5 font-bold text-white border-r border-[#222] last:border-0">{children}</th>
          ),
          td: ({ children }) => (
            <td className="px-3.5 py-2 text-gray-300 border-t border-[#1a1a1a] border-r border-[#1a1a1a] last:border-r-0">{children}</td>
          ),
          code: ({ children }) => (
            <code className="px-1.5 py-0.5 rounded bg-[#1c1c1c] text-brand font-mono text-[11px] border border-[#2c2c2c]">{children}</code>
          ),
          hr: () => (
            <hr className="my-4 border-[#222]" />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

// ─── Mind Map Node Component ─────────────────────────────────
function MindMapNodeEl({
  node, depth, onToggle
}: {
  node: MindNode
  depth: number
  onToggle: (id: string) => void
}) {
  const colors = [
    "bg-brand text-white border-brand shadow-sm",
    "bg-[#181818] text-white border-[#2b2b2b]",
    "bg-[#111] text-gray-300 border-[#222]",
    "bg-transparent text-gray-400 border-[#1a1a1a]",
  ]
  const colClass = colors[Math.min(depth, 3)]
  const hasChildren = node.children.length > 0

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-start gap-2 group">
        {depth > 0 && (
          <div className="flex items-center flex-shrink-0 mt-3">
            <div className={`w-3.5 h-px ${depth === 1 ? "bg-brand/50" : "bg-[#2b2b2b]"}`} />
          </div>
        )}

        <div className="flex flex-col items-start">
          <button
            onClick={() => hasChildren && onToggle(node.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all mb-1 text-left ${colClass} ${hasChildren ? "cursor-pointer hover:border-brand/40" : "cursor-default"}`}
          >
            {node.label}
            {hasChildren && (
              <span className="opacity-60 ml-1">
                {node.expanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
              </span>
            )}
          </button>

          {node.expanded && node.children.length > 0 && (
            <div className="pl-3 border-l border-[#1f1f1f] ml-3.5 space-y-0.5">
              {node.children.map(child => (
                <MindMapNodeEl key={child.id} node={child} depth={depth + 1} onToggle={onToggle} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Interactive Mind Map Viewer ─────────────────────────────
function MindMapViewer({ text }: { text: string }) {
  const [nodes, setNodes] = useState<MindNode[]>(() => parseMindMap(text))

  const toggleNode = useCallback((id: string) => {
    const toggle = (ns: MindNode[]): MindNode[] =>
      ns.map(n => n.id === id ? { ...n, expanded: !n.expanded } : { ...n, children: toggle(n.children) })
    setNodes(prev => toggle(prev))
  }, [])

  const expandAll = () => {
    const expand = (ns: MindNode[]): MindNode[] =>
      ns.map(n => ({ ...n, expanded: true, children: expand(n.children) }))
    setNodes(expand)
  }

  const collapseAll = () => {
    const collapse = (ns: MindNode[]): MindNode[] =>
      ns.map(n => ({ ...n, expanded: n.level === 0, children: collapse(n.children) }))
    setNodes(collapse)
  }

  if (nodes.length === 0) {
    return (
      <div className="text-center py-6 text-xs text-gray-600">
        Could not parse mind map. Try generating again.
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <button onClick={expandAll} className="text-[10px] font-bold text-gray-500 hover:text-white px-2.5 py-1 rounded-lg bg-[#111] border border-[#1f1f1f] transition-colors">
          Expand All
        </button>
        <button onClick={collapseAll} className="text-[10px] font-bold text-gray-500 hover:text-white px-2.5 py-1 rounded-lg bg-[#111] border border-[#1f1f1f] transition-colors">
          Collapse All
        </button>
      </div>
      <div className="overflow-x-auto pb-2">
        <div className="space-y-2 min-w-max">
          {nodes.map(node => (
            <MindMapNodeEl key={node.id} node={node} depth={0} onToggle={toggleNode} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Interactive Flashcard Viewer ────────────────────────────
function FlashcardViewer({ text }: { text: string }) {
  const cards = parseFlashcards(text)
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [mastered, setMastered] = useState<Set<number>>(new Set())

  if (cards.length === 0) {
    return (
      <div className="text-center py-6 text-xs text-gray-600">
        No flashcards found. Try generating again.
      </div>
    )
  }

  const card = cards[current]
  const isMastered = mastered.has(current)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[10px] font-bold text-gray-600">
        <span>CARD {current + 1} OF {cards.length}</span>
        <span className="text-brand">{mastered.size} MASTERED</span>
      </div>
      <div className="w-full h-1 bg-[#111] rounded-full overflow-hidden">
        <div
          className="h-full bg-brand transition-all duration-300"
          style={{ width: `${((current + 1) / cards.length) * 100}%` }}
        />
      </div>

      <div
        className="relative cursor-pointer select-none"
        style={{ perspective: "1000px" }}
        onClick={() => setFlipped(f => !f)}
      >
        <div
          className="relative transition-transform duration-500 rounded-2xl"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            minHeight: "170px"
          }}
        >
          {/* Front */}
          <div
            className={`absolute inset-0 bg-[#0e0e0e] border rounded-2xl p-5 flex flex-col justify-between shadow-xl ${isMastered ? "border-brand/40" : "border-[#1f1f1f]"}`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 block mb-1">Clinical Question</span>
              <p className="text-xs font-bold text-white leading-relaxed">{card.q}</p>
            </div>
            <p className="text-[10px] text-gray-600 font-medium mt-3">Tap anywhere to flip card</p>
          </div>

          {/* Back */}
          <div
            className={`absolute inset-0 bg-[#121212] border rounded-2xl p-5 flex flex-col justify-between shadow-xl ${isMastered ? "border-brand/40" : "border-brand/30"}`}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-brand block mb-1">Answer & Rationale</span>
              <p className="text-xs text-gray-200 leading-relaxed">{card.a}</p>
            </div>
            <p className="text-[10px] text-gray-600 font-medium mt-3">Tap to flip back</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <button
          onClick={() => { setCurrent(c => Math.max(0, c - 1)); setFlipped(false) }}
          disabled={current === 0}
          className="p-2 rounded-xl bg-[#111] border border-[#1f1f1f] text-gray-500 hover:text-white disabled:opacity-25 transition-colors"
        >
          <ArrowLeft size={13} />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setMastered(prev => {
                const next = new Set(prev)
                isMastered ? next.delete(current) : next.add(current)
                return next
              })
            }}
            className={`text-[10px] font-bold px-3 py-1.5 rounded-xl border transition-colors ${
              isMastered
                ? "bg-brand/10 border-brand/30 text-brand"
                : "bg-[#111] border-[#1f1f1f] text-gray-600 hover:text-white"
            }`}
          >
            {isMastered ? "✓ Mastered" : "Mark Mastered"}
          </button>
          <button
            onClick={() => { setFlipped(false); setCurrent(0); setMastered(new Set()) }}
            className="p-1.5 text-gray-600 hover:text-white transition-colors"
            title="Restart"
          >
            <RotateCcw size={12} />
          </button>
        </div>

        <button
          onClick={() => { setCurrent(c => Math.min(cards.length - 1, c + 1)); setFlipped(false) }}
          disabled={current === cards.length - 1}
          className="p-2 rounded-xl bg-[#111] border border-[#1f1f1f] text-gray-500 hover:text-white disabled:opacity-25 transition-colors"
        >
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  )
}

// ─── AI Message Component with Action Bar ─────────────────────
function AIMessage({
  message,
  onSaveAsSource,
  onCopy,
  onSendToNotes,
}: {
  message: Message
  onSaveAsSource: (content: string) => void
  onCopy: (content: string) => void
  onSendToNotes: (content: string) => void
}) {
  const [copiedMsg, setCopiedMsg] = useState(false)

  const handleCopy = () => {
    onCopy(message.content)
    setCopiedMsg(true)
    setTimeout(() => setCopiedMsg(false), 2000)
  }

  return (
    <div className="flex gap-3.5">
      <div className="w-7 h-7 rounded-full bg-brand flex-shrink-0 flex items-center justify-center shadow-md">
        <Sparkles size={12} className="text-white" />
      </div>
      <div className="flex-1 min-w-0 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3 border-b border-[#181818] pb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand">PodGuide AI</span>
            <span className="text-[10px] text-gray-600">· NCBI & UpToDate Synthesis</span>
          </div>
        </div>

        <RichMedicalMarkdown content={message.content} />

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#181818]">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 hover:text-white transition-colors"
          >
            {copiedMsg ? <Check size={11} className="text-brand" /> : <Clipboard size={11} />}
            {copiedMsg ? "Copied" : "Copy Text"}
          </button>
          <span className="text-[#252525]">·</span>
          <button
            onClick={() => onSaveAsSource(message.content)}
            className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 hover:text-brand transition-colors"
          >
            <Save size={11} /> Save as Source
          </button>
          <span className="text-[#252525]">·</span>
          <button
            onClick={() => onSendToNotes(message.content)}
            className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 hover:text-white transition-colors"
          >
            <PenLine size={11} /> Add to Notes
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────
export default function NotebookPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = createClient()
  const searchParams = useSearchParams()
  const isFullscreen = searchParams.get("fullscreen") === "true"

  const [id, setId] = useState("")
  const [notebook, setNotebook] = useState<Notebook | null>(null)
  const [loading, setLoading] = useState(true)

  // Notes
  const [noteContent, setNoteContent] = useState("")
  const [noteTitle, setNoteTitle] = useState("")
  const [saving, setSaving] = useState(false)
  const [isPublic, setIsPublic] = useState(false)
  const [notePreview, setNotePreview] = useState(true) // Default to formatted preview mode
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Sources
  const [sources, setSources] = useState<Source[]>([])
  const [uploading, setUploading] = useState(false)
  const [pasteText, setPasteText] = useState("")
  const [pasteUrl, setPasteUrl] = useState("")
  const [driveUrl, setDriveUrl] = useState("")
  const [addingSource, setAddingSource] = useState<AddSourceMode>(null)
  const [sourcesCollapsed, setSourcesCollapsed] = useState(false)

  // Chat
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [aiLoading, setAiLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  // Studio
  const [studioCollapsed, setStudioCollapsed] = useState(false)
  const [activeTool, setActiveTool] = useState<StudioTool>(null)
  const [studioLoading, setStudioLoading] = useState(false)
  const [studioOutput, setStudioOutput] = useState("")
  const [studioMode, setStudioMode] = useState<string>("")

  // Scholar
  const [scholarQuery, setScholarQuery] = useState("")
  const [scholarResults, setScholarResults] = useState<any[]>([])
  const [scholarLoading, setScholarLoading] = useState(false)

  // Share
  const [shareModal, setShareModal] = useState(false)
  const [inviteEmail, setInviteEmail] = useState("")
  const [collaborators, setCollaborators] = useState<Collaborator[]>([])
  const [copied, setCopied] = useState(false)
  const [deleting, setDeleting] = useState(false)

  // Mobile
  const [mobilePanel, setMobilePanel] = useState<"sources" | "chat" | "studio">("chat")

  // ── Load notebook and documents ──
  useEffect(() => { params.then(p => setId(p.id)) }, [params])

  useEffect(() => {
    if (!id) return
    const load = async () => {
      const { data: nb } = await supabase.from("notebooks").select("*").eq("id", id).single()
      if (nb) {
        setNotebook(nb)
        setNoteTitle(nb.title)
        setNoteContent(nb.content || "")
        setIsPublic(nb.is_shared || false)
      }
      const { data: srcData } = await supabase
        .from("notebook_documents").select("*")
        .eq("notebook_id", id).order("created_at", { ascending: false })
      if (srcData) {
        setSources(srcData.map((d: any) => ({
          id: d.id,
          name: d.file_name,
          type: d.file_type === "link" ? "link" : d.file_type === "drive" ? "drive" : d.file_type === "text" ? "text" : "pdf",
          url: d.file_url,
          content: d.text_content,
          created_at: d.created_at
        })))
      }
      setLoading(false)
    }
    load()
  }, [id])

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages])

  // ── Auto-save notes ──
  const autoSave = useCallback(async (content: string, title: string) => {
    if (!id) return
    setSaving(true)
    await supabase.from("notebooks").update({ content, title, updated_at: new Date().toISOString() }).eq("id", id)
    setSaving(false)
  }, [id])

  const handleNoteChange = (val: string) => {
    setNoteContent(val)
    if (saveTimeout.current) clearTimeout(saveTimeout.current)
    saveTimeout.current = setTimeout(() => autoSave(val, noteTitle), 1500)
  }

  const handleTitleChange = (val: string) => {
    setNoteTitle(val)
    if (saveTimeout.current) clearTimeout(saveTimeout.current)
    saveTimeout.current = setTimeout(() => autoSave(noteContent, val), 1500)
  }

  const manualSaveNotes = async () => {
    if (!id) return
    setSaving(true)
    const { error } = await supabase.from("notebooks").update({
      content: noteContent,
      title: noteTitle,
      updated_at: new Date().toISOString()
    }).eq("id", id)
    setSaving(false)
    if (error) {
      toast.error("Failed to save notes: " + error.message)
    } else {
      toast.success("Notes saved to your Learn dashboard")
    }
  }

  const downloadNotesFile = () => {
    const filename = `${noteTitle.trim() || "PodGuide_Notebook"}.md`
    const blob = new Blob([noteContent || `# ${noteTitle}\n\nNo content written yet.`], { type: "text/markdown;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success(`Downloaded "${filename}" to your PC`)
  }

  const insertFormatting = (syntax: string, wrap = false) => {
    const ta = document.getElementById("note-editor") as HTMLTextAreaElement
    if (!ta) return
    const start = ta.selectionStart, end = ta.selectionEnd
    const selected = noteContent.slice(start, end)
    const newContent = wrap && selected
      ? noteContent.slice(0, start) + syntax + selected + syntax + noteContent.slice(end)
      : noteContent.slice(0, start) + syntax + noteContent.slice(end)
    handleNoteChange(newContent)
    setTimeout(() => {
      ta.focus()
      ta.setSelectionRange(start + syntax.length, start + syntax.length + (wrap ? selected.length : 0))
    }, 0)
  }

  // ── Sharing ──
  const togglePublic = async () => {
    const newVal = !isPublic
    setIsPublic(newVal)
    await supabase.from("notebooks").update({ is_shared: newVal }).eq("id", id)
    toast.success(newVal ? "Published to community" : "Set to private")
  }

  const handleDelete = async () => {
    if (!confirm("Delete this notebook permanently?")) return
    setDeleting(true)
    await supabase.from("notebooks").delete().eq("id", id)
    window.location.href = "/learn"
  }

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href.replace("?fullscreen=true", ""))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inviteCollaborator = () => {
    if (!inviteEmail.trim()) return
    setCollaborators(prev => [...prev, { email: inviteEmail.trim(), access: "view" }])
    setInviteEmail("")
    toast.success(`Invite sent to ${inviteEmail}`)
  }

  // ── Robust File Upload via Server API ──
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return
    setUploading(true)

    for (const file of acceptedFiles) {
      try {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("notebookId", id)

        const res = await fetch("/api/notebook/upload", {
          method: "POST",
          body: formData,
        })
        const data = await res.json()

        if (!res.ok) {
          toast.error(data.error || `Failed to upload ${file.name}`)
          continue
        }

        const doc = data.doc
        const docType = file.type.includes("pdf") ? "pdf" : file.type.includes("image") ? "pdf" : "text"
        setSources(prev => [{
          id: doc?.id || `doc-${Date.now()}`,
          name: file.name,
          type: docType,
          url: data.publicUrl || doc?.file_url || "",
          content: doc?.text_content || "",
          created_at: new Date().toISOString()
        }, ...prev])

        toast.success(`Uploaded: ${file.name}`)
      } catch (err: any) {
        toast.error(`Upload failed: ${err.message || "Network error"}`)
      }
    }

    setUploading(false)
    setAddingSource(null)
  }, [id])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
      "text/*": [".txt", ".md", ".json", ".csv"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"]
    }
  })

  const addLinkSource = async () => {
    if (!pasteUrl.trim()) return
    const { data: doc } = await supabase.from("notebook_documents").insert({
      notebook_id: id, file_name: pasteUrl, file_url: pasteUrl, file_type: "link", processing_status: "ready"
    }).select().single()
    if (doc) setSources(prev => [{ id: doc.id, name: pasteUrl, type: "link", url: pasteUrl, created_at: doc.created_at }, ...prev])
    setPasteUrl("")
    setAddingSource(null)
    toast.success("Web link added to sources")
  }

  const addDriveSource = async () => {
    if (!driveUrl.trim()) return
    const name = "Google Drive — " + (driveUrl.split("/").filter(Boolean).pop() || "Document").substring(0, 35)
    const { data: doc } = await supabase.from("notebook_documents").insert({
      notebook_id: id, file_name: name, file_url: driveUrl, file_type: "drive", processing_status: "ready"
    }).select().single()
    if (doc) setSources(prev => [{ id: doc.id, name, type: "drive", url: driveUrl, created_at: doc.created_at }, ...prev])
    setDriveUrl("")
    setAddingSource(null)
    toast.success("Google Drive resource linked")
  }

  const addPasteSource = async () => {
    if (!pasteText.trim()) return
    const title = "Notes Excerpt — " + pasteText.slice(0, 25).replace(/\n/g, " ") + "…"
    const { data: doc } = await supabase.from("notebook_documents").insert({
      notebook_id: id, file_name: title, file_url: "", file_type: "text",
      file_size: pasteText.length, processing_status: "ready", text_content: pasteText
    }).select().single()
    if (doc) setSources(prev => [{
      id: doc.id, name: title, type: "paste", content: pasteText, created_at: doc.created_at
    }, ...prev])
    setPasteText("")
    setAddingSource(null)
    toast.success("Text saved to sources")
  }

  // ── Save AI Output directly to Sources ──
  const saveAsSource = async (content: string) => {
    const title = "AI Study Notes — " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    const { data: doc, error } = await supabase.from("notebook_documents").insert({
      notebook_id: id,
      file_name: title,
      file_url: "",
      file_type: "text",
      file_size: content.length,
      processing_status: "ready",
      text_content: content
    }).select().single()

    if (error) {
      toast.error("Failed to save source: " + error.message)
      return
    }

    setSources(prev => [{
      id: doc.id,
      name: title,
      type: "paste",
      content,
      created_at: doc.created_at
    }, ...prev])

    toast.success("Saved to your Sources panel")
    if (window.innerWidth < 1024) setMobilePanel("sources")
  }

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  }

  const addToNotes = (content: string) => {
    const updated = noteContent ? `${noteContent}\n\n---\n\n${content}` : content
    handleNoteChange(updated)
    setActiveTool("notes")
    if (window.innerWidth < 1024) setMobilePanel("studio")
    toast.success("Appended to notes and saved")
  }

  const deleteSource = async (sourceId: string) => {
    await supabase.from("notebook_documents").delete().eq("id", sourceId)
    setSources(prev => prev.filter(s => s.id !== sourceId))
    toast.success("Source removed")
  }

  // ── AI Request ──
  const callAI = async (prompt: string, mode?: string): Promise<string> => {
    const context = `Notebook: "${noteTitle}"\nContent:\n${noteContent}\n\nSources:\n${sources.map(s => `- ${s.name}: ${s.content?.slice(0, 300) || s.url || ""}`).join("\n") || "No external sources attached."}`
    const res = await fetch("/api/notebook-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: prompt }], context, mode })
    })
    if (!res.ok) throw new Error("AI call failed")
    const { text } = await res.json()
    return text
  }

  // ── Chat Send ──
  const sendMessage = async (msg?: string) => {
    const userMsg = (msg || input).trim()
    if (!userMsg || aiLoading) return
    setInput("")
    const userMessage: Message = { role: "user", content: userMsg, id: nextId() }
    setMessages(m => [...m, userMessage])
    setAiLoading(true)
    try {
      const context = `Notebook: "${noteTitle}"\nContent:\n${noteContent}\n\nSources:\n${sources.map(s => `- ${s.name}: ${s.content?.slice(0, 300) || s.url || ""}`).join("\n") || "No external sources."}`
      const res = await fetch("/api/notebook-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })), context })
      })
      const { text } = await res.json()
      setMessages(m => [...m, { role: "assistant", content: text, id: nextId() }])
    } catch {
      setMessages(m => [...m, { role: "assistant", content: "I'm having trouble connecting. Please check your network and try again.", id: nextId() }])
    }
    setAiLoading(false)
  }

  // ── Studio Tools ──
  const runStudioTool = async (tool: StudioTool) => {
    if (!tool || tool === "scholar" || tool === "notes") {
      setActiveTool(tool)
      setStudioOutput("")
      return
    }
    setActiveTool(tool)
    setStudioOutput("")
    setStudioMode(tool)
    setStudioLoading(true)

    const prompts: Record<string, string> = {
      mindmap: `Create an extensive, structured mind map based on: "${noteTitle || "the notebook content"}". Include clinical mechanisms, diagnostic criteria, and management algorithms.`,
      flashcards: `Generate 10 high-yield clinical flashcards from the notebook content regarding "${noteTitle || "this topic"}".`,
      quiz: `Generate 5 clinical MCQ exam questions with rationale referencing standard textbooks and NCBI for "${noteTitle || "this topic"}".`,
    }

    try {
      const result = await callAI(prompts[tool], tool)
      setStudioOutput(result)
    } catch {
      setStudioOutput("Failed to generate. Please check your AI connection.")
    }
    setStudioLoading(false)
  }

  // ── Scholar Search ──
  const searchScholar = async () => {
    if (!scholarQuery.trim()) return
    setScholarLoading(true)
    setScholarResults([])
    try {
      const res = await fetch(`${SCHOLAR_BASE}?query=${encodeURIComponent(scholarQuery)}&rows=8&select=title,author,published,DOI,URL,abstract`)
      const json = await res.json()
      setScholarResults(json.message?.items || [])
    } catch { toast.error("Literature search failed.") }
    setScholarLoading(false)
  }

  const addScholarToSources = async (item: any) => {
    const title = item.title?.[0] || "NCBI / CrossRef Paper"
    const url = item.URL || `https://doi.org/${item.DOI}`
    const { data: doc } = await supabase.from("notebook_documents").insert({
      notebook_id: id, file_name: title, file_url: url, file_type: "link", processing_status: "ready"
    }).select().single()
    if (doc) setSources(prev => [{ id: doc.id, name: title, type: "link", url, created_at: doc.created_at }, ...prev])
    toast.success("Literature paper added to sources")
  }

  const addScholarCitation = (item: any) => {
    const authors = item.author?.map((a: any) => `${a.family}, ${a.given?.[0] || ""}`).slice(0, 2).join("; ") || "Author"
    const year = item.published?.["date-parts"]?.[0]?.[0] || "n.d."
    const title = item.title?.[0] || "Untitled"
    const journal = item["container-title"]?.[0] || "Medical Journal"
    const doi = item.DOI ? `https://doi.org/${item.DOI}` : ""
    handleNoteChange(noteContent + `\n\n> **${title}**\n> ${authors} (${year}). *${journal}*. ${doi}`)
    setActiveTool("notes")
    toast.success("Citation appended to notes")
  }

  const toggleFullscreen = () => {
    window.location.href = isFullscreen
      ? `/learn/notebooks/${id}`
      : `/learn/notebooks/${id}?fullscreen=true`
  }

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
          <Sparkles size={18} className="text-brand animate-pulse" />
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Opening Notebook…</p>
      </div>
    </div>
  )

  if (!notebook) return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0a0a0a] gap-4">
      <AlertCircle size={40} className="text-brand" />
      <p className="text-white font-bold">Notebook not found</p>
      <Link href="/learn" className="text-brand hover:text-white text-sm font-bold">← Return to Learn</Link>
    </div>
  )

  const sourceIcon = (type: Source["type"]) =>
    type === "pdf" ? "📄" : type === "link" ? "🔗" : type === "drive" ? "📁" : "📝"

  return (
    <div className={`flex flex-col bg-[#0a0a0a] ${isFullscreen ? "fixed inset-0 z-[200]" : "h-[calc(100vh-4rem)] -mx-4 lg:-mx-8 -mt-4 lg:-mt-8"}`}>

      {/* ── TOP NAV BAR ── */}
      <div className="h-12 bg-[#0a0a0a] border-b border-[#181818] flex items-center px-4 gap-3 flex-shrink-0">
        {!isFullscreen && (
          <Link href="/learn" className="text-gray-500 hover:text-white transition-colors flex-shrink-0">
            <ChevronLeft size={18} />
          </Link>
        )}
        <div className="w-1 h-4 bg-brand rounded-full flex-shrink-0" />
        <input
          value={noteTitle}
          onChange={e => handleTitleChange(e.target.value)}
          className="font-bold text-white text-sm bg-transparent border-none outline-none min-w-0 flex-1 placeholder:text-gray-600"
          placeholder="Untitled Notebook"
        />

        {saving && (
          <span className="text-[10px] text-gray-500 flex-shrink-0 flex items-center gap-1">
            <Loader2 size={10} className="animate-spin text-brand" /> auto-saving
          </span>
        )}

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={manualSaveNotes}
            className="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-xl bg-brand/10 border border-brand/30 text-brand hover:bg-brand hover:text-white transition-all shadow-sm"
          >
            <Save size={11} /> Save Notes
          </button>

          <button
            onClick={downloadNotesFile}
            className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1.5 rounded-xl bg-[#111] border border-[#1f1f1f] text-gray-400 hover:text-white transition-colors"
          >
            <Download size={11} /> Download
          </button>

          <button
            onClick={togglePublic}
            className={`hidden md:flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1.5 rounded-xl border transition-colors ${
              isPublic ? "bg-brand/10 text-brand border-brand/30" : "bg-[#111] text-gray-500 border-[#1f1f1f] hover:text-white"
            }`}
          >
            {isPublic ? <Globe size={11} /> : <Lock size={11} />}
            <span>{isPublic ? "Published" : "Private"}</span>
          </button>

          <button
            onClick={() => setShareModal(true)}
            className="hidden md:flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1.5 rounded-xl bg-[#111] border border-[#1f1f1f] text-gray-400 hover:text-white transition-colors"
          >
            <Share2 size={11} /> Share
          </button>

          <button onClick={handleDelete} disabled={deleting} className="p-1.5 text-gray-600 hover:text-brand transition-colors" title="Delete notebook">
            {deleting ? <Loader2 size={13} className="animate-spin" /> : <Trash2 size={13} />}
          </button>

          <button onClick={toggleFullscreen} className="p-1.5 text-gray-600 hover:text-white transition-colors" title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Focus"}>
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE TABS ── */}
      <div className="flex lg:hidden border-b border-[#181818] bg-[#0a0a0a] flex-shrink-0">
        {([
          { id: "sources" as const, label: "Sources", count: sources.length as number | undefined },
          { id: "chat" as const, label: "AI Mentor", count: undefined as number | undefined },
          { id: "studio" as const, label: "Studio Tools", count: undefined as number | undefined },
        ]).map(p => (
          <button
            key={p.id}
            onClick={() => setMobilePanel(p.id)}
            className={`flex-1 py-2.5 text-xs font-bold transition-colors border-b-2 ${
              mobilePanel === p.id ? "text-white border-brand" : "text-gray-600 border-transparent"
            }`}
          >
            {p.label}{p.count !== undefined ? ` (${p.count})` : ""}
          </button>
        ))}
      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* ══════════════════════════════════════════ */}
        {/* LEFT — SOURCES PANEL                      */}
        {/* ══════════════════════════════════════════ */}
        <div className={`
          ${mobilePanel === "sources" ? "flex" : "hidden"} lg:flex flex-col border-r border-[#181818] bg-[#0a0a0a] flex-shrink-0 transition-all duration-200
          ${sourcesCollapsed ? "w-0 lg:w-12 overflow-hidden" : "w-full lg:w-64"}
        `}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#181818] flex-shrink-0">
            {!sourcesCollapsed && (
              <span className="text-xs font-black text-white uppercase tracking-widest">
                Sources <span className="text-gray-600 font-normal text-[10px]">({sources.length})</span>
              </span>
            )}
            <button onClick={() => setSourcesCollapsed(!sourcesCollapsed)} className="ml-auto text-gray-600 hover:text-white transition-colors hidden lg:block">
              {sourcesCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {!sourcesCollapsed && (
            <div className="flex-1 overflow-y-auto">
              <div className="px-3 pt-3 pb-2">
                <button
                  onClick={() => setAddingSource(addingSource ? null : "file")}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-brand/10 border border-brand/30 hover:bg-brand hover:text-white rounded-xl text-xs font-bold text-brand transition-all shadow-sm"
                >
                  <Plus size={13} />
                  Add Sources
                </button>

                {addingSource && (
                  <div className="mt-2 bg-[#0c0c0c] border border-[#1f1f1f] rounded-xl overflow-hidden shadow-lg">
                    {[
                      { key: "file" as const, icon: <Upload size={12} />, label: "Upload from PC / Phone" },
                      { key: "drive" as const, icon: <HardDrive size={12} />, label: "Google Drive link" },
                      { key: "link" as const, icon: <Link2 size={12} />, label: "Paste Website / NCBI URL" },
                      { key: "paste" as const, icon: <Clipboard size={12} />, label: "Paste Text Excerpt" },
                    ].map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => setAddingSource(opt.key)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium transition-colors border-b border-[#181818] last:border-0 ${
                          addingSource === opt.key ? "text-brand bg-brand/5" : "text-gray-400 hover:text-white hover:bg-[#141414]"
                        }`}
                      >
                        <span className="text-brand">{opt.icon}</span>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Upload Dropzone */}
              {addingSource === "file" && (
                <div className="px-3 pb-3">
                  <div
                    {...getRootProps()}
                    className={`border border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${
                      isDragActive ? "border-brand bg-brand/5" : "border-[#2b2b2b] hover:border-brand/50"
                    }`}
                  >
                    <input {...getInputProps()} />
                    {uploading ? (
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                        <Loader2 size={14} className="animate-spin text-brand" /> Uploading & Processing…
                      </div>
                    ) : (
                      <>
                        <Upload size={22} className="text-brand mx-auto mb-2" />
                        <p className="text-xs text-white font-bold">Tap to Browse or Drop Files</p>
                        <p className="text-[10px] text-gray-500 mt-1">PDF · Word (.docx) · Text · Images</p>
                        <p className="text-[10px] text-gray-600 mt-0.5">Works directly from your PC or phone</p>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Google Drive Link */}
              {addingSource === "drive" && (
                <div className="px-3 pb-3 space-y-2">
                  <p className="text-[10px] text-gray-500">Paste your Google Drive link:</p>
                  <input
                    value={driveUrl}
                    onChange={e => setDriveUrl(e.target.value)}
                    type="url"
                    placeholder="https://drive.google.com/file/d/…"
                    className={inputCls}
                    onKeyDown={e => e.key === "Enter" && addDriveSource()}
                  />
                  <div className="flex gap-2">
                    <button onClick={addDriveSource} disabled={!driveUrl}
                      className="flex-1 py-1.5 bg-brand text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50">
                      Link Drive File
                    </button>
                    <button onClick={() => setAddingSource(null)} className="px-3 text-xs text-gray-500 hover:text-white transition-colors">Cancel</button>
                  </div>
                </div>
              )}

              {/* URL */}
              {addingSource === "link" && (
                <div className="px-3 pb-3 space-y-2">
                  <input
                    value={pasteUrl}
                    onChange={e => setPasteUrl(e.target.value)}
                    type="url"
                    placeholder="https://pubmed.ncbi.nlm.nih.gov/…"
                    className={inputCls}
                    onKeyDown={e => e.key === "Enter" && addLinkSource()}
                  />
                  <div className="flex gap-2">
                    <button onClick={addLinkSource} disabled={!pasteUrl}
                      className="flex-1 py-1.5 bg-brand text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50">
                      Add URL
                    </button>
                    <button onClick={() => setAddingSource(null)} className="px-3 text-xs text-gray-500 hover:text-white transition-colors">Cancel</button>
                  </div>
                </div>
              )}

              {/* Paste Text */}
              {addingSource === "paste" && (
                <div className="px-3 pb-3 space-y-2">
                  <textarea
                    value={pasteText}
                    onChange={e => setPasteText(e.target.value)}
                    placeholder="Paste textbook excerpt, lecture notes, or clinical protocol…"
                    rows={6}
                    className={inputCls + " resize-none"}
                  />
                  <div className="flex gap-2">
                    <button onClick={addPasteSource} disabled={!pasteText}
                      className="flex-1 py-1.5 bg-brand text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50">
                      Save Excerpt
                    </button>
                    <button onClick={() => setAddingSource(null)} className="px-3 text-xs text-gray-500 hover:text-white transition-colors">Cancel</button>
                  </div>
                </div>
              )}

              {/* Source List */}
              <div className="px-3 pb-4 space-y-1.5">
                {sources.length === 0 && !addingSource && (
                  <div className="text-center py-10 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-[#111] border border-[#1f1f1f] flex items-center justify-center mx-auto text-sm">
                      📚
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      No sources added yet.<br />
                      Upload PDFs from your PC or{" "}
                      <button onClick={() => setAddingSource("file")} className="text-brand hover:underline font-bold">
                        add files
                      </button>
                    </p>
                  </div>
                )}

                {sources.map(s => (
                  <div key={s.id} className="flex items-center gap-2 px-2.5 py-2 bg-[#0c0c0c] border border-[#1a1a1a] rounded-xl group hover:border-[#2b2b2b] transition-colors">
                    <span className="text-sm flex-shrink-0">{sourceIcon(s.type)}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium text-gray-300 truncate">{s.name}</p>
                      <p className="text-[9px] text-gray-600 uppercase tracking-wider">{s.type}</p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      {s.url && s.type !== "paste" && (
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white p-1">
                          <ExternalLink size={11} />
                        </a>
                      )}
                      <button onClick={() => deleteSource(s.id)} className="text-gray-500 hover:text-brand p-1">
                        <Trash2 size={11} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════════ */}
        {/* CENTER — CHAT CANVAS                      */}
        {/* ══════════════════════════════════════════ */}
        <div className={`${mobilePanel === "chat" ? "flex" : "hidden"} lg:flex flex-1 flex-col min-w-0 bg-[#070707]`}>

          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-4 text-brand">
                <Sparkles size={24} />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">PodGuide Medical Notebook</h2>
              <p className="text-xs text-gray-400 leading-relaxed mb-6 max-w-md">
                Synthesises evidence from <strong>NCBI / PubMed</strong>, <strong>UpToDate</strong>, and your recommended core textbooks (Snell, Junqueira, Langman, SRB, Materials, Ghai).
              </p>
              <div className="space-y-2 w-full max-w-xs">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-left mb-2">
                  Recommended Study Workflows
                </p>
                {[
                  "Teach me about Acute Kidney Injury",
                  "Compare Pre-renal vs Intrinsic ATN",
                  "Generate KDIGO Management Protocol",
                ].map(prompt => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="w-full text-left px-4 py-2.5 bg-[#0f0f0f] border border-[#1f1f1f] hover:border-brand/40 hover:bg-[#141414] rounded-xl text-xs text-gray-300 hover:text-white transition-all font-medium"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6 max-w-3xl mx-auto w-full">
              {messages.map((m) => (
                <div key={m.id}>
                  {m.role === "user" ? (
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-7 h-7 rounded-full bg-[#181818] border border-[#2b2b2b] text-gray-300 flex-shrink-0 flex items-center justify-center font-bold text-[10px]">ME</div>
                      <div className="flex justify-end flex-1">
                        <div className="bg-[#121212] border border-[#222] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] text-xs text-white leading-relaxed">
                          {m.content}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <AIMessage
                      message={m}
                      onSaveAsSource={saveAsSource}
                      onCopy={copyText}
                      onSendToNotes={addToNotes}
                    />
                  )}
                </div>
              ))}

              {aiLoading && (
                <div className="flex gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-brand flex-shrink-0 flex items-center justify-center shadow-md">
                    <Loader2 size={12} className="text-white animate-spin" />
                  </div>
                  <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl px-4 py-3 flex items-center gap-2">
                    <span className="text-xs text-gray-400">Synthesizing NCBI & UpToDate evidence…</span>
                    <div className="flex items-center gap-1">
                      {[0, 150, 300].map(d => (
                        <div key={d} className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          )}

          {/* Chat Input Bar */}
          <div className="border-t border-[#181818] bg-[#0a0a0a] flex-shrink-0">
            {messages.length > 0 && (
              <div className="flex items-center gap-2 px-4 pt-2.5 pb-1 overflow-x-auto">
                {["Summarise my notes", "Generate flashcards", "Quiz me", "Comparison table", "NCBI citations"].map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="flex-shrink-0 text-[10px] font-bold text-gray-500 hover:text-gray-200 bg-[#111] hover:bg-[#181818] border border-[#1f1f1f] px-2.5 py-1 rounded-full transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="p-3.5">
              <div className="relative flex items-end bg-[#0f0f0f] border border-[#1f1f1f] focus-within:border-brand/60 rounded-2xl shadow-inner">
                <textarea
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
                  placeholder="Ask any medical question or request a clinical breakdown…"
                  rows={1}
                  className="flex-1 bg-transparent py-3 pl-4 pr-20 text-xs text-white placeholder:text-gray-600 outline-none resize-none leading-relaxed"
                  style={{ minHeight: "46px", maxHeight: "150px" }}
                />
                <div className="absolute right-2 bottom-2 flex items-center gap-2">
                  <span className="text-[10px] text-gray-600 font-mono">{sources.length} sources</span>
                  <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || aiLoading}
                    className="w-8 h-8 rounded-xl bg-brand hover:bg-red-700 disabled:opacity-30 flex items-center justify-center text-white transition-all shadow-md"
                  >
                    <Send size={13} />
                  </button>
                </div>
              </div>
              <p className="text-center text-[10px] text-gray-600 mt-2">
                Referenced with Snell Anatomy, Junqueira, Langman, SRB Surgery, Materials, Ghai Pediatrics & NCBI / UpToDate.
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════ */}
        {/* RIGHT — STUDIO & NOTES PANEL              */}
        {/* ══════════════════════════════════════════ */}
        <div className={`
          ${mobilePanel === "studio" ? "flex" : "hidden"} lg:flex flex-col border-l border-[#181818] bg-[#0a0a0a] flex-shrink-0 transition-all duration-200
          ${studioCollapsed ? "w-0 lg:w-12 overflow-hidden" : "w-full lg:w-80"}
        `}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#181818] flex-shrink-0">
            <button onClick={() => setStudioCollapsed(!studioCollapsed)} className="text-gray-600 hover:text-white transition-colors hidden lg:block">
              {studioCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
            </button>
            {!studioCollapsed && (
              <span className="text-xs font-black text-white uppercase tracking-widest">Studio & Notes</span>
            )}
            {!studioCollapsed && (
              <button onClick={manualSaveNotes} className="text-[10px] font-bold text-brand hover:underline flex items-center gap-1">
                <Save size={10} /> Save
              </button>
            )}
          </div>

          {!studioCollapsed && (
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {/* Tool Grid */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "mindmap" as StudioTool, icon: <GitBranch size={15} />, label: "Mind Map" },
                  { id: "flashcards" as StudioTool, icon: <Brain size={15} />, label: "Flashcards" },
                  { id: "quiz" as StudioTool, icon: <FlaskConical size={15} />, label: "Quiz Arena" },
                  { id: "notes" as StudioTool, icon: <PenLine size={15} />, label: "My Notes" },
                  { id: "scholar" as StudioTool, icon: <BookOpen size={15} />, label: "NCBI Scholar" },
                ].map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => runStudioTool(tool.id)}
                    className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-xs font-bold transition-all ${
                      activeTool === tool.id
                        ? "bg-brand/10 border-brand/40 text-brand shadow-sm"
                        : "bg-[#0d0d0d] border-[#1a1a1a] text-gray-400 hover:text-white hover:border-[#2b2b2b]"
                    }`}
                  >
                    <span className={activeTool === tool.id ? "text-brand" : "text-gray-500"}>{tool.icon}</span>
                    {tool.label}
                  </button>
                ))}
              </div>

              {/* Studio Output Container */}
              <div className="space-y-3 pt-1">
                {studioLoading && (
                  <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-4 flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-brand flex-shrink-0" />
                    <span className="text-xs text-gray-400">Generating study tool…</span>
                  </div>
                )}

                {/* Mind Map View */}
                {!studioLoading && studioOutput && studioMode === "mindmap" && (
                  <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[#181818] bg-[#0f0f0f]">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand">Mind Map Tree</span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => saveAsSource(studioOutput)} className="text-[10px] font-bold text-gray-400 hover:text-brand flex items-center gap-1">
                          <Save size={10} /> Source
                        </button>
                        <button onClick={() => addToNotes(studioOutput)} className="text-[10px] font-bold text-gray-400 hover:text-white flex items-center gap-1">
                          <PenLine size={10} /> Notes
                        </button>
                        <button onClick={() => { setStudioOutput(""); setActiveTool(null) }} className="text-gray-600 hover:text-white">
                          <X size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="p-3 max-h-[50vh] overflow-auto">
                      <MindMapViewer text={studioOutput} />
                    </div>
                  </div>
                )}

                {/* Flashcards View */}
                {!studioLoading && studioOutput && studioMode === "flashcards" && (
                  <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[#181818] bg-[#0f0f0f]">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand">Interactive Cards</span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => saveAsSource(studioOutput)} className="text-[10px] font-bold text-gray-400 hover:text-brand flex items-center gap-1">
                          <Save size={10} /> Source
                        </button>
                        <button onClick={() => { setStudioOutput(""); setActiveTool(null) }} className="text-gray-600 hover:text-white">
                          <X size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="p-3">
                      <FlashcardViewer text={studioOutput} />
                    </div>
                  </div>
                )}

                {/* Quiz View */}
                {!studioLoading && studioOutput && studioMode === "quiz" && (
                  <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[#181818] bg-[#0f0f0f]">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand">MCQ Assessment</span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => copyText(studioOutput)} className="text-[10px] font-bold text-gray-400 hover:text-white flex items-center gap-1">
                          <Clipboard size={10} /> Copy
                        </button>
                        <button onClick={() => addToNotes(studioOutput)} className="text-[10px] font-bold text-gray-400 hover:text-white flex items-center gap-1">
                          <PenLine size={10} /> Notes
                        </button>
                        <button onClick={() => { setStudioOutput(""); setActiveTool(null) }} className="text-gray-600 hover:text-white">
                          <X size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="p-3.5 max-h-[50vh] overflow-y-auto">
                      <RichMedicalMarkdown content={studioOutput} />
                    </div>
                  </div>
                )}

                {/* Dedicated Notes Editor */}
                {activeTool === "notes" && (
                  <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[#181818] bg-[#0f0f0f]">
                      <div className="flex items-center gap-1">
                        {[
                          { icon: <Heading2 size={11} />, action: () => insertFormatting("## ", false), label: "H2" },
                          { icon: <Bold size={11} />, action: () => insertFormatting("**", true), label: "Bold" },
                          { icon: <Italic size={11} />, action: () => insertFormatting("_", true), label: "Italic" },
                          { icon: <List size={11} />, action: () => insertFormatting("- ", false), label: "List" },
                        ].map((t, i) => (
                          <button key={i} onClick={t.action} className="p-1.5 text-gray-500 hover:text-white hover:bg-[#1c1c1c] rounded-lg transition-colors">
                            {t.icon}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setNotePreview(!notePreview)}
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-lg transition-colors ${notePreview ? "bg-brand text-white" : "text-gray-500 hover:text-white bg-[#181818]"}`}
                        >
                          {notePreview ? "Edit Mode" : "Preview Mode"}
                        </button>
                        <button onClick={() => setActiveTool(null)} className="text-gray-600 hover:text-white">
                          <X size={12} />
                        </button>
                      </div>
                    </div>

                    {!notePreview ? (
                      <textarea
                        id="note-editor"
                        value={noteContent}
                        onChange={e => handleNoteChange(e.target.value)}
                        placeholder={"Type your medical notes here...\n\n## Pathophysiology\n- Key mechanism\n\n| Parameter | Normal | Finding |\n|---|---|---|\n| FeNa | <1% | >2% |"}
                        className="w-full bg-transparent text-white text-xs leading-relaxed p-3.5 outline-none resize-none font-mono placeholder:text-gray-700"
                        rows={16}
                      />
                    ) : (
                      <div className="p-3.5 max-h-[50vh] overflow-y-auto">
                        {noteContent ? (
                          <RichMedicalMarkdown content={noteContent} />
                        ) : (
                          <p className="text-xs text-gray-600 italic">No notes written yet. Switch to Edit Mode to begin.</p>
                        )}
                      </div>
                    )}

                    <div className="px-3.5 py-2.5 border-t border-[#181818] bg-[#0c0c0c] flex items-center justify-between">
                      <button
                        onClick={manualSaveNotes}
                        className="text-[10px] font-bold text-brand hover:underline flex items-center gap-1"
                      >
                        <Save size={10} /> Save to Dashboard
                      </button>
                      <button
                        onClick={downloadNotesFile}
                        className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <Download size={10} /> Download .md
                      </button>
                    </div>
                  </div>
                )}

                {/* Scholar Tool */}
                {activeTool === "scholar" && (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        value={scholarQuery}
                        onChange={e => setScholarQuery(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && searchScholar()}
                        placeholder="Search NCBI & CrossRef papers…"
                        className={inputCls}
                      />
                      <button
                        onClick={searchScholar}
                        disabled={scholarLoading || !scholarQuery}
                        className="px-3 py-2 bg-brand text-white rounded-xl text-xs font-bold hover:bg-red-700 transition-colors disabled:opacity-50"
                      >
                        {scholarLoading ? <Loader2 size={12} className="animate-spin" /> : <Search size={12} />}
                      </button>
                    </div>
                    {scholarLoading && <div className="flex justify-center py-4"><Loader2 size={18} className="animate-spin text-brand" /></div>}
                    <div className="space-y-2 max-h-[45vh] overflow-y-auto">
                      {scholarResults.map((item, i) => {
                        const title = item.title?.[0] || "NCBI Article"
                        const authors = item.author?.map((a: any) => a.family).slice(0, 2).join(", ") || "NLM"
                        const year = item.published?.["date-parts"]?.[0]?.[0] || ""
                        return (
                          <div key={i} className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-xl p-3 space-y-1.5 hover:border-brand/30 transition-colors">
                            <p className="text-[11px] font-bold text-white leading-snug">{title}</p>
                            <p className="text-[10px] text-gray-500">{authors} {year && `(${year})`}</p>
                            <div className="flex items-center gap-2 pt-1">
                              <button onClick={() => addScholarToSources(item)} className="text-[10px] text-brand hover:underline font-bold">+ Source</button>
                              <button onClick={() => addScholarCitation(item)} className="text-[10px] text-gray-400 hover:text-white">Cite</button>
                              {item.DOI && <a href={`https://doi.org/${item.DOI}`} target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-600 hover:text-white">DOI ↗</a>}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Default Empty State */}
                {!activeTool && !studioOutput && !studioLoading && (
                  <div className="text-center py-8 px-2">
                    <div className="w-8 h-8 rounded-xl bg-[#111] border border-[#1f1f1f] flex items-center justify-center mx-auto mb-3 text-gray-600">
                      <Wand2 size={14} />
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      Select a studio tool above to generate interactive mind maps, flashcards, or write notes.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── SHARE MODAL ── */}
      {shareModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[300] flex items-center justify-center p-4" onClick={() => setShareModal(false)}>
          <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-[#181818]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-0.5">Study Notebook</span>
                <h2 className="text-sm font-black text-white">Share & Collaborate</h2>
              </div>
              <button onClick={() => setShareModal(false)} className="w-7 h-7 rounded-lg bg-[#111] border border-[#1f1f1f] flex items-center justify-center text-gray-500 hover:text-white">
                <X size={14} />
              </button>
            </div>
            <div className="p-5 space-y-5">
              <div className="flex items-center justify-between p-4 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl">
                <div>
                  <p className="text-sm font-bold text-white">Community Access</p>
                  <p className="text-xs text-gray-500 mt-0.5">Make visible to all PodGuide students</p>
                </div>
                <button onClick={togglePublic} className={`w-10 h-5 rounded-full relative transition-colors ${isPublic ? "bg-brand" : "bg-[#333]"}`}>
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${isPublic ? "translate-x-5" : "translate-x-0.5"}`} />
                </button>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Notebook URL</p>
                <div className="flex gap-2">
                  <input readOnly value={typeof window !== "undefined" ? window.location.href.replace("?fullscreen=true", "") : ""} className={inputCls + " flex-1"} />
                  <button onClick={copyShareLink} className="flex items-center gap-1.5 bg-brand text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-red-700 transition-colors">
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Invite Student</p>
                <div className="flex gap-2">
                  <input value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} type="email" placeholder="classmate@university.ac.za" className={inputCls + " flex-1"} />
                  <button onClick={inviteCollaborator} disabled={!inviteEmail} className="flex items-center gap-1.5 bg-[#111] text-white text-xs font-bold px-3.5 py-2.5 rounded-xl border border-[#1f1f1f] hover:border-[#2b2b2b] transition-colors disabled:opacity-50">
                    <UserPlus size={12} />
                  </button>
                </div>
              </div>
              <button
                onClick={downloadNotesFile}
                className="w-full flex items-center justify-center gap-2 border border-[#1f1f1f] text-gray-400 hover:text-white text-xs font-bold py-2.5 rounded-xl hover:border-[#2b2b2b] transition-colors"
              >
                <Download size={13} /> Download Notes (.md) to PC
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}