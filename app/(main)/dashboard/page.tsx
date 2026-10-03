import { createClient } from "@/lib/supabase/server"
import { getCurriculum } from "@/lib/curriculum"
import { deriveProgramId, deriveAcademicLevel, type ProgramId } from "@/lib/curriculum-engine"
import { AdminDashboardClient } from "@/components/admin/AdminDashboardClient"
import Link from "next/link"
import {
  BookOpen, Brain, Users, PenTool, Rocket, Handshake,
  Flame, Target, ExternalLink, ChevronRight, BookMarked,
  Lightbulb, AlertCircle, Stethoscope, ClipboardList,
  Calendar, Trophy, FlaskConical, Microscope, Pill,
  HeartPulse, GraduationCap, Layers
} from "lucide-react"

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return "Good morning"
  if (h < 17) return "Good afternoon"
  return "Good evening"
}

function sourceBadge(source: string) {
  const s = source.toLowerCase()
  if (s.includes("geeky")) return "bg-green-500/10 text-green-400 border-green-500/20"
  if (s.includes("ninja")) return "bg-purple-500/10 text-purple-400 border-purple-500/20"
  if (s.includes("osmosis")) return "bg-blue-500/10 text-blue-400 border-blue-500/20"
  if (s.includes("amboss")) return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
  if (s.includes("registered") || s.includes("rn")) return "bg-pink-500/10 text-pink-400 border-pink-500/20"
  if (s.includes("physiopedia")) return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  if (s.includes("akpharm")) return "bg-orange-500/10 text-orange-400 border-orange-500/20"
  if (s.includes("dentistry")) return "bg-teal-500/10 text-teal-400 border-teal-500/20"
  return "bg-gray-500/10 text-gray-400 border-gray-500/20"
}

function getYearGroup(level: string, programme: string) {
  const l = level.toLowerCase()
  const p = programme.toLowerCase()
  if (l.includes("intern") || l.includes("house")) return "intern"
  if (l.includes("year 6") || l.includes("final")) return "finalyear"
  const isClinical = l.includes("year 4") || l.includes("year 5") ||
    (l.includes("year 3") && (p.includes("mbchb") || p.includes("mbbs") || p.includes("medicine")))
  if (isClinical) return "clinical"
  return "preclinical"
}

const pillars = [
  { name: "Learn", icon: BookOpen, href: "/learn", desc: "Library & Notebooks" },
  { name: "Practise", icon: Brain, href: "/practise", desc: "Questions & Cases" },
  { name: "Campus", icon: Users, href: "/campus", desc: "Community Feed" },
  { name: "Create", icon: PenTool, href: "/create", desc: "Share & Contribute" },
  { name: "Mentor", icon: Handshake, href: "/mentor", desc: "Get Guidance" },
  { name: "Grow", icon: Rocket, href: "/grow", desc: "Opportunities" },
]

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const meta = user?.user_metadata ?? {}
  const userId = user?.id

  const firstName = (meta.full_name as string)?.split(" ")[0] ?? "Student"
  const institution = (meta.institution as string) ?? "PodGuide Academy"
  const programme = (meta.programme as string) ?? "Medicine (MBChB / MBBS)"
  const level = (meta.level as string) ?? "Year 1 (Pre-clinical / Basic Sciences)"

  const curriculum = getCurriculum(programme, level)
  const yearGroup = getYearGroup(level, programme)

  // Fetch profile for normalized academic tracking & admin privileges
  const { data: profile } = userId
    ? await supabase
        .from("student_profiles")
        .select("id, user_id, full_name, is_admin, is_mentor, program_id, academic_level, programme, level")
        .eq("user_id", userId)
        .maybeSingle()
    : { data: null }

  const isAdmin = !!profile?.is_admin || user?.email === "admin@podguide.com"

  const programId: ProgramId =
    (profile?.program_id as ProgramId) ||
    deriveProgramId(profile?.programme || meta.programme || "")

  const academicLevel: string =
    profile?.academic_level ||
    deriveAcademicLevel(profile?.level || meta.level || "")

  // Fetch live stats & dynamic modules (and admin datasets if superadmin)
  const [qCount, deckCount, recentAttempts, materialCount, pmResult, allProfiles, allModules, allQuestions] = await Promise.all([
    supabase.from("questions").select("id", { count: "exact", head: true }),
    userId ? supabase.from("flashcard_decks").select("id", { count: "exact", head: true }).eq("user_id", userId) : Promise.resolve({ count: 0 }),
    userId ? supabase.from("question_attempts").select("is_correct, attempted_at").eq("user_id", userId).order("attempted_at", { ascending: false }).limit(10) : Promise.resolve({ data: [] }),
    supabase.from("materials").select("id", { count: "exact", head: true }),
    programId && academicLevel
      ? supabase
          .from("program_modules")
          .select(`
            display_order,
            is_core,
            academic_level,
            modules (
              id, code, title, description, icon, credits
            )
          `)
          .eq("program_id", programId)
          .eq("academic_level", academicLevel)
          .order("display_order", { ascending: true })
      : Promise.resolve({ data: null }),
    isAdmin ? supabase.from("student_profiles").select("*").order("created_at", { ascending: false }) : Promise.resolve({ data: [] }),
    isAdmin ? supabase.from("modules").select("*").order("title", { ascending: true }) : Promise.resolve({ data: [] }),
    isAdmin ? supabase.from("questions").select("*").order("created_at", { ascending: false }).limit(60) : Promise.resolve({ data: [] }),
  ])

  // If database contains curriculum catalog for this student, dynamically populate subjects
  if (pmResult.data && pmResult.data.length > 0) {
    curriculum.subjects = pmResult.data.map((pm: any) => ({
      id: pm.modules?.id,
      code: pm.modules?.code,
      name: pm.modules?.title || "Curriculum Module",
      icon: pm.modules?.icon || "📚",
      description: pm.modules?.description || "",
      credits: pm.modules?.credits || 10,
    }))
  }

  const attempts = (recentAttempts.data ?? []) as { is_correct: boolean; attempted_at: string }[]
  const correct = attempts.filter(a => a.is_correct).length
  const accuracy = attempts.length > 0 ? Math.round((correct / attempts.length) * 100) : 0

  // Streak calc
  const today = new Date()
  let streak = 0
  const datesStudied = new Set(attempts.map(a => new Date(a.attempted_at).toDateString()))
  for (let i = 0; i < 30; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    if (datesStudied.has(d.toDateString())) streak++
    else if (i > 0) break
  }

  const studentDashboardView = (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">

      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{greeting()}</p>
          <h1 className="text-4xl font-display font-bold mt-1 text-white">{firstName}.</h1>
          <p className="text-gray-400 mt-1 text-sm">
            {level.split("(")[0].trim()} &bull; {programme.split("(")[0].trim()} &bull; {institution.split("(")[0].trim()}
          </p>
        </div>
        {streak > 0 && (
          <div className="flex items-center gap-2 bg-[#111] border border-brand/20 px-4 py-2 rounded-xl self-start sm:self-auto">
            <Flame size={16} className="text-brand" />
            <span className="font-bold text-white text-sm">{streak} day streak</span>
          </div>
        )}
      </div>

      {/* ── YEAR-GROUP SPECIFIC BANNER ── */}
      {yearGroup === "preclinical" && <PreClinicalBanner curriculum={curriculum} qCount={qCount.count ?? 0} deckCount={deckCount.count ?? 0} />}
      {yearGroup === "clinical" && <ClinicalBanner curriculum={curriculum} accuracy={accuracy} attempts={attempts.length} />}
      {yearGroup === "finalyear" && <FinalYearBanner curriculum={curriculum} accuracy={accuracy} />}
      {yearGroup === "intern" && <InternBanner curriculum={curriculum} />}

      {/* ── YEAR-GROUP SPECIFIC CONTENT ── */}
      {yearGroup === "preclinical" && <PreClinicalContent curriculum={curriculum} materialCount={materialCount.count ?? 0} />}
      {yearGroup === "clinical" && <ClinicalContent curriculum={curriculum} accuracy={accuracy} attempts={attempts.length} />}
      {yearGroup === "finalyear" && <FinalYearContent curriculum={curriculum} qCount={qCount.count ?? 0} />}
      {yearGroup === "intern" && <InternContent curriculum={curriculum} />}

      {/* ── NAVIGATION PILLARS (all groups) ── */}
      <div>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Navigate</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {pillars.map(p => (
            <Link key={p.name} href={p.href}
              className="bg-[#111] border border-[#1f1f1f] hover:border-brand rounded-xl p-4 flex flex-col gap-2 transition-all group">
              <p.icon size={18} className="text-gray-400 group-hover:text-brand transition-colors" />
              <div>
                <p className="font-bold text-white text-xs">{p.name}</p>
                <p className="text-[10px] text-gray-600 hidden sm:block leading-tight mt-0.5">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── RIGHT SIDEBAR DATA (resources + weak areas) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Curated resources */}
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-brand" />
            <h2 className="font-bold text-white text-sm">Your Curated Resources</h2>
          </div>
          <div className="space-y-2">
            {curriculum.resources.map(r => (
              <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 p-3 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-brand/30 rounded-xl transition-all group">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-gray-300 group-hover:text-white truncate">{r.label}</p>
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border mt-1 ${sourceBadge(r.source)}`}>
                    {r.source}
                  </span>
                </div>
                <ExternalLink size={11} className="text-gray-600 group-hover:text-brand flex-shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Focus areas */}
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Target size={16} className="text-brand" />
            <h2 className="font-bold text-white text-sm">Focus Areas for {level.split("(")[0].trim()}</h2>
          </div>
          <div className="space-y-3">
            {curriculum.weakAreas.map(w => (
              <div key={w.name} className="flex items-start justify-between gap-2 pb-3 border-b border-[#1a1a1a] last:border-0 last:pb-0">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{w.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{w.topic}</p>
                </div>
                <Link href="/practise/questions"
                  className="text-xs text-brand hover:text-white transition-colors font-bold flex-shrink-0">Study</Link>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl flex items-start gap-2">
            <AlertCircle size={14} className="text-brand flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400 leading-relaxed">{curriculum.keyReminder}</p>
          </div>
        </div>
      </div>
    </div>
  )

  if (isAdmin) {
    return (
      <AdminDashboardClient
        initialProfiles={allProfiles.data || []}
        initialModules={allModules.data || []}
        initialQuestions={allQuestions.data || []}
        currentAdminId={userId || ""}
        currentAdminName={profile?.full_name || meta.full_name || "Master Admin"}
        studentViewComponent={studentDashboardView}
      />
    )
  }

  return studentDashboardView
}

// ─────────────────────────────────────────────────────────────────
// PRE-CLINICAL DASHBOARD (Year 1 & 2)
// Focus: Basic sciences, lab practicals, building foundations
// ─────────────────────────────────────────────────────────────────

function PreClinicalBanner({ curriculum, qCount, deckCount }: { curriculum: any; qCount: number; deckCount: number }) {
  return (
    <div className="bg-[#0f0a0a] border border-brand/20 rounded-2xl p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-5 sm:items-start justify-between">
        <div className="flex-1 space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand">{curriculum.tagline}</p>
          <h2 className="text-base font-bold text-white leading-snug">{curriculum.focus}</h2>
          <div className="flex items-start gap-2 mt-3 pt-3 border-t border-brand/10">
            <FlaskConical size={14} className="text-brand flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-300 leading-relaxed">{curriculum.todaysPriority}</p>
          </div>
        </div>
        <div className="flex sm:flex-col gap-3 sm:gap-2 flex-shrink-0">
          <div className="text-center bg-[#111] border border-[#1f1f1f] rounded-xl px-4 py-2">
            <p className="text-lg font-bold text-white">{qCount.toLocaleString()}</p>
            <p className="text-[10px] text-gray-500">Questions available</p>
          </div>
          <div className="text-center bg-[#111] border border-[#1f1f1f] rounded-xl px-4 py-2">
            <p className="text-lg font-bold text-white">{deckCount}</p>
            <p className="text-[10px] text-gray-500">Flashcard decks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PreClinicalContent({ curriculum, materialCount }: { curriculum: any; materialCount: number }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        {/* Current Modules */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Your Current Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {curriculum.subjects.map((s: any, i: number) => {
              const cardInner = (
                <>
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors truncate">{s.name}</p>
                    <p className="text-[10px] text-gray-600 mt-0.5">
                      {s.code ? `${s.code} • ` : ""}Module {i + 1} of {curriculum.subjects.length}
                    </p>
                  </div>
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-brand transition-colors flex-shrink-0" />
                </>
              )

              return s.id || s.code ? (
                <Link
                  key={s.name + i}
                  href={`/module/${s.id || s.code}`}
                  className="bg-[#111] border border-[#1f1f1f] hover:border-brand/30 rounded-xl p-4 flex items-center gap-3 transition-all group"
                >
                  {cardInner}
                </Link>
              ) : (
                <div key={s.name + i} className="bg-[#111] border border-[#1f1f1f] hover:border-brand/30 rounded-xl p-4 flex items-center gap-3 transition-all group">
                  {cardInner}
                </div>
              )
            })}
          </div>
        </div>

        {/* Study approach for pre-clinical */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">How to Study Pre-Clinical Medicine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: BookMarked, title: "AI Notebooks", desc: "Upload lecture notes and chat with them using AI", href: "/learn/notebooks/new" },
              { icon: Layers, title: "Flashcard Decks", desc: "Create spaced-repetition decks per module", href: "/practise/flashcards" },
              { icon: Brain, title: "MCQ Practice", desc: "Test understanding with multiple-choice questions", href: "/practise/questions" },
            ].map(t => (
              <Link key={t.title} href={t.href}
                className="bg-[#111] border border-[#1f1f1f] hover:border-brand/40 rounded-xl p-4 flex flex-col gap-2 transition-all group">
                <t.icon size={18} className="text-gray-400 group-hover:text-brand transition-colors" />
                <p className="text-sm font-bold text-white">{t.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                <span className="text-xs text-brand font-semibold flex items-center gap-1 mt-auto">Open <ChevronRight size={12} /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right: library status + quick actions */}
      <div className="space-y-4">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Microscope size={16} className="text-brand" />
            <h3 className="font-bold text-white text-sm">Academic Library</h3>
          </div>
          <p className="text-3xl font-bold text-white">{materialCount}</p>
          <p className="text-xs text-gray-500 mt-1">Materials uploaded for your programme</p>
          <Link href="/learn"
            className="flex items-center gap-1 text-xs text-brand font-bold mt-4 hover:text-white transition-colors">
            Browse Library <ChevronRight size={12} />
          </Link>
        </div>

        <div className="bg-[#0f0a0a] border border-[#1a1a1a] rounded-xl p-4 space-y-2">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Pre-clinical Tip</p>
          <p className="text-xs text-gray-300 leading-relaxed">
            The pre-clinical years are a race against forgetting. Use active recall daily through flashcards and MCQs, not just passive reading.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
// CLINICAL DASHBOARD (Year 3–5)
// Focus: Ward rounds, OSCEs, clinical reasoning, rotations
// ─────────────────────────────────────────────────────────────────

function ClinicalBanner({ curriculum, accuracy, attempts }: { curriculum: any; accuracy: number; attempts: number }) {
  return (
    <div className="bg-[#0f0a0a] border border-brand/20 rounded-2xl p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-5 sm:items-start justify-between">
        <div className="flex-1 space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand">{curriculum.tagline}</p>
          <h2 className="text-base font-bold text-white">{curriculum.focus}</h2>
          <div className="flex items-start gap-2 mt-3 pt-3 border-t border-brand/10">
            <Stethoscope size={14} className="text-brand flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-300 leading-relaxed">{curriculum.todaysPriority}</p>
          </div>
        </div>
        <div className="flex sm:flex-col gap-3 sm:gap-2 flex-shrink-0">
          <div className="text-center bg-[#111] border border-[#1f1f1f] rounded-xl px-4 py-2">
            <p className="text-lg font-bold text-white">{attempts}</p>
            <p className="text-[10px] text-gray-500">Questions done</p>
          </div>
          <div className="text-center bg-[#111] border border-[#1f1f1f] rounded-xl px-4 py-2">
            <p className={`text-lg font-bold ${accuracy >= 60 ? "text-green-400" : accuracy >= 40 ? "text-yellow-400" : "text-brand"}`}>
              {attempts > 0 ? `${accuracy}%` : "—"}
            </p>
            <p className="text-[10px] text-gray-500">Accuracy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClinicalContent({ curriculum, accuracy, attempts }: { curriculum: any; accuracy: number; attempts: number }) {
  const rotations = curriculum.subjects
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        {/* Active Rotations */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Active Rotations This Year</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {rotations.map((s: any, i: number) => (
              <div key={s.name + i}
                className="bg-[#111] border border-[#1f1f1f] hover:border-brand/30 rounded-xl p-4 flex items-center gap-3 transition-all group">
                <span className="text-xl flex-shrink-0">{s.icon}</span>
                <Link
                  href={s.id || s.code ? `/module/${s.id || s.code}` : "/practise/questions"}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors truncate">{s.name}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{s.code ? `${s.code} • ` : ""}Rotation {i + 1}</p>
                </Link>
                <Link href={s.id || s.code ? `/module/${s.id || s.code}` : "/practise/questions"}
                  className="text-[10px] font-bold text-brand bg-brand/10 px-2 py-1 rounded flex-shrink-0 hover:bg-brand hover:text-white transition-colors">
                  Open
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical toolkit */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Your Clinical Toolkit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: ClipboardList, label: "OSCE Guides", sub: "Geeky Medics", href: "https://geekymedics.com/osce-guides/", ext: true },
              { icon: HeartPulse, label: "Clinical Cases", sub: "Practice here", href: "/practise/cases", ext: false },
              { icon: Brain, label: "Question Bank", sub: `${attempts} done`, href: "/practise/questions", ext: false },
              { icon: BookMarked, label: "AI Notebooks", sub: "Summarise cases", href: "/learn", ext: false },
            ].map(t => {
              const El = t.ext ? "a" : Link
              const props = t.ext ? { href: t.href, target: "_blank", rel: "noopener noreferrer" } : { href: t.href }
              return (
                <El key={t.label} {...(props as any)}
                  className="bg-[#111] border border-[#1f1f1f] hover:border-brand/40 rounded-xl p-4 flex flex-col gap-2 transition-all group">
                  <t.icon size={18} className="text-gray-400 group-hover:text-brand transition-colors" />
                  <p className="text-xs font-bold text-white leading-tight">{t.label}</p>
                  <p className="text-[10px] text-gray-600">{t.sub}</p>
                </El>
              )
            })}
          </div>
        </div>
      </div>

      {/* Right: OSCE countdown + accuracy */}
      <div className="space-y-4">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Target size={16} className="text-brand" />
            <h3 className="font-bold text-white text-sm">Your MCQ Accuracy</h3>
          </div>
          {attempts > 0 ? (
            <>
              <p className={`text-4xl font-bold ${accuracy >= 60 ? "text-green-400" : accuracy >= 40 ? "text-yellow-400" : "text-brand"}`}>
                {accuracy}%
              </p>
              <p className="text-xs text-gray-500 mt-1">From {attempts} questions attempted</p>
              <div className="w-full bg-[#222] rounded-full h-2 mt-3">
                <div className={`h-2 rounded-full transition-all ${accuracy >= 60 ? "bg-brand" : accuracy >= 40 ? "bg-brand/60" : "bg-brand/30"}`}
                  style={{ width: `${accuracy}%` }} />
              </div>
              <p className="text-[10px] text-gray-600 mt-2">
                {accuracy >= 60 ? "Great work. Keep it up!" : accuracy >= 40 ? "Good start. Aim for 60% and above." : "Keep practising. You will improve."}
              </p>
            </>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-gray-400">No attempts yet</p>
              <Link href="/practise/questions"
                className="flex items-center gap-1 text-xs text-brand font-bold hover:text-white transition-colors">
                Start practising <ChevronRight size={12} />
              </Link>
            </div>
          )}
        </div>

        <div className="bg-[#0f0a0a] border border-[#1a1a1a] rounded-xl p-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Clinical Years Reminder</p>
          <p className="text-xs text-gray-300 leading-relaxed">
            Clinical years are assessed differently. Portfolios, OSCEs, and supervisor sign-offs matter as much as written exams. Practise clinical examinations on real patients every day.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
// FINAL YEAR DASHBOARD (Year 6 / Final Year)
// Focus: Licensing exams, OSCE mastery, electives, career planning
// ─────────────────────────────────────────────────────────────────

function FinalYearBanner({ curriculum, accuracy }: { curriculum: any; accuracy: number }) {
  return (
    <div className="bg-[#0f0a0a] border border-brand/20 rounded-2xl p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="text-4xl">🎓</div>
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand">{curriculum.tagline}</p>
          <h2 className="text-lg font-bold text-white mt-1">The finish line is in sight.</h2>
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
            Final year is your most important. Every ward round, every OSCE, every MCQ bank you complete this year is building the doctor, nurse, or clinician you are about to become.
          </p>
          <div className="flex items-start gap-2 mt-3 pt-3 border-t border-brand/10">
            <GraduationCap size={14} className="text-brand flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-300 leading-relaxed">{curriculum.todaysPriority}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FinalYearContent({ curriculum, qCount }: { curriculum: any; qCount: number }) {
  const examResources = [
    { name: "USMLE First Aid Step 2", url: "https://www.amboss.com", source: "Amboss" },
    { name: "PLAB 2 OSCE Guide", url: "https://geekymedics.com/plab-2/", source: "Geeky Medics" },
    { name: "AMC Clinical Exam Prep", url: "https://www.osmosis.org", source: "Osmosis" },
    { name: "Final Year Lecture Review", url: "https://www.youtube.com/@NinjaNerdScience", source: "Ninja Nerd" },
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        {/* Final year modules */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Final Year Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {curriculum.subjects.map((s: any, i: number) => (
              <div key={s.name + i}
                className="bg-[#111] border border-[#1f1f1f] hover:border-brand/40 rounded-xl p-4 flex items-center gap-3 transition-all group">
                <span className="text-xl flex-shrink-0">{s.icon}</span>
                <Link
                  href={s.id || s.code ? `/module/${s.id || s.code}` : "/practise/questions"}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors truncate">{s.name}</p>
                  {s.code && <p className="text-[10px] text-gray-600 mt-0.5">{s.code}</p>}
                </Link>
                <Link href={s.id || s.code ? `/module/${s.id || s.code}` : "/practise/questions"}
                  className="text-[10px] font-bold text-brand bg-brand/10 px-2 py-1 rounded hover:bg-brand hover:text-white transition-colors">
                  Revise
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Exam prep toolkit */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Licensing Exam Toolkit</h2>
          <div className="grid grid-cols-2 gap-3">
            {examResources.map(r => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
                className="bg-[#111] border border-[#1f1f1f] hover:border-brand/40 rounded-xl p-4 flex items-start gap-3 transition-all group">
                <ExternalLink size={14} className="text-gray-500 group-hover:text-brand flex-shrink-0 mt-0.5 transition-colors" />
                <div>
                  <p className="text-xs font-bold text-white group-hover:text-brand transition-colors">{r.name}</p>
                  <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border mt-1 ${sourceBadge(r.source)}`}>
                    {r.source}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right: question bank + exam countdown */}
      <div className="space-y-4">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Trophy size={16} className="text-brand" />
            <h3 className="font-bold text-white text-sm">Question Bank</h3>
          </div>
          <p className="text-4xl font-bold text-white">{qCount.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">Questions available</p>
          <p className="text-xs text-gray-600 mt-2">Target: 20 to 30 questions per day in final year</p>
          <Link href="/practise/questions"
            className="flex items-center gap-1 text-xs text-brand font-bold mt-4 hover:text-white transition-colors">
            Open Question Bank <ChevronRight size={12} />
          </Link>
        </div>

        <div className="bg-[#0f0a0a] border border-brand/10 rounded-xl p-4">
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Final Year Strategy</p>
          <ul className="space-y-2">
            {[
              "30 MCQs per day minimum",
              "1 full OSCE station per day",
              "Review every wrong answer in detail",
              "Practise clinical cases daily",
            ].map(tip => (
              <li key={tip} className="flex items-start gap-2 text-xs text-gray-400">
                <span className="text-brand mt-0.5 flex-shrink-0">•</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
// INTERNSHIP / HOUSEMANSHIP DASHBOARD
// Focus: Prescribing safety, on-call protocols, procedures
// ─────────────────────────────────────────────────────────────────

function InternBanner({ curriculum }: { curriculum: any }) {
  return (
    <div className="bg-[#0f0a0a] border border-brand/20 rounded-2xl p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="text-4xl">🩺</div>
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand">{curriculum.tagline}</p>
          <h2 className="text-lg font-bold text-white mt-1">You are a doctor now. Use this wisely.</h2>
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
            Internship is where theory meets real life. Every decision you make has consequences. Use PodGuide to look things up fast, refresh clinical knowledge, and stay sharp on-call.
          </p>
          <div className="flex items-start gap-2 mt-3 pt-3 border-t border-brand/10">
            <AlertCircle size={14} className="text-brand flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-300 leading-relaxed">{curriculum.todaysPriority}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function InternContent({ curriculum }: { curriculum: any }) {
  const quickRef = [
    { label: "Drug Dose Calculator", url: "https://www.amboss.com", icon: Pill },
    { label: "ABG Interpreter", url: "https://www.osmosis.org", icon: HeartPulse },
    { label: "Prescribing Safety Guide", url: "https://geekymedics.com/junior-doctor/", icon: ClipboardList },
    { label: "On-call Protocols", url: "https://www.amboss.com", icon: Calendar },
  ]
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        {/* On-call focus areas */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Internship Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {curriculum.subjects.map((s: any, i: number) => {
              const cardInner = (
                <>
                  <span className="text-xl flex-shrink-0">{s.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white group-hover:text-brand transition-colors truncate">{s.name}</p>
                    {s.code && <p className="text-[10px] text-gray-600 mt-0.5">{s.code}</p>}
                  </div>
                  <ChevronRight size={14} className="text-gray-600 group-hover:text-brand transition-colors flex-shrink-0" />
                </>
              )

              return s.id || s.code ? (
                <Link
                  key={s.name + i}
                  href={`/module/${s.id || s.code}`}
                  className="bg-[#111] border border-[#1f1f1f] hover:border-brand/30 rounded-xl p-4 flex items-center gap-3 transition-all group"
                >
                  {cardInner}
                </Link>
              ) : (
                <div key={s.name + i}
                  className="bg-[#111] border border-[#1f1f1f] hover:border-brand/30 rounded-xl p-4 flex items-center gap-3 transition-all group">
                  {cardInner}
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick reference */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Quick Reference Tools</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickRef.map(r => (
              <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer"
                className="bg-[#111] border border-[#1f1f1f] hover:border-brand/40 rounded-xl p-4 flex items-center gap-3 transition-all group">
                <r.icon size={18} className="text-gray-400 group-hover:text-brand transition-colors flex-shrink-0" />
                <p className="text-xs font-bold text-white group-hover:text-brand transition-colors">{r.label}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right: intern survival rules */}
      <div className="space-y-4">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Intern Survival Rules</p>
          <ul className="space-y-3">
            {[
              { rule: "Always check allergies before prescribing", icon: "⚠️" },
              { rule: "Know your escalation chain. Call your registrar when unsure", icon: "📞" },
              { rule: "Document everything you do and why", icon: "📋" },
              { rule: "Rest when you can. Fatigue kills clinical judgement.", icon: "😴" },
              { rule: "5 Rights: Right patient, drug, dose, route, time", icon: "✅" },
            ].map(r => (
              <li key={r.rule} className="flex items-start gap-2 text-xs text-gray-300">
                <span className="flex-shrink-0">{r.icon}</span> {r.rule}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#0f0a0a] border border-brand/10 rounded-xl p-4">
          <p className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Community</p>
          <p className="text-xs text-gray-400 leading-relaxed mb-3">
            Connect with fellow interns and senior doctors on the Campus feed.
          </p>
          <Link href="/campus"
            className="flex items-center gap-1 text-xs text-brand font-bold hover:text-white transition-colors">
            Open Campus <ChevronRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}