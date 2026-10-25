"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  COURSES_CATALOG,
  Course,
  getCourseBySlug,
} from "@/lib/courses-data"
import { CourseSelectionModal } from "@/components/courses/CourseSelectionModal"
import {
  BookOpen,
  Brain,
  Users,
  PenTool,
  TrendingUp,
  ShoppingBag,
  Plus,
  Trash2,
  ArrowRight,
  Flame,
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
  { name: "Learn", icon: BookOpen, href: "/learn", desc: "Library and Notebooks" },
  { name: "Practise", icon: Brain, href: "/practise", desc: "Questions and Cases" },
  { name: "Library", icon: BookOpen, href: "/library", desc: "Curated Study Shelves" },
  { name: "Network", icon: Users, href: "/campus", desc: "Community Feed" },
  { name: "MedStore", icon: ShoppingBag, href: "/medstore", desc: "Equipment and Books" },
  { name: "Grow", icon: TrendingUp, href: "/grow", desc: "Opportunities and Career" },
]

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

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
  const [removingSlug, setRemovingSlug] = useState<string | null>(null)

  // Map enrolled slugs to full course objects
  const enrolledCourses = enrolledSlugs
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

  // Separate into Academic and Self-Development
  const academicCourses = enrolledCourses.filter((c) => c.category === "Academic")
  const selfDevCourses = enrolledCourses.filter((c) => c.category === "Self-Development")

  const handleModalSuccess = (newSlugs: string[]) => {
    // Immediately update local state so the dashboard reflects changes without waiting
    setEnrolledSlugs(newSlugs)
    const updatedUserCourses = newSlugs.map((slug) => {
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
    setUserCourses(updatedUserCourses)
    router.refresh()
  }

  const handleRemoveCourse = async (slug: string) => {
    if (!confirm("Remove this course from your dashboard? Other courses and data remain untouched.")) {
      return
    }

    setRemovingSlug(slug)
    setEnrolledSlugs((prev) => prev.filter((s) => s !== slug))
    setUserCourses((prev) => prev.filter((uc) => uc.course_slug !== slug))

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

  const hasCourses = enrolledCourses.length > 0

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      
      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1a1a1a] pb-6">
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
            {getGreeting()}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-1 text-white tracking-tight">
            {userName}.
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            {hasCourses
              ? `${enrolledCourses.length} ${enrolledCourses.length === 1 ? "course" : "courses"} on your dashboard (${academicCourses.length} Academic, ${selfDevCourses.length} Self-Development)`
              : "Manage and track your enrolled courses."}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {stats.streak > 0 && (
            <div className="flex items-center gap-2 bg-[#111] border border-[#222] px-3.5 py-2 rounded-lg">
              <Flame size={15} className="text-red-500" />
              <span className="font-semibold text-white text-xs">{stats.streak} day streak</span>
            </div>
          )}

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors"
          >
            <Plus size={15} />
            {hasCourses ? "Add More Courses" : "Select Courses"}
          </button>
        </div>
      </div>

      {/* ── BEFORE COURSES ARE ADDED: CLEAN EMPTY STATE ── */}
      {!hasCourses ? (
        <div className="bg-[#101010] border border-[#222] rounded-xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#262626] flex items-center justify-center mx-auto text-white">
            <BookOpen size={20} />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white">No courses selected yet</h2>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
              Personalise your dashboard by choosing the academic subjects and self-development skills you want to study.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Plus size={15} /> Select Courses
            </button>
          </div>
        </div>
      ) : (
        /* ── AFTER COURSES ARE ADDED: ACTUAL LEARNING DASHBOARD ── */
        <div className="space-y-10">
          
          {/* ── SECTION 1: ACADEMIC COURSES ── */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-3">
              <div>
                <h2 className="text-base font-bold text-white tracking-tight">
                  Academic Courses
                </h2>
                <p className="text-xs text-gray-500">
                  Core medical and health sciences subjects on your curriculum.
                </p>
              </div>
              <span className="text-xs text-gray-400 font-semibold">
                {academicCourses.length} {academicCourses.length === 1 ? "course" : "courses"}
              </span>
            </div>

            {academicCourses.length === 0 ? (
              <div className="p-6 bg-[#111] border border-[#1f1f1f] rounded-xl text-center space-y-2">
                <p className="text-xs text-gray-400">No academic courses selected yet.</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs text-red-500 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <Plus size={13} /> Add academic courses
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {academicCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#111] border border-[#1f1f1f] hover:border-[#333] rounded-xl p-5 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      {/* Top row: Code and Delete action */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                          {course.code}
                        </span>

                        <button
                          onClick={() => handleRemoveCourse(course.slug)}
                          disabled={removingSlug === course.slug}
                          title="Remove from dashboard"
                          className="text-gray-500 hover:text-red-500 p-1 transition-colors"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <h3 className="text-sm font-bold text-white">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Progress tracking and Open action */}
                    <div className="pt-4 mt-4 border-t border-[#1a1a1a] space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                          <span>Learning Progress</span>
                          <span className="font-semibold text-white">{course.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-600 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-gray-500">
                          {course.totalModules} modules
                        </span>
                        <Link
                          href={`/module/${course.code.toLowerCase()}`}
                          className="text-xs font-semibold text-red-500 hover:text-red-400 transition-colors inline-flex items-center gap-1"
                        >
                          Open Course <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── SECTION 2: SELF-DEVELOPMENT COURSES ── */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-3">
              <div>
                <h2 className="text-base font-bold text-white tracking-tight">
                  Self-Development
                </h2>
                <p className="text-xs text-gray-500">
                  Professional, digital, leadership, and personal growth skills.
                </p>
              </div>
              <span className="text-xs text-gray-400 font-semibold">
                {selfDevCourses.length} {selfDevCourses.length === 1 ? "course" : "courses"}
              </span>
            </div>

            {selfDevCourses.length === 0 ? (
              <div className="p-6 bg-[#111] border border-[#1f1f1f] rounded-xl text-center space-y-2">
                <p className="text-xs text-gray-400">No self-development courses selected yet.</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs text-red-500 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <Plus size={13} /> Add self-development courses
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selfDevCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#111] border border-[#1f1f1f] hover:border-[#333] rounded-xl p-5 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      {/* Top row: Code and Delete action */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                          {course.code}
                        </span>

                        <button
                          onClick={() => handleRemoveCourse(course.slug)}
                          disabled={removingSlug === course.slug}
                          title="Remove from dashboard"
                          className="text-gray-500 hover:text-red-500 p-1 transition-colors"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <h3 className="text-sm font-bold text-white">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Progress tracking and Open action */}
                    <div className="pt-4 mt-4 border-t border-[#1a1a1a] space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                          <span>Learning Progress</span>
                          <span className="font-semibold text-white">{course.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-600 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-gray-500">
                          {course.totalModules} modules
                        </span>
                        <Link
                          href={`/module/${course.code.toLowerCase()}`}
                          className="text-xs font-semibold text-red-500 hover:text-red-400 transition-colors inline-flex items-center gap-1"
                        >
                          Open Course <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

      {/* ── NAVIGATION PILLARS ── */}
      <div className="pt-4 border-t border-[#1a1a1a]">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
          Platform Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {pillars.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="bg-[#111] border border-[#1f1f1f] hover:border-[#333] rounded-lg p-3.5 flex flex-col gap-2 transition-colors group"
            >
              <p.icon size={16} className="text-gray-400 group-hover:text-red-500 transition-colors" />
              <div>
                <p className="font-semibold text-white text-xs">{p.name}</p>
                <p className="text-[10px] text-gray-500 hidden sm:block leading-tight mt-0.5">{p.desc}</p>
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
