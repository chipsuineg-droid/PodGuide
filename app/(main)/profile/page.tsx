"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { LogOut, Loader2, Save, Lock, ChevronDown } from "lucide-react"

const universities = ["University of Cape Town (UCT)","University of the Witwatersrand (Wits)","Makerere University","University of Nairobi (UoN)","University of Ibadan (UI)","University of Lagos (UNILAG)","University of Ghana","KNUST","Addis Ababa University","Cairo University","University of Pretoria","Stellenbosch University","University of Rwanda","University of Zambia (UNZA)","Muhimbili University (MUHAS)","University of Zimbabwe","University of Botswana","University of Malawi","University of Auckland","University of Otago","AUT"]
const programmes = ["Medicine (MBChB / MBBS)","Nursing (BSc Nursing / BNurs)","Pharmacy (BPharm / PharmD)","Dentistry (BDS / BChD)","Physiotherapy (BSc / BPT)","Public Health (BSc / MPH)","Medical Laboratory Science (BMLS)","Radiography / Medical Imaging","Biomedical Science (BSc)","Clinical Officer / Medical Assistant","Midwifery","Nutrition & Dietetics","Optometry","Veterinary Medicine (DVM)"]
const levels = ["Year 1 (Pre-clinical / Basic Sciences)","Year 2","Year 3 (Pre-clinical)","Year 4 (Clinical Rotations)","Year 5","Year 6 (Final Year)","Year 7","Internship / Housemanship","Post-graduate / Residency"]

export default function ProfilePage() {
  const supabase = createClient()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [savingPw, setSavingPw] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [form, setForm] = useState({ full_name: "", bio: "", institution: "", programme: "", level: "" })
  const [pw, setPw] = useState({ current: "", newPw: "", confirm: "" })

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push("/login"); return }
      const m = user.user_metadata || {}
      setForm({ full_name: m.full_name || "", bio: m.bio || "", institution: m.institution || "", programme: m.programme || "", level: m.level || "" })
      setLoading(false)
    })
  }, [])

  const initials = form.full_name.split(" ").filter(Boolean).map(n => n[0]).join("").substring(0, 2).toUpperCase() || "S"

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(""); setSuccess(""); setSaving(true)
    const { error: err } = await supabase.auth.updateUser({ data: form })
    if (err) { setError(err.message) } else { setSuccess("Profile saved successfully!") }
    setSaving(false)
    setTimeout(() => setSuccess(""), 3000)
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(""); setSuccess("")
    if (pw.newPw !== pw.confirm) { setError("New passwords do not match."); return }
    if (pw.newPw.length < 8) { setError("New password must be at least 8 characters."); return }
    setSavingPw(true)
    const { error: err } = await supabase.auth.updateUser({ password: pw.newPw })
    if (err) { setError(err.message) } else { setSuccess("Password updated!"); setPw({ current: "", newPw: "", confirm: "" }) }
    setSavingPw(false)
    setTimeout(() => setSuccess(""), 3000)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  if (loading) return <div className="flex items-center justify-center h-64"><Loader2 size={32} className="animate-spin text-brand" /></div>

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold">My Profile</h1>
          <p className="text-gray-400 mt-1">Manage your account and academic details.</p>
        </div>
        <button onClick={handleSignOut} className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors">
          <LogOut size={16} /> Sign Out
        </button>
      </div>

      {success && <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-sm text-green-400">{success}</div>}
      {error && <div className="p-3 bg-brand/10 border border-brand/30 rounded-xl text-sm text-brand">{error}</div>}

      {/* Avatar + Name */}
      <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center text-3xl font-bold text-white flex-shrink-0">{initials}</div>
          <div>
            <h2 className="text-xl font-bold text-white">{form.full_name || "Your Name"}</h2>
            <p className="text-gray-400 text-sm">{form.level} &bull; {form.programme}</p>
            <p className="text-gray-500 text-xs mt-0.5">{form.institution}</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Full Name</label>
              <input type="text" value={form.full_name} onChange={e => setForm(f => ({...f, full_name: e.target.value}))}
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white outline-none transition-colors text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Institution</label>
              <div className="relative">
                <select value={form.institution} onChange={e => setForm(f => ({...f, institution: e.target.value}))}
                  className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white outline-none transition-colors text-sm appearance-none">
                  <option value="">Select institution...</option>
                  {universities.map(u => <option key={u} value={u}>{u}</option>)}
                  <option value={form.institution}>{form.institution}</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Programme</label>
              <div className="relative">
                <select value={form.programme} onChange={e => setForm(f => ({...f, programme: e.target.value}))}
                  className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white outline-none transition-colors text-sm appearance-none">
                  <option value="">Select programme...</option>
                  {programmes.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Year / Level</label>
              <div className="relative">
                <select value={form.level} onChange={e => setForm(f => ({...f, level: e.target.value}))}
                  className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white outline-none transition-colors text-sm appearance-none">
                  <option value="">Select year...</option>
                  {levels.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Bio</label>
            <textarea value={form.bio} onChange={e => setForm(f => ({...f, bio: e.target.value}))}
              placeholder="Tell the community about yourself..."
              className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white outline-none transition-colors text-sm resize-none min-h-[80px]" />
          </div>
          <div className="flex justify-end">
            <button type="submit" disabled={saving}
              className="flex items-center gap-2 bg-brand hover:bg-red-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors disabled:opacity-50">
              {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Password Change */}
      <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Lock size={18} className="text-brand" />
          <h2 className="font-bold text-white">Change Password</h2>
        </div>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">New Password</label>
              <input type="password" minLength={8} value={pw.newPw} onChange={e => setPw(p => ({...p, newPw: e.target.value}))} placeholder="Min. 8 characters"
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white outline-none transition-colors text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Confirm New Password</label>
              <input type="password" value={pw.confirm} onChange={e => setPw(p => ({...p, confirm: e.target.value}))} placeholder="Repeat password"
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white outline-none transition-colors text-sm" />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" disabled={savingPw || !pw.newPw || !pw.confirm}
              className="flex items-center gap-2 bg-[#1a1a1a] border border-[#333] hover:border-brand text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors disabled:opacity-50">
              {savingPw ? <Loader2 size={14} className="animate-spin" /> : <Lock size={14} />} Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}