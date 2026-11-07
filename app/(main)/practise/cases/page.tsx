"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import {
  Stethoscope, Clock, CheckCircle, ArrowLeft, RotateCcw,
  FileText, MessageSquare, ChevronDown, Check,
  AlertCircle, HelpCircle, User, Award, Sliders, Play,
  CheckSquare, Lightbulb, Star, ShieldAlert, X, ChevronRight,
  Sparkles, BookOpen
} from "lucide-react"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import {
  OSCE_MODULES,
  VIGNETTE_CASES,
  EXAM_STATIONS,
  HISTORY_STATIONS,
  gradeStudentAnswer,
  type ClinicalVignetteCase,
  type ExamStation,
  type HistoryStation,
  type ExaminerQuestion,
  type EvaluationResult
} from "@/lib/data/osce-bank"

// ─── Types ───────────────────────────────────────────────────────────────────

type ViewState = "hub" | "config" | "briefing" | "active" | "results"
type StationType = "vignette" | "exam" | "history"
type StationTime = 8 | 10 | 15 | 0 // 0 = untimed

interface QuestionEvaluationState {
  isEvaluated: boolean
  evaluations: EvaluationResult[]
  earnedMarks: number
  maxMarks: number
}

export default function OSCEPractisePage() {
  const [view, setView] = useState<ViewState>("hub")
  const [stationType, setStationType] = useState<StationType>("vignette")

  // Configuration (Clean Dropdown based)
  const [selectedModule, setSelectedModule] = useState<string>("Pediatrics")
  const [selectedTopic, setSelectedTopic] = useState<string>("Febrile Rash")
  const [selectedTime, setSelectedTime] = useState<StationTime>(8)
  const [hintsEnabled, setHintsEnabled] = useState<boolean>(true)
  const [markMeEnabled, setMarkMeEnabled] = useState<boolean>(true)

  // Active Station Session State
  const [activeCase, setActiveCase] = useState<ClinicalVignetteCase | null>(null)
  const [activeExam, setActiveExam] = useState<ExamStation | null>(null)
  const [activeHistory, setActiveHistory] = useState<HistoryStation | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [questionEvaluations, setQuestionEvaluations] = useState<Record<string, QuestionEvaluationState>>({})
  const [showHint, setShowHint] = useState<Record<string, boolean>>({})
  const [checkedExamItems, setCheckedExamItems] = useState<Record<string, boolean>>({})
  const [revealedHistoryInquiries, setRevealedHistoryInquiries] = useState<Record<string, boolean>>({})

  // Timer
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Current module configuration
  const currentModuleConfig = useMemo(() => {
    return OSCE_MODULES.find(m => m.name.toLowerCase() === selectedModule.toLowerCase()) || OSCE_MODULES[0]
  }, [selectedModule])

  // Topics for selected module
  const availableTopics = currentModuleConfig.topics

  // Synchronize topic when module changes
  useEffect(() => {
    if (!availableTopics.includes(selectedTopic)) {
      setSelectedTopic(availableTopics[0] || "")
    }
  }, [availableTopics, selectedTopic])

  // Timer countdown
  useEffect(() => {
    if (view !== "active" || selectedTime === 0) return
    timerRef.current = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          toast.warning("Time is up for this OSCE station!")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [view, selectedTime])

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  // Open configuration for chosen station type
  const openStationConfig = (type: StationType) => {
    setStationType(type)
    if (type === "vignette") {
      setSelectedModule("Pediatrics")
      setSelectedTopic("Febrile Rash")
    } else if (type === "exam") {
      setSelectedModule("Internal Medicine")
      setSelectedTopic("Chest Pain & MI")
    } else {
      setSelectedModule("Internal Medicine")
      setSelectedTopic("Chest Pain & MI")
    }
    setView("config")
  }

  // Start Station
  const handleStartStation = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setQuestionEvaluations({})
    setShowHint({})
    setCheckedExamItems({})
    setRevealedHistoryInquiries({})
    setSecondsRemaining(selectedTime > 0 ? selectedTime * 60 : 0)

    if (stationType === "vignette") {
      const match = VIGNETTE_CASES.find(
        c => c.module.toLowerCase() === selectedModule.toLowerCase() &&
             c.topic.toLowerCase() === selectedTopic.toLowerCase()
      ) || VIGNETTE_CASES.find(c => c.module.toLowerCase() === selectedModule.toLowerCase()) || VIGNETTE_CASES[0]

      setActiveCase(match)
      setActiveExam(null)
      setActiveHistory(null)
      setView("briefing")
    } else if (stationType === "exam") {
      const match = EXAM_STATIONS.find(
        e => e.module.toLowerCase() === selectedModule.toLowerCase()
      ) || EXAM_STATIONS[0]

      setActiveExam(match)
      setActiveCase(null)
      setActiveHistory(null)
      setView("active")
    } else {
      const match = HISTORY_STATIONS.find(
        h => h.module.toLowerCase() === selectedModule.toLowerCase()
      ) || HISTORY_STATIONS[0]

      setActiveHistory(match)
      setActiveCase(null)
      setActiveExam(null)
      setView("active")
    }
  }

  // Cycle to next case in bank
  const handleNextCaseInBank = () => {
    if (activeCase) {
      const currentIdx = VIGNETTE_CASES.findIndex(c => c.id === activeCase.id)
      const nextCase = VIGNETTE_CASES[(currentIdx + 1) % VIGNETTE_CASES.length]
      setActiveCase(nextCase)
      setSelectedModule(nextCase.module)
      setSelectedTopic(nextCase.topic)
      setCurrentQuestionIndex(0)
      setUserAnswers({})
      setQuestionEvaluations({})
      setShowHint({})
      setSecondsRemaining(selectedTime > 0 ? selectedTime * 60 : 0)
      toast.info(`Loaded scenario: ${nextCase.title}`)
    }
  }

  // Automated System "Mark Me" evaluation for current question
  const handleMarkMyAnswer = () => {
    if (!activeCase) return
    const q = activeCase.questions[currentQuestionIndex]
    const userText = userAnswers[q.id] || ""

    if (!userText.trim()) {
      toast.error("Please type your clinical response first before submitting for marking.")
      return
    }

    const result = gradeStudentAnswer(userText, q)
    setQuestionEvaluations(prev => ({
      ...prev,
      [q.id]: {
        isEvaluated: true,
        evaluations: result.evaluations,
        earnedMarks: result.totalEarned,
        maxMarks: result.totalPossible
      }
    }))

    if (result.totalEarned > 0) {
      toast.success(`Marked: +${result.totalEarned} / ${result.totalPossible} Marks awarded!`)
    } else {
      toast.info(`Marked: 0 / ${result.totalPossible} Marks. Review the teaching model answer below.`)
    }
  }

  // Calculate total cumulative score
  const calculateScore = () => {
    if (activeCase) {
      const totalPossible = activeCase.questions.reduce((sum, q) =>
        sum + q.rubricItems.reduce((sub, item) => sub + item.marks, 0), 0
      )
      const earned = Object.values(questionEvaluations).reduce((sum, ev) => sum + ev.earnedMarks, 0)
      return { earned, total: totalPossible }
    }
    if (activeExam) {
      const totalPossible = activeExam.steps.reduce((sum, s) =>
        sum + s.items.reduce((sub, item) => sub + item.marks, 0), 0
      )
      const earned = Object.keys(checkedExamItems).filter(k => checkedExamItems[k]).length
      return { earned, total: totalPossible }
    }
    if (activeHistory) {
      const totalPossible = activeHistory.inquiries.reduce((sum, inq) => sum + inq.marks, 0)
      const earned = activeHistory.inquiries
        .filter(inq => revealedHistoryInquiries[inq.id])
        .reduce((sum, inq) => sum + inq.marks, 0)
      return { earned, total: totalPossible }
    }
    return { earned: 0, total: 20 }
  }

  // Save station XP to Supabase on finish
  const handleFinishStation = async () => {
    setView("results")
    const finalScore = calculateScore()
    if (finalScore.earned > 0) {
      try {
        const supabase = createClient()
        const { data: authData } = await supabase.auth.getUser()
        if (authData?.user) {
          const { data: profile } = await supabase
            .from("student_profiles")
            .select("xp")
            .eq("user_id", authData.user.id)
            .maybeSingle()

          const earnedXP = finalScore.earned * 15
          const newXP = (profile?.xp || 0) + earnedXP
          await supabase
            .from("student_profiles")
            .update({ xp: newXP })
            .eq("user_id", authData.user.id)

          toast.success(`Station completed! +${earnedXP} XP added to your campus profile.`)
        }
      } catch (err) {
        console.error("Failed to credit station XP:", err)
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 1: HUB VIEW (ONLY 3 CARDS ON INITIAL OPENING)
  // ═══════════════════════════════════════════════════════════
  if (view === "hub") {
    return (
      <div className="max-w-5xl mx-auto pb-24 space-y-8">
        {/* Header */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-2 shadow-xl">
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Med OSCE</h1>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
            Virtual clinical simulation stations aligned with medical curriculum standards.
            Select a station mode below to customize your clinical module, scenario topic, timing, and examiner marking rubric.
          </p>
        </div>

        {/* ONLY THE 3 PALETTE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Physical Examination */}
          <button
            onClick={() => openStationConfig("exam")}
            className="group text-left bg-[#0e0e0e] hover:bg-[#121212] border border-[#1f1f1f] hover:border-[#333] rounded-2xl p-6 sm:p-7 space-y-5 transition-all shadow-xl hover:shadow-2xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-brand group-hover:scale-105 transition-transform">
              <Stethoscope size={24} />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-white group-hover:text-brand transition-colors">
                Physical Examination
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Practice clinical examination skills with interactive checklists based on Macleod&apos;s clinical methods.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-semibold text-gray-400 group-hover:text-white">
              Launch Station <ChevronRight size={14} className="ml-1 text-brand" />
            </div>
          </button>

          {/* Card 2: History Taking */}
          <button
            onClick={() => openStationConfig("history")}
            className="group text-left bg-[#0e0e0e] hover:bg-[#121212] border border-[#1f1f1f] hover:border-[#333] rounded-2xl p-6 sm:p-7 space-y-5 transition-all shadow-xl hover:shadow-2xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-brand group-hover:scale-105 transition-transform">
              <MessageSquare size={24} />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-white group-hover:text-brand transition-colors">
                History Taking
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Virtual patient simulation — chat as the attending doctor using structured SOCRATES and systemic inquiry.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-semibold text-gray-400 group-hover:text-white">
              Launch Station <ChevronRight size={14} className="ml-1 text-brand" />
            </div>
          </button>

          {/* Card 3: Clinical Vignette */}
          <button
            onClick={() => openStationConfig("vignette")}
            className="group text-left bg-[#0e0e0e] hover:bg-[#121212] border border-[#1f1f1f] hover:border-[#333] rounded-2xl p-6 sm:p-7 space-y-5 transition-all shadow-xl hover:shadow-2xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-brand group-hover:scale-105 transition-transform">
              <FileText size={24} />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-white group-hover:text-brand transition-colors">
                Clinical Vignette
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                Immersive story-mode clinical cases with viva assessment questions, automated system marking, and clinical teaching.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-semibold text-gray-400 group-hover:text-white">
              Launch Station <ChevronRight size={14} className="ml-1 text-brand" />
            </div>
          </button>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 2: CONFIGURATION SCREEN (SLEEK DROPDOWNS)
  // ═══════════════════════════════════════════════════════════
  if (view === "config") {
    return (
      <div className="max-w-2xl mx-auto pb-24 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setView("hub")}
            className="w-9 h-9 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <h1 className="text-2xl font-display font-bold text-white">
              Configure {stationType === "vignette" ? "Clinical Vignette" : stationType === "exam" ? "Physical Examination" : "History Taking"}
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Choose your course and scenario topic from the dropdown menus below
            </p>
          </div>
        </div>

        {/* Configuration Card with Sleek Dropdowns */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-7 space-y-6 shadow-2xl">

          {/* 1. Clinical Course / Module Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Clinical Course / Specialty
            </label>
            <div className="relative">
              <select
                value={selectedModule}
                onChange={(e) => {
                  setSelectedModule(e.target.value)
                  const found = OSCE_MODULES.find(m => m.name === e.target.value)
                  if (found) {
                    setSelectedTopic(found.topics[0] || "")
                  }
                }}
                className="w-full appearance-none bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white font-semibold focus:outline-none transition-colors cursor-pointer pr-10"
              >
                {OSCE_MODULES.map(mod => (
                  <option key={mod.id} value={mod.name} className="bg-[#141414] text-white py-2">
                    {mod.name} ({mod.topics.length} clinical topics)
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* 2. Clinical Topic Dropdown */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Clinical Topic / Presentation
              </label>
              <span className="text-[11px] text-brand font-medium">{selectedModule} Rotation</span>
            </div>
            <div className="relative">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full appearance-none bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white font-semibold focus:outline-none transition-colors cursor-pointer pr-10"
              >
                {availableTopics.map(topic => (
                  <option key={topic} value={topic} className="bg-[#141414] text-white py-2">
                    {topic}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* 3. Time Allocation Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Station Time Allocation
            </label>
            <div className="relative">
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(Number(e.target.value) as StationTime)}
                className="w-full appearance-none bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white font-semibold focus:outline-none transition-colors cursor-pointer pr-10"
              >
                <option value={8} className="bg-[#141414] text-white">8 Minutes (Standard OSCE Station)</option>
                <option value={10} className="bg-[#141414] text-white">10 Minutes (Extended Clinical Case)</option>
                <option value={15} className="bg-[#141414] text-white">15 Minutes (Comprehensive Consultant Viva)</option>
                <option value={0} className="bg-[#141414] text-white">Untimed (Self-Paced Clinical Practice)</option>
              </select>
              <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* 4. Interactive Assessment Controls */}
          <div className="space-y-3 pt-2 border-t border-[#1a1a1a]">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Interactive Assessment & Teaching
            </label>

            {/* Enable Clinical Hints Toggle */}
            <div className="flex items-center justify-between p-3.5 bg-[#121212] border border-[#202020] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-brand">
                  <Lightbulb size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">Enable Clinical Hints</p>
                  <p className="text-[11px] text-gray-500">Provide focused diagnostic clues during station execution</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setHintsEnabled(h => !h)}
                className={`w-11 h-6 rounded-full border transition-all relative flex-shrink-0 ${
                  hintsEnabled ? "bg-brand border-brand" : "bg-[#1a1a1a] border-[#2a2a2a]"
                }`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow-sm ${
                  hintsEnabled ? "left-5" : "left-0.5"
                }`} />
              </button>
            </div>

            {/* Automated "Mark Me" & Teaching Toggle */}
            <div className="flex items-center justify-between p-3.5 bg-[#121212] border border-[#202020] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-brand">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">Automated &quot;Mark Me&quot; &amp; Teaching</p>
                  <p className="text-[11px] text-gray-500">System evaluates your answer, awards marks, and teaches model clinical reasoning</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMarkMeEnabled(m => !m)}
                className={`w-11 h-6 rounded-full border transition-all relative flex-shrink-0 ${
                  markMeEnabled ? "bg-brand border-brand" : "bg-[#1a1a1a] border-[#2a2a2a]"
                }`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all shadow-sm ${
                  markMeEnabled ? "left-5" : "left-0.5"
                }`} />
              </button>
            </div>
          </div>

          {/* Start Station Action Button */}
          <button
            onClick={handleStartStation}
            className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-xs sm:text-sm transition-all shadow-xl shadow-brand/25 flex items-center justify-center gap-2"
          >
            <Play size={15} fill="currentColor" /> Begin OSCE Station
          </button>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 2.5: BRIEFING VIEW (Consultation Room / Case Presentation)
  // Inspired directly by Screenshot 1
  // ═══════════════════════════════════════════════════════════
  if (view === "briefing" && activeCase) {
    return (
      <div className="max-w-4xl mx-auto pb-24 space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setView("config")}
              className="w-9 h-9 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-brand" />
                <h1 className="text-xl font-display font-bold text-white">Clinical Vignette</h1>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                {activeCase.module} &bull; {activeCase.difficulty} difficulty
              </p>
            </div>
          </div>

          <button
            onClick={handleNextCaseInBank}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#222] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
          >
            <RotateCcw size={13} /> New Case
          </button>
        </div>

        {/* Presentation Container */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          {/* Status Pills */}
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> LIVE SESSION
            </span>
            <span className="text-purple-400 bg-purple-950/40 border border-purple-800/50 px-2.5 py-1 rounded-full">
              CONSULTATION ROOM
            </span>
          </div>

          {/* Consultation Avatar Illustration (Doctor and Patient) */}
          <div className="flex justify-center py-4">
            <div className="w-24 h-24 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center relative shadow-inner">
              <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center">
                <Stethoscope size={36} className="text-brand" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#121212] border border-[#2a2a2a] flex items-center justify-center text-xs">
                <User size={14} className="text-brand" />
              </div>
            </div>
          </div>

          {/* Patient Presentation Box */}
          <div className="bg-[#121212] border border-[#222] rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">PATIENT PRESENTATION</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">CLINICAL VIGNETTE</h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeCase.presentation.story}
              </p>
            </div>

            {/* Vital Signs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-[#1a1a1a] text-[11px]">
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">HR</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.hr}</span>
              </div>
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">BP</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.bp}</span>
              </div>
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">TEMP</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.temp}</span>
              </div>
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">RR</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.rr}</span>
              </div>
              <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                <span className="text-gray-500 block text-[9px]">SPO2</span>
                <span className="font-bold text-white">{activeCase.presentation.vitals.spo2}</span>
              </div>
            </div>
          </div>

          {/* Begin Assessment Questions Button */}
          <button
            onClick={() => {
              setView("active")
              setSecondsRemaining(selectedTime > 0 ? selectedTime * 60 : 0)
            }}
            className="w-full bg-[#1b4332] hover:bg-[#143628] border border-[#2d6a4f] text-white py-4 rounded-xl transition-all shadow-xl flex flex-col items-center justify-center gap-0.5 group"
          >
            <span className="font-bold text-sm tracking-wide flex items-center gap-2">
              <Play size={14} fill="currentColor" /> Begin Assessment Questions
            </span>
            <span className="text-[11px] text-emerald-300 font-normal">
              {activeCase.questions.length} examiner questions incl. consultant-level viva
            </span>
          </button>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 3: ACTIVE STATION (Split Screen Layout - Screenshot 2)
  // ═══════════════════════════════════════════════════════════
  if (view === "active") {
    const score = calculateScore()

    // ─── ACTIVE VIGNETTE (Inspired by Screenshot 2 with Automated "Mark Me") ───
    if (stationType === "vignette" && activeCase) {
      const q = activeCase.questions[currentQuestionIndex]
      const userText = userAnswers[q.id] || ""
      const isHintVisible = showHint[q.id]
      const evalState = questionEvaluations[q.id]
      const isEvaluated = !!evalState?.isEvaluated

      const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < activeCase.questions.length) {
          setCurrentQuestionIndex(i => i + 1)
        } else {
          handleFinishStation()
        }
      }

      return (
        <div className="max-w-6xl mx-auto pb-24 space-y-4">
          {/* Top Control Bar */}
          <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView("config")}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={15} />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <FileText size={15} className="text-brand" />
                  <h1 className="text-sm sm:text-base font-bold text-white">Clinical Vignette</h1>
                </div>
                <p className="text-[11px] text-gray-400">
                  {activeCase.module} &bull; {activeCase.difficulty} difficulty
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                Station Score: {score.earned} / {score.total} Marks
              </span>
              {selectedTime > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
                  <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
                </div>
              )}
              <button
                onClick={handleNextCaseInBank}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1a1a1a] border border-[#222] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <RotateCcw size={12} /> New Case
              </button>
            </div>
          </div>

          {/* Split Screen Grid (Screenshot 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Left Column (5 cols): Patient Case Reference */}
            <div className="lg:col-span-5 bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-5 space-y-4 overflow-y-auto max-h-[calc(100vh-170px)]">
              <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#161616] border border-[#222] flex items-center justify-center text-brand">
                    <User size={14} />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-white uppercase tracking-wider">Patient Case</h2>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">REFERENCE</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
                  {activeCase.module}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">CLINICAL VIGNETTE</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {activeCase.presentation.story}
                </p>
              </div>

              {/* Vitals Grid */}
              <div className="bg-[#121212] border border-[#202020] rounded-xl p-3 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Recorded Vital Signs</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">HEART RATE</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.hr}</span>
                  </div>
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">BLOOD PRESSURE</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.bp}</span>
                  </div>
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">TEMPERATURE</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.temp}</span>
                  </div>
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">RESP RATE</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.rr}</span>
                  </div>
                  <div className="bg-[#161616] p-2 rounded border border-[#242424]">
                    <span className="text-gray-500 block text-[9px]">SPO2</span>
                    <span className="font-bold text-white">{activeCase.presentation.vitals.spo2}</span>
                  </div>
                </div>
              </div>

              {/* Labs & Imaging */}
              <div className="space-y-2 pt-2 border-t border-[#181818]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Diagnostic Findings</span>
                <p className="text-xs text-gray-400 leading-relaxed bg-[#121212] p-3 rounded-xl border border-[#202020]">
                  {activeCase.presentation.labs}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed bg-[#121212] p-3 rounded-xl border border-[#202020]">
                  {activeCase.presentation.imaging}
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Active Assessment & Automated "Mark Me" Evaluation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-[#181818]">
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-white">
                      Question {q.number} of {activeCase.questions.length}
                    </h2>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                      CLINICAL ASSESSMENT
                    </span>
                  </div>

                  {hintsEnabled && (
                    <button
                      onClick={() => setShowHint(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-xs font-semibold text-brand hover:bg-[#1a1a1a] transition-colors"
                    >
                      <Lightbulb size={13} /> {isHintVisible ? "Hide Hint" : "Need a Hint?"}
                    </button>
                  )}
                </div>

                {/* Examiner Prompt Box (Screenshot 2) */}
                <div className="bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                    {q.prompt}
                  </p>
                </div>

                {/* Diagnostic Hint Box (Strictly brand red, NO yellow) */}
                {hintsEnabled && isHintVisible && (
                  <div className="bg-[#141414] border border-brand/30 rounded-xl p-3.5 space-y-1 animate-in fade-in duration-150">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand flex items-center gap-1">
                      <Lightbulb size={12} /> Clinical Guidance Clue
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {q.hint}
                    </p>
                  </div>
                )}

                {/* Candidate Textarea (Screenshot 2) */}
                <div className="space-y-2">
                  <textarea
                    rows={4}
                    disabled={isEvaluated}
                    value={userText}
                    onChange={(e) => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder={`Type your answer to Question ${q.number}...`}
                    className="w-full bg-[#121212] border border-[#262626] focus:border-brand rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none leading-relaxed disabled:opacity-75 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Automated "Mark Me" Evaluation Breakdown (Once student clicks "Mark My Answer") */}
                {isEvaluated && evalState && (
                  <div className="space-y-4 pt-3 border-t border-[#181818] animate-in fade-in duration-200">
                    {/* Header with Awarded Marks */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <CheckSquare size={13} className="text-brand" /> Automated System Evaluation
                      </span>
                      <span className="text-xs font-bold text-white bg-brand/10 border border-brand/30 px-2.5 py-0.5 rounded">
                        Awarded: {evalState.earnedMarks} / {evalState.maxMarks} Marks
                      </span>
                    </div>

                    {/* Evaluated Rubric Items */}
                    <div className="space-y-2">
                      {evalState.evaluations.map(ev => (
                        <div
                          key={ev.rubricId}
                          className={`p-3 rounded-xl border text-xs flex items-start justify-between gap-3 ${
                            ev.isHit
                              ? "bg-emerald-950/20 border-emerald-800/50 text-emerald-300"
                              : "bg-[#141414] border-[#222] text-gray-400"
                          }`}
                        >
                          <div className="flex items-start gap-2.5 flex-1">
                            {ev.isHit ? (
                              <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X size={15} className="text-gray-500 flex-shrink-0 mt-0.5" />
                            )}
                            <span className="leading-snug text-gray-200 font-medium">
                              {ev.text}
                            </span>
                          </div>
                          <span className={`text-[11px] font-bold flex-shrink-0 ${
                            ev.isHit ? "text-emerald-400" : "text-gray-500"
                          }`}>
                            {ev.isHit ? `+${ev.marksAwarded} MK` : `0 / ${ev.maxMarks} MK`}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Consultant Teaching Model Answer (Teaches the student clinical reasoning) */}
                    <div className="bg-[#141414] border border-[#242424] rounded-xl p-4 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand flex items-center gap-1">
                        <BookOpen size={12} /> Consultant Model Answer &amp; Clinical Teaching Rationale
                      </span>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {q.modelAnswer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Buttons: "Mark My Answer" OR "Next Question →" */}
                {!isEvaluated ? (
                  <button
                    onClick={handleMarkMyAnswer}
                    className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2"
                  >
                    <Sparkles size={15} /> Mark My Answer &amp; Teach Me
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="w-full bg-[#3d5a45] hover:bg-[#2d4533] border border-[#4d6f56] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {currentQuestionIndex + 1 >= activeCase.questions.length ? "Finish Station & View Final Report" : "Next Question →"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // ─── ACTIVE PHYSICAL EXAMINATION ───
    if (stationType === "exam" && activeExam) {
      return (
        <div className="max-w-4xl mx-auto pb-24 space-y-5">
          <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView("config")}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={15} />
              </button>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-white">{activeExam.title}</h1>
                <p className="text-[11px] text-gray-400">{activeExam.topic} &bull; Clinical Method</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                Marks: {score.earned} / {score.total}
              </span>
              {selectedTime > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
                  <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 space-y-6 shadow-xl">
            <div className="bg-[#121212] border border-[#222] rounded-xl p-4 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Patient Brief</span>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeExam.patientBrief}
              </p>
            </div>

            {hintsEnabled && (
              <div className="bg-[#141414] border border-brand/30 rounded-xl p-3.5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand flex items-center gap-1">
                  <Lightbulb size={12} /> Examiner Technique Clue
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeExam.hint}
                </p>
              </div>
            )}

            <div className="space-y-6">
              {activeExam.steps.map(step => (
                <div key={step.category} className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300 border-b border-[#181818] pb-1.5">
                    {step.category}
                  </h3>
                  <div className="space-y-2">
                    {step.items.map(item => {
                      const isChecked = !!checkedExamItems[item.id]
                      return (
                        <button
                          key={item.id}
                          onClick={() => setCheckedExamItems(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-start justify-between gap-3 transition-colors ${
                            isChecked
                              ? "bg-brand/10 border-brand/50 text-white"
                              : "bg-[#121212] border-[#202020] text-gray-400 hover:border-[#333]"
                          }`}
                        >
                          <span className="flex items-start gap-2.5 flex-1">
                            <span className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] mt-0.5 ${
                              isChecked ? "bg-brand border-brand text-white" : "border-[#333] bg-[#1a1a1a]"
                            }`}>
                              {isChecked && <Check size={11} strokeWidth={3} />}
                            </span>
                            <span className="leading-snug">{item.text}</span>
                          </span>
                          <span className="text-[11px] font-bold text-brand flex-shrink-0">
                            +{item.marks} MK
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleFinishStation}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
            >
              Finish Examination &amp; View Final Grade
            </button>
          </div>
        </div>
      )
    }

    // ─── ACTIVE HISTORY TAKING ───
    if (stationType === "history" && activeHistory) {
      return (
        <div className="max-w-4xl mx-auto pb-24 space-y-5">
          <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView("config")}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={15} />
              </button>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-white">{activeHistory.title}</h1>
                <p className="text-[11px] text-gray-400">{activeHistory.patientName} &bull; {activeHistory.ageGender}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                Marks: {score.earned} / {score.total}
              </span>
              {selectedTime > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
                  <Clock size={13} className="text-brand" /> {formatTimer(secondsRemaining)}
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 space-y-6 shadow-xl">
            <div className="bg-[#121212] border border-[#222] rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Chief Complaint</span>
                <span className="text-[10px] font-bold uppercase text-brand">{activeHistory.chiefComplaint}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeHistory.scenario}
              </p>
            </div>

            {hintsEnabled && (
              <div className="bg-[#141414] border border-brand/30 rounded-xl p-3.5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand flex items-center gap-1">
                  <Lightbulb size={12} /> Clinical Communication Clue
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeHistory.hint}
                </p>
              </div>
            )}

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Inquiry Dialogue Simulation (Click inquiry to elicit patient response)
              </h3>
              <div className="space-y-2.5">
                {activeHistory.inquiries.map((inq) => {
                  const isRevealed = !!revealedHistoryInquiries[inq.id]
                  return (
                    <div
                      key={inq.id}
                      className={`rounded-xl border transition-all ${
                        isRevealed ? "bg-[#141414] border-[#2a2a2a]" : "bg-[#111] border-[#1d1d1d]"
                      }`}
                    >
                      <button
                        onClick={() => setRevealedHistoryInquiries(prev => ({ ...prev, [inq.id]: !prev[inq.id] }))}
                        className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-gray-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-brand px-1.5 py-0.5 rounded bg-brand/10 border border-brand/20">
                            {inq.category}
                          </span>
                          <span>{inq.question}</span>
                        </span>
                        <span className="text-[11px] font-bold text-brand flex-shrink-0">
                          {isRevealed ? "Revealed (+marks)" : "Ask Patient"}
                        </span>
                      </button>

                      {isRevealed && (
                        <div className="px-4 pb-3.5 pt-1 border-t border-[#1a1a1a] space-y-1 animate-in fade-in duration-150">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                            Patient Response:
                          </span>
                          <p className="text-xs text-gray-300 leading-relaxed italic">
                            &quot;{inq.patientResponse}&quot;
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <button
              onClick={handleFinishStation}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
            >
              Complete History &amp; View Final Grade
            </button>
          </div>
        </div>
      )
    }
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 4: RESULTS & COMPREHENSIVE CLINICAL TEACHING REPORT
  // ═══════════════════════════════════════════════════════════
  if (view === "results") {
    const score = calculateScore()
    const percentage = score.total > 0 ? Math.round((score.earned / score.total) * 100) : 0
    const passed = percentage >= 50

    return (
      <div className="max-w-3xl mx-auto pb-24 space-y-6">
        {/* Outcome Card */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
            <Award size={28} />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-2xl font-bold text-white tracking-tight">OSCE Station Report</h2>
            <p className="text-xs text-gray-400">
              {activeCase?.title || activeExam?.title || activeHistory?.title} &bull; {selectedModule}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            <div className="bg-[#141414] border border-[#222] rounded-xl p-3">
              <span className="text-[9px] text-gray-500 uppercase font-bold block">Score</span>
              <span className="text-base sm:text-lg font-bold text-white">{score.earned} / {score.total}</span>
            </div>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-3">
              <span className="text-[9px] text-gray-500 uppercase font-bold block">Percentage</span>
              <span className="text-base sm:text-lg font-bold text-brand">{percentage}%</span>
            </div>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-3">
              <span className="text-[9px] text-gray-500 uppercase font-bold block">Grade</span>
              <span className={`text-xs sm:text-sm font-bold block mt-1 ${passed ? "text-emerald-400" : "text-brand"}`}>
                {percentage >= 80 ? "Distinction" : percentage >= 70 ? "Merit" : passed ? "Pass" : "Review"}
              </span>
            </div>
          </div>

          <div className="flex gap-3 max-w-sm mx-auto pt-2">
            <button
              onClick={() => {
                if (stationType === "vignette") setView("briefing")
                else setView("active")
              }}
              className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-1.5"
            >
              <RotateCcw size={13} /> Retry Station
            </button>
            <button
              onClick={() => setView("hub")}
              className="flex-1 bg-[#141414] border border-[#242424] hover:bg-[#1a1a1a] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
            >
              Back to OSCE Hub
            </button>
          </div>
        </div>

        {/* Detailed Question-by-Question Clinical Teaching Review (For Vignettes) */}
        {activeCase && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">
              Clinical Teaching &amp; Marking Breakdown
            </h3>

            {activeCase.questions.map((q, idx) => {
              const evalState = questionEvaluations[q.id]
              const userAns = userAnswers[q.id]
              const isHitAll = evalState && evalState.earnedMarks === evalState.maxMarks

              return (
                <div
                  key={q.id}
                  className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#181818]">
                    <span className="text-xs font-bold text-white">
                      Question {idx + 1}: {q.prompt}
                    </span>
                    <span className="text-xs font-bold text-brand bg-brand/10 px-2 py-0.5 rounded border border-brand/20 flex-shrink-0 ml-3">
                      {evalState ? `${evalState.earnedMarks} / ${evalState.maxMarks} MK` : `0 / ${q.rubricItems.reduce((s, r) => s + r.marks, 0)} MK`}
                    </span>
                  </div>

                  {/* Student Response */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      Your Answer
                    </span>
                    <p className="text-xs text-gray-300 bg-[#121212] p-3 rounded-xl border border-[#202020] leading-relaxed italic">
                      {userAns || "No answer submitted"}
                    </p>
                  </div>

                  {/* Rubric Breakdown */}
                  {evalState && evalState.evaluations && (
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Criteria Evaluation
                      </span>
                      <div className="space-y-1.5">
                        {evalState.evaluations.map(ev => (
                          <div
                            key={ev.rubricId}
                            className={`p-2.5 rounded-lg border text-xs flex items-center justify-between gap-2 ${
                              ev.isHit
                                ? "bg-emerald-950/20 border-emerald-800/40 text-emerald-300"
                                : "bg-[#141414] border-[#222] text-gray-400"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {ev.isHit ? <Check size={12} className="text-emerald-400" /> : <X size={12} className="text-gray-500" />}
                              <span>{ev.text}</span>
                            </span>
                            <span className="font-bold text-[10px] flex-shrink-0">
                              {ev.isHit ? `+${ev.marksAwarded} MK` : `0 MK`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Consultant Model Answer & Teaching */}
                  <div className="bg-[#141414] border border-[#242424] rounded-xl p-3.5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand flex items-center gap-1">
                      <BookOpen size={11} /> Consultant Model Answer &amp; Teaching
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {q.modelAnswer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return null
}
