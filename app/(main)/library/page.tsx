"use client"

import { useEffect, useState, useMemo } from "react"
import {
  Search,
  Folder,
  ChevronRight,
  BookOpen,
  Video,
  FileText,
  FileSpreadsheet,
  Clock,
  HelpCircle,
  Presentation,
  Newspaper,
  ArrowLeft,
  Loader2,
  Sparkles,
  RotateCcw,
  Eye,
  Play,
  X,
  Stethoscope,
  Microscope,
  Pill,
  PawPrint,
  HeartHandshake,
  Activity,
  Brain,
  Scissors,
  HeartPulse,
  Baby,
  Globe,
  Dna,
  Bug,
  Droplets,
  FlaskConical,
  MessageSquare,
  Shield,
  Layers,
  Zap,
  Bone,
  CheckCircle2,
  LucideIcon,
} from "lucide-react"
import { toast } from "sonner"
import { StudyMaterialViewer, StudyMaterial } from "@/components/library/StudyMaterialViewer"
import { LibraryResourceFile, SubjectLibraryData } from "@/app/api/library/drive-files/route"

// ── Level 1: Main Academic Category Definition ──
export interface MainCategory {
  id: string
  name: string
  shortCode: string
  desc: string
  icon: LucideIcon
  subjects: SubjectDef[]
}

// ── Level 2: Subject Definition ──
export interface SubjectDef {
  id: string
  name: string
  driveKey: string
  desc: string
  icon: LucideIcon
}

// ── Level 3: Resource Subfolder Definition ──
export type ResourceCategoryKey =
  | "textbooks"
  | "revision_documents"
  | "past_papers"
  | "notes"
  | "slides"
  | "practice_questions"
  | "journals"
  | "videos"

export interface ResourceCategoryDef {
  key: ResourceCategoryKey
  title: string
  subtitle: string
  icon: LucideIcon
  colorClass: string
  bgClass: string
}

const RESOURCE_SUBFOLDERS: ResourceCategoryDef[] = [
  {
    key: "textbooks",
    title: "Textbooks / Books",
    subtitle: "Core reference books & manuals",
    icon: BookOpen,
    colorClass: "text-red-500",
    bgClass: "bg-red-500/10 border-red-500/20",
  },
  {
    key: "revision_documents",
    title: "Revision Materials",
    subtitle: "Summaries, cheat sheets & OSCEs",
    icon: FileSpreadsheet,
    colorClass: "text-gray-300",
    bgClass: "bg-[#181818] border-[#262626]",
  },
  {
    key: "past_papers",
    title: "Question Papers / Past Papers",
    subtitle: "Previous examinations & spotters",
    icon: Clock,
    colorClass: "text-red-500",
    bgClass: "bg-red-500/10 border-red-500/20",
  },
  {
    key: "notes",
    title: "Notes",
    subtitle: "Lecture & study notes",
    icon: FileText,
    colorClass: "text-gray-300",
    bgClass: "bg-[#181818] border-[#262626]",
  },
  {
    key: "slides",
    title: "Slides",
    subtitle: "PowerPoint presentations",
    icon: Presentation,
    colorClass: "text-gray-300",
    bgClass: "bg-[#181818] border-[#262626]",
  },
  {
    key: "practice_questions",
    title: "MCQs",
    subtitle: "Practice questions & question banks",
    icon: HelpCircle,
    colorClass: "text-red-500",
    bgClass: "bg-red-500/10 border-red-500/20",
  },
  {
    key: "journals",
    title: "Journals",
    subtitle: "Articles & clinical research papers",
    icon: Newspaper,
    colorClass: "text-gray-300",
    bgClass: "bg-[#181818] border-[#262626]",
  },
  {
    key: "videos",
    title: "Videos",
    subtitle: "Recorded lectures & clinical audio",
    icon: Video,
    colorClass: "text-red-500",
    bgClass: "bg-red-500/10 border-red-500/20",
  },
]

// ── The 5 Main Academic Categories & Strict Hierarchy ──
const MAIN_ACADEMIC_CATEGORIES: MainCategory[] = [
  // 1. Biomedical Sciences (BMS)
  {
    id: "bms",
    name: "Biomedical Sciences (BMS)",
    shortCode: "BMS",
    desc: "Pre-clinical foundational sciences and laboratory disciplines",
    icon: Microscope,
    subjects: [
      { id: "bms-anatomy", name: "Anatomy", driveKey: "ANATOMY", desc: "Gross anatomy, osteology, cadaveric dissection manuals", icon: Bone },
      { id: "bms-physiology", name: "Physiology", driveKey: "PHYSIOLOGY", desc: "Organ systems, homeostasis, cellular mechanisms", icon: Activity },
      { id: "bms-behavioral-sciences", name: "Behavioral Sciences", driveKey: "BEHAVIORAL SCIENCE", desc: "Human behavior, medical sociology, clinical psychology", icon: Brain },
      { id: "bms-histology", name: "Histology", driveKey: "HISTOLOGY", desc: "Microscopic anatomy, cellular tissue organisation", icon: Layers },
      { id: "bms-embryology", name: "Embryology", driveKey: "EMBROLOGY", desc: "Human embryogenesis, developmental stages, teratology", icon: Dna },
      { id: "bms-biochemistry", name: "Biochemistry", driveKey: "BIOCHEMISTRY", desc: "Metabolic pathways, molecular biology, enzymology", icon: FlaskConical },
      { id: "bms-biophysics", name: "Biophysics", driveKey: "BIOPHYSICS", desc: "Biomechanics, physical principles in physiology", icon: Zap },
      { id: "bms-infectious-diseases", name: "Infectious Diseases", driveKey: "INFECTIOUS DISEASE", desc: "Pathogen biology, viral & bacterial clinical infections", icon: Bug },
      { id: "bms-communication-skills", name: "Communication Skills", driveKey: "COMMUNICATION SKILLS", desc: "Doctor-patient interview, clinical empathy, history-taking", icon: MessageSquare },
      { id: "bms-sign-language", name: "Sign Language", driveKey: "SIGN LANGUAGE", desc: "Clinical sign language for inclusive healthcare delivery", icon: HeartHandshake },
      { id: "bms-medical-microbiology", name: "Medical Microbiology", driveKey: "MED MICROBIOLOGY", desc: "Bacteriology, virology, mycology, parasitical diagnostics", icon: Microscope },
      { id: "bms-immunology", name: "Immunology", driveKey: "IMMUNOLOGY", desc: "Innate & adaptive immune responses, hypersensitivity", icon: Shield },
      { id: "bms-hematology", name: "Hematology", driveKey: "HEAMATOLOGY", desc: "Blood cell pathology, hemostasis, coagulation disorders", icon: Droplets },
      { id: "bms-chemical-pathology", name: "Chemical Pathology", driveKey: "CHEMICAL PATHOLOGY", desc: "Clinical biochemistry, endocrine & renal biomarkers", icon: FlaskConical },
      { id: "bms-histopathology", name: "Histopathology", driveKey: "HISTOPATHOLOGY", desc: "Tissue biopsy analysis, cellular injury, oncology", icon: Microscope },
      { id: "bms-pharmacology", name: "Pharmacology", driveKey: "PHARMACOLOGY", desc: "Drug actions, pharmacokinetics, receptor mechanisms", icon: Pill },
    ],
  },

  // 2. MBChB / MBBS
  {
    id: "mbchb-mbbs",
    name: "MBChB / MBBS",
    shortCode: "MBChB",
    desc: "Clinical clerkships, hospital medicine, surgical & ward disciplines",
    icon: Stethoscope,
    subjects: [
      { id: "mbchb-internal-med", name: "Internal Medicine", driveKey: "INTERNAL MEDICINE", desc: "Adult ward admissions, cardiology, respiratory, nephrology", icon: Stethoscope },
      { id: "mbchb-psychiatry", name: "Psychiatry", driveKey: "PSYCHIATRY", desc: "Psychiatric diagnosis, psychopharmacology, clinical mental health", icon: Brain },
      { id: "mbchb-surgery", name: "Surgery", driveKey: "SURGERY", desc: "General operative surgery, trauma, surgical pathology & techniques", icon: Scissors },
      { id: "mbchb-pharmacology", name: "Pharmacology", driveKey: "PHARMACOLOGY", desc: "Clinical pharmacotherapeutics and hospital prescribing", icon: Pill },
      { id: "mbchb-obs-gyn", name: "Obstetrics and Gynaecology (O&G)", driveKey: "OBSTETRICS & GYNECOLOGY", desc: "Antenatal care, labor management, pelvic pathology", icon: HeartPulse },
      { id: "mbchb-paediatrics", name: "Paediatrics", driveKey: "PAEDIATRICS", desc: "Neonatology, childhood infections, pediatric therapeutics", icon: Baby },
      { id: "mbchb-global-health", name: "Global Health", driveKey: "GLOBAL HEALTH", desc: "Epidemiology, health systems policy, tropical public health", icon: Globe },
    ],
  },

  // 3. Pharmacy
  {
    id: "pharmacy",
    name: "Pharmacy",
    shortCode: "PHARM",
    desc: "Pharmaceutical sciences, pharmacokinetics and hospital pharmacy",
    icon: Pill,
    subjects: [
      { id: "pharm-1-1", name: "Pharmacy 1.1", driveKey: "PHARMACY 1.1", desc: "Pharmaceutical chemistry, cellular biology, calculations", icon: Pill },
      { id: "pharm-1-2", name: "Pharmacy 1.2", driveKey: "PHARMACY 1.2", desc: "Physiology for pharmacy, physical pharmaceutics", icon: Pill },
      { id: "pharm-2-1", name: "Pharmacy 2.1", driveKey: "PHARMACY 2.1", desc: "General pharmacology, pharmaceutical microbiology", icon: Pill },
      { id: "pharm-2-2", name: "Pharmacy 2.2", driveKey: "PHARMACY 2.2", desc: "Biopharmaceutics, pharmacokinetics, medicinal chemistry", icon: Pill },
      { id: "pharm-3-1", name: "Pharmacy 3.1", driveKey: "PHARMACY 3.1", desc: "Clinical pharmacokinetics, sterile manufacturing, antibiotics", icon: Pill },
      { id: "pharm-3-2", name: "Pharmacy 3.2", driveKey: "PHARMACY 3.2", desc: "Hospital pharmacy practice, pharmacotherapy", icon: Pill },
      { id: "pharm-4-1", name: "Pharmacy 4.1", driveKey: "PHARMACY 4.1", desc: "Advanced therapeutics, clinical toxicology, drug surveillance", icon: Pill },
      { id: "pharm-4-4", name: "Pharmacy 4.4", driveKey: "PHARMACY 4.4", desc: "Pharmacy law and ethics, healthcare supply chain", icon: Pill },
    ],
  },

  // 4. Veterinary Science
  {
    id: "veterinary-science",
    name: "Veterinary Science",
    shortCode: "VET",
    desc: "Veterinary medicine, animal anatomy, surgery and clinical care",
    icon: PawPrint,
    subjects: [
      { id: "vet-anatomy", name: "Veterinary Anatomy", driveKey: "VETERINARY ANATOMY", desc: "Comparative animal osteology, myology, neuroanatomy", icon: Bone },
      { id: "vet-physiology", name: "Veterinary Physiology", driveKey: "VETERINARY PHYSIOLOGY", desc: "Rumen mechanics, animal digestion, cardiovascular dynamics", icon: Activity },
      { id: "vet-pathology", name: "Veterinary Pathology", driveKey: "VETERINARY PATHOLOGY", desc: "Gross necropsy, histopathological animal lesions", icon: Microscope },
      { id: "vet-medicine", name: "Veterinary Medicine", driveKey: "VETERINARY MEDICINE", desc: "Small and large animal clinical medicine, herd diagnostics", icon: Stethoscope },
      { id: "vet-surgery", name: "Veterinary Surgery", driveKey: "VETERINARY SURGERY", desc: "Aseptic technique, animal soft-tissue surgery & orthopaedics", icon: Scissors },
      { id: "vet-pharmacology", name: "Veterinary Pharmacology", driveKey: "VETERINARY PHARMACOLOGY", desc: "Veterinary therapeutics, dosage regimens, withdrawal periods", icon: Pill },
    ],
  },

  // 5. Nursing
  {
    id: "nursing",
    name: "Nursing",
    shortCode: "NURS",
    desc: "Inpatient nursing care, clinical procedures, maternal & community health",
    icon: HeartHandshake,
    subjects: [
      { id: "nurs-fundamentals", name: "Fundamentals of Nursing", driveKey: "FUNDAMENTALS OF NURSING", desc: "Nursing process, bedside procedures, vital signs, infection control", icon: HeartHandshake },
      { id: "nurs-med-surg", name: "Medical-Surgical Nursing", driveKey: "MEDICAL-SURGICAL NURSING", desc: "Adult inpatient care, perioperative management, wound care", icon: Activity },
      { id: "nurs-paediatric", name: "Paediatric Nursing", driveKey: "PAEDIATRIC NURSING", desc: "Neonatal care, IMCI guidelines, pediatric medications", icon: Baby },
      { id: "nurs-midwifery", name: "Midwifery", driveKey: "MIDWIFERY", desc: "Antenatal nursing support, intrapartum labor stages, newborn resuscitation", icon: HeartPulse },
      { id: "nurs-community", name: "Community Health Nursing", driveKey: "COMMUNITY HEALTH NURSING", desc: "Primary healthcare clinics, immunization schedules, home visits", icon: Globe },
      { id: "nurs-mental-health", name: "Mental Health Nursing", driveKey: "MENTAL HEALTH NURSING", desc: "Therapeutic communication, psychiatric interventions", icon: Brain },
    ],
  },
]

// ── Alias helper for 100% reliable Drive mapping ──
const ALIAS_LOOKUP: Record<string, string[]> = {
  "ANATOMY": ["anatomy"],
  "PHYSIOLOGY": ["physiology"],
  "BEHAVIORAL SCIENCE": ["behavioralscience", "behavioralsciences"],
  "HISTOLOGY": ["histology"],
  "EMBROLOGY": ["embrology", "embryology"],
  "BIOCHEMISTRY": ["biochemistry"],
  "BIOPHYSICS": ["biophysics"],
  "INFECTIOUS DISEASE": ["infectiousdisease", "infectiousdiseases"],
  "COMMUNICATION SKILLS": ["communicationskills", "communication"],
  "SIGN LANGUAGE": ["signlanguage"],
  "MED MICROBIOLOGY": ["medmicrobiology", "medicalmicrobiology", "microbiology"],
  "IMMUNOLOGY": ["immunology"],
  "HEAMATOLOGY": ["heamatology", "hematology"],
  "CHEMICAL PATHOLOGY": ["chemicalpathology"],
  "HISTOPATHOLOGY": ["histopathology"],
  "PHARMACOLOGY": ["pharmacology"],
  "INTERNAL MEDICINE": ["internalmedicine"],
  "PSYCHIATRY": ["psychiatry"],
  "SURGERY": ["surgery"],
  "OBSTETRICS & GYNECOLOGY": ["obstetricsgynecology", "obstetricsandgynaecology", "obsandgyn", "o&g"],
  "PAEDIATRICS": ["paediatrics", "pediatrics"],
  "GLOBAL HEALTH": ["globalhealth"],
}

function formatBytes(bytesStr?: string): string {
  if (!bytesStr) return ""
  const b = parseInt(bytesStr, 10)
  if (isNaN(b) || b <= 0) return ""
  if (b < 1024) return `${b} B`
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`
  return `${(b / (1024 * 1024)).toFixed(1)} MB`
}

export default function LibraryPage() {
  const [loading, setLoading] = useState(true)
  const [driveData, setDriveData] = useState<Record<string, SubjectLibraryData>>({})
  const [totalDriveFiles, setTotalDriveFiles] = useState(0)

  // ── 4 Dedicated Navigation Levels ──
  // Level 1: null (Main Library Dashboard with 5 Categories)
  // Level 2: activeCategory (Category Dashboard with Subjects)
  // Level 3: activeSubject (Subject Dashboard with 8 Resource Subfolders)
  // Level 4: activeResourceFolder (Resource Folder View with Actual Documents)
  const [selectedMainCat, setSelectedMainCat] = useState<MainCategory | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<SubjectDef | null>(null)
  const [selectedResourceFolder, setSelectedResourceFolder] = useState<ResourceCategoryDef | null>(null)

  // Global & In-Folder Search
  const [searchQuery, setSearchQuery] = useState("")
  const [folderFileSearch, setFolderFileSearch] = useState("")

  // In-App Viewer Modal
  const [activeViewerMaterial, setActiveViewerMaterial] = useState<StudyMaterial | null>(null)
  const [isSyncing, setIsSyncing] = useState(false)

  // Fetch Drive Files from recursive API
  const fetchDriveCatalog = async (forceRefresh = false) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/library/drive-files${forceRefresh ? "?refresh=true" : ""}`)
      const data = await res.json()
      if (res.ok && data.subjects) {
        setDriveData(data.subjects)
        setTotalDriveFiles(data.totalFiles || 0)
      }
    } catch (err) {
      console.error("Library sync error:", err)
      toast.error("Could not reach Google Drive archive.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDriveCatalog()
  }, [])

  const handleManualSync = async () => {
    setIsSyncing(true)
    await fetchDriveCatalog(true)
    setIsSyncing(false)
    toast.success("Synchronised full Google Drive repository!")
  }

  // Helper to resolve Drive data for a subject
  const resolveSubjectData = (subj: SubjectDef): SubjectLibraryData | null => {
    if (driveData[subj.driveKey]) return driveData[subj.driveKey]

    const aliases = ALIAS_LOOKUP[subj.driveKey] || [subj.name.toLowerCase().replace(/[^a-z0-9]/g, "")]
    for (const [key, val] of Object.entries(driveData)) {
      const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, "")
      if (aliases.some(a => cleanKey === a || cleanKey.includes(a) || a.includes(cleanKey))) {
        return val
      }
    }
    return null
  }

  // Calculate file counts for a main category (Level 1)
  const getCategoryTotalFiles = (cat: MainCategory): number => {
    return cat.subjects.reduce((sum, subj) => {
      const data = resolveSubjectData(subj)
      return sum + (data?.totalFiles || 0)
    }, 0)
  }

  // Current Subject's Data (Level 3 & 4)
  const currentSubjectDriveData = selectedSubject ? resolveSubjectData(selectedSubject) : null

  // Current Resource Folder's Actual Files (Level 4)
  const currentFolderFiles = useMemo(() => {
    if (!currentSubjectDriveData || !selectedResourceFolder) return []
    const allFiles = currentSubjectDriveData.resources[selectedResourceFolder.key] || []
    if (!folderFileSearch.trim()) return allFiles

    const q = folderFileSearch.toLowerCase()
    return allFiles.filter(
      f =>
        f.name.toLowerCase().includes(q) ||
        (f.path && f.path.some(p => p.toLowerCase().includes(q)))
    )
  }, [currentSubjectDriveData, selectedResourceFolder, folderFileSearch])

  // Global search across all documents
  const globalSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return null
    const q = searchQuery.toLowerCase().trim()
    const results: Array<LibraryResourceFile & { subjectName: string; categoryName: string }> = []

    Object.values(driveData).forEach(subj => {
      Object.values(subj.resources).forEach(fileList => {
        fileList.forEach(file => {
          if (
            file.name.toLowerCase().includes(q) ||
            subj.name.toLowerCase().includes(q) ||
            (file.path && file.path.some(p => p.toLowerCase().includes(q)))
          ) {
            results.push({
              ...file,
              subjectName: subj.name,
              categoryName: file.category.replace("_", " ").toUpperCase(),
            })
          }
        })
      })
    })

    return results
  }, [searchQuery, driveData])

  // Open resource in native in-app viewer
  const openResource = (file: LibraryResourceFile, subjectName: string) => {
    const isVideo =
      file.mimeType.startsWith("video/") ||
      file.mimeType.startsWith("audio/") ||
      /\.(mp4|m4a|webm|mov|ogg|mp3)$/i.test(file.name)

    setActiveViewerMaterial({
      id: file.id,
      title: file.name,
      file_url: file.driveUrl,
      material_type: isVideo ? "video" : "drive",
      subject: subjectName,
      programme: selectedMainCat?.name || "PodGuide Library",
      description: file.path ? file.path.join(" / ") : "Google Drive Academic Material",
    })
  }

  // Navigation Resets
  const goToLevel1 = () => {
    setSelectedMainCat(null)
    setSelectedSubject(null)
    setSelectedResourceFolder(null)
    setFolderFileSearch("")
  }

  const goToLevel2 = () => {
    setSelectedSubject(null)
    setSelectedResourceFolder(null)
    setFolderFileSearch("")
  }

  const goToLevel3 = () => {
    setSelectedResourceFolder(null)
    setFolderFileSearch("")
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-24">

      {/* ── SEARCH BAR (Global Search across all documents) ── */}
      <div className="relative w-full">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search every document in PodGuide Library..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-red-600 rounded-full pl-11 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder:text-gray-500 outline-none transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white p-1"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* GLOBAL SEARCH RESULTS (Overrides navigation if searching)     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      {globalSearchResults !== null ? (
        <div className="space-y-4 animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-[#181818]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400">Search Results for:</span>
              <span className="text-xs font-bold text-white bg-red-600/10 border border-red-600/30 text-red-500 px-2 py-0.5 rounded">
                &quot;{searchQuery}&quot;
              </span>
            </div>
            <span className="text-xs text-gray-500 font-semibold">
              {globalSearchResults.length} files found
            </span>
          </div>

          {globalSearchResults.length === 0 ? (
            <div className="p-12 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl text-center space-y-2">
              <p className="text-gray-400 text-xs font-semibold">No materials found matching your query.</p>
              <p className="text-gray-600 text-[11px]">Try checking the spelling or searching by a broader medical term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {globalSearchResults.map(f => (
                <div
                  key={f.id}
                  onClick={() => openResource(f, f.subjectName)}
                  className="p-3 bg-[#0e0e0e] hover:bg-[#141414] border border-[#1c1c1c] hover:border-red-600/40 rounded-xl flex items-center justify-between gap-3 transition-colors cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500 flex-shrink-0">
                      {f.category === "videos" ? <Video size={14} /> : <FileText size={14} />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate group-hover:text-red-400 transition-colors">
                        {f.name}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5 truncate">
                        {f.subjectName} · {f.categoryName} {formatBytes(f.size) ? `· ${formatBytes(f.size)}` : ""}
                      </p>
                    </div>
                  </div>
                  <button className="px-2.5 py-1 rounded bg-[#181818] group-hover:bg-red-600 text-gray-300 group-hover:text-white text-[10px] font-semibold transition-colors flex items-center gap-1 flex-shrink-0">
                    <Eye size={11} /> Open
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : selectedMainCat === null ? (

        /* ═══════════════════════════════════════════════════════════════ */
        /* LEVEL 1: MAIN LIBRARY DASHBOARD (The 5 Academic Categories)    */
        /* ═══════════════════════════════════════════════════════════════ */
        <div className="space-y-4 animate-in fade-in duration-150">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#181818]">
            <div>
              <h1 className="text-xs font-black uppercase tracking-widest text-gray-400">
                PODGUIDE DIGITAL LIBRARY
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Select your academic category to browse curated subjects & materials
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-400">
                {totalDriveFiles > 0 ? `${totalDriveFiles.toLocaleString()} files total` : "Connecting archive..."}
              </span>
              <button
                onClick={handleManualSync}
                disabled={isSyncing}
                title="Refresh Google Drive catalog"
                className="p-1.5 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] border border-[#222] text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw size={12} className={isSyncing ? "animate-spin text-red-500" : ""} />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-2.5">
              <Loader2 size={24} className="animate-spin text-red-500" />
              <p className="text-xs text-gray-500 font-semibold tracking-wide">
                Loading academic categories and curriculum folders...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {MAIN_ACADEMIC_CATEGORIES.map(cat => {
                const IconComp = cat.icon
                const filesCount = getCategoryTotalFiles(cat)
                const subjectCount = cat.subjects.length

                return (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setSelectedMainCat(cat)
                      setSelectedSubject(null)
                      setSelectedResourceFolder(null)
                    }}
                    className="p-4 sm:p-5 bg-[#0e0e0e] hover:bg-[#121212] border border-[#1f1f1f] hover:border-red-600/50 rounded-xl flex flex-col justify-between h-40 transition-all duration-150 cursor-pointer group shadow-sm select-none"
                  >
                    {/* Top Row: Category Icon & Folder Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-[#161616] border border-[#262626] flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                        <IconComp size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-[#161616] border border-[#242424] px-2 py-0.5 rounded">
                        {cat.shortCode}
                      </span>
                    </div>

                    {/* Bottom: Title, Description & Stats */}
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-red-500 transition-colors leading-snug">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-1 leading-relaxed">
                        {cat.desc}
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#181818] text-[11px] text-gray-500 font-medium">
                        <span>{subjectCount} subjects</span>
                        <span className="flex items-center gap-1 text-gray-400 group-hover:text-red-400 font-semibold">
                          <span>{filesCount} files</span>
                          <ChevronRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ) : selectedSubject === null ? (

        /* ═══════════════════════════════════════════════════════════════ */
        /* LEVEL 2: ACADEMIC CATEGORY DASHBOARD (Showing Subject Folders)  */
        /* ═══════════════════════════════════════════════════════════════ */
        <div className="space-y-4 animate-in fade-in duration-150">
          
          {/* Breadcrumbs Navigation */}
          <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={goToLevel1}
                className="text-gray-400 hover:text-white font-medium flex items-center gap-1 transition-colors"
              >
                <ArrowLeft size={13} />
                <span>Library</span>
              </button>
              <span className="text-gray-600">/</span>
              <span className="font-bold text-white bg-red-600/10 border border-red-600/30 text-red-500 px-2 py-0.5 rounded">
                {selectedMainCat.name}
              </span>
            </div>

            <span className="text-xs text-gray-500 font-semibold">
              {selectedMainCat.subjects.length} subjects
            </span>
          </div>

          {/* Category Banner Title */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <selectedMainCat.icon size={20} className="text-red-500" />
              <span>{selectedMainCat.name}</span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Select a subject folder to view its learning materials, past papers, notes & lecture recordings.
            </p>
          </div>

          {/* Subjects Grid (Compact & Sleek) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {selectedMainCat.subjects.map(subj => {
              const data = resolveSubjectData(subj)
              const count = data?.totalFiles || 0
              const SubjIcon = subj.icon

              return (
                <div
                  key={subj.id}
                  onClick={() => {
                    setSelectedSubject(subj)
                    setSelectedResourceFolder(null)
                  }}
                  className="p-3.5 bg-[#0e0e0e] hover:bg-[#121212] border border-[#1c1c1c] hover:border-red-600/40 rounded-xl flex flex-col justify-between h-32 transition-all duration-150 cursor-pointer group shadow-sm select-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                      <SubjIcon size={16} />
                    </div>
                    <Folder size={15} className="text-gray-600 group-hover:text-red-500 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 leading-snug">
                      {subj.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                      {subj.desc}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#181818] text-[10px] text-gray-500 font-medium">
                      <span>{count} {count === 1 ? "file" : "files"}</span>
                      <ChevronRight size={12} className="text-gray-500 group-hover:text-red-400 transition-colors" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : selectedResourceFolder === null ? (

        /* ═══════════════════════════════════════════════════════════════ */
        /* LEVEL 3: SUBJECT DASHBOARD (Showing the 8 Resource Folders)     */
        /* ═══════════════════════════════════════════════════════════════ */
        <div className="space-y-5 animate-in fade-in duration-150">
          
          {/* Breadcrumbs Navigation */}
          <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <button
                onClick={goToLevel1}
                className="text-gray-400 hover:text-white font-medium transition-colors"
              >
                Library
              </button>
              <span className="text-gray-600">/</span>
              <button
                onClick={goToLevel2}
                className="text-gray-400 hover:text-white font-medium transition-colors"
              >
                {selectedMainCat.shortCode}
              </button>
              <span className="text-gray-600">/</span>
              <span className="font-bold text-white bg-red-600/10 border border-red-600/30 text-red-500 px-2 py-0.5 rounded">
                {selectedSubject.name}
              </span>
            </div>

            <button
              onClick={goToLevel2}
              className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <ArrowLeft size={13} />
              <span>Back to {selectedMainCat.shortCode}</span>
            </button>
          </div>

          {/* Subject Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <selectedSubject.icon size={22} className="text-red-500" />
                <span>{selectedSubject.name}</span>
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {selectedSubject.desc}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold px-3 py-1 bg-[#141414] border border-[#222] rounded-full text-white">
                {currentSubjectDriveData?.totalFiles || 0} total files
              </span>
            </div>
          </div>

          {/* ── THE 8 RESOURCE SUBFOLDERS (Book-Style Cards) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {RESOURCE_SUBFOLDERS.map(resFolder => {
              const count = currentSubjectDriveData?.counts[resFolder.key] || 0
              const ResIcon = resFolder.icon

              return (
                <div
                  key={resFolder.key}
                  onClick={() => {
                    setSelectedResourceFolder(resFolder)
                    setFolderFileSearch("")
                  }}
                  className="p-4 bg-[#0e0e0e] hover:bg-[#131313] border border-[#1f1f1f] hover:border-red-600/40 rounded-xl flex flex-col justify-between h-32 transition-all duration-150 cursor-pointer group shadow-sm select-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                      <ResIcon size={16} />
                    </div>
                    <Folder size={15} className="text-gray-600 group-hover:text-red-500 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors truncate leading-snug">
                      {resFolder.title}
                    </h3>
                    <p className="text-[10px] text-gray-500 truncate mt-0.5">
                      {resFolder.subtitle}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#181818] text-[10px] font-medium">
                      <span className={count > 0 ? "text-red-400 font-semibold" : "text-gray-500"}>
                        {count} {count === 1 ? "item" : "items"}
                      </span>
                      <ChevronRight size={12} className="text-gray-500 group-hover:text-red-400 transition-colors" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (

        /* ═══════════════════════════════════════════════════════════════ */
        /* LEVEL 4: RESOURCE FOLDER VIEW (Displaying Actual Documents)    */
        /* ═══════════════════════════════════════════════════════════════ */
        <div className="space-y-4 animate-in fade-in duration-150">
          
          {/* Breadcrumbs Navigation */}
          <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <button onClick={goToLevel1} className="text-gray-400 hover:text-white font-medium transition-colors">
                Library
              </button>
              <span className="text-gray-600">/</span>
              <button onClick={goToLevel2} className="text-gray-400 hover:text-white font-medium transition-colors">
                {selectedMainCat.shortCode}
              </button>
              <span className="text-gray-600">/</span>
              <button onClick={goToLevel3} className="text-gray-400 hover:text-white font-medium transition-colors">
                {selectedSubject.name}
              </button>
              <span className="text-gray-600">/</span>
              <span className="font-bold text-white bg-red-600/10 border border-red-600/30 text-red-500 px-2 py-0.5 rounded">
                {selectedResourceFolder.title}
              </span>
            </div>

            <button
              onClick={goToLevel3}
              className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <ArrowLeft size={13} />
              <span>Back to {selectedSubject.name}</span>
            </button>
          </div>

          {/* Folder Title & Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <selectedResourceFolder.icon size={20} className="text-red-500" />
                <span>{selectedResourceFolder.title}</span>
                <span className="text-xs font-normal text-gray-500">
                  in {selectedSubject.name}
                </span>
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {selectedResourceFolder.subtitle}
              </p>
            </div>

            {/* Filter in this folder */}
            <div className="relative w-full sm:w-64">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Filter files in this folder..."
                value={folderFileSearch}
                onChange={e => setFolderFileSearch(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-[#222] focus:border-red-600 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Actual Documents List */}
          {currentFolderFiles.length === 0 ? (
            <div className="py-16 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl text-center space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#161616] border border-[#262626] flex items-center justify-center mx-auto text-gray-500">
                <selectedResourceFolder.icon size={20} />
              </div>
              <p className="text-sm text-gray-400 font-semibold">
                No documents currently inside {selectedResourceFolder.title}.
              </p>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Any materials or lecture recordings placed in the {selectedSubject.name} Google Drive folder will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {currentFolderFiles.map(file => {
                const isVid =
                  selectedResourceFolder.key === "videos" ||
                  /\.(mp4|m4a|mov|webm|mp3)$/i.test(file.name)

                return (
                  <div
                    key={file.id}
                    onClick={() => openResource(file, selectedSubject.name)}
                    className="p-3 bg-[#0e0e0e] hover:bg-[#131313] border border-[#1c1c1c] hover:border-red-600/40 rounded-xl flex items-center justify-between gap-3 transition-colors cursor-pointer group shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500 group-hover:scale-105 transition-all flex-shrink-0">
                        {isVid ? <Play size={13} className="fill-current" /> : <FileText size={13} />}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white truncate group-hover:text-red-400 transition-colors">
                          {file.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5 text-[10px] text-gray-500 truncate">
                          {file.path && file.path.length > 0 && <span>{file.path.join(" / ")}</span>}
                          {formatBytes(file.size) && (
                            <>
                              <span>·</span>
                              <span>{formatBytes(file.size)}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <button className="px-3 py-1.5 rounded-lg bg-[#161616] group-hover:bg-red-600 text-gray-300 group-hover:text-white text-[11px] font-semibold transition-colors flex items-center gap-1.5 flex-shrink-0 shadow-sm">
                      {isVid ? <Play size={10} className="fill-current" /> : <Eye size={11} />}
                      <span>{isVid ? "Watch" : "Study"}</span>
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* ── IN-APP STUDY MATERIAL VIEWER & NATIVE PLAYER ── */}
      {activeViewerMaterial && (
        <StudyMaterialViewer
          material={activeViewerMaterial}
          onClose={() => setActiveViewerMaterial(null)}
        />
      )}
    </div>
  )
}
