import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import {
  deriveProgramId,
  deriveAcademicLevel,
  canAccessModule,
  type ProgramId
} from "@/lib/curriculum-engine"
import {
  ChevronLeft,
  BookOpen,
  Brain,
  ShieldAlert,
  Clock,
  Award,
  Layers,
  FileText,
  Sparkles
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

  // 2. Fetch User Profile & Academic Credentials
  const { data: profile } = await supabase
    .from("student_profiles")
    .select("program_id, academic_level, programme, level")
    .eq("user_id", user.id)
    .single()

  const meta = user.user_metadata ?? {}
  const studentProgram: ProgramId =
    (profile?.program_id as ProgramId) ||
    deriveProgramId(profile?.programme || meta.programme || "")
  const studentLevel: string =
    profile?.academic_level ||
    deriveAcademicLevel(profile?.level || meta.level || "")

  // 3. Fetch Module Details & its Associated ProgramModule entry
  // Match either by UUID or by course code (e.g. /module/BMS101 or /module/<uuid>)
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)

  const moduleQuery = supabase.from("modules").select("*")
  const { data: moduleData, error: modError } = isUUID
    ? await moduleQuery.eq("id", id).maybeSingle()
    : await moduleQuery.ilike("code", id).maybeSingle()

  if (modError || !moduleData) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto">
          <BookOpen size={28} />
        </div>
        <h1 className="text-2xl font-bold text-white">Module Not Found</h1>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          The requested curriculum subject could not be located in the faculty database catalog.
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

  // 4. Fetch the program_modules entry to determine access authorization
  const { data: pmData } = await supabase
    .from("program_modules")
    .select("program_id, academic_level, is_core")
    .eq("module_id", moduleData.id)

  // Check if any mapping allows access to this student
  let isAuthorized = false
  let requiredProgram = "Authorized Programs"
  let requiredLevel = "Advanced Level"

  if (pmData && pmData.length > 0) {
    for (const pm of pmData) {
      requiredProgram = pm.program_id
      requiredLevel = pm.academic_level
      if (
        canAccessModule(
          pm.program_id as ProgramId,
          pm.academic_level,
          studentProgram,
          studentLevel
        )
      ) {
        isAuthorized = true
        break
      }
    }
  } else {
    // If no junction entry yet (or unlinked), default to accessible if student matches
    isAuthorized = true
  }

  // 5. Security Route Guard: 403 Forbidden State if unauthorized
  if (!isAuthorized) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 space-y-6">
        <div className="bg-[#120808] border border-red-500/30 rounded-2xl p-8 text-center space-y-5 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mx-auto border border-red-500/20">
            <ShieldAlert size={32} />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              403 Unauthorized
            </span>
            <h1 className="text-2xl font-bold text-white tracking-tight">Access Restricted</h1>
            <p className="text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
              You do not have academic clearance to view <strong className="text-white">{moduleData.title} ({moduleData.code})</strong>.
            </p>
          </div>

          <div className="bg-black/60 border border-red-500/10 rounded-xl p-4 text-xs text-left space-y-2 text-gray-400">
            <div className="flex justify-between">
              <span className="text-gray-500">Your Program & Level:</span>
              <span className="font-semibold text-white uppercase">{studentProgram} &bull; {studentLevel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Required Clearance:</span>
              <span className="font-semibold text-red-400 uppercase">{requiredProgram} &bull; {requiredLevel}</span>
            </div>
            <p className="text-[11px] text-gray-500 pt-2 border-t border-white/5">
              Access is strictly governed by the Faculty Curriculum Engine. If you have progressed or transitioned programs, please request an academic promotion.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-red-950/40"
            >
              <ChevronLeft size={16} /> Return to Your Authorized Dashboard
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // 6. Authorized: Render Subject Details
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
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
          Authorized Subject &bull; {studentLevel}
        </span>
      </div>

      {/* Hero Banner */}
      <div className="bg-[#111] border border-[#222] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-3xl flex-shrink-0">
              {moduleData.icon || "📚"}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-brand uppercase tracking-wider">{moduleData.code}</span>
                <span className="text-gray-600">&bull;</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Award size={13} className="text-amber-400" /> {moduleData.credits} Credits
                </span>
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

      {/* Module Curriculum Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-brand">
            <Brain size={18} />
            <h3 className="text-sm font-bold text-white">Active Recall & Flashcards</h3>
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
            <h3 className="text-sm font-bold text-white">Lecture Notes & Library</h3>
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
            <h3 className="text-sm font-bold text-white">AI Study Companion</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Ask questions, synthesize difficult mechanisms, or generate OSCE scenarios tailored specifically to {moduleData.title}.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-white transition-colors pt-2"
          >
            Launch Notebook AI &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
