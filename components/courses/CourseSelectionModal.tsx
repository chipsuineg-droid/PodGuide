"use client"

import { useState, useMemo } from "react"
import {
  COURSES_CATALOG,
  Course,
  CourseCategory,
} from "@/lib/courses-data"
import {
  Search,
  X,
  Check,
  Loader2,
  CheckCircle2,
  Folder,
} from "lucide-react"

interface CourseSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  initialSelectedSlugs: string[]
  onSuccess: (selectedSlugs: string[]) => void
}

export function CourseSelectionModal({
  isOpen,
  onClose,
  initialSelectedSlugs = [],
  onSuccess,
}: CourseSelectionModalProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(initialSelectedSlugs)
  const [activeTab, setActiveTab] = useState<CourseCategory>("Academic")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  // Filter courses strictly by the selected tab, then by search query
  const displayedCourses = useMemo(() => {
    return COURSES_CATALOG.filter((course) => {
      // 1. Strict category separation
      if (course.category !== activeTab) {
        return false
      }

      // 2. Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const matchTitle = course.title.toLowerCase().includes(query)
        const matchDesc = course.description.toLowerCase().includes(query)
        const matchTags = course.tags.some((t) => t.toLowerCase().includes(query))
        return matchTitle || matchDesc || matchTags
      }

      return true
    })
  }, [activeTab, searchQuery])

  if (!isOpen) return null

  const toggleSelect = (slug: string) => {
    setSelectedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const handleSelectAllInView = () => {
    const currentSlugs = displayedCourses.map((c) => c.slug)
    const newSlugs = new Set([...selectedSlugs, ...currentSlugs])
    setSelectedSlugs(Array.from(newSlugs))
  }

  const handleClearInView = () => {
    const currentSlugs = new Set(displayedCourses.map((c) => c.slug))
    setSelectedSlugs((prev) => prev.filter((s) => !currentSlugs.has(s)))
  }

  const handleSave = async () => {
    setIsSaving(true)
    setErrorMsg("")

    try {
      const res = await fetch("/api/courses/select", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlugs: selectedSlugs }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to save course selections")
      }

      onSuccess(selectedSlugs)
      onClose()
    } catch (err: any) {
      console.error("Save courses error:", err)
      setErrorMsg(err.message || "An error occurred while saving your courses.")
    } finally {
      setIsSaving(false)
    }
  }

  const academicTotal = COURSES_CATALOG.filter((c) => c.category === "Academic").length
  const selfDevTotal = COURSES_CATALOG.filter((c) => c.category === "Self-Development").length

  const academicSelectedCount = COURSES_CATALOG.filter(
    (c) => c.category === "Academic" && selectedSlugs.includes(c.slug)
  ).length

  const selfDevSelectedCount = COURSES_CATALOG.filter(
    (c) => c.category === "Self-Development" && selectedSlugs.includes(c.slug)
  ).length

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#0c0c0c] border border-[#222] w-full max-w-5xl h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* ── MODAL HEADER ── */}
        <div className="p-5 sm:p-6 border-b border-[#1f1f1f] bg-[#111] flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Select Your Courses
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl leading-relaxed">
              Choose the individual course folders you want to study. You can select from both Academic and Self-Development categories.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#181818] hover:bg-[#222] text-gray-400 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* ── CATEGORY TABS & SEARCH BAR ── */}
        <div className="p-4 sm:p-5 border-b border-[#1a1a1a] bg-[#101010] space-y-3">
          {/* Distinct Category Tabs */}
          <div className="flex items-center gap-2 border-b border-[#222] pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("Academic")}
              className={`pb-2 px-3 text-xs sm:text-sm font-semibold transition-all relative ${
                activeTab === "Academic"
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Academic Courses ({academicTotal})
              {academicSelectedCount > 0 && (
                <span className="ml-2 text-[10px] bg-red-600/20 text-red-400 border border-red-600/30 px-1.5 py-0.2 rounded-full">
                  {academicSelectedCount} selected
                </span>
              )}
              {activeTab === "Academic" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("Self-Development")}
              className={`pb-2 px-3 text-xs sm:text-sm font-semibold transition-all relative ${
                activeTab === "Self-Development"
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              Self-Development ({selfDevTotal})
              {selfDevSelectedCount > 0 && (
                <span className="ml-2 text-[10px] bg-red-600/20 text-red-400 border border-red-600/30 px-1.5 py-0.2 rounded-full">
                  {selfDevSelectedCount} selected
                </span>
              )}
              {activeTab === "Self-Development" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
              )}
            </button>
          </div>

          {/* Search & Selection Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            <div className="relative flex-1 max-w-md">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${activeTab === "Academic" ? "Academic Courses" : "Self-Development"}...`}
                className="w-full bg-[#181818] border border-[#2a2a2a] rounded-lg pl-9 pr-9 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-400">
              <button
                type="button"
                onClick={handleSelectAllInView}
                className="hover:text-white transition-colors"
              >
                Select all in view
              </button>
              <span className="text-[#333]">|</span>
              <button
                type="button"
                onClick={handleClearInView}
                className="hover:text-red-400 transition-colors"
              >
                Clear in view
              </button>
            </div>
          </div>
        </div>

        {/* ── COURSE LISTING GRID (NO YEAR LABELS, FOLDER STYLE) ── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-950/40 border border-red-600/40 rounded-lg text-xs text-red-300">
              {errorMsg}
            </div>
          )}

          {displayedCourses.length === 0 ? (
            <div className="py-20 text-center space-y-2">
              <p className="text-sm font-semibold text-white">No matching courses found</p>
              <p className="text-xs text-gray-400">
                Try searching with a different course title or keyword.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs text-red-500 hover:underline pt-1"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {displayedCourses.map((course) => {
                const isSelected = selectedSlugs.includes(course.slug)

                return (
                  <div
                    key={course.id}
                    onClick={() => toggleSelect(course.slug)}
                    className={`cursor-pointer rounded-xl p-3.5 border transition-all flex flex-col justify-between select-none group ${
                      isSelected
                        ? "bg-[#181111] border-red-600 shadow-sm"
                        : "bg-[#121212] border-[#222] hover:border-[#333] hover:bg-[#151515]"
                    }`}
                  >
                    <div>
                      {/* Top row: Folder icon badge & Checkbox */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                            isSelected ? "bg-red-600/20 text-red-500" : "bg-[#181818] border border-[#262626] text-gray-400 group-hover:text-white"
                          }`}>
                            <Folder size={12} />
                          </div>
                          <span className="text-[10px] text-gray-400 font-medium">
                            {course.totalModules} modules
                          </span>
                        </div>

                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-red-600 border-red-600 text-white"
                              : "border-[#383838] bg-[#1a1a1a]"
                          }`}
                        >
                          {isSelected && <Check size={10} strokeWidth={3} />}
                        </div>
                      </div>

                      {/* Course Title and Description (NO course code like ANAT101) */}
                      <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 leading-snug">
                        {course.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Bottom metadata */}
                    <div className="pt-2.5 mt-2.5 border-t border-[#1c1c1c] flex items-center justify-between text-[10px] text-gray-500">
                      <span>{course.estimatedHours} hrs</span>
                      <span className={isSelected ? "text-red-500 font-semibold" : "text-gray-400"}>
                        {isSelected ? "Selected" : "Click to select"}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* ── STICKY FOOTER ACTION BAR ── */}
        <div className="p-4 sm:p-5 border-t border-[#1f1f1f] bg-[#111] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <p className="text-xs text-gray-300">
              <strong className="text-white font-bold">{selectedSlugs.length}</strong> total {selectedSlugs.length === 1 ? "course" : "courses"} selected
              {" "}({academicSelectedCount} Academic, {selfDevSelectedCount} Self-Development)
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={isSaving}
              className="px-4 py-2 rounded-lg border border-[#333] hover:bg-[#1a1a1a] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving || selectedSlugs.length === 0}
              className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-bold transition-all flex items-center gap-2"
            >
              {isSaving ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Saving...
                </>
              ) : (
                <>
                  <CheckCircle2 size={14} /> Add Selected Courses to Dashboard
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
