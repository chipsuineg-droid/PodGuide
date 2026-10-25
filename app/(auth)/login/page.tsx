"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Eye, EyeOff, Loader2, Mail, X } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState("")
  const [showMailingBanner, setShowMailingBanner] = useState(false)
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null)
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(null)
  const [loggedInName, setLoggedInName] = useState<string | null>(null)
  const [bannerLoading, setBannerLoading] = useState(false)

  // Check for OAuth error param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("error") === "auth_failed") {
      setError("Sign-in failed. Please try again.")
    }
  }, [])

  const checkMailingListStatus = async (userId: string, userEmail: string, fullName: string | null) => {
    const { data: profile } = await supabase
      .from("student_profiles")
      .select("mailing_list_asked_at")
      .eq("user_id", userId)
      .single()

    if (!profile?.mailing_list_asked_at) {
      setLoggedInUserId(userId)
      setLoggedInEmail(userEmail)
      setLoggedInName(fullName)
      setShowMailingBanner(true)
    }
  }

  const handleMailingResponse = async (subscribe: boolean) => {
    setBannerLoading(true)
    try {
      if (subscribe && loggedInEmail) {
        await fetch("/api/mailing-list/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: loggedInEmail,
            fullName: loggedInName,
            userId: loggedInUserId,
            source: "login_prompt",
          }),
        })
      } else if (!subscribe && loggedInUserId) {
        // Mark as asked but not subscribed
        await supabase
          .from("student_profiles")
          .update({ mailing_list_asked_at: new Date().toISOString() })
          .eq("user_id", loggedInUserId)
      }
    } catch (e) {
      // Don't block navigation on mailing list errors
    }
    setShowMailingBanner(false)
    router.push("/dashboard")
    router.refresh()
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!email || !password) { setError("Please fill in all fields."); return }
    setLoading(true)

    try {
      const { data, error: err } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      })

      if (err) {
        if (err.message.toLowerCase().includes("email not confirmed")) {
          setError("Please confirm your email address to continue. Check your inbox for a verification link.")
        } else if (err.message.toLowerCase().includes("invalid login credentials")) {
          setError("Invalid email or password. If you signed up with Google, please use 'Continue with Google' above, or click 'Forgot password?' to set a password.")
        } else {
          setError(err.message)
        }
        setLoading(false)
        return
      }

      const user = data.user
      const isOnboarded = user?.user_metadata?.onboarding_complete

      if (!isOnboarded) {
        router.push("/onboarding")
        router.refresh()
        return
      }

      // Check mailing list status before redirecting
      await checkMailingListStatus(
        user.id,
        user.email!,
        user.user_metadata?.full_name || null
      )

      if (!showMailingBanner) {
        router.push("/dashboard")
        router.refresh()
      }
      setLoading(false)
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred.")
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setGoogleLoading(true)
    setError("")
    const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    const redirectUrl = isLocal
      ? `${window.location.origin}/auth/callback`
      : "https://www.podguide.org.zw/auth/callback"
    const { error: err } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl,
      },
    })
    if (err) {
      setError("Google sign-in failed. Please try again.")
      setGoogleLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1 text-white">Welcome back</h2>
      <p className="text-gray-400 mb-6 text-sm">Sign in to your PodGuide account</p>

      {error && (
        <div className="mb-4 p-3 bg-brand/10 border border-brand/30 rounded-lg text-sm text-brand">
          {error}
        </div>
      )}

      {/* Google OAuth Button */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={googleLoading || loading}
        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2.5 rounded-lg transition-colors mb-4 disabled:opacity-50"
      >
        {googleLoading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.616z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
            <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
        )}
        Continue with Google
      </button>

      {/* Divider */}
      <div className="relative flex items-center my-5">
        <div className="flex-1 border-t border-[#333]" />
        <span className="mx-3 text-xs text-gray-500">or sign in with email</span>
        <div className="flex-1 border-t border-[#333]" />
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
            placeholder="e.g. name@gmail.com, university email..."
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <Link href="/forgot-password" className="text-xs text-brand hover:text-red-400 transition-colors">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors pr-10"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading || googleLoading}
          className="w-full bg-brand hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center mt-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign in"}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-[#222] text-center">
        <p className="text-gray-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-brand hover:text-red-400 font-medium transition-colors">
            Create one
          </Link>
        </p>
      </div>

      {/* Mailing list banner - slide up from bottom */}
      {showMailingBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#111] border-t border-[#333] shadow-2xl px-4 py-4 max-w-2xl mx-auto sm:rounded-t-xl">
            <div className="flex items-start gap-3">
              <div className="text-2xl mt-0.5">📬</div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm">Want PodGuide updates & reminders in your inbox?</p>
                <p className="text-gray-400 text-xs mt-0.5">Study tips, exam reminders, and new feature announcements.</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleMailingResponse(true)}
                    disabled={bannerLoading}
                    className="bg-brand hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {bannerLoading ? <Loader2 className="animate-spin" size={12} /> : "Yes, subscribe"}
                  </button>
                  <button
                    onClick={() => handleMailingResponse(false)}
                    disabled={bannerLoading}
                    className="bg-[#222] hover:bg-[#333] text-gray-300 text-xs font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                  >
                    No thanks
                  </button>
                </div>
              </div>
              <button
                onClick={() => setShowMailingBanner(false)}
                className="text-gray-500 hover:text-white mt-0.5 flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}