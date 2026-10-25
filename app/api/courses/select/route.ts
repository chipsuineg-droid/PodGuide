import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCourseBySlug } from '@/lib/courses-data'

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authErr } = await supabase.auth.getUser()

    if (authErr || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const courseSlugs: string[] = Array.isArray(body.courseSlugs) ? body.courseSlugs : []

    if (courseSlugs.length === 0) {
      return NextResponse.json({ error: 'No courses provided' }, { status: 400 })
    }

    // Prepare rows for upsert into user_courses
    const now = new Date().toISOString()
    const rows = courseSlugs.map(slug => {
      const course = getCourseBySlug(slug)
      return {
        user_id: user.id,
        course_slug: slug,
        status: 'in_progress',
        progress_percentage: 0,
        completed_modules: 0,
        last_accessed_at: now,
        enrolled_at: now,
      }
    })

    const { error: upsertErr } = await supabase
      .from('user_courses')
      .upsert(rows, { onConflict: 'user_id,course_slug' })

    if (upsertErr) {
      console.error('Error selecting courses:', upsertErr)
      return NextResponse.json({ error: upsertErr.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      enrolledCount: courseSlugs.length,
      message: 'Courses added to your dashboard successfully',
    })
  } catch (err: any) {
    console.error('API Error in /api/courses/select:', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}
