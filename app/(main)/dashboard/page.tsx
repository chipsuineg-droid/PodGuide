import { createClient } from "@/lib/supabase/server"
import { AdminDashboardClient } from "@/components/admin/AdminDashboardClient"
import { PersonalisedDashboardClient } from "@/components/dashboard/PersonalisedDashboardClient"

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const meta = user?.user_metadata ?? {}
  const userId = user?.id

  const firstName = (meta.full_name as string)?.split(" ")[0] ?? "Student"
  const userEmail = user?.email ?? ""
  const programme = (meta.programme as string) ?? "General Health Sciences"
  const level = (meta.level as string) ?? "Year One"

  // 1. Fetch student profile for admin status
  const { data: profile } = userId
    ? await supabase
        .from("student_profiles")
        .select("id, user_id, full_name, is_admin, is_mentor, program_id, academic_level, programme, level")
        .eq("user_id", userId)
        .maybeSingle()
    : { data: null }

  const isAdmin = !!profile?.is_admin || user?.email === "admin@podguide.com"

  // 2. Fetch User Selected Courses from user_courses table
  let userSelectedCourses: any[] = []
  if (userId) {
    const { data: ucData, error: ucErr } = await supabase
      .from("user_courses")
      .select("*")
      .eq("user_id", userId)
      .order("enrolled_at", { ascending: false })

    if (!ucErr && ucData) {
      userSelectedCourses = ucData
    }
  }

  const enrolledSlugs = userSelectedCourses.map((uc) => uc.course_slug)

  // 3. Fetch Live Student Stats
  const [qCount, deckCount, recentAttempts, materialCount, allProfiles, allModules, allQuestions] =
    await Promise.all([
      supabase.from("questions").select("id", { count: "exact", head: true }),
      userId
        ? supabase.from("flashcard_decks").select("id", { count: "exact", head: true }).eq("user_id", userId)
        : Promise.resolve({ count: 0 }),
      userId
        ? supabase
            .from("question_attempts")
            .select("is_correct, attempted_at")
            .eq("user_id", userId)
            .order("attempted_at", { ascending: false })
            .limit(10)
        : Promise.resolve({ data: [] }),
      supabase.from("materials").select("id", { count: "exact", head: true }),
      isAdmin
        ? supabase.from("student_profiles").select("*").order("created_at", { ascending: false })
        : Promise.resolve({ data: [] }),
      isAdmin
        ? supabase.from("modules").select("*").order("title", { ascending: true })
        : Promise.resolve({ data: [] }),
      isAdmin
        ? supabase.from("questions").select("*").order("created_at", { ascending: false }).limit(60)
        : Promise.resolve({ data: [] }),
    ])

  const attempts = (recentAttempts.data ?? []) as { is_correct: boolean; attempted_at: string }[]
  const correct = attempts.filter((a) => a.is_correct).length
  const accuracy = attempts.length > 0 ? Math.round((correct / attempts.length) * 100) : 0

  // Calculate learning streak
  const today = new Date()
  let streak = 0
  const datesStudied = new Set(attempts.map((a) => new Date(a.attempted_at).toDateString()))
  for (let i = 0; i < 30; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    if (datesStudied.has(d.toDateString())) streak++
    else if (i > 0) break
  }

  const studentDashboard = (
    <PersonalisedDashboardClient
      userName={firstName}
      userEmail={userEmail}
      userLevel={level}
      userProgramme={programme}
      initialEnrolledSlugs={enrolledSlugs}
      initialUserCourses={userSelectedCourses}
      stats={{
        questionCount: qCount.count ?? 0,
        deckCount: deckCount.count ?? 0,
        accuracy,
        streak,
        materialCount: materialCount.count ?? 0,
      }}
    />
  )

  if (isAdmin) {
    return (
      <AdminDashboardClient
        initialProfiles={allProfiles.data || []}
        initialModules={allModules.data || []}
        initialQuestions={allQuestions.data || []}
        currentAdminId={userId || ""}
        currentAdminName={profile?.full_name || meta.full_name || "Master Admin"}
        studentViewComponent={studentDashboard}
      />
    )
  }

  return studentDashboard
}
