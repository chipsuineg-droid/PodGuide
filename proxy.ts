import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bltbfrgfsjppwhrevlql.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// ── In-Memory Rate Limiter (Sliding Window per IP) ──────────────────────────
interface RateLimitRecord {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitRecord>()

// Clean up stale entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, 5 * 60 * 1000)

function checkRateLimit(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count += 1
  return true
}

export async function proxy(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const proto = request.headers.get('x-forwarded-proto')
  const { pathname } = request.nextUrl
  const isProduction = process.env.NODE_ENV === 'production'

  // 1. Force HTTPS in production
  if (isProduction && proto === 'http') {
    const httpsUrl = request.nextUrl.clone()
    httpsUrl.protocol = 'https:'
    return NextResponse.redirect(httpsUrl, 301)
  }

  // 2. Canonical Vercel preview redirect to official domain
  if (host.includes('.vercel.app')) {
    const url = request.nextUrl.clone()
    url.host = 'www.podguide.org.zw'
    url.protocol = 'https'
    url.port = ''
    return NextResponse.redirect(url, 308)
  }

  // 3. CSRF Protection for state-changing HTTP requests
  const method = request.method.toUpperCase()
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
    const origin = request.headers.get('origin')
    const referer = request.headers.get('referer')
    const allowedHosts = ['podguide.org.zw', 'www.podguide.org.zw', 'localhost', '127.0.0.1']

    if (origin) {
      try {
        const originHost = new URL(origin).hostname
        const isAllowed = allowedHosts.some(h => originHost === h || originHost.endsWith(`.${h}`))
        if (!isAllowed) {
          return new NextResponse(JSON.stringify({ error: 'CSRF validation failed: Untrusted origin' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      } catch {
        return new NextResponse(JSON.stringify({ error: 'CSRF validation failed: Invalid origin format' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        })
      }
    } else if (referer && isProduction) {
      try {
        const refererHost = new URL(referer).hostname
        const isAllowed = allowedHosts.some(h => refererHost === h || refererHost.endsWith(`.${h}`))
        if (!isAllowed) {
          return new NextResponse(JSON.stringify({ error: 'CSRF validation failed: Untrusted referer' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      } catch {
        // Fall through
      }
    }
  }

  // 4. Rate Limiting for Auth & Sensitive AI Endpoints
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'

  const isAuthAttempt = ['/login', '/register', '/forgot-password'].includes(pathname)
  const isAiEndpoint = ['/api/chat', '/api/notebook-ai', '/api/questions/generate'].some(p => pathname.startsWith(p))

  if (isAuthAttempt && method === 'POST') {
    // 15 login/register attempts per minute per IP
    const allowed = checkRateLimit(`auth_${clientIp}`, 15, 60 * 1000)
    if (!allowed) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many authentication attempts. Please slow down and try again in 1 minute.' }),
        { status: 429, headers: { 'Content-Type': 'application/json', 'Retry-After': '60' } }
      )
    }
  } else if (isAiEndpoint) {
    // 30 AI requests per minute per IP
    const allowed = checkRateLimit(`ai_${clientIp}`, 30, 60 * 1000)
    if (!allowed) {
      return new NextResponse(
        JSON.stringify({ error: 'AI rate limit reached. Please wait a moment before sending more requests.' }),
        { status: 429, headers: { 'Content-Type': 'application/json', 'Retry-After': '60' } }
      )
    }
  }

  // 5. Supabase Session Management with Secure Cookie Attributes
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
            supabaseResponse = NextResponse.next({ request })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, {
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

  const { data: { user } } = await supabase.auth.getUser()

  // 6. Lock Admin Pages at the Server Proxy Layer
  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') {
      if (user) {
        // Check if user is admin
        const { data: profile } = await supabase
          .from('student_profiles')
          .select('is_admin')
          .eq('user_id', user.id)
          .single()

        if (profile?.is_admin) {
          return NextResponse.redirect(new URL('/admin', request.url))
        }
      }
      return supabaseResponse
    }

    // Any other /admin route requires active admin clearance
    if (!user) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    const { data: profile } = await supabase
      .from('student_profiles')
      .select('is_admin')
      .eq('user_id', user.id)
      .single()

    if (!profile?.is_admin) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return supabaseResponse
  }

  // 7. General Protected Student Routes
  const protectedPaths = [
    '/dashboard',
    '/learn',
    '/practise',
    '/campus',
    '/create',
    '/mentor',
    '/grow',
    '/profile',
    '/module',
    '/library',
    '/medstore',
  ]
  const isProtected = protectedPaths.some(p => pathname.startsWith(p))
  if (isProtected && !user) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  const authPaths = ['/login', '/register']
  const isAuthPage = authPaths.some(p => pathname.startsWith(p))
  if (isAuthPage && user) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
