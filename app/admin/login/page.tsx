"use client"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { ShieldCheck, Loader2 } from "lucide-react"

export default function AdminLogin() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError("")

    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) { setError(authError.message); setLoading(false); return }

    // Check if they are actually an admin
    const { data: profile } = await supabase.from("student_profiles").select("is_admin").eq("user_id", data.user.id).single()
    if (profile?.is_admin) {
      router.push("/admin")
    } else {
      await supabase.auth.signOut()
      setError("Access Denied: This account does not have administrator privileges.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-brand/10 border border-brand/30 rounded-full flex items-center justify-center text-brand mx-auto mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Admin Portal</h1>
          <p className="text-sm text-gray-500">Sign in with your administrator credentials to manage PodGuide.</p>
        </div>

        {error && <div className="p-3 bg-brand/10 border border-brand/30 rounded-xl text-sm text-brand text-center">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Admin Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors" />
          </div>
          <button type="submit" disabled={loading || !email || !password}
            className="w-full bg-brand text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 mt-4">
            {loading ? <Loader2 size={18} className="animate-spin" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  )
}