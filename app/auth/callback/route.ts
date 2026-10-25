import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || ''
  const isLocal = host.includes('localhost') || host.includes('127.0.0.1')
  const baseUrl = isLocal ? origin : 'https://www.podguide.org.zw'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Check onboarding status
      const { data: { user } } = await supabase.auth.getUser()
      const { data: profile } = await supabase
        .from('student_profiles')
        .select('onboarding_complete')
        .eq('user_id', user!.id)
        .single()

      if (!profile?.onboarding_complete) {
        return NextResponse.redirect(`${baseUrl}/onboarding`)
      }
      return NextResponse.redirect(`${baseUrl}${next}`)
    }
  }

  return NextResponse.redirect(`${baseUrl}/login?error=auth_failed`)
}