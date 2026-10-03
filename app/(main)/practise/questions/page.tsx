"use client"
import { useEffect, useState, useMemo } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  CheckCircle, XCircle, ChevronRight, Loader2, RotateCcw,
  Trophy, BookOpen, Filter, ArrowLeft, Brain, Sparkles, Check
} from "lucide-react"
import Link from "next/link"
import { MEDICAL_MCQ_BANK, MedicalQuestion } from "@/lib/data/medical-questions"

const SUBJECTS = [
  "All Subjects",
  "Anatomy",
  "Physiology",
  "Pathology",
  "Pharmacology",
  "Internal Medicine",
  "Surgery",
  "Paediatrics",
  "Embryology",
  "Histology",
  "Obstetrics & Gynaecology",
]

const DIFFICULTIES = ["All", "easy", "medium", "hard"]

export default function QuestionsPage() {
  const supabase = createClient()
  const [dbQuestions, setDbQuestions] = useState<MedicalQuestion[]>([])
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data, error } = await supabase
          .from("questions")
          .select("*, question_options(*)")
          .eq("status", "approved")
          .limit(100)

        if (!error && data && data.length > 0) {
          // Normalize Supabase format
          const formatted: MedicalQuestion[] = data.map((q: any) => ({
            id: q.id,
            stem: q.stem,
            difficulty: q.difficulty || "medium",
            subject: q.subject || "General Medicine",
            topic: q.topic || "",
            explanation: q.explanation || "",
            question_options: q.question_options || [],
          }))
          setDbQuestions(formatted)
        }
      } catch (err) {
        console.warn("Using built-in high-yield medical question bank:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchQuestions()
  }, [])

  // Combine DB questions and Built-in questions, de-duplicating by stem
  const allAvailableQuestions = useMemo(() => {
    const stems = new Set(dbQuestions.map(q => q.stem.trim()))
    const uniqueBuiltIn = MEDICAL_MCQ_BANK.filter(q => !stems.has(q.stem.trim()))
    return [...dbQuestions, ...uniqueBuiltIn]
  }, [dbQuestions])

  // Filter based on active controls
  const filteredQuestions = useMemo(() => {
    return allAvailableQuestions.filter(q => {
      const matchSubject =
        selectedSubject === "All Subjects" ||
        q.subject.toLowerCase() === selectedSubject.toLowerCase()
      const matchDiff =
        selectedDifficulty === "All" ||
        q.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
      return matchSubject && matchDiff
    })
  }, [allAvailableQuestions, selectedSubject, selectedDifficulty])

  const currentQuestion = filteredQuestions[current]

  const handleSelect = async (optId: string) => {
    if (revealed || !currentQuestion) return
    setSelected(optId)
    setRevealed(true)
    const opt = currentQuestion.question_options.find(o => o.id === optId)
    const correct = opt?.is_correct ?? false
    if (correct) setScore(s => s + 1)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await supabase.from("question_attempts").insert({
          user_id: user.id,
          question_id: currentQuestion.id,
          selected_option_id: optId,
          is_correct: correct,
        })
      }
    } catch {
      // Offline/local session fallback
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
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-3">
        <Loader2 size={32} className="animate-spin text-brand" />
        <p className="text-xs text-gray-500">Loading verified medical MCQs...</p>
      </div>
    )
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 space-y-5 bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-8">
        <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
          <Brain size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white">No questions in this filter</h2>
          <p className="text-xs text-gray-400 mt-1">Try selecting a different specialty or difficulty level.</p>
        </div>
        <button
          onClick={() => {
            setSelectedSubject("All Subjects")
            setSelectedDifficulty("All")
            restart()
          }}
          className="px-5 py-2.5 bg-brand hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-brand/20"
        >
          Reset Filters
        </button>
      </div>
    )
  }

  if (finished) {
    const percentage = Math.round((score / filteredQuestions.length) * 100)
    return (
      <div className="max-w-xl mx-auto text-center py-16 space-y-6 bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
          <Trophy size={32} />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-1">
            Practice Complete
          </span>
          <h1 className="text-3xl font-display font-bold text-white">Assessment Summary</h1>
          <p className="text-gray-400 text-xs mt-1">
            {selectedSubject} &bull; {filteredQuestions.length} Questions
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
          <Link
            href="/practise"
            className="flex items-center justify-center gap-2 bg-[#161616] border border-[#2a2a2a] text-gray-300 hover:text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#202020] transition-colors"
          >
            Back to Practise
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      {/* Top Header & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/practise"
            className="w-8 h-8 rounded-lg bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-white">Clinical MCQ Bank</h1>
            <p className="text-xs text-gray-400">
              Verified clinical vignettes referencing standard textbooks and NCBI
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-[#111] border border-[#1f1f1f] px-3 py-1.5 rounded-lg text-xs font-bold text-gray-300">
            Question {current + 1} of {filteredQuestions.length}
          </span>
          <span className="bg-brand/10 border border-brand/20 text-brand px-3 py-1.5 rounded-lg text-xs font-bold">
            Score: {score}
          </span>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between bg-[#0c0c0c] border border-[#1a1a1a] p-3 rounded-xl">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <Filter size={13} className="text-gray-500 flex-shrink-0 ml-1 mr-1" />
          {SUBJECTS.map(subj => (
            <button
              key={subj}
              onClick={() => {
                setSelectedSubject(subj)
                restart()
              }}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all border ${
                selectedSubject === subj
                  ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                  : "bg-[#141414] text-gray-400 border-[#222] hover:text-white"
              }`}
            >
              {subj}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 border-t sm:border-t-0 sm:border-l border-[#1f1f1f] pt-2 sm:pt-0 sm:pl-3 flex-shrink-0">
          <span className="text-[10px] uppercase font-bold text-gray-500 mr-1">Diff:</span>
          {DIFFICULTIES.map(d => (
            <button
              key={d}
              onClick={() => {
                setSelectedDifficulty(d)
                restart()
              }}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase transition-colors ${
                selectedDifficulty === d
                  ? "bg-white text-black font-extrabold"
                  : "bg-[#141414] text-gray-500 hover:text-white"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#161616] rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-brand h-1.5 transition-all duration-300 rounded-full"
          style={{ width: `${((current + 1) / filteredQuestions.length) * 100}%` }}
        />
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
          </div>
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md border ${
              currentQuestion.difficulty === "easy"
                ? "text-gray-300 bg-[#161616] border-[#2a2a2a]"
                : currentQuestion.difficulty === "hard"
                ? "text-brand bg-brand/10 border-brand/20"
                : "text-gray-400 bg-[#161616] border-[#2a2a2a]"
            }`}
          >
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
            <div className="flex items-center justify-between">
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
    </div>
  )
}