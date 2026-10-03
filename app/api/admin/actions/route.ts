import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()

    // 1. Check authentication & Admin privileges
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data: adminProfile } = await supabase
      .from("student_profiles")
      .select("is_admin")
      .eq("user_id", user.id)
      .single()

    if (!adminProfile?.is_admin) {
      return NextResponse.json({ error: "Forbidden: Superadmin clearance required" }, { status: 403 })
    }

    const body = await req.json()
    const { action, payload } = body

    switch (action) {
      // ──────────────────────────────────────────
      // USERS & STAFF MANAGEMENT
      // ──────────────────────────────────────────
      case "update_user": {
        const { targetUserId, updates } = payload
        const { error } = await supabase
          .from("student_profiles")
          .update(updates)
          .eq("user_id", targetUserId)

        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ success: true, message: "User updated" })
      }

      case "delete_user": {
        const { targetUserId } = payload
        if (targetUserId === user.id) {
          return NextResponse.json({ error: "Cannot delete your own admin account" }, { status: 400 })
        }

        const { error } = await supabase
          .from("student_profiles")
          .delete()
          .eq("user_id", targetUserId)

        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ success: true, message: "User profile deleted" })
      }

      case "toggle_role": {
        const { targetUserId, field, value } = payload
        if (targetUserId === user.id && field === "is_admin" && !value) {
          return NextResponse.json({ error: "Cannot revoke your own admin rights" }, { status: 400 })
        }

        const { error } = await supabase
          .from("student_profiles")
          .update({ [field]: value })
          .eq("user_id", targetUserId)

        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ success: true, message: `${field} updated` })
      }

      // ──────────────────────────────────────────
      // WARDS & ROTATIONS MANAGEMENT
      // ──────────────────────────────────────────
      case "create_ward": {
        const { code, title, description, icon, credits, program_id, academic_level } = payload

        // 1. Insert module
        const { data: moduleData, error: modErr } = await supabase
          .from("modules")
          .insert({
            code: code.trim().toUpperCase(),
            title: title.trim(),
            description: description?.trim() || "",
            icon: icon || "🏥",
            credits: credits || 15
          })
          .select()
          .single()

        if (modErr) return NextResponse.json({ error: modErr.message }, { status: 400 })

        // 2. Link in program_modules
        if (program_id && academic_level && moduleData) {
          const { error: pmErr } = await supabase
            .from("program_modules")
            .insert({
              program_id,
              academic_level,
              module_id: moduleData.id,
              display_order: 10
            })

          if (pmErr) console.warn("program_modules insert error:", pmErr.message)
        }

        return NextResponse.json({ success: true, module: moduleData })
      }

      case "delete_ward": {
        const { moduleId } = payload
        const { error } = await supabase
          .from("modules")
          .delete()
          .eq("id", moduleId)

        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ success: true, message: "Ward / Module deleted" })
      }

      // ──────────────────────────────────────────
      // QUIZZES & QUESTIONS MANAGEMENT
      // ──────────────────────────────────────────
      case "create_question": {
        const { stem, explanation, difficulty, subject, options } = payload

        // 1. Insert into questions table
        const { data: qData, error: qErr } = await supabase
          .from("questions")
          .insert({
            stem: stem.trim(),
            explanation: explanation?.trim() || "",
            difficulty: difficulty || "medium",
            type: "mcq",
            creator_id: user.id,
            status: "approved",
            is_admin_created: true
          })
          .select()
          .single()

        if (qErr) return NextResponse.json({ error: qErr.message }, { status: 400 })

        // 2. Insert question options
        if (options && options.length > 0 && qData) {
          const formattedOptions = options.map((opt: any) => ({
            question_id: qData.id,
            option_text: opt.text.trim(),
            is_correct: !!opt.is_correct
          }))

          await supabase.from("question_options").insert(formattedOptions)
        }

        return NextResponse.json({ success: true, question: qData })
      }

      case "delete_question": {
        const { questionId } = payload
        const { error } = await supabase
          .from("questions")
          .delete()
          .eq("id", questionId)

        if (error) return NextResponse.json({ error: error.message }, { status: 400 })
        return NextResponse.json({ success: true, message: "Question deleted" })
      }

      default:
        return NextResponse.json({ error: "Unknown action" }, { status: 400 })
    }
  } catch (err: any) {
    console.error("Admin action error:", err)
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 })
  }
}
