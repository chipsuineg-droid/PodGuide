"use client"

import { useEffect, useState, useMemo } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  Search,
  ExternalLink,
  Eye,
  X,
  Check,
  Folder,
  Link2,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  Stethoscope,
  Baby,
  Scissors,
  HeartPulse,
  Building2,
  Brain,
  Pill,
  Bone,
  Activity,
  Microscope,
  Droplets,
  FlaskConical,
  Bug,
  Shield,
  Compass,
  Dna,
  Scale,
  PawPrint,
  HeartHandshake,
  LucideIcon,
} from "lucide-react"
import { toast } from "sonner"

export interface LibraryFolderItem {
  id: string
  name: string
  iconName: string
  description: string
  programme: string
  level?: string
  itemCount: number
  driveUrl?: string
  folderId?: string
}

export interface ProgrammeShelfGroup {
  id: string
  name: string
  programmeKey: string
  folders: LibraryFolderItem[]
}

const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope,
  Baby,
  Scissors,
  HeartPulse,
  Building2,
  Brain,
  Pill,
  Bone,
  Activity,
  Microscope,
  Droplets,
  FlaskConical,
  Bug,
  Shield,
  Compass,
  Dna,
  Scale,
  PawPrint,
  HeartHandshake,
  Folder,
}

function FolderIcon({
  name,
  size = 13,
  className = "",
}: {
  name: string
  size?: number
  className?: string
}) {
  const IconComponent = ICON_MAP[name] || Folder
  return <IconComponent size={size} className={className} />
}

const INITIAL_PROGRAMME_SHELVES: ProgrammeShelfGroup[] = [
  // ── 1. Biomedical Sciences / MBChB / MBBS ──
  {
    id: "biomedical-medicine",
    name: "Biomedical Sciences / MBChB / MBBS",
    programmeKey: "Biomedical Sciences / MBChB / MBBS",
    folders: [
      {
        id: "bms-internal-med",
        name: "Internal Medicine",
        iconName: "Stethoscope",
        description: "Cardiology, pulmonology, gastroenterology, nephrology and acute medical admissions.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-paediatrics",
        name: "Paediatrics",
        iconName: "Baby",
        description: "Neonatal care, developmental milestones, childhood infections and pediatric resuscitation.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-surgery",
        name: "Surgery",
        iconName: "Scissors",
        description: "General operative surgery, acute abdomen algorithms, trauma resuscitation and post-op care.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-obs-gyn",
        name: "Obstetrics and Gynaecology",
        iconName: "HeartPulse",
        description: "Antenatal bookings, partograms, obstetric emergencies, pelvic masses and contraception.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-community-med",
        name: "Community Medicine",
        iconName: "Building2",
        description: "District health administration, disease outbreak control, maternal programs and sanitation.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-psychiatry",
        name: "Psychiatry",
        iconName: "Brain",
        description: "Mental state examinations, mood disorders, psychosis, substance use and emergencies.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-pharmacology",
        name: "Pharmacology",
        iconName: "Pill",
        description: "Pharmacokinetics, pharmacodynamics, autonomic agents, drug interactions and therapeutics.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-anatomy",
        name: "Anatomy",
        iconName: "Bone",
        description: "Gross regional anatomy, cadaveric dissections, osteology, viscera and neuroanatomy.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-physiology",
        name: "Physiology",
        iconName: "Activity",
        description: "Membrane transport, cardiac output, respiratory mechanics, nephron dynamics and reflexes.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-histopathology",
        name: "Histopathology",
        iconName: "Microscope",
        description: "Surgical tissue biopsy evaluation, cellular injury, inflammation, dysplasia and neoplasia.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-haematology",
        name: "Haematology",
        iconName: "Droplets",
        description: "Blood film morphology, anaemia classifications, leukaemia, coagulation and transfusion.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-chemical-path",
        name: "Chemical Pathology",
        iconName: "FlaskConical",
        description: "Electrolytes, arterial blood gases, liver and renal profiles, cardiac biomarkers and assays.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-microbiology",
        name: "Medical Microbiology",
        iconName: "Bug",
        description: "Bacterial classification, viral replication, fungal pathogens and antimicrobial susceptibility.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-immunology",
        name: "Immunology",
        iconName: "Shield",
        description: "Innate and adaptive immunity, MHC presentation, hypersensitivity reactions and autoimmunity.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-behavioural",
        name: "Behavioural Sciences",
        iconName: "Compass",
        description: "Doctor-patient communication, medical sociology, clinical psychology and health habits.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-genetics",
        name: "Medical Genetics",
        iconName: "Dna",
        description: "Patterns of inheritance, karyotyping, chromosomal abnormalities and clinical pedigrees.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
      {
        id: "bms-forensic",
        name: "Forensic Medicine",
        iconName: "Scale",
        description: "Post-mortem examination, mechanical wounds, forensic toxicology and medical jurisprudence.",
        programme: "Biomedical Sciences / MBChB / MBBS",
        itemCount: 0,
      },
    ],
  },

  // ── 2. Pharmacy (Exact 8 Folders) ──
  {
    id: "pharmacy",
    name: "Pharmacy",
    programmeKey: "Pharmacy",
    folders: [
      {
        id: "pharm-1-1",
        name: "Pharmacy 1.1",
        iconName: "Pill",
        description: "Pharmaceutical chemistry, cellular biology, organic reactions and calculations.",
        programme: "Pharmacy",
        itemCount: 0,
      },
      {
        id: "pharm-1-2",
        name: "Pharmacy 1.2",
        iconName: "Pill",
        description: "Physiology for pharmacy, physical pharmaceutics and pharmaceutical analysis.",
        programme: "Pharmacy",
        itemCount: 0,
      },
      {
        id: "pharm-2-1",
        name: "Pharmacy 2.1",
        iconName: "Pill",
        description: "General pharmacology, pharmaceutical microbiology and solid dosage formulation.",
        programme: "Pharmacy",
        itemCount: 0,
      },
      {
        id: "pharm-2-2",
        name: "Pharmacy 2.2",
        iconName: "Pill",
        description: "Biopharmaceutics, pharmacokinetics, medicinal chemistry and drug distribution.",
        programme: "Pharmacy",
        itemCount: 0,
      },
      {
        id: "pharm-3-1",
        name: "Pharmacy 3.1",
        iconName: "Pill",
        description: "Clinical pharmacokinetics, sterile manufacturing, antibiotics and pharmacotherapy.",
        programme: "Pharmacy",
        itemCount: 0,
      },
      {
        id: "pharm-3-2",
        name: "Pharmacy 3.2",
        iconName: "Pill",
        description: "Hospital pharmacy practice, disease-directed pharmacotherapy and patient counselling.",
        programme: "Pharmacy",
        itemCount: 0,
      },
      {
        id: "pharm-4-1",
        name: "Pharmacy 4.1",
        iconName: "Pill",
        description: "Advanced therapeutics, clinical toxicology, drug surveillance and biotechnology.",
        programme: "Pharmacy",
        itemCount: 0,
      },
      {
        id: "pharm-4-4",
        name: "Pharmacy 4.4",
        iconName: "Pill",
        description: "Pharmacy law and ethics, healthcare supply chain and clinical research project.",
        programme: "Pharmacy",
        itemCount: 0,
      },
    ],
  },

  // ── 3. Veterinary Sciences ──
  {
    id: "veterinary-sciences",
    name: "Veterinary Sciences",
    programmeKey: "Veterinary Sciences",
    folders: [
      {
        id: "vet-anatomy",
        name: "Veterinary Anatomy",
        iconName: "PawPrint",
        description: "Comparative animal osteology, myology, arthrology and neuroanatomy.",
        programme: "Veterinary Sciences",
        itemCount: 0,
      },
      {
        id: "vet-physiology",
        name: "Veterinary Physiology",
        iconName: "Activity",
        description: "Animal digestion, rumen mechanics, cardiovascular dynamics and endocrinology.",
        programme: "Veterinary Sciences",
        itemCount: 0,
      },
      {
        id: "vet-pathology",
        name: "Veterinary Pathology",
        iconName: "Microscope",
        description: "Gross necropsy, histopathological animal lesions and systemic diseases.",
        programme: "Veterinary Sciences",
        itemCount: 0,
      },
      {
        id: "vet-medicine",
        name: "Veterinary Medicine",
        iconName: "Stethoscope",
        description: "Small and large animal clinical medicine, herd diagnostics and zoonoses.",
        programme: "Veterinary Sciences",
        itemCount: 0,
      },
      {
        id: "vet-surgery",
        name: "Veterinary Surgery",
        iconName: "Scissors",
        description: "Aseptic technique, soft-tissue surgery, orthopaedics and animal anaesthesia.",
        programme: "Veterinary Sciences",
        itemCount: 0,
      },
      {
        id: "vet-pharmacology",
        name: "Veterinary Pharmacology",
        iconName: "Pill",
        description: "Veterinary therapeutics, dosage regimens, withdrawal periods and toxicology.",
        programme: "Veterinary Sciences",
        itemCount: 0,
      },
    ],
  },

  // ── 4. Nursing ──
  {
    id: "nursing",
    name: "Nursing",
    programmeKey: "Nursing",
    folders: [
      {
        id: "nurs-fundamentals",
        name: "Fundamentals of Nursing",
        iconName: "HeartHandshake",
        description: "Systematic nursing process, vital signs, bed-side ethics, infection control and wound care.",
        programme: "Nursing",
        itemCount: 0,
      },
      {
        id: "nurs-med-surg",
        name: "Medical-Surgical Nursing",
        iconName: "Activity",
        description: "Adult inpatient care, perioperative management, cardiac monitoring and post-op nursing.",
        programme: "Nursing",
        itemCount: 0,
      },
      {
        id: "nurs-paediatric",
        name: "Paediatric Nursing",
        iconName: "Baby",
        description: "Neonatal nursing care, IMCI guidelines, pediatric medications and growth monitoring.",
        programme: "Nursing",
        itemCount: 0,
      },
      {
        id: "nurs-midwifery",
        name: "Midwifery",
        iconName: "HeartPulse",
        description: "Antenatal nursing support, intrapartum labor stages and newborn resuscitation.",
        programme: "Nursing",
        itemCount: 0,
      },
      {
        id: "nurs-community",
        name: "Community Health Nursing",
        iconName: "Building2",
        description: "Primary healthcare clinics, immunization schedules, home visits and rural outreach.",
        programme: "Nursing",
        itemCount: 0,
      },
      {
        id: "nurs-mental-health",
        name: "Mental Health Nursing",
        iconName: "Brain",
        description: "Therapeutic relationships, psychiatric ward interventions and crisis de-escalation.",
        programme: "Nursing",
        itemCount: 0,
      },
    ],
  },
]

export default function LibraryPage() {
  const supabase = createClient()
  const [shelves, setShelves] = useState<ProgrammeShelfGroup[]>(INITIAL_PROGRAMME_SHELVES)
  const [search, setSearch] = useState("")
  const [selectedFolder, setSelectedFolder] = useState<LibraryFolderItem | null>(null)
  const [editingFolder, setEditingFolder] = useState<LibraryFolderItem | null>(null)
  const [driveUrlInput, setDriveUrlInput] = useState("")
  const [itemCountInput, setItemCountInput] = useState<number | string>("")
  const [user, setUser] = useState<any>(null)

  // Collapsed state map: { [shelfId]: boolean }
  const [collapsedShelves, setCollapsedShelves] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // 1. Load collapsed shelves from localStorage
    try {
      const storedCollapsed = localStorage.getItem("podguide_library_collapsed_shelves")
      if (storedCollapsed) {
        setCollapsedShelves(JSON.parse(storedCollapsed))
      }
    } catch {}

    // 2. Load cached folder links from localStorage & Supabase
    const init = async () => {
      const { data: authData } = await supabase.auth.getUser()
      if (authData?.user) setUser(authData.user)

      try {
        const storedV3 = localStorage.getItem("podguide_library_shelves_v3")
        const storedV2 = localStorage.getItem("podguide_library_shelves_v2")
        const parsed: Record<string, Partial<LibraryFolderItem>> = storedV3
          ? JSON.parse(storedV3)
          : storedV2
          ? JSON.parse(storedV2)
          : {}

        if (parsed && Object.keys(parsed).length > 0) {
          setShelves(prevShelves =>
            prevShelves.map(group => ({
              ...group,
              folders: group.folders.map(f => {
                // Check direct match or legacy match
                const match = parsed[f.id] || parsed[f.name.toLowerCase().replace(/[^a-z0-9]/g, "-")]
                return match ? { ...f, ...match } : f
              }),
            }))
          )
        }
      } catch {}
    }

    init()
  }, [])

  const toggleShelf = (shelfId: string) => {
    setCollapsedShelves(prev => {
      const next = { ...prev, [shelfId]: !prev[shelfId] }
      try {
        localStorage.setItem("podguide_library_collapsed_shelves", JSON.stringify(next))
      } catch {}
      return next
    })
  }

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
    if (!editingFolder || !driveUrlInput.trim()) return

    const folderId = extractFolderId(driveUrlInput)
    const count =
      itemCountInput !== ""
        ? parseInt(itemCountInput.toString(), 10)
        : editingFolder.itemCount
    const updatedFolder: LibraryFolderItem = {
      ...editingFolder,
      driveUrl: driveUrlInput.trim(),
      folderId: folderId,
      itemCount: isNaN(count) ? 0 : Math.max(0, count),
    }

    // Update state
    setShelves(prevShelves =>
      prevShelves.map(group => ({
        ...group,
        folders: group.folders.map(f =>
          f.id === updatedFolder.id ? updatedFolder : f
        ),
      }))
    )

    // Save to localStorage
    try {
      const stored = localStorage.getItem("podguide_library_shelves_v3")
      const currentMap: Record<string, any> = stored ? JSON.parse(stored) : {}
      currentMap[updatedFolder.id] = {
        driveUrl: updatedFolder.driveUrl,
        folderId: updatedFolder.folderId,
        itemCount: updatedFolder.itemCount,
      }
      localStorage.setItem("podguide_library_shelves_v3", JSON.stringify(currentMap))
    } catch {}

    // Save to Supabase curated_drive_folders if authenticated
    try {
      if (user) {
        await supabase.from("curated_drive_folders").upsert({
          title: updatedFolder.name,
          drive_url: updatedFolder.driveUrl,
          folder_id: updatedFolder.folderId,
          category: updatedFolder.programme,
          programme: updatedFolder.programme,
          description: updatedFolder.description || "",
          icon: "📁",
          item_count: updatedFolder.itemCount,
          created_by: user.id,
        })
      }
    } catch (err) {
      console.warn("Supabase drive sync notice:", err)
    }

    toast.success(`${updatedFolder.name} folder link saved!`)
    setEditingFolder(null)
    setDriveUrlInput("")
  }

  const totalFiles = useMemo(() => {
    return shelves.reduce(
      (sum, group) =>
        sum + group.folders.reduce((sub, f) => sub + (f.itemCount || 0), 0),
      0
    )
  }, [shelves])

  const totalFoldersCount = useMemo(() => {
    return shelves.reduce((sum, group) => sum + group.folders.length, 0)
  }, [shelves])

  // Filter shelves and folders by search query
  const filteredShelves = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return shelves

    return shelves
      .map(group => {
        const matchingFolders = group.folders.filter(
          f =>
            f.name.toLowerCase().includes(q) ||
            f.description.toLowerCase().includes(q) ||
            group.name.toLowerCase().includes(q)
        )
        return {
          ...group,
          folders: matchingFolders,
        }
      })
      .filter(group => group.folders.length > 0)
  }, [shelves, search])

  const handleResetToZero = () => {
    if (!confirm("Clear all connected folder links and reset to clean zero?")) return
    try {
      localStorage.removeItem("podguide_library_shelves_v3")
      localStorage.removeItem("podguide_library_shelves_v2")
      localStorage.removeItem("podguide_library_shelves")
    } catch {}
    setShelves(INITIAL_PROGRAMME_SHELVES)
    toast.success("All folders reset to default. Ready for fresh connections.")
  }

  const openFolder = (folder: LibraryFolderItem) => {
    if (folder.folderId && folder.driveUrl) {
      setSelectedFolder(folder)
    } else {
      setEditingFolder(folder)
      setDriveUrlInput("")
      setItemCountInput(folder.itemCount > 0 ? folder.itemCount : "")
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      
      {/* ── TOP HEADER BAR ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#181818] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              LIBRARY SHELVES
            </h1>
            <span className="w-1 h-1 rounded-full bg-red-600" />
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
              {shelves.length} Programmes • {totalFoldersCount} Folders
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-white mt-0.5 tracking-tight">
            Curated Academic Shelves
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          <div className="relative w-full sm:w-60">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search folders or subjects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#0d0d0d] border border-[#222] focus:border-red-600 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-gray-500 outline-none transition-colors"
            />
          </div>

          <div className="px-3 py-1.5 bg-[#111] border border-[#222] rounded-lg text-xs font-semibold text-gray-400 whitespace-nowrap">
            {totalFiles} files
          </div>

          <button
            onClick={handleResetToZero}
            title="Reset connected links to zero"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-[#1a1a1a] border border-[#222] hover:border-red-600/40 text-gray-400 hover:text-white rounded-lg text-xs font-medium transition-colors whitespace-nowrap"
          >
            <RotateCcw size={11} className="text-red-500" /> Reset
          </button>
        </div>
      </div>

      {/* ── PROGRAMME SHELVES (COLLAPSIBLE) ── */}
      <div className="space-y-6">
        {filteredShelves.map(shelf => {
          // If searching, keep shelf open so results are visible; otherwise use collapsed state
          const isCollapsed = search.trim() ? false : Boolean(collapsedShelves[shelf.id])

          return (
            <div
              key={shelf.id}
              className="bg-[#0b0b0b] border border-[#1a1a1a] rounded-xl overflow-hidden transition-all duration-150"
            >
              {/* Shelf Header with Expand/Collapse Control */}
              <div className="flex items-center justify-between p-3 sm:px-4 bg-[#101010] border-b border-[#181818] select-none">
                <button
                  type="button"
                  onClick={() => toggleShelf(shelf.id)}
                  className="flex items-center gap-2.5 text-left group flex-1 focus:outline-none"
                  aria-expanded={!isCollapsed}
                >
                  <div className="w-5 h-5 rounded flex items-center justify-center bg-[#181818] border border-[#262626] text-gray-400 group-hover:text-white transition-colors flex-shrink-0">
                    {isCollapsed ? (
                      <ChevronRight size={12} />
                    ) : (
                      <ChevronDown size={12} />
                    )}
                  </div>

                  <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
                    {shelf.name}
                  </h2>

                  <span className="text-[10px] font-semibold text-gray-400 bg-[#161616] border border-[#242424] px-2 py-0.2 rounded-full">
                    {shelf.folders.length} {shelf.folders.length === 1 ? "folder" : "folders"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleShelf(shelf.id)}
                  className="text-[11px] font-medium text-gray-400 hover:text-white transition-colors px-2 py-1"
                >
                  {isCollapsed ? "Expand" : "Collapse"}
                </button>
              </div>

              {/* Shelf Folders Grid (Visible when Expanded) */}
              {!isCollapsed && (
                <div className="p-3 sm:p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
                    {shelf.folders.map(folder => {
                      const isConnected = Boolean(
                        folder.folderId && folder.driveUrl
                      )

                      return (
                        <div
                          key={folder.id}
                          onClick={() => openFolder(folder)}
                          className="bg-[#0e0e0e] hover:bg-[#141414] border border-[#1c1c1c] hover:border-[#333] rounded-lg p-2.5 flex flex-col justify-between transition-all duration-150 cursor-pointer group relative"
                        >
                          <div>
                            {/* Card Top: Small Icon & Connection Status */}
                            <div className="flex items-center justify-between gap-1.5">
                              <div className="w-6 h-6 rounded bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500 group-hover:bg-red-600/10 transition-colors flex-shrink-0">
                                <FolderIcon name={folder.iconName} size={12} />
                              </div>

                              <div className="flex items-center gap-1">
                                {isConnected && (
                                  <span
                                    title="Drive connected"
                                    className="w-1.5 h-1.5 rounded-full bg-red-600"
                                  />
                                )}
                                <button
                                  type="button"
                                  onClick={e => {
                                    e.stopPropagation()
                                    setEditingFolder(folder)
                                    setDriveUrlInput(folder.driveUrl || "")
                                    setItemCountInput(
                                      folder.itemCount > 0
                                        ? folder.itemCount
                                        : ""
                                    )
                                  }}
                                  title={
                                    isConnected
                                      ? "Edit Drive link"
                                      : "Connect Drive link"
                                  }
                                  className="text-gray-500 hover:text-white p-0.5 transition-colors"
                                >
                                  <Folder
                                    size={13}
                                    className={
                                      isConnected
                                        ? "text-red-500"
                                        : "text-gray-600 hover:text-gray-300"
                                    }
                                  />
                                </button>
                              </div>
                            </div>

                            {/* Card Middle: Folder Name */}
                            <h3 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 mt-2 leading-snug">
                              {folder.name}
                            </h3>

                            {/* Card Subtitle */}
                            <p className="text-[10px] text-gray-400 line-clamp-1 mt-0.5 leading-tight">
                              {folder.description}
                            </p>
                          </div>

                          {/* Card Bottom: File count */}
                          <div className="pt-2 mt-2 border-t border-[#181818] flex items-center justify-between text-[10px] text-gray-500">
                            <span>{folder.itemCount} files</span>
                            <span
                              className={
                                isConnected
                                  ? "text-red-500 font-medium"
                                  : "text-gray-600"
                              }
                            >
                              {isConnected ? "Linked" : "Connect"}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {filteredShelves.length === 0 && (
          <div className="text-center py-16 bg-[#0c0c0c] border border-[#1a1a1a] rounded-xl space-y-2">
            <p className="text-sm font-bold text-white">
              No matching shelves or folders found
            </p>
            <p className="text-xs text-gray-500">
              Try searching with another keyword or subject name.
            </p>
          </div>
        )}
      </div>

      {/* ── MODAL: PREVIEW CONNECTED FOLDER ── */}
      {selectedFolder && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-[#0e0e0e] border border-[#222] rounded-xl w-full max-w-3xl my-6 p-5 sm:p-6 space-y-4 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedFolder(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-3 pr-8">
              <div className="w-10 h-10 rounded-lg bg-[#161616] border border-[#262626] flex items-center justify-center text-red-500 flex-shrink-0">
                <FolderIcon name={selectedFolder.iconName} size={18} />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-600/10 px-2 py-0.5 rounded border border-red-600/20">
                    {selectedFolder.programme}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">
                    {selectedFolder.itemCount} files
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white leading-tight">
                  {selectedFolder.name}
                </h2>
                <p className="text-xs text-gray-400">
                  {selectedFolder.description}
                </p>
              </div>
            </div>

            {/* Embedded Live Google Drive View */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-gray-400">
                <span className="font-semibold flex items-center gap-1.5 text-white">
                  <Eye size={12} className="text-red-500" /> Drive Preview
                </span>
                <span className="text-[10px] text-gray-500">
                  Google Drive Embedded Viewer
                </span>
              </div>
              <div className="w-full h-80 rounded-lg overflow-hidden border border-[#222] bg-[#080808]">
                <iframe
                  src={`https://drive.google.com/embeddedfolderview?id=${selectedFolder.folderId}#grid`}
                  className="w-full h-full border-0"
                  title={selectedFolder.name}
                  allow="fullscreen"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              <a
                href={selectedFolder.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink size={13} /> Open in Google Drive
              </a>
              <button
                type="button"
                onClick={() => {
                  setEditingFolder(selectedFolder)
                  setDriveUrlInput(selectedFolder.driveUrl || "")
                  setItemCountInput(
                    selectedFolder.itemCount > 0 ? selectedFolder.itemCount : ""
                  )
                  setSelectedFolder(null)
                }}
                className="w-full sm:w-auto px-4 py-2 bg-[#161616] hover:bg-[#202020] border border-[#2b2b2b] text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                <Link2 size={12} /> Edit Link
              </button>
              <button
                type="button"
                onClick={() => setSelectedFolder(null)}
                className="w-full sm:w-auto px-4 py-2 bg-[#181818] hover:bg-[#222] border border-[#2b2b2b] text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: CONNECT / EDIT DRIVE LINK ── */}
      {editingFolder && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-[#0e0e0e] border border-[#222] rounded-xl w-full max-w-md p-5 sm:p-6 space-y-4 relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => {
                setEditingFolder(null)
                setDriveUrlInput("")
              }}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#161616] border border-[#262626] flex items-center justify-center text-red-500 flex-shrink-0">
                <FolderIcon name={editingFolder.iconName} size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">
                  {editingFolder.programme}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                  {editingFolder.name}
                </h3>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Paste the Google Drive folder share link for this folder. Ensure sharing is set to <strong>&quot;Anyone with the link can view&quot;</strong>.
            </p>

            <form onSubmit={handleSaveDriveLink} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Google Drive Folder Link
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/drive/folders/1aBcD_XyZ..."
                  value={driveUrlInput}
                  onChange={e => setDriveUrlInput(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#2b2b2b] focus:border-red-600 rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-gray-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  File Count (Optional)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 12 (leave empty or 0 if empty)"
                  value={itemCountInput}
                  onChange={e => setItemCountInput(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#2b2b2b] focus:border-red-600 rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-gray-600 outline-none transition-colors"
                />
              </div>

              <div className="flex gap-2.5 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Check size={13} /> Save Folder Link
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingFolder(null)
                    setDriveUrlInput("")
                  }}
                  className="px-3.5 py-2 bg-[#181818] hover:bg-[#222] border border-[#2b2b2b] text-gray-400 hover:text-white rounded-lg text-xs font-medium transition-colors"
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
