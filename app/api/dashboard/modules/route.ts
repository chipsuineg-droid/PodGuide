/**
 * GET /api/dashboard/modules
 *
 * Returns the list of modules for the currently logged-in student
 * based on their program_id and academic_level from student_profiles.
 *
 * Falls back to deriving from user_metadata if student_profiles
 * has not yet been updated (backward compatibility for existing users).
 */
import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { deriveProgramId, deriveAcademicLevel, type ProgramId } from "@/lib/curriculum-engine"

export async function GET(req: NextRequest) {
  try {
    const supabase = await createClient()

    // 1. Verify authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // 2. Read student profile for program_id + academic_level
    const { data: profile } = await supabase
      .from("student_profiles")
      .select("program_id, academic_level, programme, level")
      .eq("user_id", user.id)
      .single()

    // 3. Resolve program_id and academic_level
    //    Use DB columns if set; otherwise derive from legacy user_metadata
    const meta = user.user_metadata ?? {}

    let programId: ProgramId = (profile?.program_id as ProgramId) ||
      deriveProgramId(profile?.programme || meta.programme || "")

    let academicLevel: string = profile?.academic_level ||
      deriveAcademicLevel(profile?.level || meta.level || "")

    if (!programId || programId === "generic") {
      // No usable programme data — return empty with a helpful message
      return NextResponse.json({
        program_id: "generic",
        academic_level: academicLevel || "Unknown",
        modules: [],
        message: "Complete your profile to see your personalised modules."
      })
    }

    // 4. Fetch modules for this student's program + level
    const { data: programModules, error: pmError } = await supabase
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

    if (pmError) {
      console.error("program_modules query error:", pmError)
      return NextResponse.json({ error: "Failed to fetch modules" }, { status: 500 })
    }

    // 5. Flatten the join result
    const modules = (programModules ?? []).map((pm: any) => ({
      ...pm.modules,
      display_order: pm.display_order,
      is_core: pm.is_core,
    }))

    return NextResponse.json({
      program_id: programId,
      academic_level: academicLevel,
      modules,
      total: modules.length,
    })
  } catch (err) {
    console.error("GET /api/dashboard/modules error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
