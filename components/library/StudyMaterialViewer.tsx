"use client"

import { useState, useEffect, useRef } from "react"
import {
  X,
  Maximize2,
  Minimize2,
  Expand,
  Shrink,
  ExternalLink,
  BookOpen,
  Copy,
  Download,
  Trash2,
  Video,
  FileText,
  Folder,
  HardDrive,
  Clock,
  Sparkles,
  Check,
} from "lucide-react"
import { toast } from "sonner"

export interface StudyMaterial {
  id: string
  title: string
  file_url: string
  material_type: "video" | "pdf" | "document" | "drive" | "other" | string
  description?: string
  subject?: string
  programme?: string
}

interface StudyMaterialViewerProps {
  material: StudyMaterial | null
  onClose: () => void
}

/**
 * Normalizes different Google Drive / Video / Document URLs into embeddable URLs.
 */
export function getEmbeddableUrl(rawUrl: string): {
  embedUrl: string
  isDirectVideo: boolean
  isDrive: boolean
  isYouTube: boolean
  isFolder: boolean
} {
  const url = (rawUrl || "").trim()

  // 1. Direct video formats (.mp4, .webm, .ogg)
  const isDirectVideo = /\.(mp4|webm|ogg|mov)($|\?)/i.test(url)
  if (isDirectVideo) {
    return { embedUrl: url, isDirectVideo: true, isDrive: false, isYouTube: false, isFolder: false }
  }

  // 2. Google Drive Folder
  const driveFolderMatch = url.match(/folders\/([a-zA-Z0-9_-]+)/)
  if (driveFolderMatch) {
    return {
      embedUrl: `https://drive.google.com/embeddedfolderview?id=${driveFolderMatch[1]}#grid`,
      isDirectVideo: false,
      isDrive: true,
      isYouTube: false,
      isFolder: true,
    }
  }

  // 3. Google Drive File (Video, PDF, Document, Slide)
  const driveFileMatch =
    url.match(/file\/d\/([a-zA-Z0-9_-]+)/) ||
    url.match(/[?&]id=([a-zA-Z0-9_-]+)/) ||
    url.match(/uc\?id=([a-zA-Z0-9_-]+)/)

  if (driveFileMatch && (url.includes("drive.google.com") || url.includes("docs.google.com"))) {
    return {
      embedUrl: `https://drive.google.com/file/d/${driveFileMatch[1]}/preview`,
      isDirectVideo: false,
      isDrive: true,
      isYouTube: false,
      isFolder: false,
    }
  }

  // 4. YouTube
  const ytMatch =
    url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
  if (ytMatch) {
    return {
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
      isDirectVideo: false,
      isDrive: false,
      isYouTube: true,
      isFolder: false,
    }
  }

  // 5. Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/[^\/]*\/videos\/|album\/(?:\d+\/)?video\/|)(\d+)/)
  if (vimeoMatch) {
    return {
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
      isDirectVideo: false,
      isDrive: false,
      isYouTube: false,
      isFolder: false,
    }
  }

  // 6. Direct PDF fallback
  if (/\.pdf($|\?)/i.test(url)) {
    return {
      embedUrl: url,
      isDirectVideo: false,
      isDrive: false,
      isYouTube: false,
      isFolder: false,
    }
  }

  // Default: pass as embed or preview
  return {
    embedUrl: url,
    isDirectVideo: false,
    isDrive: url.includes("drive.google.com"),
    isYouTube: false,
    isFolder: false,
  }
}

export function StudyMaterialViewer({ material, onClose }: StudyMaterialViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isTrueFullscreen, setIsTrueFullscreen] = useState(false)
  const [isTheater, setIsTheater] = useState(false)
  const [notesOpen, setNotesOpen] = useState(false)
  const [notes, setNotes] = useState("")
  const [copiedNotes, setCopiedNotes] = useState(false)

  // Listen to OS full-screen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsTrueFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Load notes from localStorage for this specific material
  useEffect(() => {
    if (!material?.id) return
    try {
      const savedNotes = localStorage.getItem(`podguide_study_notes_${material.id}`)
      if (savedNotes) {
        setNotes(savedNotes)
      } else {
        setNotes("")
      }
    } catch {}
  }, [material?.id])

  // Save notes to localStorage
  const handleNotesChange = (value: string) => {
    setNotes(value)
    if (material?.id) {
      try {
        localStorage.setItem(`podguide_study_notes_${material.id}`, value)
      } catch {}
    }
  }

  const handleCopyNotes = () => {
    if (!notes.trim()) return
    navigator.clipboard.writeText(notes)
    setCopiedNotes(true)
    toast.success("Study notes copied to clipboard!")
    setTimeout(() => setCopiedNotes(false), 2000)
  }

  const handleDownloadNotes = () => {
    if (!notes.trim() || !material) return
    const blob = new Blob([notes], { type: "text/plain;charset=utf-8" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `${material.title.replace(/[^a-zA-Z0-9_-]/g, "_")}_Notes.txt`
    link.click()
    URL.revokeObjectURL(link.href)
    toast.success("Notes downloaded as text file!")
  }

  const handleInsertTimestamp = () => {
    const now = new Date()
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    const stamp = `\n[${timeString}] `
    handleNotesChange(notes + stamp)
  }

  // Toggle OS Fullscreen
  const toggleFullscreen = async () => {
    if (!containerRef.current) return
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (err) {
      console.warn("Fullscreen toggle error:", err)
      // Fallback to in-app theater mode if OS denies fullscreen
      setIsTheater(prev => !prev)
    }
  }

  if (!material) return null

  const { embedUrl, isDirectVideo, isDrive, isYouTube, isFolder } = getEmbeddableUrl(
    material.file_url
  )

  const isVideoType =
    material.material_type === "video" || isDirectVideo || isYouTube || material.title.toLowerCase().includes("video") || material.title.toLowerCase().includes("lecture")

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 transition-all duration-200 animate-in fade-in`}
      onClick={onClose}
    >
      <div
        ref={containerRef}
        onClick={e => e.stopPropagation()}
        className={`bg-[#0e0e0e] border border-[#222] rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-all duration-200 ${
          isTrueFullscreen
            ? "w-screen h-screen rounded-none border-0"
            : isTheater
            ? "w-[98vw] h-[92vh]"
            : "w-full max-w-5xl h-[82vh]"
        }`}
      >
        {/* ── TOP VIEWER HEADER ── */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-[#1f1f1f] flex-shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0">
              {isVideoType ? (
                <Video size={16} />
              ) : isFolder ? (
                <Folder size={16} />
              ) : isDrive ? (
                <HardDrive size={16} />
              ) : (
                <FileText size={16} />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-500 bg-red-600/10 px-1.5 py-0.5 rounded border border-red-600/20">
                  {isVideoType ? "Video Player" : isFolder ? "Drive Folder" : "Study Document"}
                </span>
                {material.subject && (
                  <span className="text-[10px] text-gray-400 font-medium truncate">
                    {material.subject}
                  </span>
                )}
              </div>
              <h2 className="text-sm font-bold text-white truncate leading-tight mt-0.5">
                {material.title}
              </h2>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Study Notes Toggle */}
            <button
              type="button"
              onClick={() => setNotesOpen(!notesOpen)}
              title={notesOpen ? "Hide Study Notes" : "Open Study Notes"}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                notesOpen
                  ? "bg-red-600 text-white"
                  : "bg-[#181818] hover:bg-[#222] text-gray-300 hover:text-white border border-[#2b2b2b]"
              }`}
            >
              <BookOpen size={13} />
              <span className="hidden sm:inline">Notes</span>
              {notes.trim().length > 0 && !notesOpen && (
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              )}
            </button>

            {/* In-app Theater Mode (Expand / Compact) */}
            {!isTrueFullscreen && (
              <button
                type="button"
                onClick={() => setIsTheater(!isTheater)}
                title={isTheater ? "Compact view" : "Theater view"}
                className="p-1.5 bg-[#181818] hover:bg-[#222] border border-[#2b2b2b] text-gray-300 hover:text-white rounded-lg transition-colors hidden sm:flex items-center justify-center"
              >
                {isTheater ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
            )}

            {/* True OS Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              title={isTrueFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              className="p-1.5 bg-[#181818] hover:bg-[#222] border border-[#2b2b2b] text-gray-300 hover:text-white rounded-lg transition-colors flex items-center justify-center"
            >
              {isTrueFullscreen ? <Shrink size={15} /> : <Expand size={15} />}
            </button>

            {/* External Link */}
            {material.file_url && (
              <a
                href={material.file_url}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in Google Drive / External Tab"
                className="p-1.5 bg-[#181818] hover:bg-[#222] border border-[#2b2b2b] text-gray-300 hover:text-white rounded-lg transition-colors flex items-center justify-center"
              >
                <ExternalLink size={15} />
              </a>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              title="Close viewer"
              className="p-1.5 bg-[#181818] hover:bg-red-600/20 hover:text-red-500 border border-[#2b2b2b] text-gray-400 rounded-lg transition-colors flex items-center justify-center ml-1"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* ── VIEWER BODY (SPLIT VIEW WITH NOTES IF OPEN) ── */}
        <div className="flex-1 flex overflow-hidden relative bg-black">
          {/* Main Media Player / Iframe Area */}
          <div className="flex-1 h-full relative flex items-center justify-center bg-black overflow-hidden">
            {isDirectVideo ? (
              <video
                src={embedUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
                controlsList="nodownload"
                playsInline
              />
            ) : embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full border-0 bg-black"
                title={material.title}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
                allowFullScreen
              />
            ) : (
              <div className="text-center p-6 text-gray-400">
                <p className="text-sm font-semibold">Unable to load material preview.</p>
                <a
                  href={material.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold"
                >
                  <ExternalLink size={12} /> Open in new tab
                </a>
              </div>
            )}
          </div>

          {/* ── SIDE STUDY NOTES PANEL (COLLAPSIBLE) ── */}
          {notesOpen && (
            <div className="w-80 sm:w-96 border-l border-[#222] bg-[#0c0c0c] flex flex-col h-full z-10 animate-in slide-in-from-right duration-150">
              {/* Notes Header */}
              <div className="p-3 bg-[#141414] border-b border-[#222] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-red-500" />
                  <span className="text-xs font-bold text-white">Study Notes</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleInsertTimestamp}
                    title="Insert current timestamp"
                    className="p-1 hover:bg-[#202020] text-gray-400 hover:text-white rounded text-[11px] flex items-center gap-1 transition-colors"
                  >
                    <Clock size={12} /> Stamp
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyNotes}
                    title="Copy notes"
                    className="p-1 hover:bg-[#202020] text-gray-400 hover:text-white rounded transition-colors"
                  >
                    {copiedNotes ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadNotes}
                    title="Download as .txt"
                    className="p-1 hover:bg-[#202020] text-gray-400 hover:text-white rounded transition-colors"
                  >
                    <Download size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Clear study notes for this material?")) {
                        handleNotesChange("")
                      }
                    }}
                    title="Clear notes"
                    className="p-1 hover:bg-[#202020] text-gray-400 hover:text-red-400 rounded transition-colors"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>

              {/* Notes Textarea */}
              <div className="flex-1 p-3 flex flex-col">
                <textarea
                  value={notes}
                  onChange={e => handleNotesChange(e.target.value)}
                  placeholder="Jot down key takeaways, clinical findings, drug dosages, or anatomy landmarks as you study..."
                  className="w-full flex-1 bg-[#080808] border border-[#202020] focus:border-red-600 rounded-lg p-3 text-xs text-white placeholder:text-gray-500 outline-none resize-none leading-relaxed transition-colors font-mono"
                />
                <div className="mt-2 flex items-center justify-between text-[10px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <Sparkles size={10} className="text-red-500" /> Auto-saved locally
                  </span>
                  <span>{notes.length} characters</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── VIEWER FOOTER ── */}
        <div className="px-4 py-2 bg-[#101010] border-t border-[#1a1a1a] flex items-center justify-between text-[11px] text-gray-400 flex-shrink-0">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-white truncate">{material.title}</span>
            {material.description && (
              <span className="hidden sm:inline text-gray-500 truncate">• {material.description}</span>
            )}
          </div>
          <div className="flex items-center gap-3 text-gray-400 flex-shrink-0">
            <span className="hidden sm:inline">Press Esc to exit</span>
          </div>
        </div>
      </div>
    </div>
  )
}
