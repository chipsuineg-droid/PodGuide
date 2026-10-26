"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Zap,
  BookMarked,
  ShoppingBag,
  Brain,
  Users,
  TrendingUp,
  LayoutDashboard,
  GraduationCap,
  Folder,
  HelpCircle,
  MessageSquare,
  Bone,
  HeartPulse,
  FlaskConical,
  Microscope,
  Search,
  Plus,
  BookOpen,
  Check,
  X,
  Stethoscope,
  Dna,
  Pill,
  Activity,
  Scan,
  TestTube,
  Settings,
  HeartHandshake,
  ShieldCheck,
  Globe,
  ChevronRight,
  ArrowRight,
  Video,
  Layers,
  Sparkles,
  BrainCircuit,
  Mail,
  MapPin,
  Heart,
} from "lucide-react"

interface LandingPageProps {
  isLoggedIn: boolean
}

type TabKey = "dashboard" | "learn" | "library" | "practise" | "network" | "medstore" | "grow"

const TABS_SEQUENCE: TabKey[] = ["dashboard", "learn", "library", "practise", "network", "medstore", "grow"]

export function LandingPage({ isLoggedIn }: LandingPageProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard")
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // Contact form state
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })

  // Cursor tour animation refs
  const workspaceRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const currentTabIndexRef = useRef(0)
  const isInteractingRef = useRef(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Ensure landing page always enforces its signature black theme
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  // Switch tab function
  const handleSelectTab = (tabId: TabKey, isManual = true) => {
    if (isManual) {
      isInteractingRef.current = true
      setIsUserInteracting(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0"
      }
    }
    setActiveTab(tabId)
  }

  // Automated cursor tour
  useEffect(() => {
    const runTour = () => {
      if (isInteractingRef.current) return

      const nextTab = TABS_SEQUENCE[currentTabIndexRef.current]
      const targetBtn = document.getElementById(`tab-btn-${nextTab}`)
      const cursor = cursorRef.current
      const workspace = workspaceRef.current

      if (targetBtn && cursor && workspace) {
        const btnRect = targetBtn.getBoundingClientRect()
        const workspaceRect = workspace.getBoundingClientRect()

        const relX = btnRect.left - workspaceRect.left + btnRect.width / 2 - 12
        const relY = btnRect.top - workspaceRect.top + btnRect.height / 2 - 12

        cursor.style.transform = `translate(${relX}px, ${relY}px)`

        setTimeout(() => {
          if (isInteractingRef.current) return
          setActiveTab(nextTab)
          currentTabIndexRef.current = (currentTabIndexRef.current + 1) % TABS_SEQUENCE.length
        }, 900)
      }

      timerRef.current = setTimeout(runTour, 3800)
    }

    const initialTimer = setTimeout(() => {
      runTour()
    }, 1500)

    return () => {
      clearTimeout(initialTimer)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginModalOpen(false)
    router.push("/login")
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactSubmitted(true)
    setContactForm({ name: "", email: "", message: "" })
  }

  return (
    <div className="landing-page min-h-screen bg-[#050507] text-[#F4F4F5] font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* ── TOP NAVIGATION BAR (SEAMLESS, NO COMPARTMENTALIZING WHITE LINE) ── */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 sm:px-8 bg-[#050507]/90 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-md bg-red-600 flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white text-xs font-black">P</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Pod<span className="text-red-600">Guide</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#workspace" className="hover:text-white transition-colors duration-150">Workspace</a>
            <a href="#programs" className="hover:text-white transition-colors duration-150">Programs</a>
            <a href="#story" className="hover:text-white transition-colors duration-150">Our Story</a>
            <a href="#contact" className="hover:text-white transition-colors duration-150">Contact</a>
          </div>

          {/* Launch / Login Button */}
          <div className="flex items-center gap-3">
            <Link
              href={isLoggedIn ? "/dashboard" : "/login"}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 shadow-md"
            >
              <Zap size={14} className="mr-1.5 fill-white" />
              <span>{isLoggedIn ? "Go to Dashboard" : "Launch App"}</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* ── MAIN HERO SECTION ── */}
      <section className="relative min-h-[75vh] pt-32 pb-16 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        {/* World-Class Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-light tracking-tight text-white leading-[1.08] max-w-4xl text-balance">
          Your medical journey <span className="font-semibold text-white">unified in one space.</span>
        </h1>

        {/* Professional Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl font-normal leading-relaxed text-center text-balance">
          A cohesive environment designed specifically for health science students and healthcare professionals to access curated academic shelves, clinical diagnostic tools, adaptive question banks, professional gear, and global growth opportunities.
        </p>

        {/* ── RICH FLOATING / HOVERING BADGES CANVAS ── */}
        <div className="mt-14 w-full max-w-4xl py-6 px-2 relative flex flex-wrap items-center justify-center gap-3.5 sm:gap-4.5">
          <Link
            href={isLoggedIn ? "/library" : "/login"}
            className="animate-float-1 bg-[#101010] hover:bg-[#161616] px-4 py-2.5 rounded-2xl flex items-center gap-3 cursor-pointer border border-[#222] hover:border-red-600 transition-all shadow-lg hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0">
              <BookMarked size={15} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Curated Shelves</div>
              <div className="text-[10px] text-gray-400">Medicine, Pharmacy, Vet, Nursing</div>
            </div>
          </Link>

          <Link
            href={isLoggedIn ? "/practise" : "/login"}
            className="animate-float-2 bg-[#101010] hover:bg-[#161616] px-4 py-2.5 rounded-2xl flex items-center gap-3 cursor-pointer border border-[#222] hover:border-red-600 transition-all shadow-lg hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0">
              <BrainCircuit size={15} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">10,000+ MCQs</div>
              <div className="text-[10px] text-gray-400">Adaptive Question Banks</div>
            </div>
          </Link>

          <Link
            href={isLoggedIn ? "/medstore" : "/login"}
            className="animate-float-3 bg-[#101010] hover:bg-[#161616] px-4 py-2.5 rounded-2xl flex items-center gap-3 cursor-pointer border border-[#222] hover:border-red-600 transition-all shadow-lg hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={15} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">MedStore & TANC</div>
              <div className="text-[10px] text-gray-400">Scrubs, Coats & Stethoscopes</div>
            </div>
          </Link>

          <Link
            href={isLoggedIn ? "/learn" : "/login"}
            className="animate-float-4 bg-[#101010] hover:bg-[#161616] px-4 py-2.5 rounded-2xl flex items-center gap-3 cursor-pointer border border-[#222] hover:border-red-600 transition-all shadow-lg hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0">
              <Stethoscope size={15} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Clinical Handbooks</div>
              <div className="text-[10px] text-gray-400">Ward Rounds & OSCE Guides</div>
            </div>
          </Link>

          <Link
            href={isLoggedIn ? "/campus" : "/login"}
            className="animate-float-5 bg-[#101010] hover:bg-[#161616] px-4 py-2.5 rounded-2xl flex items-center gap-3 cursor-pointer border border-[#222] hover:border-red-600 transition-all shadow-lg hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0">
              <Users size={15} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Campus Feed</div>
              <div className="text-[10px] text-gray-400">Peer Mentorship Network</div>
            </div>
          </Link>

          <Link
            href={isLoggedIn ? "/library" : "/login"}
            className="animate-float-2 bg-[#101010] hover:bg-[#161616] px-4 py-2.5 rounded-2xl flex items-center gap-3 cursor-pointer border border-[#222] hover:border-red-600 transition-all shadow-lg hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0">
              <Video size={15} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">In-App Study Viewer</div>
              <div className="text-[10px] text-gray-400">Full-Screen Video & Notes</div>
            </div>
          </Link>

          <Link
            href={isLoggedIn ? "/grow" : "/login"}
            className="animate-float-1 bg-[#101010] hover:bg-[#161616] px-4 py-2.5 rounded-2xl flex items-center gap-3 cursor-pointer border border-[#222] hover:border-red-600 transition-all shadow-lg hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0">
              <TrendingUp size={15} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Career Growth</div>
              <div className="text-[10px] text-gray-400">Grants, Electives & Fellowships</div>
            </div>
          </Link>

          <Link
            href={isLoggedIn ? "/learn" : "/login"}
            className="animate-float-3 bg-[#101010] hover:bg-[#161616] px-4 py-2.5 rounded-2xl flex items-center gap-3 cursor-pointer border border-[#222] hover:border-red-600 transition-all shadow-lg hover:scale-105"
          >
            <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center flex-shrink-0">
              <Layers size={15} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Spaced Repetition</div>
              <div className="text-[10px] text-gray-400">Flashcards & Clinical Pearls</div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── INTERACTIVE WORKSPACE SHOWCASE (APPLE-INSPIRED TYPOGRAPHY) ── */}
      <section id="workspace" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-red-500 tracking-[0.2em] uppercase">
            Live Workspace Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-light text-white tracking-tight mt-2.5">
            See how PodGuide works in real time.
          </h2>
          <p className="text-sm text-gray-400 mt-2.5 font-normal max-w-lg mx-auto">
            Experience the fluid ecosystem in action, or click any workspace tab to explore directly.
          </p>
        </div>

        {/* Main App Mockup Shell */}
        <div
          ref={workspaceRef}
          className="relative bg-[#080808] rounded-3xl border border-[#222] shadow-2xl overflow-hidden min-h-[620px] flex flex-col md:flex-row"
        >
          {/* Virtual Pointer Cursor Overlay */}
          <div
            ref={cursorRef}
            id="simulated-cursor"
            className="absolute top-0 left-0 flex items-center gap-1.5 pointer-events-none transition-all duration-700 z-30"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <path d="M3 3L10.07 19.97L13.58 12.58L20.97 9.07L3 3Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
              PodGuide Assistant
            </div>
          </div>

          {/* Left App Sidebar */}
          <aside className="w-full md:w-64 bg-[#0d0d0d] border-b md:border-b-0 md:border-r border-[#1f1f1f] p-5 flex flex-col justify-between shrink-0">
            <div>
              {/* App Title Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1f1f1f]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                    P
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white tracking-wide">PodGuide App</h3>
                    <p className="text-[10px] text-gray-400">Workspace</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              {/* Navigation Items */}
              <div className="space-y-1.5" id="app-sidebar-tabs">
                <button
                  type="button"
                  id="tab-btn-dashboard"
                  onClick={() => handleSelectTab("dashboard")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === "dashboard"
                      ? "bg-red-600 text-white font-bold shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-[#161616]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <LayoutDashboard size={15} />
                    <span>Dashboard</span>
                  </div>
                  <ChevronRight size={12} className={activeTab === "dashboard" ? "opacity-100" : "opacity-0"} />
                </button>

                <button
                  type="button"
                  id="tab-btn-learn"
                  onClick={() => handleSelectTab("learn")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === "learn"
                      ? "bg-red-600 text-white font-bold shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-[#161616]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap size={15} />
                    <span>Learn</span>
                  </div>
                  <ChevronRight size={12} className={activeTab === "learn" ? "opacity-100" : "opacity-0"} />
                </button>

                <button
                  type="button"
                  id="tab-btn-library"
                  onClick={() => handleSelectTab("library")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === "library"
                      ? "bg-red-600 text-white font-bold shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-[#161616]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Folder size={15} />
                    <span>Library</span>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeTab === "library" ? "bg-white/20 text-white" : "bg-[#181818] text-gray-400"}`}>
                    37
                  </span>
                </button>

                <button
                  type="button"
                  id="tab-btn-practise"
                  onClick={() => handleSelectTab("practise")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === "practise"
                      ? "bg-red-600 text-white font-bold shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-[#161616]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={15} />
                    <span>Practise</span>
                  </div>
                  <ChevronRight size={12} className={activeTab === "practise" ? "opacity-100" : "opacity-0"} />
                </button>

                <button
                  type="button"
                  id="tab-btn-network"
                  onClick={() => handleSelectTab("network")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === "network"
                      ? "bg-red-600 text-white font-bold shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-[#161616]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare size={15} />
                    <span>Network</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                </button>

                <button
                  type="button"
                  id="tab-btn-medstore"
                  onClick={() => handleSelectTab("medstore")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === "medstore"
                      ? "bg-red-600 text-white font-bold shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-[#161616]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ShoppingBag size={15} />
                    <span>MedStore</span>
                  </div>
                  <ChevronRight size={12} className={activeTab === "medstore" ? "opacity-100" : "opacity-0"} />
                </button>

                <button
                  type="button"
                  id="tab-btn-grow"
                  onClick={() => handleSelectTab("grow")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === "grow"
                      ? "bg-red-600 text-white font-bold shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-[#161616]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp size={15} />
                    <span>Grow</span>
                  </div>
                  <ChevronRight size={12} className={activeTab === "grow" ? "opacity-100" : "opacity-0"} />
                </button>
              </div>
            </div>

            {/* User Profile Badge */}
            <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2c2c2c] flex items-center justify-center font-bold text-xs text-gray-200">
                GT
              </div>
              <div className="truncate">
                <div className="text-xs font-semibold text-white truncate">Genius Tanaka Chipfupa</div>
                <div className="text-[10px] text-gray-400 truncate">Year 5 MBChB</div>
              </div>
            </div>
          </aside>

          {/* Main Interactive Content Panel */}
          <main className="flex-1 p-6 md:p-8 bg-[#050507] overflow-y-auto max-h-[620px] relative">
            {/* ── TAB 1: DASHBOARD (ELEGANT TITLE CASE GREETING) ── */}
            {activeTab === "dashboard" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1f1f1f] pb-4">
                  <div>
                    <h2 className="text-xl font-display font-semibold text-white tracking-tight">Good afternoon, Genius.</h2>
                    <p className="text-xs text-gray-400 mt-1">Here is your academic overview for today.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#121212] border border-[#242424] text-gray-300">
                      MBChB Curriculum
                    </span>
                  </div>
                </div>

                {/* Subject Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-[#101010] p-4 rounded-2xl border border-[#202020] hover:border-red-600/40 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500">
                        <Bone size={15} />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">8 Modules</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">Anatomy</h4>
                    <p className="text-xs text-gray-400 mt-1">Gross Anatomy, Neuroanatomy & Embryology</p>
                    <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full mt-4 overflow-hidden">
                      <div className="bg-red-600 h-full w-[72%]" />
                    </div>
                  </div>

                  <div className="bg-[#101010] p-4 rounded-2xl border border-[#202020] hover:border-red-600/40 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500">
                        <HeartPulse size={15} />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">7 Modules</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">Physiology</h4>
                    <p className="text-xs text-gray-400 mt-1">Cardiovascular & Renal Systems</p>
                    <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full mt-4 overflow-hidden">
                      <div className="bg-red-600 h-full w-[85%]" />
                    </div>
                  </div>

                  <div className="bg-[#101010] p-4 rounded-2xl border border-[#202020] hover:border-red-600/40 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500">
                        <FlaskConical size={15} />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">6 Modules</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">Biochemistry</h4>
                    <p className="text-xs text-gray-400 mt-1">Metabolic Pathways & Enzyme Kinetics</p>
                    <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full mt-4 overflow-hidden">
                      <div className="bg-red-600 h-full w-[45%]" />
                    </div>
                  </div>

                  <div className="bg-[#101010] p-4 rounded-2xl border border-[#202020] hover:border-red-600/40 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500">
                        <Microscope size={15} />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">5 Modules</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">Histology</h4>
                    <p className="text-xs text-gray-400 mt-1">Microscopic Cellular Structures</p>
                    <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full mt-4 overflow-hidden">
                      <div className="bg-red-600 h-full w-[60%]" />
                    </div>
                  </div>

                  <div className="bg-[#101010] p-4 rounded-2xl border border-[#202020] hover:border-red-600/40 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-[#161616] border border-[#242424] flex items-center justify-center text-red-500">
                        <MessageSquare size={15} />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">4 Modules</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white">Clinical Communication</h4>
                    <p className="text-xs text-gray-400 mt-1">Bedside Ethics, History Taking & Case Presentation</p>
                    <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full mt-4 overflow-hidden">
                      <div className="bg-red-600 h-full w-[90%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 2: LEARN ── */}
            {activeTab === "learn" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="relative w-full sm:w-80">
                    <Search size={14} className="absolute left-3.5 top-3 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search learning materials..."
                      className="w-full bg-[#101010] border border-[#202020] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <Link
                    href={isLoggedIn ? "/learn" : "/login"}
                    className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-semibold hover:bg-red-700 transition flex items-center justify-center gap-1.5"
                  >
                    <Plus size={14} /> New Notebook
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center mb-3">
                        <BookOpen size={18} />
                      </div>
                      <h3 className="text-base font-bold text-white">Academic Library Palette</h3>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        Organized collection of high-yield study notes, clinical guidelines, and interactive diagrams tailored for undergraduate and postgraduate health syllabi.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
                      <span className="text-[11px] text-gray-400">12 Active Subjects</span>
                      <Link href={isLoggedIn ? "/learn" : "/login"} className="text-xs text-red-500 font-semibold hover:underline flex items-center gap-1">
                        Open Notebooks <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#181818] text-white flex items-center justify-center mb-3">
                        <BookMarked size={18} />
                      </div>
                      <h3 className="text-base font-bold text-white">High-Yield Clinical Summaries</h3>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                        Concise diagnostic algorithms, rapid differential criteria, and core textbook summaries designed specifically for bedside rounds and exam preparation.
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
                      <span className="text-[11px] text-gray-400">Verified Updates</span>
                      <Link href={isLoggedIn ? "/learn" : "/login"} className="text-xs text-white font-semibold hover:underline flex items-center gap-1">
                        Explore Summaries <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 3: LIBRARY ── */}
            {activeTab === "library" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-4">
                  <div>
                    <h2 className="text-lg font-bold text-white">Library Archives</h2>
                    <p className="text-xs text-gray-400">37 Folders organized across medical specialties</p>
                  </div>
                  <Link href={isLoggedIn ? "/library" : "/login"} className="text-xs font-semibold text-red-500 hover:underline">
                    View All Folders &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Internal Medicine</div>
                      <div className="text-[10px] text-gray-500">8 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Paediatrics</div>
                      <div className="text-[10px] text-gray-500">6 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">General Surgery</div>
                      <div className="text-[10px] text-gray-500">10 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Obstetrics & Gynae</div>
                      <div className="text-[10px] text-gray-500">5 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Pharmacology</div>
                      <div className="text-[10px] text-gray-500">4 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Histopathology</div>
                      <div className="text-[10px] text-gray-500">4 Files</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 4: PRACTISE (10,000+ HIGH YIELD MCQS) ── */}
            {activeTab === "practise" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-[#101010] p-6 rounded-2xl border border-[#202020] relative overflow-hidden">
                  <div>
                    <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">Adaptive Question Bank</span>
                    <h3 className="text-xl font-bold text-white mt-1">10,000+ High-Yield MCQs</h3>
                    <p className="text-xs text-gray-400 mt-2 max-w-lg leading-relaxed">
                      Practice real examination questions with step-by-step rationale, breakdown of distractors, and targeted weakness tracking across every organ system.
                    </p>
                    <Link
                      href={isLoggedIn ? "/practise" : "/login"}
                      className="mt-4 inline-flex items-center px-5 py-2.5 bg-red-600 text-white rounded-xl text-xs font-semibold hover:bg-red-700 transition shadow-md"
                    >
                      Start Today&apos;s Quiz
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020]">
                    <h4 className="text-xs font-bold text-white mb-1">Question Bank Mode</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Filter questions by organ system, level of difficulty, or previously missed items.</p>
                  </div>
                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020]">
                    <h4 className="text-xs font-bold text-white mb-1">Spaced Repetition Decks</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Flashcard decks designed for rapid recall of clinical dosages and diagnostic criteria.</p>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 5: NETWORK ── */}
            {activeTab === "network" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-4">
                  <h2 className="text-lg font-bold text-white">Campus Discussion Feed</h2>
                  <span className="text-xs text-gray-400">Active online: 142 students</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-full bg-[#1c1c1c] text-xs text-white flex items-center justify-center font-bold">TM</div>
                      <div>
                        <div className="text-xs font-semibold text-white">Tinashe Moyo</div>
                        <div className="text-[9px] text-gray-500">10 mins ago • Medical School Feed</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-300">&ldquo;Team team madii! Who has the revised OSCE surgical ward round schedule for tomorrow morning?&rdquo;</p>
                  </div>

                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-full bg-red-600/30 text-xs text-red-500 flex items-center justify-center font-bold">CR</div>
                      <div>
                        <div className="text-xs font-semibold text-white">Chipo R.</div>
                        <div className="text-[9px] text-gray-500">1 hour ago • Pathology Study Group</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-300">&ldquo;Can you see my question on renal biopsy interpretation in the main study thread?&rdquo;</p>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 6: MEDSTORE (WITH AUTHENTIC TANC SCRUBS & GEAR PHOTOS) ── */}
            {activeTab === "medstore" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-4">
                  <div>
                    <h2 className="text-lg font-bold text-white">MedStore</h2>
                    <p className="text-xs text-gray-400">Authentic equipment and gear delivered directly to campus</p>
                  </div>
                  <span className="text-xs text-red-500 font-semibold">Verified Clinical Gear</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* TANC Official Scrubs Card */}
                  <div className="bg-[#101010] rounded-2xl border border-[#202020] overflow-hidden flex flex-col justify-between">
                    <div className="h-36 bg-[#161616] relative flex items-center justify-center overflow-hidden">
                      <img
                        src="https://bunny-wp-pullzone-rohnewctqa.b-cdn.net/wp-content/uploads/2026/07/Summit-Blue_Core_Men_04.avif"
                        alt="TANC Core Scrubs"
                        className="w-full h-full object-cover"
                        onError={e => {
                          (e.target as HTMLElement).style.display = "none"
                        }}
                      />
                      <span className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">$30</span>
                    </div>
                    <div className="p-3.5">
                      <h4 className="text-xs font-bold text-white">TANC Core™ Complete Scrub Set</h4>
                      <p className="text-[10px] text-gray-400 mt-1">Tailored hospital-grade 4-way stretch poly-viscose.</p>
                      <Link href={isLoggedIn ? "/medstore" : "/login"} className="mt-3 block text-center py-1.5 bg-[#181818] hover:bg-red-600 text-white text-[11px] font-medium rounded-lg transition">
                        Order Now
                      </Link>
                    </div>
                  </div>

                  {/* Diagnostic Stethoscope Card */}
                  <div className="bg-[#101010] rounded-2xl border border-[#202020] overflow-hidden flex flex-col justify-between">
                    <div className="h-36 bg-[#161616] relative flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&auto=format&fit=crop&q=80"
                        alt="Clinical Diagnostic Stethoscope"
                        className="w-full h-full object-cover"
                        onError={e => {
                          (e.target as HTMLElement).style.display = "none"
                        }}
                      />
                      <span className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">$180</span>
                    </div>
                    <div className="p-3.5">
                      <h4 className="text-xs font-bold text-white">Clinical Diagnostic Stethoscope</h4>
                      <p className="text-[10px] text-gray-400 mt-1">High acoustic sensitivity for clinical ward rounds.</p>
                      <Link href={isLoggedIn ? "/medstore" : "/login"} className="mt-3 block text-center py-1.5 bg-[#181818] hover:bg-red-600 text-white text-[11px] font-medium rounded-lg transition">
                        Order Now
                      </Link>
                    </div>
                  </div>

                  {/* TANC Official Lab Coat Card */}
                  <div className="bg-[#101010] rounded-2xl border border-[#202020] overflow-hidden flex flex-col justify-between">
                    <div className="h-36 bg-[#161616] relative flex items-center justify-center overflow-hidden">
                      <img
                        src="https://bunny-wp-pullzone-rohnewctqa.b-cdn.net/wp-content/uploads/2026/07/Lab-Coats_Mens_01.avif"
                        alt="TANC Clinical Lab Coat"
                        className="w-full h-full object-cover"
                        onError={e => {
                          (e.target as HTMLElement).style.display = "none"
                        }}
                      />
                      <span className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">$20</span>
                    </div>
                    <div className="p-3.5">
                      <h4 className="text-xs font-bold text-white">TANC Crisp Shield Lab Coat</h4>
                      <p className="text-[10px] text-gray-400 mt-1">Fluid-resistant crisp cotton coat with chest embroidery.</p>
                      <Link href={isLoggedIn ? "/medstore" : "/login"} className="mt-3 block text-center py-1.5 bg-[#181818] hover:bg-red-600 text-white text-[11px] font-medium rounded-lg transition">
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 7: GROW ── */}
            {activeTab === "grow" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-[#1f1f1f] pb-4">
                  <h2 className="text-lg font-bold text-white">Career & Research Opportunities</h2>
                  <p className="text-xs text-gray-400">Verified grants, elective placements, and fellowships for African students</p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider">Research Grant</span>
                      <h4 className="text-xs font-bold text-white mt-0.5">Elton John AIDS Foundation Grant</h4>
                      <p className="text-[10px] text-gray-400">Funding youth-led clinical HIV/AIDS intervention studies across Southern Africa.</p>
                    </div>
                    <Link href={isLoggedIn ? "/grow" : "/login"} className="px-3 py-1.5 bg-[#181818] hover:bg-red-600 text-white text-[11px] font-semibold rounded-lg shrink-0 transition">
                      Apply
                    </Link>
                  </div>

                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider">Elective Placement</span>
                      <h4 className="text-xs font-bold text-white mt-0.5">WHO AFRO Student Internship</h4>
                      <p className="text-[10px] text-gray-400">Practical public health policy internship at the regional headquarters.</p>
                    </div>
                    <Link href={isLoggedIn ? "/grow" : "/login"} className="px-3 py-1.5 bg-[#181818] hover:bg-red-600 text-white text-[11px] font-semibold rounded-lg shrink-0 transition">
                      Apply
                    </Link>
                  </div>

                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider">Fellowship</span>
                      <h4 className="text-xs font-bold text-white mt-0.5">Commonwealth Medical Fellowship</h4>
                      <p className="text-[10px] text-gray-400">Fully funded postgraduate research opportunities for health science graduates.</p>
                    </div>
                    <Link href={isLoggedIn ? "/grow" : "/login"} className="px-3 py-1.5 bg-[#181818] hover:bg-red-600 text-white text-[11px] font-semibold rounded-lg shrink-0 transition">
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* ── BUILT FOR EVERY HEALTH STUDENT PROGRAMS SECTION ── */}
      <section id="programs" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#181818]">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-red-500 tracking-[0.2em] uppercase">
            Comprehensive Discipline Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-light text-white tracking-tight mt-2.5">
            Built for every health student.
          </h2>
          <p className="text-sm text-gray-400 mt-2.5 max-w-xl mx-auto text-center font-normal">
            Tailored learning materials, subject shelves, and community networks structured specifically for your discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <Stethoscope size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Medicine & Surgery</h3>
          </div>

          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <Dna size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Biomedical Sciences</h3>
          </div>

          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <Pill size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Pharmacy</h3>
          </div>

          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <Activity size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Nursing Science</h3>
          </div>

          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <HeartHandshake size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Occupational Therapy</h3>
          </div>

          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <Activity size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Physiotherapy</h3>
          </div>

          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <Scan size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Radiography</h3>
          </div>

          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <Settings size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Biomedical Engineering</h3>
          </div>

          <div className="bg-[#101010] p-5 rounded-2xl border border-[#202020] text-center flex flex-col items-center justify-center min-h-[130px] hover:border-red-600/40 transition-colors">
            <TestTube size={24} className="text-red-500 mb-3" />
            <h3 className="text-xs font-bold text-white">Medical Laboratory Sciences</h3>
          </div>

          {/* Plus 20 Badge Card */}
          <div className="bg-red-600/10 p-5 rounded-2xl border border-red-600/40 text-center flex flex-col items-center justify-center min-h-[130px] shadow-lg">
            <span className="text-2xl font-black text-red-500 mb-1">+20</span>
            <h3 className="text-xs font-bold text-white">Other Health Disciplines</h3>
          </div>
        </div>
      </section>

      {/* ── OUR STORY & CONTACT SECTION (WITH PODMYTH SUBSIDIARY INSPIRATION) ── */}
      <section id="story" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#181818]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Our Story */}
          <div className="space-y-6">
            <span className="text-xs font-semibold text-red-500 tracking-[0.2em] uppercase">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-white leading-tight">
              Built by medical students, <span className="font-semibold text-white">for the future of healthcare.</span>
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed text-justify">
              PodGuide was born out of direct frustration with the fragmented nature of medical education resources. Students frequently navigate scattered lecture notes, unverified online files, difficult access to authentic clinical equipment, and isolated study groups.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed text-justify">
              We built PodGuide to unify all these critical touchpoints into a single fluid workspace. From curated academic archives and clinical practice questions to direct equipment procurement and career placement opportunities, PodGuide provides students with everything required to excel in their training.
            </p>

            <div className="bg-[#101010] p-4 rounded-2xl border border-[#202020] space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">
                A Proud Subsidiary of PodMyth
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                As a proud subsidiary of PodMyth, PodGuide is driven by a singular mission: doing impactful work that genuinely elevates other people. We build technology designed to empower students, clinicians, and educators across the continent and beyond. We hope you find this workspace truly impactful, and we invite you to share it with your peers.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-gray-400 font-medium flex-wrap">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-red-500" />
                <span>Verified Syllabi</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-red-500" />
                <span>Student-Centric</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-red-500" />
                <span>Global Health Network</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact" className="bg-[#0e0e0e] p-6 sm:p-8 rounded-3xl border border-[#222] relative">
            <h3 className="text-xl font-bold text-white mb-1">Get in touch with us</h3>
            <p className="text-xs text-gray-400 mb-6">Have questions or want to introduce PodGuide to your university or institution?</p>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Genius Chipfupa"
                  value={contactForm.name}
                  onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full bg-[#121212] border border-[#222] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="student@medical.edu"
                  value={contactForm.email}
                  onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full bg-[#121212] border border-[#222] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your faculty, program, or inquiry..."
                  value={contactForm.message}
                  onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full bg-[#121212] border border-[#222] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-md transition"
              >
                Send Message
              </button>
            </form>

            {contactSubmitted && (
              <div className="absolute inset-0 bg-[#0e0e0e]/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-6 text-center animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center text-xl mb-3">
                  <Check size={20} />
                </div>
                <h4 className="text-base font-bold text-white">Message Received</h4>
                <p className="text-xs text-gray-400 mt-1">Thank you for reaching out. The PodGuide team will respond shortly.</p>
                <button
                  type="button"
                  onClick={() => setContactSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-[#1c1c1c] text-white text-xs rounded-xl hover:bg-[#282828] transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE FOOTER (LOCATION, EMAIL & PODMYTH PURPOSE) ── */}
      <footer className="border-t border-[#181818] py-14 px-4 sm:px-8 bg-black">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Brand & Purpose */}
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-red-600 flex items-center justify-center">
                  <span className="text-white text-xs font-black">P</span>
                </div>
                <span className="font-display text-xl font-bold text-white">
                  Pod<span className="text-red-600">Guide</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                The unified digital campus for medical and health sciences students. A proud subsidiary of PodMyth, dedicated to impactful education and healthcare innovation.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium pt-2">
                <Heart size={13} className="fill-red-500" />
                <span>Designed with love. Designed for impact. Designed because we love what we do.</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Platform</span>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><a href="#workspace" className="hover:text-white transition">Workspace</a></li>
                <li><a href="#programs" className="hover:text-white transition">Disciplines</a></li>
                <li><Link href={isLoggedIn ? "/library" : "/login"} className="hover:text-white transition">Library Shelves</Link></li>
                <li><Link href={isLoggedIn ? "/practise" : "/login"} className="hover:text-white transition">MCQ Question Banks</Link></li>
                <li><Link href={isLoggedIn ? "/medstore" : "/login"} className="hover:text-white transition">MedStore Catalog</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact & Location */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Contact & Location</span>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin size={13} className="text-red-500 flex-shrink-0" />
                  <span>Harare, Zimbabwe</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={13} className="text-red-500 flex-shrink-0" />
                  <a href="mailto:hello@podmyth.com" className="hover:text-white transition">hello@podmyth.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={13} className="text-red-500 flex-shrink-0" />
                  <span>Serving Health Students Worldwide</span>
                </li>
                <li className="pt-1">
                  <Link href="/login" className="text-red-500 font-semibold hover:underline">
                    Access Portal Login &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} PodGuide. A subsidiary of PodMyth. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/login" className="hover:text-white transition">App Login</Link>
              <Link href="/register" className="hover:text-white transition">Student Registration</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── INTERACTIVE LOGIN MODAL ── */}
      {loginModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setLoginModalOpen(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#0e0e0e] w-full max-w-md p-6 sm:p-8 rounded-3xl border border-[#222] relative shadow-2xl animate-in zoom-in-95"
          >
            <button
              type="button"
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-red-600 mx-auto flex items-center justify-center text-white font-bold text-2xl shadow-lg mb-3">
                P
              </div>
              <h3 className="text-xl font-bold text-white">Welcome to PodGuide Workspace</h3>
              <p className="text-xs text-gray-400 mt-1">Sign in to access your medical learning dashboard.</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Student Email or Registration ID</label>
                <input
                  type="text"
                  required
                  placeholder="student@uz.ac.zw"
                  value={loginEmail}
                  onChange={e => setLoginEmail(e.target.value)}
                  className="w-full bg-[#121212] border border-[#222] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={e => setLoginPassword(e.target.value)}
                  className="w-full bg-[#121212] border border-[#222] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-red-600 rounded" />
                  <span>Remember me</span>
                </label>
                <Link href="/login" className="text-red-500 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-md transition"
              >
                Launch Interactive App
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-gray-500">
              Don&apos;t have an account yet?{" "}
              <Link href="/register" className="text-white hover:underline font-semibold">
                Register your institution
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
