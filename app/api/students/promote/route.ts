/**
 * POST /api/students/promote
 *
 * Promotes a student to the next academic level.
 * Handles cross-programme promotion (e.g. BMS Part 3 → Medicine Year 4).
 *
 * Body: { user_id?: string }  (admin can pass a specific user_id; student promotes themselves)
 *
 * Returns: { previous, promoted_to, message }
 */
import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import {
  deriveProgramId, deriveAcademicLevel,
  getNextProgression, type ProgramId
} from "@/lib/curriculum-engine"

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()

    // 1. Auth check
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json().catch(() => ({}))
    const targetUserId: string = body.user_id || user.id

    // 2. Only admins can promote other students
    if (targetUserId !== user.id) {
      const { data: myProfile } = await supabase
        .from("student_profiles")
        .select("is_admin")
        .eq("user_id", user.id)
        .single()
      if (!myProfile?.is_admin) {
        return NextResponse.json({ error: "Forbidden: admin access required" }, { status: 403 })
      }
    }

    // 3. Fetch the student's current program and level
    const { data: profile } = await supabase
      .from("student_profiles")
      .select("program_id, academic_level, programme, level")
      .eq("user_id", targetUserId)
      .single()

    if (!profile) {
      return NextResponse.json({ error: "Student profile not found" }, { status: 404 })
    }

    const meta = user.user_metadata ?? {}
    const currentProgramId: ProgramId = (profile.program_id as ProgramId) ||
      deriveProgramId(profile.programme || meta.programme || "")
    const currentLevel: string = profile.academic_level ||
      deriveAcademicLevel(profile.level || meta.level || "")

    // 4. Look up the next progression step
    const next = getNextProgression(currentProgramId, currentLevel)
    if (!next) {
      return NextResponse.json({
        error: "No further progression defined",
        current: { program_id: currentProgramId, academic_level: currentLevel }
      }, { status: 422 })
    }

    const nextProgramId: ProgramId = next.next_program_id || currentProgramId
    const nextLevel: string = next.next_level

    // 5. Validate new program + level exists in program_modules
    const { count } = await supabase
      .from("program_modules")
      .select("id", { count: "exact", head: true })
      .eq("program_id", nextProgramId)
      .eq("academic_level", nextLevel)

    if (!count || count === 0) {
      // Curriculum not seeded yet — still allow promotion but warn
      console.warn(`No modules seeded for ${nextProgramId} / ${nextLevel}`)
    }

    // 6. Update student_profiles
    const { error: updateError } = await supabase
      .from("student_profiles")
      .update({
        program_id: nextProgramId,
        academic_level: nextLevel,
      })
      .eq("user_id", targetUserId)

    if (updateError) {
      console.error("Promotion update error:", updateError)
      return NextResponse.json({ error: "Failed to promote student" }, { status: 500 })
    }

    // 7. Also sync to auth.user_metadata if promoting self (keeps session consistent)
    if (targetUserId === user.id) {
      await supabase.auth.updateUser({
        data: {
          program_id: nextProgramId,
          academic_level: nextLevel,
        }
      })
    }

    return NextResponse.json({
      success: true,
      previous: { program_id: currentProgramId, academic_level: currentLevel },
      promoted_to: { program_id: nextProgramId, academic_level: nextLevel },
      message: `Successfully promoted from ${currentProgramId.toUpperCase()} ${currentLevel} → ${nextProgramId.toUpperCase()} ${nextLevel}`,
    })
  } catch (err) {
    console.error("POST /api/students/promote error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
