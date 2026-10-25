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
    const courseSlug: string = body.courseSlug

    if (!courseSlug) {
      return NextResponse.json({ error: 'Course slug is required' }, { status: 400 })
    }

    const { error: deleteErr } = await supabase
      .from('user_courses')
      .delete()
      .eq('user_id', user.id)
      .eq('course_slug', courseSlug)

    if (deleteErr) {
      console.error('Error removing course:', deleteErr)
      return NextResponse.json({ error: deleteErr.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Course removed from your dashboard',
    })
  } catch (err: any) {
    console.error('API Error in /api/courses/remove:', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}
