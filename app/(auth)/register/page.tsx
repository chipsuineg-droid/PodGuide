"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const supabase = createClient()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState("")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!name || !email || !password) { setError("Please fill in all fields."); return }
    if (password.length < 8) { setError("Password must be at least 8 characters."); return }
    setLoading(true)
    const { error: err } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: name } }
    })
    if (err) { setError(err.message); setLoading(false) }
    else { router.push("/onboarding") }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1 text-white">Create your account</h2>
      <p className="text-gray-400 mb-6 text-sm">Join the PodGuide student community</p>
      {error && <div className="mb-4 p-3 bg-brand/10 border border-brand/30 rounded-lg text-sm text-brand">{error}</div>}
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
          <input type="text" required value={name} onChange={e => setName(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
            placeholder="e.g. John Mensah" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
            placeholder="student@university.edu" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
          <div className="relative">
            <input type={showPw ? "text" : "password"} required minLength={8} value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors pr-10"
              placeholder="Min. 8 characters" />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <button type="submit" disabled={loading}
          className="w-full bg-brand hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center mt-2 disabled:opacity-50">
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Create account"}
        </button>
      </form>
      <div className="mt-6 pt-6 border-t border-[#222] text-center">
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-brand hover:text-red-400 font-medium transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  )
}