"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Loader2, LogIn } from "lucide-react"
import Link from "next/link"
import { deriveProgramId, deriveAcademicLevel, HEALTH_PROGRAMMES, ACADEMIC_LEVELS } from "@/lib/curriculum-engine"

const INSTITUTIONS = [
  "University of Zimbabwe (UZ)",
  "National University of Science and Technology (NUST)",
  "Midlands State University (MSU)",
  "Africa University",
  "Great Zimbabwe University (GZU)",
  "University of Cape Town (UCT)",
  "University of the Witwatersrand (Wits)",
  "Stellenbosch University",
  "University of Pretoria",
  "University of KwaZulu-Natal (UKZN)",
  "Makerere University",
  "University of Nairobi",
  "University of Zambia (UNZA)",
  "other"
]

const PROGRAMMES = HEALTH_PROGRAMMES
const LEVELS = ACADEMIC_LEVELS

export default function OnboardingPage() {
  const router = useRouter()
  const supabase = createClient()

  const [institution, setInstitution] = useState(INSTITUTIONS[0])
  const [customInstitution, setCustomInstitution] = useState("")
  const [programme, setProgramme] = useState(PROGRAMMES[0])
  const [customProgramme, setCustomProgramme] = useState("")
  const [level, setLevel] = useState(LEVELS[0])
  const [loading, setLoading] = useState(false)
  const [checkingAuth, setCheckingAuth] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setIsAuthenticated(true)
      } else {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
          setError("No active session found. Please sign in to complete your profile.")
        }
      }
      setCheckingAuth(false)
    }
    checkUser()
  }, [])

  const finalInstitution = institution === "other" ? customInstitution.trim() : institution
  const finalProgramme = programme === "other" ? customProgramme.trim() : programme
  const isValid = finalInstitution && finalProgramme && level

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) { setError("Please complete all fields."); return }
    setError("")
    setLoading(true)

    let currentUser = null
    const { data: userData } = await supabase.auth.getUser()
    currentUser = userData.user

    if (!currentUser) {
      const { data: sessionData } = await supabase.auth.getSession()
      currentUser = sessionData.session?.user || null
    }

    if (!currentUser) {
      setError("Session expired or user not logged in. Please sign in.")
      setLoading(false)
      return
    }

    const program_id = deriveProgramId(finalProgramme)
    const academic_level = deriveAcademicLevel(level)

    try {
      await supabase.auth.updateUser({
        data: {
          institution: finalInstitution,
          programme: finalProgramme,
          level,
          program_id,
          academic_level,
          onboarding_complete: true,
        }
      })

      await supabase.from("student_profiles").upsert({
        user_id: currentUser.id,
        onboarding_complete: true,
        program_id,
        academic_level,
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id" })

      router.push("/dashboard")
      router.refresh()
    } catch (err: any) {
      setError(err.message || "Failed to save profile. Please try again.")
      setLoading(false)
    }
  }

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <Loader2 className="animate-spin text-brand" size={32} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-display font-bold">Pod<span className="text-brand">Guide</span></h1>
          <p className="text-xl font-bold text-white mt-4">Build Your Profile</p>
          <p className="text-gray-400 mt-1 text-sm">Tell us where and what you study so we can tailor your experience.</p>
        </div>

        <div className="bg-[#0d0d0d] border border-[#222] rounded-2xl p-6 sm:p-8 shadow-2xl">
          {error && (
            <div className="mb-6 p-4 bg-brand/10 border border-brand/30 rounded-xl text-sm text-brand flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span>{error}</span>
              {!isAuthenticated && (
                <Link
                  href="/login"
                  className="bg-brand text-white px-3.5 py-1.5 rounded-lg text-xs font-bold hover:bg-red-700 transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <LogIn size={13} /> Sign In
                </Link>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                University or Institution
              </label>
              <select
                value={institution}
                onChange={e => setInstitution(e.target.value)}
                className="w-full bg-[#161616] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors text-sm"
              >
                {INSTITUTIONS.map(inst => (
                  <option key={inst} value={inst}>{inst === "other" ? "Other Institution..." : inst}</option>
                ))}
              </select>
              {institution === "other" && (
                <input
                  type="text"
                  required
                  placeholder="Enter your university or college name"
                  value={customInstitution}
                  onChange={e => setCustomInstitution(e.target.value)}
                  className="mt-3 w-full bg-[#161616] border border-[#333] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors text-sm"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Programme of Study
              </label>
              <select
                value={programme}
                onChange={e => setProgramme(e.target.value)}
                className="w-full bg-[#161616] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors text-sm"
              >
                {PROGRAMMES.map(prog => (
                  <option key={prog} value={prog}>{prog === "other" ? "Other Programme..." : prog}</option>
                ))}
              </select>
              {programme === "other" && (
                <input
                  type="text"
                  required
                  placeholder="e.g. Clinical Nutrition, Audiology"
                  value={customProgramme}
                  onChange={e => setCustomProgramme(e.target.value)}
                  className="mt-3 w-full bg-[#161616] border border-[#333] rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-brand transition-colors text-sm"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Year / Level
              </label>
              <select
                value={level}
                onChange={e => setLevel(e.target.value)}
                className="w-full bg-[#161616] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors text-sm"
              >
                {LEVELS.map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading || !isValid}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-2 disabled:opacity-50 text-sm mt-4"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : "Complete Setup & Enter Dashboard"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}