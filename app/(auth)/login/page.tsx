"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState("")

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
          setError("Email not confirmed. Please check your inbox for the confirmation link, or disable email confirmation in your Supabase Auth settings.")
        } else if (err.message.toLowerCase().includes("invalid login credentials")) {
          setError("Invalid email or password. Please check your credentials.")
        } else {
          setError(err.message)
        }
        setLoading(false)
        return
      }

      const user = data.user
      const isOnboarded = user?.user_metadata?.onboarding_complete

      if (isOnboarded) {
        router.push("/dashboard")
      } else {
        router.push("/onboarding")
      }
      router.refresh()
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred.")
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1 text-white">Welcome back</h2>
      <p className="text-gray-400 mb-6 text-sm">Sign in to your PodGuide account</p>
      {error && <div className="mb-4 p-3 bg-brand/10 border border-brand/30 rounded-lg text-sm text-brand">{error}</div>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
            placeholder="student@university.edu" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <Link href="/forgot-password" className="text-xs text-brand hover:text-red-400 transition-colors">Forgot password?</Link>
          </div>
          <div className="relative">
            <input type={showPw ? "text" : "password"} required value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors pr-10"
              placeholder="••••••••" />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <button type="submit" disabled={loading}
          className="w-full bg-brand hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center mt-2 disabled:opacity-50">
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign in"}
        </button>
      </form>
      <div className="mt-6 pt-6 border-t border-[#222] text-center">
        <p className="text-gray-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-brand hover:text-red-400 font-medium transition-colors">Create one</Link>
        </p>
      </div>
    </div>
  )
}