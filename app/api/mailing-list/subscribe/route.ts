import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, fullName, userId, source } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const supabase = await createClient()

    // Upsert into mailing_list
    const { error: mlError } = await supabase
      .from('mailing_list')
      .upsert(
        {
          email: email.toLowerCase().trim(),
          full_name: fullName || null,
          user_id: userId || null,
          is_active: true,
          source: source || 'signup',
          subscribed_at: new Date().toISOString(),
        },
        { onConflict: 'email' }
      )

    if (mlError) {
      console.error('Mailing list upsert error:', mlError)
    }

    // Update student_profiles if we have a userId
    if (userId) {
      await supabase
        .from('student_profiles')
        .update({
          subscribed_to_mailing_list: true,
          mailing_list_asked_at: new Date().toISOString(),
        })
        .eq('user_id', userId)
    }

    // Send welcome email via Resend (only if API key is configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'PodGuide <noreply@podguide.org.zw>',
          to: email,
          subject: 'Welcome to the PodGuide Community! 🎓',
          html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; background: #0a0a0a; color: #ffffff; padding: 32px; max-width: 600px; margin: 0 auto;">
  <div style="text-align: center; margin-bottom: 32px;">
    <h1 style="color: #e53e3e; font-size: 28px; margin: 0;">PodGuide 🎓</h1>
    <p style="color: #888; margin-top: 4px;">Your medical study companion</p>
  </div>
  <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 24px;">
    <h2 style="color: #fff; margin-top: 0;">Welcome${fullName ? `, ${fullName}` : ''}! 👋</h2>
    <p style="color: #aaa; line-height: 1.6;">
      You're now subscribed to PodGuide updates. We'll send you:
    </p>
    <ul style="color: #aaa; line-height: 1.8;">
      <li>📚 New study resource announcements</li>
      <li>⏰ Exam reminders & important dates</li>
      <li>🚀 New feature releases</li>
      <li>💡 Study tips & community highlights</li>
    </ul>
    <div style="text-align: center; margin-top: 24px;">
      <a href="https://podguide.org.zw/dashboard" style="background: #e53e3e; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Go to Dashboard</a>
    </div>
  </div>
  <p style="color: #555; font-size: 12px; text-align: center; margin-top: 24px;">
    You can unsubscribe at any time from your account settings.<br>
    PodGuide · Zimbabwe Medical Student Platform
  </p>
</body>
</html>
          `,
        })
      } catch (emailError) {
        // Don't fail the subscription if email sending fails
        console.error('Welcome email error:', emailError)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Subscribe route error:', error)
    return NextResponse.json({ error: error.message || 'Failed to subscribe' }, { status: 500 })
  }
}