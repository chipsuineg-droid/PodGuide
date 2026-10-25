"use client"

import { useState, useMemo } from "react"
import {
  COURSES_CATALOG,
  ACADEMIC_YEARS,
  USER_AUDIENCES,
  Course,
  CourseCategory,
  AcademicYear,
  UserAudience,
} from "@/lib/courses-data"
import {
  Search,
  X,
  Check,
  Plus,
  BookOpen,
  Sparkles,
  Filter,
  Layers,
  GraduationCap,
  Clock,
  Loader2,
  CheckCircle2,
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
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<"All" | CourseCategory>("All")
  const [yearFilter, setYearFilter] = useState<"All" | AcademicYear>("All")
  const [audienceFilter, setAudienceFilter] = useState<"All" | UserAudience>("All")
  const [isSaving, setIsSaving] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  // Filtered courses calculation
  const filteredCourses = useMemo(() => {
    return COURSES_CATALOG.filter((course) => {
      // 1. Category filter
      if (categoryFilter !== "All" && course.category !== categoryFilter) {
        return false
      }

      // 2. Year filter
      if (yearFilter !== "All" && !course.academicYears.includes(yearFilter)) {
        return false
      }

      // 3. Audience filter
      if (audienceFilter !== "All" && !course.targetAudiences.includes(audienceFilter)) {
        return false
      }

      // 4. Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const matchTitle = course.title.toLowerCase().includes(query)
        const matchDesc = course.description.toLowerCase().includes(query)
        const matchCode = course.code.toLowerCase().includes(query)
        const matchTags = course.tags.some((t) => t.toLowerCase().includes(query))
        if (!matchTitle && !matchDesc && !matchCode && !matchTags) {
          return false
        }
      }

      return true
    })
  }, [categoryFilter, yearFilter, audienceFilter, searchQuery])

  if (!isOpen) return null

  const toggleSelect = (slug: string) => {
    setSelectedSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const handleSelectAllFiltered = () => {
    const newSlugs = new Set([...selectedSlugs, ...filteredCourses.map((c) => c.slug)])
    setSelectedSlugs(Array.from(newSlugs))
  }

  const handleClearSelection = () => {
    setSelectedSlugs([])
  }

  const handleSave = async () => {
    setIsSaving(true)
    setErrorMsg("")

    try {
      // 1. Call the API to persist the selections in user_courses
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

  const academicCount = COURSES_CATALOG.filter((c) => c.category === "Academic").length
  const nonAcademicCount = COURSES_CATALOG.filter((c) => c.category === "Non-Academic").length

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e0e0e] border border-[#222] w-full max-w-6xl h-[92vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* ── HEADER ── */}
        <div className="p-4 sm:p-6 border-b border-[#1f1f1f] bg-[#111]/90 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand bg-brand/10 border border-brand/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <Sparkles size={11} /> Customise Learning Path
              </span>
              <span className="text-xs text-gray-400">
                {selectedSlugs.length} selected
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              Select the Courses You Would Like to Study
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-3xl leading-relaxed">
              Build your personal learning space. Mix and match academic disciplines and practical non-academic skills freely — regardless of your formal academic year, profession, or background.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-[#1c1c1c] hover:bg-[#282828] text-gray-400 hover:text-white flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* ── CONTROLS & FILTER BAR ── */}
        <div className="p-4 border-b border-[#1a1a1a] bg-[#121212] space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by subject, code, or topic (e.g. Anatomy, AI Tools, Surgery, Leadership)..."
                className="w-full bg-[#181818] border border-[#262626] rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1 bg-[#181818] p-1 rounded-xl border border-[#262626] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setCategoryFilter("All")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  categoryFilter === "All"
                    ? "bg-brand text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                All ({COURSES_CATALOG.length})
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("Academic")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  categoryFilter === "Academic"
                    ? "bg-brand text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <GraduationCap size={13} /> Academic ({academicCount})
              </button>
              <button
                type="button"
                onClick={() => setCategoryFilter("Non-Academic")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  categoryFilter === "Non-Academic"
                    ? "bg-brand text-white shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Sparkles size={13} /> Non-Academic ({nonAcademicCount})
              </button>
            </div>
          </div>

          {/* Sub-Filters: Academic Year & Learner Category */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-gray-500 font-semibold flex items-center gap-1 mr-1">
              <Filter size={12} /> Filter by:
            </span>

            {/* Academic Year Selector */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
              <span className="text-gray-500 text-[11px] mr-1">Year:</span>
              <button
                type="button"
                onClick={() => setYearFilter("All")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  yearFilter === "All"
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                All Years
              </button>
              {ACADEMIC_YEARS.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setYearFilter(yearFilter === y ? "All" : y)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                    yearFilter === y
                      ? "bg-brand/20 text-brand border border-brand/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            <div className="w-px h-4 bg-[#262626] mx-1 hidden sm:block" />

            {/* Learner Category Selector */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
              <span className="text-gray-500 text-[11px] mr-1">Audience:</span>
              <button
                type="button"
                onClick={() => setAudienceFilter("All")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  audienceFilter === "All"
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                All Audiences
              </button>
              {USER_AUDIENCES.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAudienceFilter(audienceFilter === a ? "All" : a)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                    audienceFilter === a
                      ? "bg-brand/20 text-brand border border-brand/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── COURSE LISTING GRID (SCROLLABLE) ── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-950/40 border border-red-500/40 rounded-xl text-xs text-red-300">
              {errorMsg}
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-gray-400 px-1">
            <span>
              Showing <strong className="text-white">{filteredCourses.length}</strong> of {COURSES_CATALOG.length} courses
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleSelectAllFiltered}
                className="text-xs text-gray-400 hover:text-white underline transition-colors"
              >
                Select all shown
              </button>
              {selectedSlugs.length > 0 && (
                <>
                  <span className="text-gray-600">&bull;</span>
                  <button
                    type="button"
                    onClick={handleClearSelection}
                    className="text-xs text-red-400 hover:text-red-300 underline transition-colors"
                  >
                    Clear selection
                  </button>
                </>
              )}
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/5 text-gray-500 flex items-center justify-center mx-auto">
                <Search size={22} />
              </div>
              <h3 className="text-base font-bold text-white">No matching courses found</h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Try clearing your search keyword or switching your year and audience filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("")
                  setCategoryFilter("All")
                  setYearFilter("All")
                  setAudienceFilter("All")
                }}
                className="text-xs font-semibold text-brand hover:underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredCourses.map((course) => {
                const isSelected = selectedSlugs.includes(course.slug)

                return (
                  <div
                    key={course.id}
                    onClick={() => toggleSelect(course.slug)}
                    className={`cursor-pointer rounded-xl p-4 border transition-all relative flex flex-col justify-between group ${
                      isSelected
                        ? "bg-[#181111] border-brand/60 shadow-lg shadow-brand/10 ring-1 ring-brand/30"
                        : "bg-[#121212] border-[#222] hover:border-[#333] hover:bg-[#161616]"
                    }`}
                  >
                    {/* Top Row: Icon, Category Badge & Checkbox */}
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-2xl">{course.icon}</span>
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block truncate">
                              {course.code}
                            </span>
                            <span
                              className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border inline-block ${
                                course.category === "Academic"
                                  ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                  : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                              }`}
                            >
                              {course.category}
                            </span>
                          </div>
                        </div>

                        {/* Selection Checkbox */}
                        <div
                          className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all flex-shrink-0 ${
                            isSelected
                              ? "bg-brand border-brand text-white shadow-sm"
                              : "border-[#383838] bg-[#1a1a1a] group-hover:border-gray-500"
                          }`}
                        >
                          {isSelected && <Check size={14} strokeWidth={3} />}
                        </div>
                      </div>

                      {/* Course Title & Description */}
                      <h4 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Bottom Metadata: Years, Audiences & Hours */}
                    <div className="pt-3 mt-3 border-t border-white/5 space-y-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {course.academicYears.slice(0, 2).map((yr) => (
                          <span
                            key={yr}
                            className="text-[10px] bg-white/5 text-gray-300 px-1.5 py-0.5 rounded border border-white/5"
                          >
                            {yr}
                          </span>
                        ))}
                        {course.academicYears.length > 2 && (
                          <span className="text-[10px] text-gray-500">
                            +{course.academicYears.length - 2} yrs
                          </span>
                        )}
                        <span className="text-gray-600">&bull;</span>
                        <span className="text-[10px] text-gray-400 flex items-center gap-1">
                          <Clock size={10} /> {course.estimatedHours}h
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] pt-1">
                        <span className="text-gray-500 truncate max-w-[200px]">
                          {course.targetAudiences[0]}
                          {course.targetAudiences.length > 1 && ` +${course.targetAudiences.length - 1}`}
                        </span>
                        <span
                          className={`font-semibold ${
                            isSelected ? "text-brand" : "text-gray-500 group-hover:text-gray-300"
                          }`}
                        >
                          {isSelected ? "Selected" : "+ Add"}
                        </span>
                      </div>
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-bold text-xs">
                {selectedSlugs.length}
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  {selectedSlugs.length} {selectedSlugs.length === 1 ? "Course" : "Courses"} Selected
                </p>
                <p className="text-[11px] text-gray-400 hidden sm:block">
                  You can add or remove courses anytime from your dashboard.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={isSaving}
              className="px-4 py-2.5 rounded-xl border border-[#333] hover:bg-[#1a1a1a] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Skip for now
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving || selectedSlugs.length === 0}
              className="px-6 py-2.5 rounded-xl bg-brand hover:bg-red-700 disabled:opacity-50 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-red-950/50"
            >
              {isSaving ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Saving Courses...
                </>
              ) : (
                <>
                  <CheckCircle2 size={15} /> Add Selected Courses to My Dashboard
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
