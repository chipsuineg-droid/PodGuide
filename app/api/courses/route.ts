import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { COURSES_CATALOG, getAllCourses } from '@/lib/courses-data'

export async function GET(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // 1. Fetch user's enrolled courses if logged in
    let userCourses: any[] = []
    if (user) {
      const { data, error } = await supabase
        .from('user_courses')
        .select('*')
        .eq('user_id', user.id)

      if (!error && data) {
        userCourses = data
      }
    }

    // 2. Return catalog alongside user enrollment data
    return NextResponse.json({
      courses: COURSES_CATALOG,
      userCourses,
      totalCourses: COURSES_CATALOG.length,
    })
  } catch (err: any) {
    console.error('Error fetching courses:', err)
    return NextResponse.json(
      { courses: COURSES_CATALOG, userCourses: [], error: err.message },
      { status: 200 } // Graceful fallback
    )
  }
}
