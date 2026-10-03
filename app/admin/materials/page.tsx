"use client"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Loader2, Upload, FileText, CheckCircle, AlertTriangle } from "lucide-react"

const universities = ["University of Cape Town (UCT)","University of the Witwatersrand (Wits)","Makerere University","University of Nairobi (UoN)","University of Ibadan (UI)","University of Lagos (UNILAG)","University of Ghana","KNUST","Addis Ababa University","Cairo University","University of Pretoria","Stellenbosch University","University of Rwanda","University of Zambia (UNZA)","Muhimbili University (MUHAS)","University of Zimbabwe","University of Botswana","University of Malawi","University of Auckland","University of Otago","AUT"]
const programmes = ["Medicine (MBChB / MBBS)","Nursing (BSc Nursing / BNurs)","Pharmacy (BPharm / PharmD)","Dentistry (BDS / BChD)","Physiotherapy (BSc / BPT)","Public Health (BSc / MPH)","Medical Laboratory Science (BMLS)","Radiography / Medical Imaging","Biomedical Science (BSc)","Clinical Officer / Medical Assistant","Midwifery","Nutrition & Dietetics","Optometry","Veterinary Medicine (DVM)"]
const levels = ["Year 1 (Pre-clinical / Basic Sciences)","Year 2","Year 3 (Pre-clinical)","Year 4 (Clinical Rotations)","Year 5","Year 6 (Final Year)","Year 7","Internship / Housemanship","Post-graduate / Residency"]

export default function AdminMaterials() {
  const supabase = createClient()
  const [userId, setUserId] = useState<string | null>(null)
  
  const [matForm, setMatForm] = useState({ title: "", description: "", type: "pdf", programme: "", level: "", subject: "" })
  const [matFile, setMatFile] = useState<File | null>(null)
  const [matLoading, setMatLoading] = useState(false)
  const [matSuccess, setMatSuccess] = useState("")
  const [matError, setMatError] = useState("")

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id)
    })
  }, [])

  const handleUploadMaterial = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!matFile || !userId) return
    setMatLoading(true); setMatError(""); setMatSuccess("")
    
    try {
      const fileExt = matFile.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const { data: storageData, error: storageError } = await supabase.storage
        .from('materials')
        .upload(fileName, matFile)
        
      if (storageError) throw storageError
      
      const { data: publicUrlData } = supabase.storage.from('materials').getPublicUrl(fileName)

      const { error: dbError } = await supabase.from("materials").insert({
        title: matForm.title,
        description: matForm.description,
        material_type: matForm.type,
        programme: matForm.programme,
        level: matForm.level,
        subject: matForm.subject,
        file_url: publicUrlData.publicUrl,
        uploaded_by: userId
      })

      if (dbError) throw dbError

      setMatSuccess(`Successfully uploaded ${matForm.title}`)
      setMatForm({ title: "", description: "", type: "pdf", programme: "", level: "", subject: "" })
      setMatFile(null)
    } catch (err: any) {
      setMatError(err.message || "Failed to upload material. Ensure the 'materials' bucket exists in Supabase Storage.")
    } finally {
      setMatLoading(false)
    }
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Materials Library</h1>
        <p className="text-gray-400 mt-1">Upload PDFs, Past Papers, or Videos.</p>
      </div>

      <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6">
        {matSuccess && <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm flex items-center gap-2"><CheckCircle size={16}/> {matSuccess}</div>}
        {matError && <div className="p-4 bg-brand/10 border border-brand/30 rounded-xl text-brand text-sm flex items-center gap-2"><AlertTriangle size={16}/> {matError}</div>}

        <form onSubmit={handleUploadMaterial} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Title</label>
              <input required type="text" value={matForm.title} onChange={e => setMatForm(f => ({...f, title: e.target.value}))} placeholder="e.g. Intro to Anatomy Notes" className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Subject</label>
              <input required type="text" value={matForm.subject} onChange={e => setMatForm(f => ({...f, subject: e.target.value}))} placeholder="e.g. Anatomy" className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Programme</label>
              <select required value={matForm.programme} onChange={e => setMatForm(f => ({...f, programme: e.target.value}))} className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none">
                <option value="">Select...</option>
                {programmes.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Level</label>
              <select required value={matForm.level} onChange={e => setMatForm(f => ({...f, level: e.target.value}))} className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none">
                <option value="">Select...</option>
                {levels.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Type</label>
              <select value={matForm.type} onChange={e => setMatForm(f => ({...f, type: e.target.value}))} className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none">
                <option value="pdf">PDF Document</option>
                <option value="video">Video Lecture</option>
                <option value="past_paper">Past Paper</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1.5">Description (Optional)</label>
              <input type="text" value={matForm.description} onChange={e => setMatForm(f => ({...f, description: e.target.value}))} placeholder="Brief summary..." className="w-full bg-[#0a0a0a] border border-[#333] focus:border-brand rounded-xl px-4 py-2.5 text-white text-sm outline-none" />
            </div>
          </div>

          <div className="border-2 border-dashed border-[#333] rounded-xl p-8 text-center hover:bg-[#1a1a1a] transition-colors relative">
            <input required type="file" onChange={e => setMatFile(e.target.files?.[0] || null)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.mp4,.docx,.pptx" />
            <Upload className="mx-auto text-gray-500 mb-3" size={32} />
            <p className="text-sm font-semibold text-white">{matFile ? matFile.name : "Click or drag a file to upload"}</p>
            <p className="text-xs text-gray-500 mt-1">Supports PDF, MP4, PPTX</p>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={matLoading || !matFile} className="bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-colors disabled:opacity-50">
              {matLoading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />} Upload & Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}