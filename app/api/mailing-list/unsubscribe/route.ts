import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, userId } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const supabase = await createClient()

    // Mark as inactive in mailing_list
    const { error: mlError } = await supabase
      .from('mailing_list')
      .update({
        is_active: false,
        unsubscribed_at: new Date().toISOString(),
      })
      .eq('email', email.toLowerCase().trim())

    if (mlError) {
      console.error('Mailing list unsubscribe error:', mlError)
    }

    // Update student_profiles if we have a userId
    if (userId) {
      await supabase
        .from('student_profiles')
        .update({
          subscribed_to_mailing_list: false,
        })
        .eq('user_id', userId)
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Unsubscribe route error:', error)
    return NextResponse.json({ error: error.message || 'Failed to unsubscribe' }, { status: 500 })
  }
}