"use client"
import { useEffect, useState, useMemo } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  CheckCircle, XCircle, ChevronRight, Loader2, RotateCcw,
  Trophy, BookOpen, Filter, ArrowLeft, Brain, Sparkles, Check,
  Clock, Plus, RefreshCw, GraduationCap
} from "lucide-react"
import Link from "next/link"
import { MEDICAL_MCQ_BANK, MedicalQuestion, generateCurriculumQuestions } from "@/lib/data/medical-questions"
import { deriveProgramId, deriveAcademicLevel } from "@/lib/curriculum-engine"
import { toast } from "sonner"

const PROGRAMMES = [
  { id: "medicine", label: "Medicine (MBChB / MBBS)" },
  { id: "pharmacy", label: "Pharmacy (BPharm / PharmD)" },
  { id: "nursing", label: "Nursing (BNurs / BSc)" },
  { id: "bms", label: "Biomedical Science (BSc)" },
  { id: "dentistry", label: "Dentistry (BDS)" },
  { id: "mls", label: "Medical Lab Science (BMLS)" },
  { id: "physiotherapy", label: "Physiotherapy (BPT)" },
  { id: "public_health", label: "Public Health (BPH)" },
]

const ACADEMIC_LEVELS = [
  "All Levels",
  "Part 1",
  "Part 2",
  "Part 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Internship"
]

const SUBJECTS = [
  "All Subjects",
  "Internal Medicine",
  "Surgery",
  "Paediatrics",
  "Obstetrics & Gynaecology",
  "Pharmacology",
  "Pathology",
  "Anatomy",
  "Physiology",
  "Embryology",
  "Histology",
  "Nursing",
  "Dentistry",
  "Medical Laboratory Science",
]

const DIFFICULTIES = ["All", "easy", "medium", "hard"]

export default function QuestionsPage() {
  const supabase = createClient()
  const [user, setUser] = useState<any>(null)
  const [selectedProgram, setSelectedProgram] = useState("medicine")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  
  // Custom Dynamic Questions added during session (e.g. AI-generated)
  const [dynamicQuestions, setDynamicQuestions] = useState<MedicalQuestion[]>([])
  const [dbQuestions, setDbQuestions] = useState<MedicalQuestion[]>([])
  
  // Session State
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(true)
  const [generatingAI, setGeneratingAI] = useState(false)
  const [examMode, setExamMode] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes for exam mode

  useEffect(() => {
    const init = async () => {
      const { data: authData } = await supabase.auth.getUser()
      if (authData?.user) {
        setUser(authData.user)
        const prog = authData.user.user_metadata?.programme || ""
        const lvl = authData.user.user_metadata?.level || ""
        if (prog) setSelectedProgram(deriveProgramId(prog))
        if (lvl) setSelectedLevel(deriveAcademicLevel(lvl))
      }

      try {
        const { data, error } = await supabase
          .from("questions")
          .select("*, question_options(*)")
          .eq("status", "approved")
          .limit(200)

        if (!error && data && data.length > 0) {
          const formatted: MedicalQuestion[] = data.map((q: any) => ({
            id: q.id,
            stem: q.stem,
            difficulty: q.difficulty || "medium",
            subject: q.subject || "General Medicine",
            topic: q.topic || "",
            program_id: q.program_id || "medicine",
            academic_level: q.academic_level || "Year 4",
            explanation: q.explanation || "",
            question_options: q.question_options || [],
          }))
          setDbQuestions(formatted)
        }
      } catch (err) {
        console.warn("Using built-in multi-level medical bank:", err)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  // Timer for exam mode
  useEffect(() => {
    if (!examMode || finished) return
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setFinished(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [examMode, finished])

  // Aggregate questions across DB, built-in 2,400+ procedural bank, and session AI questions
  const allAvailableQuestions = useMemo(() => {
    const combined = [...dynamicQuestions, ...dbQuestions, ...MEDICAL_MCQ_BANK]
    const seen = new Set<string>()
    return combined.filter(q => {
      const key = q.stem.trim().toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [dynamicQuestions, dbQuestions])

  // Filter based on Program, Level, Subject, Difficulty
  const filteredQuestions = useMemo(() => {
    return allAvailableQuestions.filter(q => {
      const matchProgram =
        !q.program_id ||
        q.program_id === "generic" ||
        q.program_id.toLowerCase() === selectedProgram.toLowerCase()

      const matchLevel =
        selectedLevel === "All Levels" ||
        !q.academic_level ||
        q.academic_level.toLowerCase() === selectedLevel.toLowerCase()

      const matchSubject =
        selectedSubject === "All Subjects" ||
        q.subject.toLowerCase() === selectedSubject.toLowerCase()

      const matchDiff =
        selectedDifficulty === "All" ||
        q.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()

      return matchProgram && matchLevel && matchSubject && matchDiff
    })
  }, [allAvailableQuestions, selectedProgram, selectedLevel, selectedSubject, selectedDifficulty])

  const currentQuestion = filteredQuestions[current]

  const handleSelect = async (optId: string) => {
    if (revealed || !currentQuestion) return
    setSelected(optId)
    setRevealed(true)
    const opt = currentQuestion.question_options.find(o => o.id === optId)
    const correct = opt?.is_correct ?? false
    if (correct) setScore(s => s + 1)

    try {
      if (user) {
        await supabase.from("question_attempts").insert({
          user_id: user.id,
          question_id: currentQuestion.id,
          selected_option_id: optId,
          is_correct: correct,
        })
      }
    } catch {
      // Local session fallback
    }
  }

  const next = () => {
    if (current + 1 >= filteredQuestions.length) {
      setFinished(true)
      return
    }
    setCurrent(c => c + 1)
    setSelected(null)
    setRevealed(false)
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setRevealed(false)
    setScore(0)
    setFinished(false)
    setTimeLeft(600)
  }

  // Trigger AI Question Generation
  const handleGenerateAI = async () => {
    setGeneratingAI(true)
    toast.info("Generating 5 clinical MCQs with AI...", {
      description: `Tailoring for ${selectedProgram} • ${selectedLevel} • ${selectedSubject}`
    })

    try {
      const res = await fetch("/api/questions/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          program_id: selectedProgram,
          academic_level: selectedLevel === "All Levels" ? "Year 4" : selectedLevel,
          subject: selectedSubject === "All Subjects" ? "Internal Medicine" : selectedSubject,
          topic: "Clinical Diagnosis & Management",
          count: 5
        })
      })

      const data = await res.json()
      if (data?.success && Array.isArray(data.questions) && data.questions.length > 0) {
        setDynamicQuestions(prev => [...data.questions, ...prev])
        toast.success("5 New AI Questions Added!", {
          description: "New clinical vignettes inserted into your current session."
        })
      } else {
        toast.error("Could not generate new questions at this moment.")
      }
    } catch {
      toast.error("Failed to connect to question generator.")
    } finally {
      setGeneratingAI(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-72 space-y-3">
        <Loader2 size={32} className="animate-spin text-brand" />
        <p className="text-xs text-gray-500">Loading 2,000+ curriculum-aligned medical MCQs...</p>
      </div>
    )
  }

  if (finished) {
    const percentage = Math.round((score / Math.max(filteredQuestions.length, 1)) * 100)
    return (
      <div className="max-w-xl mx-auto text-center py-16 space-y-6 bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
          <Trophy size={32} />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-1">
            Assessment Complete
          </span>
          <h1 className="text-3xl font-display font-bold text-white">Score Report</h1>
          <p className="text-gray-400 text-xs mt-1">
            {selectedProgram.toUpperCase()} &bull; {selectedLevel} &bull; {filteredQuestions.length} Questions
          </p>
        </div>

        <div className="bg-[#141414] border border-[#222] rounded-xl p-5 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Total Score</p>
            <p className="text-3xl font-bold text-white mt-1">
              {score} <span className="text-sm font-normal text-gray-500">/ {filteredQuestions.length}</span>
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Accuracy</p>
            <p className="text-3xl font-bold text-brand mt-1">{percentage}%</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={restart}
            className="flex items-center justify-center gap-2 bg-brand text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-red-700 transition-all shadow-lg shadow-brand/20"
          >
            <RotateCcw size={15} /> Retake Assessment
          </button>
          <button
            onClick={handleGenerateAI}
            disabled={generatingAI}
            className="flex items-center justify-center gap-2 bg-[#161616] border border-[#2a2a2a] text-gray-300 hover:text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#202020] transition-colors"
          >
            {generatingAI ? <Loader2 size={15} className="animate-spin text-brand" /> : <Sparkles size={15} className="text-brand" />}
            Generate 5 More Questions
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/practise"
            className="w-8 h-8 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">Question Bank</h1>
              <span className="text-[10px] font-bold uppercase text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full">
                {allAvailableQuestions.length.toLocaleString()}+ Questions
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Curriculum-aligned clinical MCQs referencing standard textbooks and NCBI
            </p>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setExamMode(prev => !prev)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              examMode
                ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                : "bg-[#141414] text-gray-400 border-[#222] hover:text-white"
            }`}
          >
            <Clock size={13} /> {examMode ? `Exam: ${formatTime(timeLeft)}` : "Exam Mode"}
          </button>

          <button
            onClick={handleGenerateAI}
            disabled={generatingAI}
            className="px-3.5 py-1.5 bg-[#181818] hover:bg-[#222] border border-[#2a2a2a] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
            title="Generate 5 new high-yield clinical MCQs with AI"
          >
            {generatingAI ? (
              <Loader2 size={13} className="animate-spin text-brand" />
            ) : (
              <Sparkles size={13} className="text-brand" />
            )}
            AI Questions
          </button>
        </div>
      </div>

      {/* Curriculum Filters: Programme & Level */}
      <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-4 space-y-3 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Programme Selector */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1 flex items-center gap-1">
              <GraduationCap size={12} className="text-brand" /> Programme
            </label>
            <select
              value={selectedProgram}
              onChange={e => {
                setSelectedProgram(e.target.value)
                restart()
              }}
              className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
            >
              {PROGRAMMES.map(p => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          {/* Academic Level Selector */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
              Academic Level
            </label>
            <select
              value={selectedLevel}
              onChange={e => {
                setSelectedLevel(e.target.value)
                restart()
              }}
              className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
            >
              {ACADEMIC_LEVELS.map(lvl => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Subject Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-t border-[#1a1a1a] pt-3">
          <Filter size={13} className="text-gray-500 flex-shrink-0 mr-1" />
          {SUBJECTS.map(subj => (
            <button
              key={subj}
              onClick={() => {
                setSelectedSubject(subj)
                restart()
              }}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all border ${
                selectedSubject === subj
                  ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                  : "bg-[#141414] text-gray-400 border-[#222] hover:text-white"
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="text-center py-16 bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-8 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
            <Brain size={24} />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">No questions in this filter</h3>
            <p className="text-xs text-gray-400 mt-1">
              Try switching your subject or click below to generate instant AI questions for this topic.
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => {
                setSelectedSubject("All Subjects")
                setSelectedLevel("All Levels")
                restart()
              }}
              className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333] text-xs font-bold text-gray-300 rounded-xl transition-colors"
            >
              Reset Filters
            </button>
            <button
              onClick={handleGenerateAI}
              className="px-4 py-2 bg-brand hover:bg-red-700 text-xs font-bold text-white rounded-xl transition-all shadow-md shadow-brand/20 flex items-center gap-1.5"
            >
              <Sparkles size={13} /> Generate AI Questions
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Progress Indicator */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="font-semibold text-gray-300">
                Question {current + 1} of {filteredQuestions.length}
              </span>
              <span className="bg-brand/10 border border-brand/20 text-brand px-2.5 py-0.5 rounded-md font-bold text-[11px]">
                Score: {score}
              </span>
            </div>
            <div className="w-full bg-[#161616] rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-brand h-1.5 transition-all duration-300 rounded-full"
                style={{ width: `${((current + 1) / filteredQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-[#101010] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6 relative shadow-xl">
            {/* Subject & Difficulty Badges */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-md">
                  {currentQuestion.subject}
                </span>
                {currentQuestion.topic && (
                  <span className="text-[10px] font-semibold text-gray-400 bg-[#161616] border border-[#242424] px-2 py-1 rounded-md">
                    {currentQuestion.topic}
                  </span>
                )}
                {currentQuestion.academic_level && (
                  <span className="text-[10px] font-semibold text-gray-500 bg-[#141414] border border-[#202020] px-2 py-1 rounded-md">
                    {currentQuestion.academic_level}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md border text-gray-400 bg-[#161616] border-[#2a2a2a]">
                {currentQuestion.difficulty}
              </span>
            </div>

            {/* Stem */}
            <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
              {currentQuestion.stem}
            </p>

            {/* Options List */}
            <div className="space-y-3">
              {currentQuestion.question_options.map((opt, i) => {
                let stateClass = "bg-[#141414] border-[#242424] text-gray-300 hover:border-brand/60 hover:text-white"
                if (revealed) {
                  if (opt.is_correct) {
                    stateClass = "bg-brand/15 border-brand text-white font-semibold"
                  } else if (opt.id === selected && !opt.is_correct) {
                    stateClass = "bg-red-950/40 border-red-800 text-gray-300"
                  } else {
                    stateClass = "bg-[#121212] border-[#1c1c1c] text-gray-600 opacity-50"
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    disabled={revealed}
                    className={`w-full text-left px-4 sm:px-5 py-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${stateClass} disabled:cursor-default`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                      revealed && opt.is_correct
                        ? "bg-brand text-white"
                        : revealed && opt.id === selected
                        ? "bg-red-800 text-white"
                        : "bg-[#1e1e1e] text-gray-400"
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-xs sm:text-sm flex-1 leading-normal pt-0.5">
                      {opt.option_text}
                    </span>
                    {revealed && opt.is_correct && (
                      <Check size={18} className="text-brand flex-shrink-0 mt-1" />
                    )}
                    {revealed && opt.id === selected && !opt.is_correct && (
                      <XCircle size={18} className="text-red-500 flex-shrink-0 mt-1" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* In-depth Explanation Box */}
            {revealed && (
              <div className="bg-[#0c0c0c] border border-[#222] rounded-xl p-5 space-y-3 animate-in fade-in duration-200">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand flex items-center gap-1.5">
                    <Sparkles size={13} /> High-Yield Rationale
                  </span>
                  {currentQuestion.reference && (
                    <span className="text-[10px] text-gray-500 flex items-center gap-1">
                      <BookOpen size={11} /> {currentQuestion.reference}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>

          {/* Next Question CTA */}
          {revealed && (
            <button
              onClick={next}
              className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-brand/25 flex items-center justify-center gap-2 animate-in fade-in"
            >
              {current + 1 >= filteredQuestions.length ? "View Final Assessment Results" : "Next Clinical Question"}{" "}
              <ChevronRight size={16} />
            </button>
          )}
        </>
      )}
    </div>
  )
}