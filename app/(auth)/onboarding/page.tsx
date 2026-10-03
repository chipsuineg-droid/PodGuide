"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { deriveProgramId, deriveAcademicLevel } from "@/lib/curriculum-engine"
import { Building2, GraduationCap, BookOpen, ChevronRight, Loader2 } from "lucide-react"

const universities = [
  "University of Cape Town (UCT)","University of the Witwatersrand (Wits)","University of Pretoria",
  "Stellenbosch University","University of KwaZulu-Natal","University of the Free State",
  "Makerere University","Mbarara University of Science and Technology",
  "University of Nairobi (UoN)","Kenyatta University","Moi University",
  "University of Ghana","Kwame Nkrumah University of Science and Technology (KNUST)",
  "University of Ibadan (UI)","University of Lagos (UNILAG)","Ahmadu Bello University (ABU)",
  "Obafemi Awolowo University (OAU)","University of Benin","Bayero University Kano",
  "Addis Ababa University","University of Gondar","Jimma University",
  "Cairo University","Alexandria University","Ain Shams University",
  "University of Rwanda","University of Zambia (UNZA)","University of Zimbabwe",
  "University of Botswana","University of Malawi (College of Medicine)",
  "Muhimbili University of Health and Allied Sciences (MUHAS)",
  "University of Dar es Salaam","Kilimanjaro Christian Medical University College",
  "University of Auckland","University of Otago","AUT",
].sort()

const programmes = [
  "Medicine (MBChB / MBBS)","Nursing (BSc Nursing / BNurs)",
  "Pharmacy (BPharm / PharmD)","Dentistry (BDS / BChD)",
  "Physiotherapy (BSc / BPT)","Occupational Therapy",
  "Public Health (BSc / MPH)","Medical Laboratory Science (BMLS)",
  "Radiography / Medical Imaging","Biomedical Science (BSc)",
  "Clinical Officer / Medical Assistant","Midwifery","Nutrition & Dietetics",
  "Optometry","Veterinary Medicine (DVM)",
]

const levels = [
  "Year 1 (Pre-clinical / Basic Sciences)","Year 2","Year 3 (Pre-clinical)",
  "Year 4 (Clinical Rotations)","Year 5","Year 6 (Final Year)",
  "Year 7","Internship / Housemanship","Post-graduate / Residency",
]

export default function OnboardingPage() {
  const router = useRouter()
  const supabase = createClient()
  const [institution, setInstitution] = useState("")
  const [customInstitution, setCustomInstitution] = useState("")
  const [programme, setProgramme] = useState("")
  const [customProgramme, setCustomProgramme] = useState("")
  const [level, setLevel] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const finalInstitution = institution === "other" ? customInstitution.trim() : institution
  const finalProgramme = programme === "other" ? customProgramme.trim() : programme
  const isValid = finalInstitution && finalProgramme && level

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) { setError("Please complete all fields."); return }
    setError("")
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setError("User not found. Please log in."); setLoading(false); return }
    const program_id = deriveProgramId(finalProgramme)
    const academic_level = deriveAcademicLevel(level)

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

    await supabase.from("student_profiles").update({
      onboarding_complete: true,
      program_id,
      academic_level,
    }).eq("user_id", user.id)

    router.push("/dashboard")
    router.refresh()
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
          {error && <div className="mb-4 p-3 bg-brand/10 border border-brand/30 rounded-lg text-sm text-brand">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-white">
                <Building2 size={16} className="text-brand" /> University or College
              </label>
              <select value={institution} onChange={e => setInstitution(e.target.value)} required
                className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl px-4 py-3 text-white outline-none transition-colors">
                <option value="" disabled>Select your institution...</option>
                {universities.map(u => <option key={u} value={u}>{u}</option>)}
                <option value="other">Other — add your own</option>
              </select>
              {institution === "other" && (
                <input type="text" placeholder="Type your university name" value={customInstitution}
                  onChange={e => setCustomInstitution(e.target.value)} autoFocus
                  className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl px-4 py-3 text-white outline-none transition-colors" />
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-white">
                <GraduationCap size={16} className="text-brand" /> Programme of Study
              </label>
              <select value={programme} onChange={e => setProgramme(e.target.value)} required
                className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl px-4 py-3 text-white outline-none transition-colors">
                <option value="" disabled>Select your programme...</option>
                {programmes.map(p => <option key={p} value={p}>{p}</option>)}
                <option value="other">Other — add your own</option>
              </select>
              {programme === "other" && (
                <input type="text" placeholder="Type your degree name" value={customProgramme}
                  onChange={e => setCustomProgramme(e.target.value)} autoFocus
                  className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl px-4 py-3 text-white outline-none transition-colors" />
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-white">
                <BookOpen size={16} className="text-brand" /> Year / Level
              </label>
              <select value={level} onChange={e => setLevel(e.target.value)} required
                className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl px-4 py-3 text-white outline-none transition-colors">
                <option value="" disabled>Select your current year...</option>
                {levels.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            <button type="submit" disabled={loading || !isValid}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2">
              {loading ? <Loader2 className="animate-spin" size={20} /> : (<>Complete Setup <ChevronRight size={18} /></>)}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}