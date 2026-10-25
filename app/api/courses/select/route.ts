import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authErr } = await supabase.auth.getUser()

    if (authErr || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const courseSlugs: string[] = Array.isArray(body.courseSlugs) ? body.courseSlugs : []

    const now = new Date().toISOString()

    if (courseSlugs.length > 0) {
      // 1. Prepare rows to upsert
      const rows = courseSlugs.map((slug) => ({
        user_id: user.id,
        course_slug: slug,
        status: 'in_progress',
        progress_percentage: 0,
        completed_modules: 0,
        last_accessed_at: now,
        enrolled_at: now,
      }))

      const { error: upsertErr } = await supabase
        .from('user_courses')
        .upsert(rows, { onConflict: 'user_id,course_slug', ignoreDuplicates: true })

      if (upsertErr) {
        console.error('Error upserting courses:', upsertErr)
      }

      // 2. Remove any courses that the user unselected in the modal
      const { error: deleteErr } = await supabase
        .from('user_courses')
        .delete()
        .eq('user_id', user.id)
        .not('course_slug', 'in', `(${courseSlugs.join(',')})`)

      if (deleteErr) {
        console.error('Error syncing unselected courses:', deleteErr)
      }
    } else {
      // User cleared all selections
      await supabase
        .from('user_courses')
        .delete()
        .eq('user_id', user.id)
    }

    return NextResponse.json({
      success: true,
      selectedCount: courseSlugs.length,
      message: 'Course selections updated successfully',
    })
  } catch (err: any) {
    console.error('API Error in /api/courses/select:', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}
