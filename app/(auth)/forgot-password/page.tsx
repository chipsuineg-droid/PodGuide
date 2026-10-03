"use client"
import { useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Loader2, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const supabase = createClient()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!email) { setError("Please enter your email."); return }
    setLoading(true)
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    })
    if (err) { setError(err.message); setLoading(false) }
    else { setSent(true); setLoading(false) }
  }

  if (sent) return (
    <div className="text-center space-y-4">
      <CheckCircle size={48} className="text-green-500 mx-auto" />
      <h2 className="text-xl font-bold text-white">Check your inbox</h2>
      <p className="text-gray-400 text-sm">We sent a password reset link to <strong className="text-white">{email}</strong></p>
      <Link href="/login" className="block mt-4 text-brand hover:text-red-400 text-sm font-medium transition-colors">Back to login</Link>
    </div>
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1 text-white">Reset password</h2>
      <p className="text-gray-400 mb-6 text-sm">Enter your email and we will send you a reset link.</p>
      {error && <div className="mb-4 p-3 bg-brand/10 border border-brand/30 rounded-lg text-sm text-brand">{error}</div>}
      <form onSubmit={handleReset} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors"
            placeholder="student@university.edu" />
        </div>
        <button type="submit" disabled={loading}
          className="w-full bg-brand hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50">
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Send reset link"}
        </button>
      </form>
      <div className="mt-6 text-center">
        <Link href="/login" className="text-gray-500 hover:text-white text-sm transition-colors">&larr; Back to login</Link>
      </div>
    </div>
  )
}