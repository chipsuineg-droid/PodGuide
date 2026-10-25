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
    const { courseSlug, progressPercentage, completedModules, status } = body

    if (!courseSlug) {
      return NextResponse.json({ error: 'Course slug is required' }, { status: 400 })
    }

    const updates: Record<string, any> = {
      last_accessed_at: new Date().toISOString(),
    }

    if (typeof progressPercentage === 'number') {
      updates.progress_percentage = Math.min(100, Math.max(0, progressPercentage))
      if (progressPercentage >= 100) {
        updates.status = 'completed'
      }
    }

    if (typeof completedModules === 'number') {
      updates.completed_modules = completedModules
    }

    if (status) {
      updates.status = status
    }

    const { error: updateErr } = await supabase
      .from('user_courses')
      .update(updates)
      .eq('user_id', user.id)
      .eq('course_slug', courseSlug)

    if (updateErr) {
      console.error('Error updating course progress:', updateErr)
      return NextResponse.json({ error: updateErr.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Course progress updated successfully',
    })
  } catch (err: any) {
    console.error('API Error in /api/courses/progress:', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}
