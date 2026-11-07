"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import {
  Stethoscope, Clock, CheckCircle, ArrowLeft, RotateCcw,
  FileText, MessageSquare, ChevronRight, Check,
  AlertCircle, HelpCircle, User, Award, Sliders, Play,
  CheckSquare, Lightbulb, Star, ShieldAlert
} from "lucide-react"
import { toast } from "sonner"
import {
  OSCE_MODULES,
  VIGNETTE_CASES,
  EXAM_STATIONS,
  HISTORY_STATIONS,
  type ClinicalVignetteCase,
  type ExamStation,
  type HistoryStation,
  type ExaminerQuestion
} from "@/lib/data/osce-bank"

// ─── Types ───────────────────────────────────────────────────────────────────

type ViewState = "hub" | "config" | "briefing" | "active" | "results"
type StationType = "vignette" | "exam" | "history"
type StationTime = 8 | 10 | 15 | 0 // 0 = untimed

export default function OSCEPractisePage() {
  const [view, setView] = useState<ViewState>("hub")
  const [stationType, setStationType] = useState<StationType>("vignette")

  // Configuration (Module -> Topic, no Level as requested)
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
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({})
  const [showHint, setShowHint] = useState<Record<string, boolean>>({})
  const [awardedMarks, setAwardedMarks] = useState<Record<string, boolean>>({})
  const [checkedExamItems, setCheckedExamItems] = useState<Record<string, boolean>>({})
  const [revealedHistoryInquiries, setRevealedHistoryInquiries] = useState<Record<string, boolean>>({})

  // Station Timer
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Current module configuration
  const currentModuleConfig = useMemo(() => {
    return OSCE_MODULES.find(m => m.name.toLowerCase() === selectedModule.toLowerCase()) || OSCE_MODULES[0]
  }, [selectedModule])

  // Available topics for current module
  const availableTopics = currentModuleConfig.topics

  // Synchronize topic when module changes
  useEffect(() => {
    if (!availableTopics.includes(selectedTopic)) {
      setSelectedTopic(availableTopics[0] || "")
    }
  }, [availableTopics, selectedTopic])

  // Filtered stations for current selection
  const matchingVignettes = useMemo(() => {
    return VIGNETTE_CASES.filter(
      c => c.module.toLowerCase() === selectedModule.toLowerCase() &&
           c.topic.toLowerCase() === selectedTopic.toLowerCase()
    )
  }, [selectedModule, selectedTopic])

  const matchingExams = useMemo(() => {
    return EXAM_STATIONS.filter(
      e => e.module.toLowerCase() === selectedModule.toLowerCase()
    )
  }, [selectedModule])

  const matchingHistories = useMemo(() => {
    return HISTORY_STATIONS.filter(
      h => h.module.toLowerCase() === selectedModule.toLowerCase()
    )
  }, [selectedModule])

  // Timer logic
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
    setRevealedQuestions({})
    setShowHint({})
    setAwardedMarks({})
    setCheckedExamItems({})
    setRevealedHistoryInquiries({})
    setSecondsRemaining(selectedTime > 0 ? selectedTime * 60 : 0)

    if (stationType === "vignette") {
      const match = matchingVignettes[0] ||
        VIGNETTE_CASES.find(c => c.module.toLowerCase() === selectedModule.toLowerCase()) ||
        VIGNETTE_CASES[0]
      setActiveCase(match)
      setActiveExam(null)
      setActiveHistory(null)
      setView("briefing")
    } else if (stationType === "exam") {
      const match = matchingExams[0] || EXAM_STATIONS[0]
      setActiveExam(match)
      setActiveCase(null)
      setActiveHistory(null)
      setView("active")
    } else {
      const match = matchingHistories[0] || HISTORY_STATIONS[0]
      setActiveHistory(match)
      setActiveCase(null)
      setActiveExam(null)
      setView("active")
    }
  }

  // Cycle to another case in the bank
  const handleNextCaseInBank = () => {
    if (activeCase) {
      const currentIdx = VIGNETTE_CASES.findIndex(c => c.id === activeCase.id)
      const nextCase = VIGNETTE_CASES[(currentIdx + 1) % VIGNETTE_CASES.length]
      setActiveCase(nextCase)
      setSelectedModule(nextCase.module)
      setSelectedTopic(nextCase.topic)
      setCurrentQuestionIndex(0)
      setUserAnswers({})
      setRevealedQuestions({})
      setShowHint({})
      setAwardedMarks({})
      setSecondsRemaining(selectedTime > 0 ? selectedTime * 60 : 0)
      toast.info(`Loaded scenario: ${nextCase.title}`)
    }
  }

  // Calculate current score
  const calculateScore = () => {
    if (activeCase) {
      const totalPossible = activeCase.questions.reduce((sum, q) =>
        sum + q.rubricItems.reduce((sub, item) => sub + item.marks, 0), 0
      )
      const earned = Object.keys(awardedMarks).filter(k => awardedMarks[k]).length
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
                Immersive story-mode clinical cases with viva assessment questions, clinical hints, and examiner grading rubrics.
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
  // VIEW 2: CONFIGURATION SCREEN (Module -> Topic, No Level)
  // ═══════════════════════════════════════════════════════════
  if (view === "config") {
    return (
      <div className="max-w-3xl mx-auto pb-24 space-y-6">
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
              Select module and clinical topic to load matching bank scenarios
            </p>
          </div>
        </div>

        {/* Configuration Container */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl divide-y divide-[#181818] shadow-2xl">

          {/* 1. Clinical Module Selection */}
          <div className="p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Clinical Specialty / Module
              </label>
              <span className="text-[11px] text-brand font-medium">8 Core Modules</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {OSCE_MODULES.map(mod => (
                <button
                  key={mod.id}
                  onClick={() => {
                    setSelectedModule(mod.name)
                    setSelectedTopic(mod.topics[0] || "")
                  }}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                    selectedModule.toLowerCase() === mod.name.toLowerCase()
                      ? "bg-brand/10 border-brand text-white"
                      : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                  }`}
                >
                  <p className="font-bold text-white truncate">{mod.name}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{mod.topics.length} Topics</p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Clinical Scenario / Topic Selection (Dynamically populated from selected module) */}
          <div className="p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Clinical Topic / Presentation
              </label>
              <span className="text-[11px] text-gray-500 font-medium">
                {selectedModule} Syllabus
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableTopics.map(topic => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    selectedTopic.toLowerCase() === topic.toLowerCase()
                      ? "bg-brand/10 border-brand text-white"
                      : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                  }`}
                >
                  <span className="text-xs font-semibold text-white">{topic}</span>
                  {selectedTopic.toLowerCase() === topic.toLowerCase() && (
                    <Check size={14} className="text-brand flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Time Allocation */}
          <div className="p-5 sm:p-6 space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Station Time Allocation
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { label: "8 Minutes", value: 8, desc: "Standard OSCE station" },
                { label: "10 Minutes", value: 10, desc: "Extended clinical case" },
                { label: "15 Minutes", value: 15, desc: "Comprehensive viva" },
                { label: "Untimed", value: 0, desc: "Self-paced study" },
              ].map(t => (
                <button
                  key={t.value}
                  onClick={() => setSelectedTime(t.value as StationTime)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedTime === t.value
                      ? "bg-brand/10 border-brand text-white"
                      : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                  }`}
                >
                  <p className="text-xs font-bold text-white">{t.label}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Interactive Assessment Controls (Hints & Mark Me) */}
          <div className="p-5 sm:p-6 space-y-3.5">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
              Interactive Assessment Controls
            </label>

            {/* Enable Clinical Hints Toggle */}
            <div className="flex items-center justify-between p-3.5 bg-[#121212] border border-[#202020] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-brand">
                  <Lightbulb size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">Enable Clinical Hints</p>
                  <p className="text-[11px] text-gray-500">Provide focused diagnostic clues without leaving the station</p>
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

            {/* Mark Me Scoring Rubric Toggle */}
            <div className="flex items-center justify-between p-3.5 bg-[#121212] border border-[#202020] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#262626] flex items-center justify-center text-brand">
                  <CheckSquare size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-white">&quot;Mark Me&quot; Scoring Rubric</p>
                  <p className="text-[11px] text-gray-500">Interactive examiner marking sheet with points awarded out of 20</p>
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
        </div>

        {/* Start Station Action Button */}
        <button
          onClick={handleStartStation}
          className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-sm transition-all shadow-xl shadow-brand/25 flex items-center justify-center gap-2"
        >
          <Play size={15} fill="currentColor" /> Begin OSCE Station
        </button>
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

          {/* Begin Assessment Questions Button (Screenshot 1) */}
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

    // ─── ACTIVE VIGNETTE (Inspired directly by Screenshot 2) ───
    if (stationType === "vignette" && activeCase) {
      const q = activeCase.questions[currentQuestionIndex]
      const userText = userAnswers[q.id] || ""
      const isHintVisible = showHint[q.id]

      const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < activeCase.questions.length) {
          setCurrentQuestionIndex(i => i + 1)
        } else {
          setView("results")
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

            {/* Right Column (7 cols): Active Assessment Question (Screenshot 2) */}
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

                {/* Diagnostic Hint Box (strictly brand styled, NO yellow) */}
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
                    value={userText}
                    onChange={(e) => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder={`Type your answer to Question ${q.number}...`}
                    className="w-full bg-[#121212] border border-[#262626] focus:border-brand rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Examiner "Mark Me" Rubric */}
                {markMeEnabled && (
                  <div className="space-y-3 pt-3 border-t border-[#181818]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                        <CheckSquare size={13} className="text-brand" /> &quot;Mark Me&quot; Scoring Rubric
                      </span>
                      <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                        Score: {score.earned} / {score.total} Marks
                      </span>
                    </div>

                    <div className="space-y-2">
                      {q.rubricItems.map((item, idx) => {
                        const markKey = `${q.id}-${idx}`
                        const isChecked = !!awardedMarks[markKey]
                        return (
                          <button
                            key={markKey}
                            onClick={() => setAwardedMarks(prev => ({ ...prev, [markKey]: !prev[markKey] }))}
                            className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center justify-between gap-3 transition-colors ${
                              isChecked
                                ? "bg-brand/10 border-brand/50 text-white"
                                : "bg-[#141414] border-[#222] text-gray-400 hover:border-[#333]"
                            }`}
                          >
                            <span className="flex items-center gap-2 flex-1">
                              <span className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                                isChecked ? "bg-brand border-brand text-white" : "border-[#333] bg-[#1a1a1a]"
                              }`}>
                                {isChecked && <Check size={11} strokeWidth={3} />}
                              </span>
                              <span>{item.text}</span>
                            </span>
                            <span className="font-bold text-[11px] text-brand flex-shrink-0">
                              +{item.marks} MK
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Next Question Button (Screenshot 2) */}
                <button
                  onClick={handleNextQuestion}
                  className="w-full bg-[#3d5a45] hover:bg-[#2d4533] border border-[#4d6f56] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {currentQuestionIndex + 1 >= activeCase.questions.length ? "Finish Station & Grade" : "Next Question →"}
                </button>
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
              onClick={() => setView("results")}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
            >
              Finish Examination & View Grade
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
              onClick={() => setView("results")}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20"
            >
              Complete History & View Grade
            </button>
          </div>
        </div>
      )
    }
  }

  // ═══════════════════════════════════════════════════════════
  // VIEW 4: RESULTS VIEW
  // ═══════════════════════════════════════════════════════════
  if (view === "results") {
    const score = calculateScore()
    const percentage = score.total > 0 ? Math.round((score.earned / score.total) * 100) : 0
    const passed = percentage >= 50

    return (
      <div className="max-w-xl mx-auto pb-24 space-y-6">
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 sm:p-10 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
            <Award size={32} />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">OSCE Station Complete</h2>
            <p className="text-xs text-gray-400">
              {activeCase?.title || activeExam?.title || activeHistory?.title}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            <div className="bg-[#141414] border border-[#222] rounded-xl p-3.5">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Score</span>
              <span className="text-lg font-bold text-white">{score.earned} / {score.total}</span>
            </div>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-3.5">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Percentage</span>
              <span className="text-lg font-bold text-brand">{percentage}%</span>
            </div>
            <div className="bg-[#141414] border border-[#222] rounded-xl p-3.5">
              <span className="text-[10px] text-gray-500 uppercase font-bold block">Outcome</span>
              <span className={`text-xs font-bold block mt-1.5 ${passed ? "text-emerald-400" : "text-brand"}`}>
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
              className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-1.5"
            >
              <RotateCcw size={13} /> Retry Station
            </button>
            <button
              onClick={() => setView("hub")}
              className="flex-1 bg-[#141414] border border-[#242424] hover:bg-[#1a1a1a] text-white font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Back to OSCE Hub
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
