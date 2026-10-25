import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { getCourseBySlug } from "@/lib/courses-data"
import {
  ChevronLeft,
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  Layers,
} from "lucide-react"

interface ModulePageProps {
  params: Promise<{ id: string }>
}

export default async function ModuleDetailPage({ params }: ModulePageProps) {
  const { id } = await params
  const supabase = await createClient()

  // 1. Verify Authentication
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser()

  if (authError || !user) {
    redirect("/login")
  }

  // 2. Fetch User Profile
  const { data: profile } = await supabase
    .from("student_profiles")
    .select("program_id, academic_level, programme, level, full_name")
    .eq("user_id", user.id)
    .single()

  const meta = user.user_metadata ?? {}
  const studentLevel: string = profile?.level || meta.level || "Self-Paced Learner"

  // 3. Fetch Module Details
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)

  const moduleQuery = supabase.from("modules").select("*")
  const { data: dbModule } = isUUID
    ? await moduleQuery.eq("id", id).maybeSingle()
    : await moduleQuery.ilike("code", id).maybeSingle()

  const catalogCourse = !dbModule ? getCourseBySlug(id) : null

  const moduleData = dbModule || (catalogCourse ? {
    id: catalogCourse.id,
    code: catalogCourse.code,
    title: catalogCourse.title,
    description: catalogCourse.description,
    credits: 10,
    category: catalogCourse.category,
    estimatedHours: catalogCourse.estimatedHours,
    units: catalogCourse.units,
  } : null)

  if (!moduleData) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#181818] border border-[#2a2a2a] text-white flex items-center justify-center mx-auto">
          <BookOpen size={20} />
        </div>
        <h1 className="text-xl font-bold text-white">Course Not Found</h1>
        <p className="text-gray-400 text-xs max-w-md mx-auto">
          The requested subject or course could not be located in the catalog.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] hover:bg-[#1a1a1a] text-white border border-[#222] rounded-lg text-xs font-semibold transition-colors"
        >
          <ChevronLeft size={15} /> Return to Dashboard
        </Link>
      </div>
    )
  }

  // 4. Record/Update user course access timestamp in user_courses
  if (user) {
    const slug = catalogCourse?.slug || moduleData.code?.toLowerCase() || id
    await supabase
      .from("user_courses")
      .upsert(
        {
          user_id: user.id,
          course_slug: slug,
          last_accessed_at: new Date().toISOString(),
        },
        { onConflict: "user_id,course_slug" }
      )
      .select()
  }

  // 5. Render Course Details
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Breadcrumb and Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={15} /> Back to Dashboard
        </Link>
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300 bg-[#161616] border border-[#262626] px-2.5 py-1 rounded-md">
          {catalogCourse?.category || "Course"} : {moduleData.code}
        </span>
      </div>

      {/* Course Header Card */}
      <div className="bg-[#111] border border-[#222] rounded-xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
                {moduleData.code}
              </span>
              <span className="text-[#333]">|</span>
              <span className="text-xs text-gray-400">
                {catalogCourse?.category ?? "Academic"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {moduleData.title}
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
              {moduleData.description}
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/practise/questions"
              className="flex-1 sm:flex-none text-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Practise Questions
            </Link>
            <Link
              href="/learn/notebooks/new"
              className="flex-1 sm:flex-none text-center px-4 py-2 bg-[#181818] hover:bg-[#222] border border-[#2b2b2b] text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Study Notebook
            </Link>
          </div>
        </div>
      </div>

      {/* Course Units / Modules Breakdown if available */}
      {catalogCourse?.units && catalogCourse.units.length > 0 && (
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-3">
            <div>
              <h3 className="text-sm font-bold text-white">
                Course Units
              </h3>
              <p className="text-xs text-gray-400">
                Core topics covered in {moduleData.title}.
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-400">
              {catalogCourse.units.length} units
            </span>
          </div>

          <div className="space-y-2">
            {catalogCourse.units.map((unit, idx) => (
              <div
                key={unit.id}
                className="p-3.5 bg-[#141414] border border-[#222] rounded-lg flex items-center justify-between gap-3 group hover:border-[#333] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded bg-[#1c1c1c] border border-[#2c2c2c] flex items-center justify-center text-[11px] font-mono font-bold text-gray-400">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-red-400 transition-colors">
                      {unit.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                      <Clock size={10} /> {unit.estimatedMinutes} mins
                    </span>
                  </div>
                </div>

                <Link
                  href="/practise/questions"
                  className="px-3 py-1 bg-[#1c1c1c] hover:bg-red-600 text-gray-300 hover:text-white rounded text-xs font-medium transition-colors"
                >
                  Review
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Course Learning Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-white">
            <Brain size={16} className="text-red-500" />
            <h3 className="text-sm font-bold">Active Recall and Flashcards</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Spaced repetition flashcards structured around {moduleData.title} key concepts.
          </p>
          <div className="pt-2">
            <Link
              href="/practise/flashcards"
              className="text-xs font-semibold text-red-500 hover:text-red-400 transition-colors inline-flex items-center gap-1"
            >
              Open Decks
            </Link>
          </div>
        </div>

        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-white">
            <BookOpen size={16} className="text-red-500" />
            <h3 className="text-sm font-bold">Notes and Library Materials</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Reference texts, study slides, and past papers uploaded for {moduleData.code}.
          </p>
          <div className="pt-2">
            <Link
              href="/learn"
              className="text-xs font-semibold text-red-500 hover:text-red-400 transition-colors inline-flex items-center gap-1"
            >
              Explore Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
