import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bltbfrgfsjppwhrevlql.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export async function createClient() {
  const cookieStore = await cookies()
  const isProduction = process.env.NODE_ENV === 'production'

  return createServerClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, {
                ...options,
                httpOnly: options?.httpOnly ?? true,
                secure: options?.secure ?? isProduction,
                sameSite: options?.sameSite ?? 'lax',
                path: options?.path ?? '/',
              })
            )
          } catch {}
        },
      },
    }
  )
}
