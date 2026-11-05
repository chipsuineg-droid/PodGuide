"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import MobileFooter from "./MobileFooter"
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
  Scissors,
  Baby,
  Scale,
  ChevronDown,
  Menu,
} from "lucide-react"

interface LandingPageProps {
  isLoggedIn: boolean
}

type TabKey = "dashboard" | "learn" | "library" | "practise" | "network" | "medstore" | "grow"

const TABS_SEQUENCE: TabKey[] = ["dashboard", "learn", "library", "practise", "network", "medstore", "grow"]

const TAB_ICONS: Record<TabKey, any> = {
  dashboard: LayoutDashboard,
  learn: GraduationCap,
  library: Folder,
  practise: HelpCircle,
  network: MessageSquare,
  medstore: ShoppingBag,
  grow: TrendingUp,
}

interface FloatingBadgeData {
  href: string
  icon: any
  title: string
  subtitle: string
  animationClass: string
}

const ALL_FLOATING_BADGES: FloatingBadgeData[] = [
  {
    href: "/library",
    icon: BookMarked,
    title: "Curated Shelves",
    subtitle: "Medicine, Pharmacy, Vet, Nursing",
    animationClass: "animate-float-1",
  },
  {
    href: "/practise",
    icon: BrainCircuit,
    title: "10,000+ MCQs",
    subtitle: "Adaptive Question Banks",
    animationClass: "animate-float-2",
  },
  {
    href: "/medstore",
    icon: ShoppingBag,
    title: "MedStore & TANC",
    subtitle: "Scrubs, Coats & Gear",
    animationClass: "animate-float-3",
  },
  {
    href: "/learn",
    icon: Stethoscope,
    title: "Clinical Handbooks",
    subtitle: "Ward Rounds & OSCE Checklists",
    animationClass: "animate-float-4",
  },
  {
    href: "/campus",
    icon: Users,
    title: "Campus Feed",
    subtitle: "Mentorship & Case Discussions",
    animationClass: "animate-float-5",
  },
  {
    href: "/library",
    icon: Video,
    title: "In-App Study Viewer",
    subtitle: "Full-Screen Video & Live Notes",
    animationClass: "animate-float-6",
  },
  {
    href: "/grow",
    icon: TrendingUp,
    title: "Career Growth",
    subtitle: "Grants, Electives & Fellowships",
    animationClass: "animate-float-7",
  },
  {
    href: "/learn",
    icon: Layers,
    title: "Spaced Repetition",
    subtitle: "Flashcards & Clinical Pearls",
    animationClass: "animate-float-8",
  },
  {
    href: "/library",
    icon: Microscope,
    title: "Histopathology",
    subtitle: "Microscopy & Tissue Slides",
    animationClass: "animate-float-2",
  },
  {
    href: "/library",
    icon: Pill,
    title: "Pharmacology",
    subtitle: "Monographs & Dosing Protocols",
    animationClass: "animate-float-4",
  },
  {
    href: "/library",
    icon: Bone,
    title: "Anatomy 3D",
    subtitle: "Osteology & Dissections",
    animationClass: "animate-float-6",
  },
  {
    href: "/library",
    icon: Scissors,
    title: "Surgery & Suturing",
    subtitle: "Aseptic Skills & Knot Tying",
    animationClass: "animate-float-1",
  },
]

/**
 * Interactive floating card for Desktop with ripple wave & tactile vibration
 */
function InteractiveFloatingCard({
  href,
  icon: Icon,
  title,
  subtitle,
  animationClass,
}: FloatingBadgeData) {
  const [isRippling, setIsRippling] = useState(false)
  const [isVibrating, setIsVibrating] = useState(false)

  const triggerFeedback = () => {
    setIsRippling(true)
    setIsVibrating(true)
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate(20) } catch (e) {}
    }
    setTimeout(() => setIsRippling(false), 600)
    setTimeout(() => setIsVibrating(false), 220)
  }

  return (
    <Link
      href={href}
      onClick={triggerFeedback}
      onMouseEnter={triggerFeedback}
      className={`landing-floating-badge ${animationClass} ${isVibrating ? "animate-vibrate" : ""} relative group cursor-pointer select-none transition-all duration-150 rounded-2xl border border-[#242424] hover:border-red-600 active:scale-95 shadow-xl inline-flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 shrink-0 bg-[#0e0e0e] text-white`}
      style={{
        backgroundColor: "#0e0e0e",
        boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
        willChange: "transform",
      }}
    >
      {isRippling && (
        <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-red-500 ripple-wave" />
      )}
      <div className="w-8 h-8 rounded-xl bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-150">
        <Icon size={15} />
      </div>
      <div className="text-left whitespace-nowrap pr-1">
        <div className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
          {title}
        </div>
        <div className="text-[10px] text-gray-400">
          {subtitle}
        </div>
      </div>
    </Link>
  )
}

interface MobileBadgeData {
  href: string
  icon: any
  title: string
  subtitle: string
}

/**
 * Mobile Badge Data: strictly 2-word punchy titles and 2-word subtitles.
 * Zero truncation dots, zero cutoffs, clean precision on any screen width.
 */
const MOBILE_BADGES: MobileBadgeData[] = [
  { href: "/library", icon: BookMarked, title: "Curated Shelves", subtitle: "Medical Library" },
  { href: "/practise", icon: BrainCircuit, title: "Question Bank", subtitle: "10,000+ MCQs" },
  { href: "/medstore", icon: ShoppingBag, title: "TANC MedStore", subtitle: "Clinical Gear" },
  { href: "/learn", icon: Stethoscope, title: "Clinical Guides", subtitle: "Ward Rounds" },
  { href: "/campus", icon: Users, title: "Campus Feed", subtitle: "Peer Cases" },
  { href: "/library", icon: Video, title: "Study Viewer", subtitle: "Video Notes" },
  { href: "/grow", icon: TrendingUp, title: "Career Growth", subtitle: "Global Grants" },
  { href: "/learn", icon: Layers, title: "Flashcard Decks", subtitle: "Spaced Recall" },
  { href: "/library", icon: Microscope, title: "Histology Atlas", subtitle: "Tissue Slides" },
  { href: "/library", icon: Pill, title: "Pharmacology", subtitle: "Drug Dosing" },
  { href: "/library", icon: Bone, title: "Anatomy 3D", subtitle: "Dissection Atlas" },
  { href: "/library", icon: Scissors, title: "Surgical Skills", subtitle: "Suture Lab" },
]

/**
 * Mobile-optimized compact floating card with ripple wave & tactile vibration
 * Strictly 2-word labels, zero truncation dots, boundary-free hovering.
 */
function MobileFloatingCard({
  href,
  icon: Icon,
  title,
  subtitle,
  animationClass,
}: MobileBadgeData & { animationClass: string }) {
  const [isRippling, setIsRippling] = useState(false)
  const [isVibrating, setIsVibrating] = useState(false)

  const triggerFeedback = () => {
    setIsRippling(true)
    setIsVibrating(true)
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate(25) } catch (e) {}
    }
    setTimeout(() => setIsRippling(false), 600)
    setTimeout(() => setIsVibrating(false), 220)
  }

  return (
    <Link
      href={href}
      onClick={triggerFeedback}
      onMouseEnter={triggerFeedback}
      className={`landing-floating-badge ${animationClass} ${isVibrating ? "animate-vibrate" : ""} relative group cursor-pointer select-none transition-all duration-150 rounded-xl border border-[#222] hover:border-red-600 active:scale-95 shadow-md inline-flex items-center gap-1.5 px-2.5 py-1.5 shrink-0 bg-[#0c0c0c] text-white`}
      style={{
        backgroundColor: "#0c0c0c",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
        willChange: "transform",
      }}
    >
      {isRippling && (
        <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-red-500 ripple-wave" />
      )}
      <div className="w-5 h-5 rounded-md bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-150">
        <Icon size={11} />
      </div>
      <div className="text-left whitespace-nowrap leading-tight pr-0.5">
        <div className="text-[10.5px] font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
          {title}
        </div>
        <div className="text-[8.5px] font-medium text-gray-400">
          {subtitle}
        </div>
      </div>
    </Link>
  )
}

const FULL_STORY_TEXT =
  "PodGuide was founded with a clear conviction: healthcare education should be unified, collaborative, and accessible. We built PodGuide as a trusted mentorship network, an academic library hub, an adaptive space to practice clinical examinations, and a launchpad for growth and opportunities. Whether you are a medical student, a health tutor, or a healthcare professional anywhere in the healthcare field, PodGuide gives you the tools to excel."

// ─── PARTNER DATA ───────────────────────────────────────────────────────────

interface PartnerData {
  name: string
  initials: string
  tagline: string
  summary: string
  color: string
  logo?: string   // path under /public
  featured?: boolean
  isPlaceholder?: boolean
}

const PARTNERS_DATA: PartnerData[] = [
  {
    name: "PodMyth Scrubs",
    initials: "PS",
    tagline: "Official Medical Gear Subsidiary",
    summary:
      "PodMyth Scrubs is an official subsidiary of PodMyth dedicated to supplying top-tier, durable, and comfortable medical gear and merchandise. Crafted specifically for medical and health sciences students, doctors, nurses, and allied professionals across Africa, featuring bespoke scrubs, laboratory coats, clinical diagnostic equipment, and stethoscope cases built to excel from preclinical labs to intense hospital wards. Browse the full gear collection inside the PodGuide MedStore.",
    color: "#dc2626",
    logo: "/images/podmyth-scrubs.png",
    featured: true,
  },
  {
    name: "ZIMSA",
    initials: "ZIMSA",
    tagline: "Medicine Par Excellence",
    summary:
      "Zimbabwe Medical Students Association (ZIMSA) is the premier national student-led organisation representing future medical practitioners across Zimbabwe. Operating under the banner 'Medicine Par Excellence', ZIMSA champions medical student welfare, inter-university clinical symposia, health research development, peer mentorship, and community healthcare outreach across all medical faculties in Zimbabwe.",
    color: "#002060",
    logo: "/images/zimsa-logo.png",
    featured: true,
  },
  {
    name: "Your Logo Here",
    initials: "+",
    tagline: "Take This Space · Healthcare Bodies",
    summary:
      "This space is reserved for your healthcare organisation, teaching hospital, regulatory council, or pharmaceutical partner. Connect your mission directly with thousands of active medical and health sciences students and tutors across Africa. Contact info@podmyth.co.zw to feature your organisation.",
    color: "#18181b",
    isPlaceholder: true,
  },
  {
    name: "Your Logo Here",
    initials: "+",
    tagline: "Take This Space · Student Organisations",
    summary:
      "Are you a pharmacy, medical, nursing, or allied health students association? Partner with PodGuide to broadcast your campus events, clinical competitions, mentorship hubs, and student initiatives to the broader African digital campus. Contact info@podmyth.co.zw to reserve this space.",
    color: "#18181b",
    isPlaceholder: true,
  },
  {
    name: "Your Logo Here",
    initials: "+",
    tagline: "Take This Space · Corporate & Clinical Sponsors",
    summary:
      "Partner with PodMyth & PodGuide to sponsor clinical question banks, diagnostic tools, scholarships, or clinical skill gear. Gain direct engagement with the next generation of healthcare professionals. Contact info@podmyth.co.zw to join the network.",
    color: "#18181b",
    isPlaceholder: true,
  },
]

// ─── PARTNER HORIZONTAL MARQUEE CARD (LARGER, PURE BRAND PALETTE) ───────────

function PartnerMarqueeCard({
  partner,
  onClick,
}: {
  partner: PartnerData
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative cursor-pointer select-none transition-all duration-200 rounded-2xl border ${
        partner.featured
          ? "border-red-600/40 hover:border-red-500 bg-[#0e0e11] shadow-[0_4px_20px_rgba(220,38,38,0.15)]"
          : "border-[#222226] hover:border-red-600/70 bg-[#0a0a0d]"
      } hover:bg-[#131317] active:scale-95 shadow-lg hover:shadow-2xl inline-flex items-center gap-3.5 px-5 py-3.5 shrink-0 text-white`}
    >
      {/* Larger Logo or Initials badge */}
      {partner.logo ? (
        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-white p-1.5 flex items-center justify-center border border-white/20 shadow-md transition-transform duration-200 group-hover:scale-105">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center font-bold text-sm text-red-500 bg-red-600/10 border border-dashed border-red-500/40 shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:border-red-500 group-hover:bg-red-600/20">
          <Plus size={20} className="text-red-500" />
        </div>
      )}

      {/* Label and Tagline */}
      <div className="text-left whitespace-nowrap pr-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
            {partner.name}
          </span>
          {partner.featured && (
            <span className="text-[9px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/30">
              OFFICIAL
            </span>
          )}
          {partner.isPlaceholder && (
            <span className="text-[9px] font-medium text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10 group-hover:border-red-500/30 group-hover:text-red-400 transition-colors">
              OPEN SLOT
            </span>
          )}
        </div>
        <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors mt-0.5">
          {partner.tagline}
        </div>
      </div>

      <span className="text-xs text-red-500 group-hover:text-red-400 transition-colors ml-1 font-semibold flex items-center gap-0.5">
        <span>Info</span>
        <span>&rarr;</span>
      </span>
    </button>
  )
}

/**
 * Isolated Typewriter Component (Prevents whole landing page from re-rendering on every typed character)
 */
function OurStoryTypewriter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasStartedTyping, setHasStartedTyping] = useState(false)
  const [typedStory, setTypedStory] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting && !hasStartedTyping) {
          setHasStartedTyping(true)
        }
      },
      { threshold: 0.15 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasStartedTyping])

  useEffect(() => {
    if (!hasStartedTyping) return

    let index = 0
    let isCancelled = false

    const typeNext = () => {
      if (isCancelled) return
      if (index <= FULL_STORY_TEXT.length) {
        setTypedStory(FULL_STORY_TEXT.slice(0, index))
        const lastChar = FULL_STORY_TEXT[index - 1]
        index++

        const delay = lastChar === "." || lastChar === ":" ? 300 : lastChar === "," ? 150 : 32
        setTimeout(typeNext, delay)
      }
    }

    typeNext()

    return () => {
      isCancelled = true
    }
  }, [hasStartedTyping])

  return (
    <div ref={containerRef} className="min-h-[140px] text-left bg-[#0a0a0a] border border-[#202020] rounded-2xl p-6 sm:p-8 shadow-2xl">
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
        {typedStory}
        {hasStartedTyping && typedStory.length < FULL_STORY_TEXT.length && (
          <span className="inline-block w-1.5 h-4 ml-1 bg-red-600 animate-pulse align-middle" />
        )}
      </p>
    </div>
  )
}

export function LandingPage({ isLoggedIn }: LandingPageProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard")
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Contact form state
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })

  // Cursor tour animation refs & click state
  const workspaceRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const mobileTabsRef = useRef<HTMLDivElement>(null)
  const isWorkspaceVisibleRef = useRef(false)
  const [isWorkspaceVisible, setIsWorkspaceVisible] = useState(false)
  const currentStepRef = useRef(0)
  const isInteractingRef = useRef(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [cursorClicking, setCursorClicking] = useState(false)
  const highlightedEl: string | null = null   // kept for JSX compatibility (simple tour does not highlight)

  // Ensure landing page always enforces its signature black theme
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  // Track workspace visibility in viewport (Ensures tour NEVER interrupts scrolling or hijacks the page!)
  useEffect(() => {
    const el = workspaceRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        const isVis = entries[0]?.isIntersecting ?? false
        isWorkspaceVisibleRef.current = isVis
        setIsWorkspaceVisible(isVis)
        if (!isVis && cursorRef.current) {
          cursorRef.current.style.opacity = "0"
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Proportional scroll-responsive animation with requestAnimationFrame throttling (60fps smooth)
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollElements = document.querySelectorAll<HTMLElement>(".scroll-responsive")
          const windowHeight = window.innerHeight

          scrollElements.forEach(el => {
            const rect = el.getBoundingClientRect()
            const visibleDistance = windowHeight - rect.top
            const elementHeight = rect.height || 120

            if (visibleDistance > 0 && rect.bottom > 0) {
              const progress = Math.min(1, Math.max(0, visibleDistance / (elementHeight * 0.75 + 120)))
              const opacity = Math.min(1, progress * 1.25)
              const translateY = (1 - progress) * 26
              const scale = 0.97 + progress * 0.03

              el.style.opacity = `${opacity}`
              el.style.transform = `translateY(${translateY}px) scale(${scale})`
            } else if (visibleDistance <= 0) {
              el.style.opacity = "0"
              el.style.transform = "translateY(26px) scale(0.97)"
            }
          })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Switch tab function (Manual user interaction gives full immediate control and pauses auto-tour for 12 seconds)
  const handleSelectTab = (tabId: TabKey, isManual = true) => {
    if (isManual) {
      isInteractingRef.current = true
      setIsUserInteracting(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      if ((timerRef as any)._clickTimer) clearTimeout((timerRef as any)._clickTimer)
      if ((timerRef as any)._hoverTimer) clearTimeout((timerRef as any)._hoverTimer)
      if ((timerRef as any)._releaseTimer) clearTimeout((timerRef as any)._releaseTimer)
      if ((timerRef as any)._resumeTimer) clearTimeout((timerRef as any)._resumeTimer)
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0"
      }
      setCursorClicking(false)

      // Give the user full control! Resume auto-tour only after 12s of idle time
      ;(timerRef as any)._resumeTimer = setTimeout(() => {
        isInteractingRef.current = false
        setIsUserInteracting(false)
      }, 12000)
    }
    setActiveTab(tabId)
  }

  // Human-paced simulated cursor tour (Smooth gliding, realistic hover & press, 5.5s dwell, zero scroll hijack)
  useEffect(() => {
    const runTour = () => {
      // 1. NEVER run if user is manually interacting, or if workspace is NOT visible on screen
      if (
        isInteractingRef.current ||
        !isWorkspaceVisibleRef.current ||
        typeof window === "undefined"
      ) {
        timerRef.current = setTimeout(runTour, 2500)
        return
      }

      const cursor = cursorRef.current
      const workspace = workspaceRef.current
      if (!cursor || !workspace) {
        timerRef.current = setTimeout(runTour, 2500)
        return
      }

      const isMobile = window.innerWidth < 768
      const tabKeys = TABS_SEQUENCE
      const tabIdx = currentStepRef.current % tabKeys.length
      const tabKey = tabKeys[tabIdx]

      const btnId = isMobile ? `mobile-tab-${tabKey}` : `tab-btn-${tabKey}`
      const btn = document.getElementById(btnId)

      if (btn) {
        // On mobile: smoothly scroll ONLY the internal horizontal tab bar.
        // NEVER use scrollIntoView() which pulls the whole page back!
        if (isMobile && mobileTabsRef.current) {
          const container = mobileTabsRef.current
          const btnLeft = btn.offsetLeft
          const btnWidth = btn.offsetWidth
          const containerWidth = container.clientWidth
          const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2
          container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" })
        }

        const btnRect = btn.getBoundingClientRect()
        const wsRect = workspace.getBoundingClientRect()

        // Point the exact tip of the arrow (SVG 3,3) right at the center of the target button!
        const relX = btnRect.left - wsRect.left + btnRect.width / 2 - 3
        const relY = btnRect.top - wsRect.top + btnRect.height / 2 - 3

        cursor.style.opacity = "1"
        cursor.style.transform = `translate(${relX}px, ${relY}px)`

        // Step 1: Cursor glides over ~850ms, then hovers naturally for ~350ms (human hesitation)
        const hoverTimer = setTimeout(() => {
          if (isInteractingRef.current || !isWorkspaceVisibleRef.current) return

          // Step 2: Realistic press down (cursor presses, button depresses)
          setCursorClicking(true)
          btn.classList.add("scale-95")

          // Step 3: Switch tab after human-like tap contact (~140ms)
          const clickTimer = setTimeout(() => {
            if (isInteractingRef.current) return

            setActiveTab(tabKey)
            btn.classList.remove("scale-95")

            // Step 4: Release cursor click press
            const releaseTimer = setTimeout(() => {
              setCursorClicking(false)
            }, 180)

            ;(timerRef as any)._releaseTimer = releaseTimer
            currentStepRef.current = (currentStepRef.current + 1) % tabKeys.length
          }, 140)

          ;(timerRef as any)._clickTimer = clickTimer
        }, 900)

        ;(timerRef as any)._hoverTimer = hoverTimer
      }

      // Step 5: Generous 5.5-second dwell time so user can actually read and explore the active tab!
      timerRef.current = setTimeout(runTour, 5500)
    }

    const initialTimer = setTimeout(runTour, 2000)
    return () => {
      clearTimeout(initialTimer)
      if (timerRef.current) clearTimeout(timerRef.current)
      if ((timerRef as any)._hoverTimer) clearTimeout((timerRef as any)._hoverTimer)
      if ((timerRef as any)._clickTimer) clearTimeout((timerRef as any)._clickTimer)
      if ((timerRef as any)._releaseTimer) clearTimeout((timerRef as any)._releaseTimer)
      if ((timerRef as any)._resumeTimer) clearTimeout((timerRef as any)._resumeTimer)
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

  // (badges passed directly to FreefloatingBadgeField: no lane split needed)

  return (
    <div className="landing-page min-h-screen bg-[#050507] text-[#F4F4F5] font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* ── TOP NAVIGATION BAR ── */}
      {/* Desktop Navbar (unchanged, hidden on mobile) */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-40 px-8 py-3.5 bg-[#050507]/95 backdrop-blur-md border-b border-white/[0.06]">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-md bg-red-600 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <span className="text-white text-xs font-black">P</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Pod<span className="text-red-600">Guide</span>
            </span>
          </Link>

          <div className="flex items-center gap-7 text-xs font-semibold text-gray-400">
            <a href="#workspace" className="hover:text-white transition-colors duration-150">Workspace</a>
            <a href="#programs" className="hover:text-white transition-colors duration-150">Disciplines</a>
            <a href="#story" className="hover:text-white transition-colors duration-150">Our Story</a>
            <a href="#partners" className="hover:text-white transition-colors duration-150">Our Partners</a>
            <a href="#contact" className="hover:text-white transition-colors duration-150">Contact</a>

            <div className="relative group/legal">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-white transition-colors duration-150 py-1"
              >
                <span>Legal & Policies</span>
                <ChevronDown size={11} className="text-gray-500 group-hover/legal:text-white group-hover/legal:rotate-180 transition-transform duration-150" />
              </button>
              <div className="absolute top-full right-0 pt-2 hidden group-hover/legal:block z-50">
                <div className="w-60 p-2 bg-[#0c0c0e] border border-[#222226] rounded-xl shadow-2xl backdrop-blur-lg space-y-1">
                  <Link href="/terms" className="block p-2 rounded-lg hover:bg-[#16161a] transition-colors group/item">
                    <p className="text-xs font-bold text-white group-hover/item:text-red-400 transition-colors">Terms and Conditions</p>
                    <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Statutory terms, acceptable use & educational disclaimers</p>
                  </Link>
                  <Link href="/privacy" className="block p-2 rounded-lg hover:bg-[#16161a] transition-colors group/item">
                    <p className="text-xs font-bold text-white group-hover/item:text-red-400 transition-colors">Privacy Policy</p>
                    <p className="text-[10px] text-gray-400 leading-tight mt-0.5">Data protection, privacy rights & security measures</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={isLoggedIn ? "/dashboard" : "/login"}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-all duration-150 border border-white/10 shadow-[0_2px_10px_rgba(220,38,38,0.35),0_0_0_1px_rgba(255,255,255,0.12)_inset] active:scale-95"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{isLoggedIn ? "Open Dashboard" : "Launch App"}</span>
              <ChevronRight size={13} className="text-white/80 group-hover:translate-x-0.5 group-hover:text-white transition-transform duration-150" />
            </Link>
          </div>
        </nav>
      </header>

      {/* ── MOBILE NAVBAR (Premier League-inspired) ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#050507]/95 backdrop-blur-md border-b border-white/[0.06]">
        <nav className="flex items-center justify-between h-[54px] px-4">
          {/* Left: Hamburger + Brand Name */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center justify-center w-9 h-9 -ml-1 text-white hover:text-red-500 transition-colors"
              aria-label="Open navigation menu"
            >
              <div className="flex flex-col gap-[4.5px]">
                <span className="block w-5 h-[2px] bg-white rounded-full" />
                <span className="block w-5 h-[2px] bg-white rounded-full" />
                <span className="block w-5 h-[2px] bg-white rounded-full" />
              </div>
            </button>
            <Link href="/" className="font-display text-[18px] font-bold tracking-tight text-white">
              Pod<span className="text-red-600">Guide</span>
            </Link>
          </div>

          {/* Right: Join Pod + Sign In */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <Link
              href="/register"
              className="px-3.5 py-1.5 text-xs font-semibold text-white border border-white/20 hover:border-white/40 rounded-lg hover:bg-white/5 transition-all whitespace-nowrap"
            >
              Join Pod
            </Link>
            <Link
              href="/login"
              className="text-xs font-semibold text-gray-200 hover:text-white transition-colors whitespace-nowrap px-1 py-1"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      {/* ── MOBILE FULL-SCREEN NAVIGATION DRAWER (Premier League-inspired) ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white overflow-y-auto" style={{ WebkitOverflowScrolling: "touch" }}>
          {/* Drawer Header: Brand + Close */}
          <div className="flex items-center justify-between px-5 pt-6 pb-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-xl font-bold tracking-tight text-[#0a0a0a]"
            >
              Pod<span className="text-red-600">Guide</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 text-[#333] hover:text-black transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Sign In / Login — prominently first */}
          <div className="px-5 pb-4">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0a0a0a] text-white text-sm font-semibold rounded-xl hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="w-5 h-5 rounded-md bg-red-600 flex items-center justify-center">
                <span className="text-white text-[9px] font-black">P</span>
              </div>
              Sign In
            </Link>
          </div>

          {/* Primary Navigation Links */}
          <nav className="px-5">
            <ul className="space-y-0">
              <li>
                <a
                  href="#workspace"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[#0a0a0a] text-[17px] font-bold tracking-tight border-b border-gray-100"
                >
                  Workspace
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[#0a0a0a] text-[17px] font-bold tracking-tight border-b border-gray-100"
                >
                  Disciplines
                </a>
              </li>
              <li>
                <Link
                  href={isLoggedIn ? "/library" : "/login"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[#0a0a0a] text-[17px] font-bold tracking-tight border-b border-gray-100"
                >
                  <span>Library</span>
                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={isLoggedIn ? "/practise" : "/login"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[#0a0a0a] text-[17px] font-bold tracking-tight border-b border-gray-100"
                >
                  <span>Practise</span>
                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={isLoggedIn ? "/learn" : "/login"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[#0a0a0a] text-[17px] font-bold tracking-tight border-b border-gray-100"
                >
                  <span>Learn</span>
                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              </li>
              <li>
                <Link
                  href={isLoggedIn ? "/medstore" : "/login"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[#0a0a0a] text-[17px] font-bold tracking-tight border-b border-gray-100"
                >
                  <span>MedStore</span>
                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[#0a0a0a] text-[17px] font-bold tracking-tight border-b border-gray-100"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[#0a0a0a] text-[17px] font-bold tracking-tight border-b border-gray-100"
                >
                  Our Partners
                </a>
              </li>
            </ul>
          </nav>

          {/* Divider */}
          <div className="mx-5 my-4 border-t border-gray-200" />

          {/* Secondary Navigation: More from PodGuide */}
          <div className="px-5">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
              More from PodGuide
            </p>
            <ul className="space-y-0">
              <li>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-[#0a0a0a] text-[15px] font-semibold border-b border-gray-100"
                >
                  Join Pod
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-[#0a0a0a] text-[15px] font-semibold border-b border-gray-100"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  href="/terms"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-[#0a0a0a] text-[15px] font-semibold border-b border-gray-100"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-[#0a0a0a] text-[15px] font-semibold border-b border-gray-100"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels at Bottom */}
          <div className="px-5 pt-6 pb-10">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
              PodGuide Channels
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-black transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-black transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-black transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.37-6.22V9.4a8.16 8.16 0 0 0 3.85.96V7.04a4.85 4.85 0 0 1-0-.35z"/></svg>
              </a>
              <a href="mailto:info@podmyth.co.zw" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-black transition-colors">
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN HERO SECTION ── */}
      <section className="relative min-h-[72vh] pt-32 pb-12 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto overflow-hidden">
        {/* World-Class Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-light tracking-tight text-white leading-[1.08] max-w-4xl text-balance">
          Your medical journey <span className="font-semibold text-white">unified in one space.</span>
        </h1>

        {/* Professional Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl font-normal leading-relaxed text-center text-balance">
          A cohesive environment designed specifically for health science students, health tutors, and healthcare professionals to access curated academic shelves, clinical diagnostic tools, adaptive question banks, professional gear, and global growth opportunities.
        </p>

        {/* ── ORGANIC FLOATING BADGES (3 SPREAD LINES ON DESKTOP, COMPACT GRID ON MOBILE) ── */}
        <div className="hidden sm:flex flex-col gap-5 items-center w-full mt-14 py-4 relative z-10">
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {ALL_FLOATING_BADGES.slice(0, 4).map((badge, idx) => (
              <InteractiveFloatingCard key={`row1-${idx}`} {...badge} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap -ml-8">
            {ALL_FLOATING_BADGES.slice(4, 8).map((badge, idx) => (
              <InteractiveFloatingCard key={`row2-${idx}`} {...badge} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap ml-8">
            {ALL_FLOATING_BADGES.slice(8, 12).map((badge, idx) => (
              <InteractiveFloatingCard key={`row3-${idx}`} {...badge} />
            ))}
          </div>
        </div>

        {/* Mobile: Organic Boundary-Free Floating Cloud (Hovering in 2D space, no demarcation lines) */}
        <div className="sm:hidden flex flex-col gap-3 items-center w-full mt-8 py-2 relative z-10">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {MOBILE_BADGES.slice(0, 3).map((badge, idx) => (
              <MobileFloatingCard
                key={`mob-row1-${idx}`}
                {...badge}
                animationClass={`animate-float-mob-${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap -ml-3">
            {MOBILE_BADGES.slice(3, 6).map((badge, idx) => (
              <MobileFloatingCard
                key={`mob-row2-${idx}`}
                {...badge}
                animationClass={`animate-float-mob-${idx + 4}`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap ml-3">
            {MOBILE_BADGES.slice(6, 9).map((badge, idx) => (
              <MobileFloatingCard
                key={`mob-row3-${idx}`}
                {...badge}
                animationClass={`animate-float-mob-${(idx % 4) + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {MOBILE_BADGES.slice(9, 12).map((badge, idx) => (
              <MobileFloatingCard
                key={`mob-row4-${idx}`}
                {...badge}
                animationClass={`animate-float-mob-${(idx % 4) + 5}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE WORKSPACE SHOWCASE (SCROLL RESPONSIVE) ── */}
      <section id="workspace" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative scroll-responsive">
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
          className="relative bg-[#080808] rounded-3xl border border-[#222] shadow-2xl overflow-hidden min-h-[400px] md:min-h-[580px] flex flex-col md:flex-row"
        >
          {/* Virtual Pointer Cursor Overlay (Real Arrow Tip Pointing & Real Click Physics) */}
          <div
            ref={cursorRef}
            id="simulated-cursor"
            className={`flex absolute top-0 left-0 items-start gap-1 pointer-events-none transition-all duration-700 z-30 ${cursorClicking ? "animate-cursor-click" : ""}`}
            style={{ transformOrigin: "3px 3px" }}
          >
            {/* The Precision Pointer Arrow (Tip is at exactly 3px, 3px) */}
            <div className="relative shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <path d="M3 3L10.07 19.97L13.58 12.58L20.97 9.07L3 3Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              {cursorClicking && <span className="click-burst" />}
            </div>

            {/* Assistant Label Badge */}
            <div className="mt-1 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
              PodGuide Assistant
            </div>
          </div>

          {/* Mobile App Header (Realistic native app feel) */}
          <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#0d0d0d] border-b border-[#1f1f1f]">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                P
              </div>
              <div>
                <h3 className="text-xs font-bold text-white tracking-wide">PodGuide App</h3>
                <p className="text-[9px] text-gray-400">Interactive Preview</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isUserInteracting ? "bg-emerald-400" : "bg-emerald-500 animate-pulse"}`} />
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${isUserInteracting ? "text-emerald-400 bg-emerald-950/40 border-emerald-500/30" : "text-gray-400 bg-[#141414] border-[#222]"}`}>
                {isUserInteracting ? "Manual Control" : "Live Tour"}
              </span>
            </div>
          </div>

          {/* Mobile Horizontal Tab Bar with Icons */}
          <div ref={mobileTabsRef} className="md:hidden flex overflow-x-auto gap-2 p-2.5 bg-[#0a0a0a] border-b border-[#1f1f1f] shrink-0 no-scrollbar">
            {TABS_SEQUENCE.map(tabKey => {
              const TabIcon = TAB_ICONS[tabKey]
              return (
                <button
                  key={`mobile-tab-${tabKey}`}
                  id={`mobile-tab-${tabKey}`}
                  type="button"
                  onClick={() => handleSelectTab(tabKey)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap flex items-center gap-1.5 shrink-0 transition-all active:scale-95 ${
                    activeTab === tabKey
                      ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                      : "bg-[#141414] text-gray-400 hover:text-white border border-[#222]"
                  }`}
                >
                  <TabIcon size={13} />
                  <span>{tabKey}</span>
                </button>
              )
            })}
          </div>

          {/* Desktop Left App Sidebar */}
          <aside className="w-full md:w-64 bg-[#0d0d0d] border-b md:border-b-0 md:border-r border-[#1f1f1f] p-5 hidden md:flex flex-col justify-between shrink-0">
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
          <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#050507] overflow-y-auto max-h-none md:max-h-[580px] relative">
            {/* ── TAB 1: DASHBOARD (TITLE CASE GREETING) ── */}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div id="tour-dashboard-card-1" className={`bg-[#101010] p-3 sm:p-4 rounded-2xl border transition-colors ${highlightedEl === "tour-dashboard-card-1" ? "border-red-600 shadow-[0_0_12px_rgba(220,38,38,0.35)]" : "border-[#202020] hover:border-red-600/40"}`}>
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

                  <div id="tour-dashboard-card-2" className="bg-[#101010] p-4 rounded-2xl border border-[#202020] hover:border-red-600/40 transition-colors">
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
                    id="tour-learn-new-notebook"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <div id="tour-library-folder-1" className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Internal Medicine</div>
                      <div className="text-[10px] text-gray-500">8 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Paediatrics</div>
                      <div className="text-[10px] text-gray-500">6 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">General Surgery</div>
                      <div className="text-[10px] text-gray-500">10 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Obstetrics & Gynae</div>
                      <div className="text-[10px] text-gray-500">5 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-semibold text-white truncate">Pharmacology</div>
                      <div className="text-[10px] text-gray-500">4 Files</div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-xl border border-[#202020] flex items-center gap-3">
                    <Folder size={20} className="text-red-500 shrink-0" />
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
                      id="tour-practise-start-quiz"
                      href={isLoggedIn ? "/practise" : "/login"}
                      className={`mt-4 inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-semibold transition shadow-md ${highlightedEl === "tour-practise-start-quiz" ? "bg-white text-red-600 scale-105" : "bg-red-600 text-white hover:bg-red-700"}`}
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
                  <div id="tour-network-post-1" className="p-4 bg-[#101010] rounded-xl border border-[#202020]">
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

            {/* ── TAB 6: MEDSTORE (ATTRACTIVE FRONT-FACING PHOTOS) ── */}
            {activeTab === "medstore" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-4">
                  <div>
                    <h2 className="text-lg font-bold text-white">MedStore</h2>
                    <p className="text-xs text-gray-400">Authentic equipment and gear delivered directly to campus</p>
                  </div>
                  <span className="text-xs text-red-500 font-semibold">Verified Clinical Gear</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* TANC Official Scrubs (Lifestyle Showcase) */}
                  <div className="bg-[#101010] rounded-2xl border border-[#202020] overflow-hidden flex flex-col justify-between">
                    <div className="h-40 bg-[#141414] relative flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/tanc-scrubs.jpg"
                        alt="TANC Core Scrubs"
                        className="w-full h-full object-cover object-center"
                      />
                      <span className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">$30</span>
                    </div>
                    <div className="p-3.5">
                      <h4 className="text-xs font-bold text-white">TANC Core™ Scrub Suit</h4>
                      <p className="text-[10px] text-gray-400 mt-1">Hospital-grade 4-way stretch poly-viscose.</p>
                      <Link
                        id="tour-medstore-order-1"
                        href={isLoggedIn ? "/medstore" : "/login"}
                        className={`mt-3 block text-center py-1.5 text-[11px] font-medium rounded-lg transition ${highlightedEl === "tour-medstore-order-1" ? "bg-red-600 text-white scale-105" : "bg-[#181818] hover:bg-red-600 text-white"}`}
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>

                  {/* Diagnostic Stethoscope (Crisp Front Acoustic) */}
                  <div className="bg-[#101010] rounded-2xl border border-[#202020] overflow-hidden flex flex-col justify-between">
                    <div className="h-40 bg-[#141414] relative flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&auto=format&fit=crop&q=80"
                        alt="Clinical Diagnostic Stethoscope"
                        className="w-full h-full object-cover"
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

                  {/* TANC Official Lab Coat (Front Facing) */}
                  <div className="bg-[#101010] rounded-2xl border border-[#202020] overflow-hidden flex flex-col justify-between">
                    <div className="h-40 bg-[#141414] relative flex items-center justify-center overflow-hidden">
                      <img
                        src="https://bunny-wp-pullzone-rohnewctqa.b-cdn.net/wp-content/uploads/2026/07/Lab-Coats_Mens_01.avif"
                        alt="TANC Clinical Lab Coat"
                        className="w-full h-full object-cover object-top"
                        onError={e => {
                          const target = e.target as HTMLImageElement
                          target.src = "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80"
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
                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider">Research Grant</span>
                      <h4 className="text-xs font-bold text-white mt-0.5">Elton John AIDS Foundation Grant</h4>
                      <p className="text-[10px] text-gray-400">Funding youth-led clinical HIV/AIDS intervention studies across Southern Africa.</p>
                    </div>
                    <Link
                      id="tour-grow-apply-1"
                      href={isLoggedIn ? "/grow" : "/login"}
                      className={`px-3 py-1.5 text-[11px] font-semibold rounded-lg shrink-0 transition ${highlightedEl === "tour-grow-apply-1" ? "bg-white text-red-600 scale-105" : "bg-[#181818] hover:bg-red-600 text-white"}`}
                    >
                      Apply
                    </Link>
                  </div>

                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider">Elective Placement</span>
                      <h4 className="text-xs font-bold text-white mt-0.5">WHO AFRO Student Internship</h4>
                      <p className="text-[10px] text-gray-400">Practical public health policy internship at the regional headquarters.</p>
                    </div>
                    <Link
                      href={isLoggedIn ? "/grow" : "/login"}
                      className="px-3 py-1.5 bg-[#181818] hover:bg-red-600 text-white text-[11px] font-semibold rounded-lg shrink-0 transition"
                    >
                      Apply
                    </Link>
                  </div>

                  <div className="p-4 bg-[#101010] rounded-xl border border-[#202020] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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

      {/* ── BUILT FOR EVERY STUDENT, HEALTH TUTOR & HEALTHCARE PROFESSIONAL (COMPACT SIDE-BY-SIDE PALETTES) ── */}
      <section id="programs" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#181818] scroll-responsive">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-red-500 tracking-[0.2em] uppercase">
            Comprehensive Discipline Support
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-light text-white tracking-tight mt-2">
            Built for every student, health tutor & healthcare professional.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-xl mx-auto text-center font-normal">
            Tailored learning materials, clinical shelves, case algorithms, and community networks structured specifically for your discipline.
          </p>
        </div>

        {/* Compact Space-Efficient Side-by-Side Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Stethoscope size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Medicine &amp; Surgery</h3>
          </div>

          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Dna size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Biomedical Sciences</h3>
          </div>

          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Pill size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Pharmacy</h3>
          </div>

          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Activity size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Nursing Science</h3>
          </div>

          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <HeartHandshake size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Occupational Therapy</h3>
          </div>

          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Activity size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Physiotherapy</h3>
          </div>

          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Scan size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Radiography</h3>
          </div>

          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Settings size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Biomedical Engineering</h3>
          </div>

          <div
            className="landing-discipline-card p-3 rounded-xl border border-[#202020] hover:border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default group"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <TestTube size={15} />
            </div>
            <h3 className="text-xs font-semibold text-white truncate">Medical Laboratory</h3>
          </div>

          {/* Plus 20 Badge Pill */}
          <div
            className="p-3 rounded-xl border border-red-600/40 transition-colors flex items-center gap-2.5 cursor-default"
            style={{ backgroundColor: "rgba(220, 38, 38, 0.12)", color: "#ffffff" }}
          >
            <span className="text-sm font-black text-red-500">+20</span>
            <h3 className="text-xs font-bold text-white truncate">Other Health Disciplines</h3>
          </div>
        </div>
      </section>

      {/* ── OUR STORY (FULL-WIDTH EDITORIAL WITH NATURAL PACED TYPEWRITER STREAMING) ── */}
      <section id="story" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-[#181818] scroll-responsive">
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-red-500 tracking-[0.2em] uppercase">
            Our Mission & Roots
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-light text-white leading-tight">
            Built by medical students, <span className="font-semibold text-white">for the future of healthcare.</span>
          </h2>

          {/* Natural Paced Animated Typewriter Paragraph (Isolated Component) */}
          <OurStoryTypewriter />

          {/* PodMyth Subsidiary Highlight Card */}
          <div className="bg-[#101010] p-6 sm:p-8 rounded-2xl border border-red-600/30 text-left space-y-3 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                A Proud Subsidiary of PodMyth
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              As a proud subsidiary of PodMyth, PodGuide is driven by a singular mission: doing impactful work that genuinely elevates other people. We build technology designed to empower students, tutors, clinicians, and educators across the continent and beyond. We hope you find this workspace truly impactful, and we invite you to share it with your peers.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="pt-2 flex items-center justify-center gap-6 sm:gap-10 text-xs text-gray-400 font-medium flex-wrap">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-red-500" />
              <span>Verified Syllabi</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-red-500" />
              <span>Student & Tutor Centric</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-red-500" />
              <span>Global Health Network</span>
            </div>
          </div>
        </div>

        {/* ── SEND US A MESSAGE PANEL (PLACED DIRECTLY BELOW OUR STORY) ── */}
        <div id="contact" className="mt-16 max-w-2xl mx-auto scroll-responsive">
          <div
            className="bg-[#0e0e0e] p-6 sm:p-8 rounded-3xl border border-[#222] relative shadow-2xl"
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white">Get in touch with us</h3>
              <p className="text-xs text-gray-400 mt-1">Have questions or want to introduce PodGuide to your university or clinical faculty?</p>
            </div>

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
                  placeholder="Tell us about your faculty, program, or partnership inquiry..."
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

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#181818] py-14 px-4 sm:px-8 bg-black">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Brand block */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-red-600 flex items-center justify-center">
              <span className="text-white text-xs font-black">P</span>
            </div>
            <span className="font-display text-xl font-bold text-white">
              Pod<span className="text-red-600">Guide</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
            The unified digital campus for medical and health sciences students, tutors, and professionals.
          </p>
          <div className="text-xs text-red-500 font-medium">
            Designed with dedication. Built for impact. Engineered because we love what we do.
          </div>

          {/* Our Partners — Straight Line Horizontal Moving Track */}
          <div id="partners" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-white">Our Partners</h2>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-red-500 bg-red-600/10 px-2 py-0.5 rounded-full border border-red-500/20">
                    Live Network
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1 max-w-xl">
                  Strategic healthcare bodies, official merchandise subsidiaries, and medical student associations. Click any partner to view summary.
                </p>
              </div>
              <a
                href="mailto:info@podmyth.co.zw?subject=Partner%20With%20PodGuide"
                className="text-xs text-red-500 hover:text-red-400 font-medium inline-flex items-center gap-1 transition"
              >
                <span>Partner with PodGuide</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Straight-line marquee banner with edge gradients */}
            <div className="relative w-full overflow-hidden py-3 -mx-2 px-2">
              {/* Left edge shadow fade */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
              {/* Right edge shadow fade */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

              {/* Straight line moving horizontally */}
              <div className="animate-marquee-horizontal flex items-center gap-4">
                {[...PARTNERS_DATA, ...PARTNERS_DATA].map((partner, idx) => (
                  <PartnerMarqueeCard
                    key={`partner-card-${idx}`}
                    partner={partner}
                    onClick={() => {
                      if (typeof navigator !== "undefined" && navigator.vibrate) {
                        try { navigator.vibrate([20, 10, 20]) } catch (e) {}
                      }
                      setSelectedPartner(partner)
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Platform, Conduct, Access & Legal in 4 responsive columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Platform */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Platform</span>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><a href="#workspace" className="hover:text-white transition">Workspace</a></li>
                <li><a href="#programs" className="hover:text-white transition">Disciplines</a></li>
                <li><Link href={isLoggedIn ? "/library" : "/login"} className="hover:text-white transition">Library Shelves</Link></li>
                <li><Link href={isLoggedIn ? "/practise" : "/login"} className="hover:text-white transition">MCQ Banks</Link></li>
                <li><Link href={isLoggedIn ? "/medstore" : "/login"} className="hover:text-white transition">MedStore</Link></li>
              </ul>
            </div>

            {/* Legal & Policies */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Legal & Policies</span>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><Link href="/terms" className="hover:text-white transition">Terms and Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Clinical Disclaimer</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Fair Dealing Notice</Link></li>
              </ul>
            </div>

            {/* Access */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Access</span>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><Link href="/login" className="hover:text-white transition">App Login</Link></li>
                <li><Link href="/register" className="hover:text-white transition">Register Account</Link></li>
                <li><Link href="/forgot-password" className="hover:text-white transition">Password Recovery</Link></li>
              </ul>
            </div>

            {/* Conduct & Contact */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Conduct</span>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin size={11} className="text-red-500 shrink-0" />
                  <span>Africa.online</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={11} className="text-red-500 shrink-0" />
                  <a href="mailto:info@podmyth.co.zw" className="hover:text-white transition">
                    info@podmyth.co.zw
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={11} className="text-red-500 shrink-0" />
                  <a href="https://podguide.org.zw" className="hover:text-white transition">
                    www.podguide.org.zw
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-[#181818] text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} PodGuide (a subsidiary of PodMyth Group). All rights reserved.
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
            style={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
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
              <p className="text-xs text-gray-400 mt-1">Sign in to access your learning dashboard.</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Student or Faculty Email</label>
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

      {/* ── INTERACTIVE PARTNER SUMMARY MODAL ── */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#0e0e11] w-full max-w-lg p-6 sm:p-7 rounded-3xl border border-[#26262a] relative shadow-2xl animate-in zoom-in-95 text-white"
            style={{ backgroundColor: "#0e0e11", color: "#ffffff" }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/5 transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Partner Header */}
            <div className="flex items-center gap-3.5 mb-5">
              {selectedPartner.logo ? (
                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 bg-white p-1.5 flex items-center justify-center border border-white/20 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedPartner.logo} alt={selectedPartner.name} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div
                  className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center font-black text-sm text-red-500 bg-red-600/10 border border-dashed border-red-500/40 shadow-md"
                >
                  <Plus size={24} className="text-red-500" />
                </div>
              )}
              <div className="pr-8">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-bold text-white tracking-tight">{selectedPartner.name}</h3>
                  {selectedPartner.featured && (
                    <span className="text-[9px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/30">
                      Official Partner
                    </span>
                  )}
                  {selectedPartner.isPlaceholder && (
                    <span className="text-[9px] font-medium text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/25">
                      Open Partner Slot
                    </span>
                  )}
                </div>
                <p className="text-xs text-red-400 font-medium mt-0.5">{selectedPartner.tagline}</p>
              </div>
            </div>

            {/* Summary Body */}
            <div className="p-4 rounded-2xl bg-[#141418] border border-[#222226] mb-5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                {selectedPartner.isPlaceholder ? "Partnership Opportunity" : "About The Partnership"}
              </h4>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                {selectedPartner.summary}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <a
                href={
                  selectedPartner.isPlaceholder
                    ? "mailto:info@podmyth.co.zw?subject=Partner%20Slot%20Reservation%20-%20PodGuide"
                    : `mailto:info@podmyth.co.zw?subject=Inquiry%20regarding%20${encodeURIComponent(selectedPartner.name)}`
                }
                className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-xl shadow-md transition"
              >
                {selectedPartner.isPlaceholder ? "Reserve This Partner Space" : "Connect With Partner"}
              </a>
              <button
                type="button"
                onClick={() => setSelectedPartner(null)}
                className="px-4 py-2.5 bg-[#1b1b20] hover:bg-[#25252b] text-gray-300 hover:text-white text-xs font-medium rounded-xl transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
