"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  COURSES_CATALOG,
  Course,
  CourseCategory,
  getRecommendedStarterCourses,
  getCourseBySlug,
} from "@/lib/courses-data"
import { CourseSelectionModal } from "@/components/courses/CourseSelectionModal"
import {
  BookOpen,
  Brain,
  Users,
  PenTool,
  Rocket,
  Handshake,
  Flame,
  Target,
  ExternalLink,
  ChevronRight,
  Plus,
  Settings2,
  Trash2,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Clock,
  Play,
  Layers,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react"

interface UserCourseItem {
  id?: string
  course_slug: string
  status: "enrolled" | "in_progress" | "completed" | "archived"
  progress_percentage: number
  completed_modules: number
  last_accessed_at: string
}

interface PersonalisedDashboardClientProps {
  userName: string
  userEmail: string
  userLevel: string
  userProgramme: string
  initialEnrolledSlugs: string[]
  initialUserCourses: UserCourseItem[]
  stats: {
    questionCount: number
    deckCount: number
    accuracy: number
    streak: number
    materialCount: number
  }
}

const pillars = [
  { name: "Learn", icon: BookOpen, href: "/learn", desc: "Library & Notebooks" },
  { name: "Practise", icon: Brain, href: "/practise", desc: "Questions & Cases" },
  { name: "Campus", icon: Users, href: "/campus", desc: "Community Feed" },
  { name: "Create", icon: PenTool, href: "/create", desc: "Share & Contribute" },
  { name: "Mentor", icon: Handshake, href: "/mentor", desc: "Get Guidance" },
  { name: "Grow", icon: Rocket, href: "/grow", desc: "Opportunities" },
]

export function PersonalisedDashboardClient({
  userName,
  userEmail,
  userLevel,
  userProgramme,
  initialEnrolledSlugs = [],
  initialUserCourses = [],
  stats,
}: PersonalisedDashboardClientProps) {
  const router = useRouter()
  const [enrolledSlugs, setEnrolledSlugs] = useState<string[]>(initialEnrolledSlugs)
  const [userCourses, setUserCourses] = useState<UserCourseItem[]>(initialUserCourses)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filterTab, setFilterTab] = useState<"All" | "Academic" | "Non-Academic" | "Completed">("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [removingSlug, setRemovingSlug] = useState<string | null>(null)

  // Map enrolled slugs to full course objects
  const enrolledCoursesWithData = enrolledSlugs
    .map((slug) => {
      const course = getCourseBySlug(slug)
      if (!course) return null
      const userMeta = userCourses.find((uc) => uc.course_slug === slug)
      return {
        ...course,
        progress: userMeta?.progress_percentage ?? 0,
        completedModules: userMeta?.completed_modules ?? 0,
        status: userMeta?.status ?? "in_progress",
      }
    })
    .filter(Boolean) as (Course & { progress: number; completedModules: number; status: string })[]

  // Filtered enrolled courses
  const displayedCourses = enrolledCoursesWithData.filter((c) => {
    if (filterTab === "Academic" && c.category !== "Academic") return false
    if (filterTab === "Non-Academic" && c.category !== "Non-Academic") return false
    if (filterTab === "Completed" && c.progress < 100) return false

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      return (
        c.title.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      )
    }
    return true
  })

  // Recently accessed / Active course
  const activeCourse = enrolledCoursesWithData[0] || null

  // Starter recommendations for empty state or explore section
  const recommendedCourses = getRecommendedStarterCourses().filter(
    (c) => !enrolledSlugs.includes(c.slug)
  )

  const handleModalSuccess = (newSlugs: string[]) => {
    setEnrolledSlugs(newSlugs)
    // Update local user courses mapping
    const updated = newSlugs.map((slug) => {
      const existing = userCourses.find((uc) => uc.course_slug === slug)
      return (
        existing || {
          course_slug: slug,
          status: "in_progress" as const,
          progress_percentage: 0,
          completed_modules: 0,
          last_accessed_at: new Date().toISOString(),
        }
      )
    })
    setUserCourses(updated)
    router.refresh()
  }

  const handleQuickAdd = async (slug: string) => {
    const updatedSlugs = Array.from(new Set([...enrolledSlugs, slug]))
    setEnrolledSlugs(updatedSlugs)

    try {
      await fetch("/api/courses/select", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlugs: [slug] }),
      })
      router.refresh()
    } catch (e) {
      console.error("Quick add error:", e)
    }
  }

  const handleRemoveCourse = async (slug: string) => {
    if (!confirm("Remove this course from your dashboard? Your progress data will be safely preserved.")) {
      return
    }

    setRemovingSlug(slug)
    setEnrolledSlugs((prev) => prev.filter((s) => s !== slug))

    try {
      await fetch("/api/courses/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlug: slug }),
      })
      router.refresh()
    } catch (e) {
      console.error("Remove course error:", e)
    } finally {
      setRemovingSlug(null)
    }
  }

  const academicCount = enrolledCoursesWithData.filter((c) => c.category === "Academic").length
  const nonAcademicCount = enrolledCoursesWithData.filter((c) => c.category === "Non-Academic").length
  const completedCount = enrolledCoursesWithData.filter((c) => c.progress >= 100).length

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      
      {/* ── TOP HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
            Personalised Learning Dashboard
          </p>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mt-1 text-white">
            {userName}.
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            {enrolledSlugs.length === 0
              ? "Select your courses to start building your personal learning dashboard."
              : `${enrolledSlugs.length} ${enrolledSlugs.length === 1 ? "course" : "courses"} on your personal path`}
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {stats.streak > 0 && (
            <div className="flex items-center gap-2 bg-[#111] border border-brand/20 px-4 py-2 rounded-xl">
              <Flame size={16} className="text-brand" />
              <span className="font-bold text-white text-sm">{stats.streak} day streak</span>
            </div>
          )}

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-brand hover:bg-red-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-red-950/40"
          >
            <Plus size={16} />
            {enrolledSlugs.length === 0 ? "Select Your Courses" : "Manage My Courses"}
          </button>
        </div>
      </div>

      {/* ── EMPTY STATE (FIRST TIME USER / 0 COURSES) ── */}
      {enrolledSlugs.length === 0 ? (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#170a0a] via-[#121212] to-[#0d0d0d] border border-brand/30 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <Sparkles size={12} /> Customise Your Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                Design Your Personal Learning Space
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                PodGuide gives you total freedom to choose the courses and modules you want to study. You can select medical and health sciences disciplines, alongside non-academic professional skills like AI, Coding, Leadership, and Communication — without any rigid academic year restrictions.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xl shadow-red-950/50"
                >
                  <Plus size={16} /> Select the Courses You Would Like to Study
                </button>
              </div>
            </div>
          </div>

          {/* Recommended Starter Courses Shelf */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Popular Starting Courses
                </h3>
                <p className="text-xs text-gray-500">
                  Click "+ Add" to quickly add any of these popular subjects to your dashboard.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getRecommendedStarterCourses().map((course) => (
                <div
                  key={course.id}
                  className="bg-[#111] border border-[#222] hover:border-brand/40 rounded-xl p-5 flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-2xl">{course.icon}</span>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                          course.category === "Academic"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                        }`}
                      >
                        {course.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500">
                      {course.academicYears[0]} &bull; {course.estimatedHours}h
                    </span>
                    <button
                      onClick={() => handleQuickAdd(course.slug)}
                      className="px-3 py-1.5 bg-[#1c1c1c] hover:bg-brand text-gray-200 hover:text-white rounded-lg text-xs font-semibold transition-all flex items-center gap-1"
                    >
                      <Plus size={13} /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ── POPULATED STATE (USER HAS SELECTED COURSES) ── */
        <div className="space-y-8">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-4">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                My Enrolled Courses
              </p>
              <p className="text-2xl font-bold text-white mt-1">{enrolledSlugs.length}</p>
            </div>
            <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-4">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                Academic Subjects
              </p>
              <p className="text-2xl font-bold text-blue-400 mt-1">{academicCount}</p>
            </div>
            <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-4">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                Non-Academic Skills
              </p>
              <p className="text-2xl font-bold text-purple-400 mt-1">{nonAcademicCount}</p>
            </div>
            <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-4">
              <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                Completed
              </p>
              <p className="text-2xl font-bold text-emerald-400 mt-1">{completedCount}</p>
            </div>
          </div>

          {/* Continue Learning Spotlight */}
          {activeCourse && (
            <div className="bg-gradient-to-r from-[#170a0a] via-[#121212] to-[#0f0f0f] border border-brand/30 rounded-2xl p-5 sm:p-7 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-start gap-4">
                  <span className="text-3xl p-3 bg-white/5 rounded-xl border border-white/10 flex-shrink-0">
                    {activeCourse.icon}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 border border-brand/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                      Continue Learning
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {activeCourse.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5 max-w-xl line-clamp-1">
                      {activeCourse.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mt-3 flex items-center gap-3">
                      <div className="w-48 sm:w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(5, activeCourse.progress)}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-300">
                        {activeCourse.progress}% Completed
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/module/${activeCourse.code.toLowerCase()}`}
                  className="px-5 py-2.5 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 self-stretch sm:self-auto justify-center shadow-lg shadow-red-950/40"
                >
                  <Play size={14} fill="currentColor" /> Resume Learning
                </Link>
              </div>
            </div>
          )}

          {/* ── MY COURSES GRID SECTION ── */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <BookOpen size={18} className="text-brand" /> My Courses
                </h2>
                <p className="text-xs text-gray-500">
                  All active learning paths you have selected for your dashboard.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 bg-[#141414] p-1 rounded-xl border border-[#222]">
                <button
                  onClick={() => setFilterTab("All")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterTab === "All" ? "bg-[#252525] text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  All ({enrolledSlugs.length})
                </button>
                <button
                  onClick={() => setFilterTab("Academic")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterTab === "Academic" ? "bg-[#252525] text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Academic ({academicCount})
                </button>
                <button
                  onClick={() => setFilterTab("Non-Academic")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterTab === "Non-Academic" ? "bg-[#252525] text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Non-Academic ({nonAcademicCount})
                </button>
                <button
                  onClick={() => setFilterTab("Completed")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filterTab === "Completed" ? "bg-[#252525] text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Completed ({completedCount})
                </button>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[#111] border border-[#1f1f1f] hover:border-brand/40 rounded-xl p-5 flex flex-col justify-between transition-all group relative"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{course.icon}</span>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
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

                      <button
                        onClick={() => handleRemoveCourse(course.slug)}
                        title="Remove course from dashboard"
                        className="text-gray-600 hover:text-red-400 p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Progress & Actions */}
                  <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1.5">
                        <span>Progress</span>
                        <span className="font-semibold text-white">{course.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-gray-500">
                        {course.academicYears[0]} &bull; {course.totalModules} modules
                      </span>
                      <Link
                        href={`/module/${course.code.toLowerCase()}`}
                        className="text-xs font-semibold text-brand hover:text-white transition-colors flex items-center gap-1"
                      >
                        Study Course <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── EXPLORE MORE COURSES SECTION ── */}
          {recommendedCourses.length > 0 && (
            <div className="bg-[#101010] border border-[#1f1f1f] rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles size={16} className="text-brand" /> Explore More Courses
                  </h3>
                  <p className="text-xs text-gray-500">
                    Broaden your expertise across academic disciplines and modern professional competencies.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-semibold text-brand hover:underline"
                >
                  Browse all {COURSES_CATALOG.length} courses &rarr;
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {recommendedCourses.slice(0, 3).map((course) => (
                  <div
                    key={course.id}
                    className="p-3.5 bg-[#141414] border border-[#222] hover:border-[#333] rounded-xl flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-2xl flex-shrink-0">{course.icon}</span>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate group-hover:text-brand transition-colors">
                          {course.title}
                        </h4>
                        <span className="text-[10px] text-gray-500 block truncate">
                          {course.category} &bull; {course.estimatedHours}h
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(course.slug)}
                      className="px-2.5 py-1.5 bg-[#1f1f1f] hover:bg-brand text-gray-300 hover:text-white rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1 flex-shrink-0"
                    >
                      <Plus size={12} /> Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ── NAVIGATION PILLARS (LEARN, PRACTISE, ETC.) ── */}
      <div>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Navigate</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {pillars.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="bg-[#111] border border-[#1f1f1f] hover:border-brand rounded-xl p-4 flex flex-col gap-2 transition-all group"
            >
              <p.icon size={18} className="text-gray-400 group-hover:text-brand transition-colors" />
              <div>
                <p className="font-bold text-white text-xs">{p.name}</p>
                <p className="text-[10px] text-gray-600 hidden sm:block leading-tight mt-0.5">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── COURSE SELECTION MODAL ── */}
      <CourseSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSelectedSlugs={enrolledSlugs}
        onSuccess={handleModalSuccess}
      />
    </div>
  )
}
