"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Eye, EyeOff, Loader2, MailCheck } from "lucide-react"
import { HEALTH_PROGRAMMES, ACADEMIC_LEVELS, deriveProgramId, deriveAcademicLevel } from "@/lib/curriculum-engine"

function getPasswordStrength(pw: string): { score: number; label: string; color: string } {
  if (pw.length === 0) return { score: 0, label: "", color: "" }
  let score = 0
  if (pw.length >= 8) score++
  if (pw.length >= 12) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  if (score <= 2) return { score, label: "Weak", color: "#e53e3e" }
  if (score <= 3) return { score, label: "Medium", color: "#f6ad55" }
  return { score, label: "Strong", color: "#48bb78" }
}

export default function RegisterPage() {
  const router = useRouter()
  const supabase = createClient()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [programme, setProgramme] = useState(HEALTH_PROGRAMMES[0])
  const [level, setLevel] = useState("Year 1")
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const [showConfirmPw, setShowConfirmPw] = useState(false)
  const [error, setError] = useState("")
  const [mailingList, setMailingList] = useState(true)
  const [emailConfirmationRequired, setEmailConfirmationRequired] = useState(false)

  const pwStrength = getPasswordStrength(password)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!name || !email || !password || !confirmPassword) { setError("Please fill in all fields."); return }
    if (password.length < 8) { setError("Password must be at least 8 characters."); return }
    if (password !== confirmPassword) { setError("Passwords do not match."); return }
    setLoading(true)

    try {
      const program_id = deriveProgramId(programme)
      const academic_level = deriveAcademicLevel(level)

      const { data, error: err } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: name.trim(),
            programme,
            level,
            program_id,
            academic_level,
          }
        }
      })

      if (err) {
        setError(err.message)
        setLoading(false)
        return
      }

      const userId = data?.user?.id
      const userEmail = email.trim()

      if (userId) {
        try {
          await supabase.from("student_profiles").upsert({
            user_id: userId,
            full_name: name.trim(),
            programme,
            level,
            program_id,
            academic_level,
          }, { onConflict: "user_id" })
        } catch (profileErr) {
          console.error("Profile save error:", profileErr)
        }
      }

      // Handle mailing list subscription
      if (mailingList && userId) {
        try {
          await fetch("/api/mailing-list/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: userEmail,
              fullName: name.trim(),
              userId,
              source: "signup",
            }),
          })
        } catch (mlErr) {
          // Don't block registration on mailing list errors
        }
      }

      // If Supabase returned a session, user is logged in -> go to onboarding
      if (data?.session) {
        router.push("/onboarding")
        router.refresh()
        return
      }

      // If no session returned, try signing in directly
      const { data: signInData } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password,
      })

      if (signInData?.session) {
        router.push("/onboarding")
        router.refresh()
        return
      }

      // Email confirmation required
      setEmailConfirmationRequired(true)
      setLoading(false)
    } catch (e: any) {
      setError(e.message || "Registration failed. Please try again.")
      setLoading(false)
    }
  }

  const handleGoogleSignup = async () => {
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

  if (emailConfirmationRequired) {
    return (
      <div className="text-center space-y-4 py-4">
        <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-full flex items-center justify-center mx-auto text-brand">
          <MailCheck size={24} />
        </div>
        <h2 className="text-2xl font-bold text-white">Check your email</h2>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          We&apos;ve sent a verification link to <strong className="text-white">{email}</strong>. Please confirm your email address to sign in.
        </p>
        <div className="pt-4">
          <Link
            href="/login"
            className="inline-block bg-brand hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all"
          >
            Go to Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1 text-white">Create your account</h2>
      <p className="text-gray-400 mb-6 text-sm">Join the PodGuide student community</p>

      {error && (
        <div className="mb-4 p-3 bg-brand/10 border border-brand/30 rounded-lg text-sm text-brand">
          {error}
        </div>
      )}

      {/* Google OAuth Button */}
      <button
        type="button"
        onClick={handleGoogleSignup}
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
        <span className="mx-3 text-xs text-gray-500">or register with email</span>
        <div className="flex-1 border-t border-[#333]" />
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
            placeholder="e.g. John Mensah"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
            placeholder="e.g. name@gmail.com, yahoo, university email..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              required
              minLength={8}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors pr-10"
              placeholder="Min. 8 characters"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {/* Password strength indicator */}
          {password.length > 0 && (
            <div className="mt-2">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: i <= pwStrength.score ? pwStrength.color : "#333",
                    }}
                  />
                ))}
              </div>
              <p className="text-xs" style={{ color: pwStrength.color }}>
                {pwStrength.label} password
              </p>
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPw ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors pr-10"
              placeholder="Re-enter your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPw(!showConfirmPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showConfirmPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {confirmPassword && password !== confirmPassword && (
            <p className="text-xs text-brand mt-1">Passwords do not match</p>
          )}
        </div>

        {/* Programme and Year / Level */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Programme</label>
            <select
              value={programme}
              onChange={e => setProgramme(e.target.value)}
              className="w-full bg-[#111] border border-[#333] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand transition-colors text-xs"
            >
              {HEALTH_PROGRAMMES.map(p => (
                <option key={p} value={p}>{p === "other" ? "Other Health Programme..." : p}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Year / Level</label>
            <select
              value={level}
              onChange={e => setLevel(e.target.value)}
              className="w-full bg-[#111] border border-[#333] rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand transition-colors text-xs"
            >
              {ACADEMIC_LEVELS.map(l => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mailing list checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={mailingList}
              onChange={e => setMailingList(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-4 h-4 rounded border-2 transition-colors flex items-center justify-center ${
                mailingList ? "bg-brand border-brand" : "bg-transparent border-[#555] group-hover:border-gray-400"
              }`}
            >
              {mailingList && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </div>
          <span className="text-xs text-gray-400 leading-relaxed">
            Subscribe to PodGuide updates, study reminders &amp; announcements
          </span>
        </label>

        <button
          type="submit"
          disabled={loading || googleLoading}
          className="w-full bg-brand hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center mt-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Create account"}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-[#222] text-center">
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-brand hover:text-red-400 font-medium transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}