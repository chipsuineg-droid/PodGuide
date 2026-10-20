"use client"
import { useEffect, useState, useMemo } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  Search, ExternalLink, Eye, X, Check, Folder, Link2, HardDrive, Sparkles, RotateCcw
} from "lucide-react"
import { toast } from "sonner"

export interface LibraryShelf {
  id: string
  name: string
  icon: string
  itemCount: number
  driveUrl?: string
  folderId?: string
  description?: string
  programme?: string
  level?: string
}

const INITIAL_SHELVES: LibraryShelf[] = [
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    icon: "🫀",
    itemCount: 0,
    description: "Cardiology, pulmonology, endocrinology, gastroenterology, nephrology, and acute medical admissions.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4 & 5"
  },
  {
    id: "paediatrics",
    name: "Paediatrics",
    icon: "👶",
    itemCount: 0,
    description: "Neonatal resuscitation, developmental milestones, paediatric infectious disease, and IMCI guidelines.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4 & 5"
  },
  {
    id: "surgery",
    name: "Surgery",
    icon: "🔪",
    itemCount: 0,
    description: "General surgery operative manuals, acute abdomen algorithms, trauma ATLS protocols, and surgical oncology.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4 & 5"
  },
  {
    id: "obs-gyn",
    name: "Obstetrics & Gynecology",
    icon: "🤰",
    itemCount: 0,
    description: "Antenatal care, intrapartum management, obstetric emergencies, gynaecological oncology, and family planning.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4 & 5"
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "💊",
    itemCount: 0,
    description: "Primary and secondary skin lesions, inflammatory dermatoses, skin infections, and melanoma screening.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4"
  },
  {
    id: "community-medicine",
    name: "Community Medicine",
    icon: "🏥",
    itemCount: 0,
    description: "Public health epidemiology, biostatistics, primary healthcare delivery, maternal & child health outreach.",
    programme: "Medicine & Health Sciences",
    level: "All Levels"
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    icon: "🧠",
    itemCount: 0,
    description: "DSM-5 diagnostic criteria, mood and psychotic disorders, psychopharmacology, and psychiatric emergencies.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4"
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    icon: "💊",
    itemCount: 0,
    description: "Pharmacokinetics, pharmacodynamics, clinical toxicology, antimicrobial regimens, and hospital formularies.",
    programme: "All Programmes",
    level: "Parts 2 & 3"
  },
  {
    id: "anatomy",
    name: "Anatomy",
    icon: "🦴",
    itemCount: 0,
    description: "Gross anatomy, cadaveric dissection manuals, regional osteology, histology, and embryology archives.",
    programme: "Biomedical & Medicine",
    level: "Parts 1 & 2"
  },
  {
    id: "physiology",
    name: "Physiology",
    icon: "⚡",
    itemCount: 0,
    description: "Cell physiology, cardiovascular haemodynamics, renal clearance, respiratory mechanics, and neurophysiology.",
    programme: "Biomedical & Medicine",
    level: "Parts 1 & 2"
  },
  {
    id: "histopathology",
    name: "Histopathology",
    icon: "🔬",
    itemCount: 0,
    description: "Microscopic slide atlases, cell injury, inflammation, neoplasia, and diagnostic biopsy specimens.",
    programme: "Biomedical Science (HBMLS)",
    level: "Parts 2 & 3"
  },
  {
    id: "radiology",
    name: "Radiology",
    icon: "💀",
    itemCount: 0,
    description: "Systematic chest X-ray interpretation, emergency CT head scans, abdominal ultrasonography, and MRI basics.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Clinical Years"
  },
  {
    id: "anaesthetics",
    name: "Anaesthetics",
    icon: "💉",
    itemCount: 0,
    description: "Pre-operative evaluation, airway management, general & regional anaesthesia, and post-op recovery.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 5"
  },
  {
    id: "emergency-medicine",
    name: "Emergency Medicine",
    icon: "🚑",
    itemCount: 0,
    description: "Advanced cardiac life support (ACLS), major trauma management, toxicology triage, and shock resuscitation.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 5 / Final Year"
  },
  {
    id: "haematology",
    name: "Haematology",
    icon: "🩸",
    itemCount: 0,
    description: "Blood film morphology, anaemia workups, leukaemia classification, coagulation cascades, and blood transfusion.",
    programme: "Biomedical Science (HBMLS)",
    level: "Part 3"
  },
  {
    id: "chemical-pathology",
    name: "Chemical Pathology",
    icon: "🧪",
    itemCount: 0,
    description: "Electrolytes & blood gases, liver & renal function test interpretation, endocrinology assays, and laboratory QA.",
    programme: "Biomedical Science (HBMLS)",
    level: "Part 3"
  },
  {
    id: "medical-microbiology",
    name: "Medical Microbiology",
    icon: "🦠",
    itemCount: 0,
    description: "Bacteriology, virology, mycology, parasitology, antimicrobial sensitivity testing, and infection control.",
    programme: "All Programmes",
    level: "Parts 2 & 3"
  },
  {
    id: "immunology",
    name: "Immunology",
    icon: "🛡️",
    itemCount: 0,
    description: "Innate & adaptive immunity, hypersensitivity reactions, autoimmune disorders, and immunodeficiency workups.",
    programme: "All Programmes",
    level: "Parts 2 & 3"
  },
  {
    id: "behavioural-sciences",
    name: "Behavioural Sciences",
    icon: "🧩",
    itemCount: 0,
    description: "Medical sociology, doctor-patient communication, health psychology, and behavioural determinants of health.",
    programme: "Medicine & Health Sciences",
    level: "Parts 1 & 2"
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: "👁️",
    itemCount: 0,
    description: "Slit-lamp examination, red eye differentials, cataracts, glaucoma, retinal emergencies, and visual acuity.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4"
  },
  {
    id: "ent",
    name: "ENT / Otorhinolaryngology",
    icon: "👂",
    itemCount: 0,
    description: "Otoscopy, epistaxis management, hearing loss evaluation, tonsillitis, and head & neck emergencies.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4"
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics & Trauma",
    icon: "🦿",
    itemCount: 0,
    description: "Fracture classifications, reduction and splinting, joint dislocations, compartment syndrome, and sports injuries.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4 & 5"
  },
  {
    id: "oncology",
    name: "Clinical Oncology",
    icon: "🎗️",
    itemCount: 0,
    description: "TNM staging, chemotherapy protocols, radiotherapy principles, palliative care, and cancer biology.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 4 & 5"
  },
  {
    id: "medical-genetics",
    name: "Medical Genetics",
    icon: "🧬",
    itemCount: 0,
    description: "Mendelian inheritance, chromosomal anomalies, cytogenetics, pedigree analysis, and genetic counselling.",
    programme: "Biomedical & Medicine",
    level: "Parts 1 & 2"
  },
  {
    id: "forensic-medicine",
    name: "Forensic Medicine & Toxicology",
    icon: "🔍",
    itemCount: 0,
    description: "Post-mortem examination, wound ballistics, asphyxial deaths, clinical forensic examination, and court testimony.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 3 & 4"
  },
  {
    id: "critical-care",
    name: "Critical Care & ICU",
    icon: "🩺",
    itemCount: 0,
    description: "Mechanical ventilation, inotropic support, sepsis resuscitation protocols, and arterial line monitoring.",
    programme: "Medicine (MBChB / MBBS)",
    level: "Year 5 / Final Year"
  },
  {
    id: "medical-ethics",
    name: "Medical Ethics & Law",
    icon: "⚖️",
    itemCount: 0,
    description: "Informed consent, patient confidentiality, medical negligence, Zimbabwean health laws, and ethical dilemmas.",
    programme: "All Programmes",
    level: "All Levels"
  },
  {
    id: "epidemiology",
    name: "Epidemiology & Biostatistics",
    icon: "📊",
    itemCount: 0,
    description: "Study designs, odds ratios & relative risks, outbreak investigations, diagnostic testing validity, and p-values.",
    programme: "All Programmes",
    level: "Parts 1 & 2"
  }
]

export default function LibraryPage() {
  const supabase = createClient()
  const [shelves, setShelves] = useState<LibraryShelf[]>(INITIAL_SHELVES)
  const [search, setSearch] = useState("")
  const [selectedShelf, setSelectedShelf] = useState<LibraryShelf | null>(null)
  const [editingShelf, setEditingShelf] = useState<LibraryShelf | null>(null)
  const [driveUrlInput, setDriveUrlInput] = useState("")
  const [itemCountInput, setItemCountInput] = useState<number | string>("")
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const init = async () => {
      const { data: authData } = await supabase.auth.getUser()
      if (authData?.user) setUser(authData.user)

      // Load cached customized shelves from localStorage (clean slate v2)
      try {
        const stored = localStorage.getItem("podguide_library_shelves_v2")
        if (stored) {
          const parsed: Record<string, Partial<LibraryShelf>> = JSON.parse(stored)
          setShelves(prev =>
            prev.map(shelf => (parsed[shelf.id] ? { ...shelf, ...parsed[shelf.id] } : shelf))
          )
        }
      } catch {}
    }
    init()
  }, [])

  const extractFolderId = (url: string) => {
    const trimmed = url.trim()
    const folderMatch = trimmed.match(/folders\/([a-zA-Z0-9_-]+)/)
    if (folderMatch) return folderMatch[1]
    const idMatch = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/)
    if (idMatch) return idMatch[1]
    const fileMatch = trimmed.match(/file\/d\/([a-zA-Z0-9_-]+)/)
    if (fileMatch) return fileMatch[1]
    return trimmed
  }

  const handleSaveDriveLink = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingShelf || !driveUrlInput.trim()) return

    const folderId = extractFolderId(driveUrlInput)
    const count = itemCountInput !== "" ? parseInt(itemCountInput.toString(), 10) : editingShelf.itemCount
    const updatedShelf: LibraryShelf = {
      ...editingShelf,
      driveUrl: driveUrlInput.trim(),
      folderId: folderId,
      itemCount: isNaN(count) ? 0 : Math.max(0, count)
    }

    // Update state
    setShelves(prev => prev.map(s => (s.id === updatedShelf.id ? updatedShelf : s)))

    // Save to localStorage
    try {
      const stored = localStorage.getItem("podguide_library_shelves")
      const currentMap: Record<string, any> = stored ? JSON.parse(stored) : {}
      currentMap[updatedShelf.id] = {
        driveUrl: updatedShelf.driveUrl,
        folderId: updatedShelf.folderId,
        itemCount: updatedShelf.itemCount
      }
      localStorage.setItem("podguide_library_shelves_v2", JSON.stringify(currentMap))
    } catch {}

    // Save to Supabase curated_drive_folders if user is authenticated
    try {
      if (user) {
        await supabase.from("curated_drive_folders").upsert({
          title: updatedShelf.name,
          drive_url: updatedShelf.driveUrl,
          folder_id: updatedShelf.folderId,
          category: updatedShelf.name,
          programme: updatedShelf.programme || "All",
          level: updatedShelf.level || "All",
          description: updatedShelf.description || "",
          icon: updatedShelf.icon,
          item_count: updatedShelf.itemCount,
          created_by: user.id
        })
      }
    } catch (err) {
      console.warn("Supabase drive shelf sync notice:", err)
    }

    toast.success(`${updatedShelf.name} Google Drive connected!`)
    setEditingShelf(null)
    setDriveUrlInput("")
  }

  const totalFiles = useMemo(() => {
    return shelves.reduce((acc, curr) => acc + (curr.itemCount || 0), 0)
  }, [shelves])

  const filteredShelves = useMemo(() => {
    if (!search.trim()) return shelves
    const q = search.toLowerCase()
    return shelves.filter(
      s => s.name.toLowerCase().includes(q) || s.description?.toLowerCase().includes(q)
    )
  }, [shelves, search])

  const handleResetToZero = () => {
    if (!confirm("Wipe all connected drive links and start clean from zero?")) return
    try {
      localStorage.removeItem("podguide_library_shelves_v2")
      localStorage.removeItem("podguide_library_shelves")
      localStorage.removeItem("podguide_custom_drive_folders")
    } catch {}
    setShelves(INITIAL_SHELVES)
    toast.success("All folders reset to zero. Ready for fresh connections.")
  }

  const openShelf = (shelf: LibraryShelf) => {
    if (shelf.folderId && shelf.driveUrl) {
      setSelectedShelf(shelf)
    } else {
      setEditingShelf(shelf)
      setDriveUrlInput("")
      setItemCountInput(shelf.itemCount > 0 ? shelf.itemCount : "")
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      {/* ── TOP HEADER BAR ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#181818] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
              LIBRARY SHELVES
            </h1>
            <span className="w-1 h-1 rounded-full bg-brand" />
            <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
              Subject Folders
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
            Curated Academic Shelves
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Filter shelves..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#0d0d0d] border border-[#222] focus:border-brand rounded-xl pl-9 pr-3.5 py-2 text-xs text-white placeholder:text-gray-600 outline-none transition-colors"
            />
          </div>
          <div className="px-3 py-2 bg-[#111] border border-[#222] rounded-xl text-xs font-bold text-gray-400 whitespace-nowrap">
            {totalFiles} files total
          </div>
          <button
            onClick={handleResetToZero}
            title="Wipe connections & start clean from zero"
            className="flex items-center gap-1.5 px-3 py-2 bg-[#141414] hover:bg-[#1f1f1f] border border-[#222] hover:border-brand/40 text-gray-400 hover:text-white rounded-xl text-xs font-semibold transition-colors whitespace-nowrap"
          >
            <RotateCcw size={12} className="text-brand" /> Wipe & Start Zero
          </button>
        </div>
      </div>

      {/* ── SHELVES GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredShelves.map(shelf => {
          const isConnected = Boolean(shelf.folderId && shelf.driveUrl)

          return (
            <div
              key={shelf.id}
              onClick={() => openShelf(shelf)}
              className="bg-[#0c0c0c] border border-[#1a1a1a] hover:border-brand/40 hover:bg-[#121212] rounded-2xl p-5 flex flex-col justify-between transition-all duration-150 cursor-pointer group shadow-sm relative overflow-hidden"
            >
              {/* Top Row: Icon on Left, Folder Icon on Right */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                  {shelf.icon}
                </div>

                <div className="flex items-center gap-1.5">
                  {isConnected && (
                    <span
                      title="Google Drive connected"
                      className="w-2 h-2 rounded-full bg-brand animate-pulse"
                    />
                  )}
                  <button
                    onClick={e => {
                      e.stopPropagation()
                      setEditingShelf(shelf)
                      setDriveUrlInput(shelf.driveUrl || "")
                      setItemCountInput(shelf.itemCount > 0 ? shelf.itemCount : "")
                    }}
                    title={isConnected ? "Edit Google Drive Link" : "Connect Google Drive Link"}
                    className="p-1.5 text-gray-500 hover:text-white rounded-lg transition-colors"
                  >
                    <Folder
                      size={18}
                      className={
                        isConnected
                          ? "text-brand group-hover:text-red-400"
                          : "text-gray-500 group-hover:text-gray-300"
                      }
                    />
                  </button>
                </div>
              </div>

              {/* Bottom: Shelf Name & Item Count */}
              <div className="mt-5">
                <h3 className="text-sm font-bold text-white group-hover:text-brand transition-colors line-clamp-1">
                  {shelf.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">
                  {shelf.itemCount} items
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {filteredShelves.length === 0 && (
        <div className="text-center py-16 bg-[#0c0c0c] border border-[#1a1a1a] rounded-2xl space-y-2">
          <p className="text-sm font-bold text-white">No matching shelves found</p>
          <p className="text-xs text-gray-500">Try searching with a different term.</p>
        </div>
      )}

      {/* ── MODAL: PREVIEW CONNECTED SHELF ── */}
      {selectedShelf && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-[#0e0e0e] border border-[#222] rounded-2xl w-full max-w-3xl my-6 p-6 sm:p-7 space-y-5 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedShelf(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-4 pr-8">
              <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-2xl flex-shrink-0">
                {selectedShelf.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand bg-brand/10 px-2.5 py-0.5 rounded border border-brand/20">
                    Live Shelf
                  </span>
                  <span className="text-[10px] font-semibold text-gray-400">
                    {selectedShelf.itemCount} items
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white leading-tight mt-1">
                  {selectedShelf.name}
                </h2>
                <p className="text-xs text-gray-400">{selectedShelf.description}</p>
              </div>
            </div>

            {/* Embedded Live Google Drive View */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <Eye size={12} className="text-brand" /> Live Folder Contents Preview
                </span>
                <span className="text-[10px] text-gray-500">Google Drive Embedded Viewer</span>
              </div>
              <div className="w-full h-80 rounded-xl overflow-hidden border border-[#222] bg-[#080808]">
                <iframe
                  src={`https://drive.google.com/embeddedfolderview?id=${selectedShelf.folderId}#grid`}
                  className="w-full h-full border-0"
                  title={selectedShelf.name}
                  allow="fullscreen"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <a
                href={selectedShelf.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-2.5 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-brand/25"
              >
                <ExternalLink size={14} /> Open in Google Drive
              </a>
              <button
                type="button"
                onClick={() => {
                  setEditingShelf(selectedShelf)
                  setDriveUrlInput(selectedShelf.driveUrl || "")
                  setItemCountInput(selectedShelf.itemCount > 0 ? selectedShelf.itemCount : "")
                  setSelectedShelf(null)
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#161616] hover:bg-[#202020] border border-[#2b2b2b] text-gray-300 hover:text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Link2 size={13} /> Update Drive Link
              </button>
              <button
                type="button"
                onClick={() => setSelectedShelf(null)}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#181818] hover:bg-[#222] border border-[#2b2b2b] text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: CONNECT / EDIT DRIVE LINK ── */}
      {editingShelf && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-[#0e0e0e] border border-[#222] rounded-2xl w-full max-w-lg p-6 sm:p-7 space-y-5 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => {
                setEditingShelf(null)
                setDriveUrlInput("")
              }}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-2xl flex-shrink-0">
                {editingShelf.icon}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand">
                  Connect Library Shelf
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">{editingShelf.name}</h3>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Paste the Google Drive folder share link for this subject. Ensure the sharing settings in Google Drive are set to <strong>&quot;Anyone with the link can view&quot;</strong>.
            </p>

            <form onSubmit={handleSaveDriveLink} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Google Drive Folder Link
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/drive/folders/1aBcD_XyZ..."
                  value={driveUrlInput}
                  onChange={e => setDriveUrlInput(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#2b2b2b] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Actual File Count (Optional)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 15 (leave empty or 0 if empty)"
                  value={itemCountInput}
                  onChange={e => setItemCountInput(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#2b2b2b] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-600 outline-none transition-colors"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-brand/25"
                >
                  <Check size={14} /> Save Shelf Link
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingShelf(null)
                    setDriveUrlInput("")
                  }}
                  className="px-4 py-2.5 bg-[#181818] hover:bg-[#222] border border-[#2b2b2b] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
