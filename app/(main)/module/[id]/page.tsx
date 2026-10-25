import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { getCourseBySlug } from "@/lib/courses-data"
import {
  ChevronLeft,
  BookOpen,
  Brain,
  Award,
  Sparkles,
  CheckCircle,
  FileText,
  Clock,
  Layers,
} from "lucide-react"
import { ModuleIcon } from "@/components/curriculum/ModuleIcon"

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

  // 3. Fetch Module Details:
  // Match either by UUID or course code in Supabase, or fallback to the rich Course Catalog
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)

  const moduleQuery = supabase.from("modules").select("*")
  const { data: dbModule } = isUUID
    ? await moduleQuery.eq("id", id).maybeSingle()
    : await moduleQuery.ilike("code", id).maybeSingle()

  // If not found in DB modules table, look in the central Course Catalog
  const catalogCourse = !dbModule ? getCourseBySlug(id) : null

  const moduleData = dbModule || (catalogCourse ? {
    id: catalogCourse.id,
    code: catalogCourse.code,
    title: catalogCourse.title,
    description: catalogCourse.description,
    icon: catalogCourse.icon,
    credits: 10,
    category: catalogCourse.category,
    academicYears: catalogCourse.academicYears,
    estimatedHours: catalogCourse.estimatedHours,
    units: catalogCourse.units,
  } : null)

  if (!moduleData) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto">
          <BookOpen size={28} />
        </div>
        <h1 className="text-2xl font-bold text-white">Module Not Found</h1>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          The requested subject or course could not be located in the catalog.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] hover:bg-[#1a1a1a] text-white border border-[#222] rounded-xl text-sm font-semibold transition-colors"
        >
          <ChevronLeft size={16} /> Return to Dashboard
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

  // 5. Render Course / Module Details
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={16} /> Back to Dashboard
        </Link>
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
          <CheckCircle size={11} /> Open Access Learning &bull; {studentLevel}
        </span>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#111] border border-[#222] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl flex-shrink-0">
              {moduleData.icon || "📚"}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-brand uppercase tracking-wider">{moduleData.code}</span>
                <span className="text-gray-600">&bull;</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Award size={13} className="text-amber-400" /> {moduleData.credits ?? 10} Credits
                </span>
                {catalogCourse && (
                  <>
                    <span className="text-gray-600">&bull;</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-brand/10 text-brand border-brand/20">
                      {catalogCourse.category}
                    </span>
                  </>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">{moduleData.title}</h1>
              <p className="text-sm text-gray-400 max-w-2xl leading-relaxed mt-2">{moduleData.description}</p>
            </div>
          </div>

          <div className="flex sm:flex-col gap-2 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/practise/questions"
              className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors"
            >
              Practise MCQs
            </Link>
            <Link
              href="/learn/notebooks/new"
              className="flex-1 sm:flex-none text-center px-4 py-2.5 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333] text-white rounded-xl text-xs font-bold transition-colors"
            >
              New AI Notebook
            </Link>
          </div>
        </div>
      </div>

      {/* Course Units / Modules Breakdown if available */}
      {catalogCourse?.units && catalogCourse.units.length > 0 && (
        <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers size={18} className="text-brand" /> Learning Units &amp; Competencies
              </h3>
              <p className="text-xs text-gray-400">
                Structured topics and learning objectives covered in {moduleData.title}.
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-400">
              {catalogCourse.units.length} Units
            </span>
          </div>

          <div className="space-y-2.5">
            {catalogCourse.units.map((unit, idx) => (
              <div
                key={unit.id}
                className="p-4 bg-[#141414] border border-[#222] rounded-xl flex items-center justify-between gap-3 group hover:border-[#333] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-brand transition-colors">
                      {unit.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                      <Clock size={10} /> ~{unit.estimatedMinutes} mins
                    </span>
                  </div>
                </div>

                <Link
                  href="/practise/questions"
                  className="px-3 py-1.5 bg-[#1f1f1f] hover:bg-brand text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-colors"
                >
                  Review
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Module Curriculum Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-brand">
            <Brain size={18} />
            <h3 className="text-sm font-bold text-white">Active Recall &amp; Flashcards</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Spaced repetition decks structured around {moduleData.title} core competencies and high-yield testable points.
          </p>
          <Link
            href="/practise/flashcards"
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-white transition-colors pt-2"
          >
            Open Decks &rarr;
          </Link>
        </div>

        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-brand">
            <BookOpen size={18} />
            <h3 className="text-sm font-bold text-white">Lecture Notes &amp; Library</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Faculty-approved reference texts, lecture slides, and past papers uploaded for {moduleData.code}.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-white transition-colors pt-2"
          >
            Explore Library &rarr;
          </Link>
        </div>

        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-brand">
            <Sparkles size={18} />
            <h3 className="text-sm font-bold text-white">AI Medical Tutor</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Generate customized synthesis notes, ask complex clinical questions, and test your diagnostic reasoning.
          </p>
          <Link
            href="/learn/notebooks/new"
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-white transition-colors pt-2"
          >
            Launch Tutor &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
