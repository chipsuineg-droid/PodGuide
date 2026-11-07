"use client"
import { useState, useEffect, useRef } from "react"
import {
  Trophy, Clock, Users, Swords, ChevronRight, ArrowLeft,
  CheckCircle, XCircle, RotateCcw, Award, Check
} from "lucide-react"
import Link from "next/link"
import { getQuestionsByFilter, MCQQuestion } from "@/lib/data/mcq-bank"
import { toast } from "sonner"

interface ArenaChallenge {
  id: string
  title: string
  subject: string
  courseId: string
  timeLimit: number
  questionCount: number
  participants: number
  rewardPoints: number
  description: string
}

const ARENA_CHALLENGES: ArenaChallenge[] = [
  {
    id: "daily-challenge",
    title: "Daily Clinical Challenge",
    subject: "Internal Medicine & Surgery",
    courseId: "internal-medicine",
    timeLimit: 120, // 2 minutes
    questionCount: 5,
    participants: 142,
    rewardPoints: 100,
    description: "Rapid clinical recall. 5 high-yield clinical scenarios."
  },
  {
    id: "battle-pharma",
    title: "Pharmacology & Therapeutics Battle",
    subject: "Pharmacology",
    courseId: "pharmacology",
    timeLimit: 180, // 3 minutes
    questionCount: 6,
    participants: 98,
    rewardPoints: 150,
    description: "Antimicrobials, cardiovascular agents, and autonomic pharmacology."
  },
  {
    id: "league-anatomy",
    title: "Anatomy & Embryology Grand Prix",
    subject: "Anatomy & Embryology",
    courseId: "anatomy",
    timeLimit: 240, // 4 minutes
    questionCount: 8,
    participants: 236,
    rewardPoints: 250,
    description: "Upper limb, head and neck, conotruncal cardiac anomalies from Snell & Langman."
  },
  {
    id: "battle-paeds",
    title: "Paediatrics & Neonatology Sprint",
    subject: "Paediatrics",
    courseId: "paediatrics",
    timeLimit: 150,
    questionCount: 5,
    participants: 84,
    rewardPoints: 120,
    description: "RDS, nutritional syndromes, and severe falciparum malaria from Coovadia."
  }
]

export default function QuizArenaPage() {
  const [activeChallenge, setActiveChallenge] = useState<ArenaChallenge | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [questions, setQuestions] = useState<MCQQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(120)
  const [isFinished, setIsFinished] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startChallenge = (challenge: ArenaChallenge) => {
    setActiveChallenge(challenge)
    const fetched = getQuestionsByFilter({
      courseId: challenge.courseId,
      count: challenge.questionCount,
      difficulty: "mixed"
    })
    setQuestions(fetched)
    setCurrentIndex(0)
    setSelectedOption(null)
    setRevealed(false)
    setScore(0)
    setTimeLeft(challenge.timeLimit)
    setIsFinished(false)
    setIsPlaying(true)
  }

  // Timer
  useEffect(() => {
    if (!isPlaying || isFinished) return
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          setIsFinished(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, isFinished])

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s.toString().padStart(2, "0")}`
  }

  const handleSelect = (optId: string) => {
    if (revealed) return
    setSelectedOption(optId)
    setRevealed(true)
    const q = questions[currentIndex]
    const opt = q?.options.find(o => o.id === optId)
    if (opt?.is_correct) {
      setScore(s => s + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setIsFinished(true)
    } else {
      setCurrentIndex(i => i + 1)
      setSelectedOption(null)
      setRevealed(false)
    }
  }

  // ═══════════════════════════════════════════════════════════
  // ARENA IN-PROGRESS BATTLE
  // ═══════════════════════════════════════════════════════════
  if (isPlaying && activeChallenge) {
    if (isFinished) {
      const percentage = Math.round((score / Math.max(questions.length, 1)) * 100)
      return (
        <div className="max-w-lg mx-auto py-12 space-y-6">
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
              <Trophy size={32} />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-1">
                Challenge Complete
              </span>
              <h2 className="text-3xl font-display font-bold text-white">{percentage}%</h2>
              <p className="text-xs text-gray-400 mt-1">
                {activeChallenge.title} &bull; Score: {score} of {questions.length}
              </p>
            </div>

            <div className="bg-[#141414] border border-[#222] rounded-xl p-4 grid grid-cols-2 gap-3 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500">Points Earned</span>
                <p className="text-xl font-bold text-white mt-0.5">+{Math.round((score / questions.length) * activeChallenge.rewardPoints)} PTS</p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500">Time Used</span>
                <p className="text-xl font-bold text-brand mt-0.5">{formatTime(activeChallenge.timeLimit - timeLeft)}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => startChallenge(activeChallenge)}
                className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-brand/20"
              >
                <RotateCcw size={14} /> Retry Battle
              </button>
              <button
                onClick={() => {
                  setIsPlaying(false)
                  setActiveChallenge(null)
                }}
                className="flex-1 bg-[#161616] border border-[#242424] hover:bg-[#202020] text-gray-300 hover:text-white font-bold py-3 rounded-xl text-xs transition-colors"
              >
                Return to Arena
              </button>
            </div>
          </div>
        </div>
      )
    }

    const currentQ = questions[currentIndex]

    return (
      <div className="max-w-2xl mx-auto pb-24 space-y-5">
        {/* Top Battle Header */}
        <div className="flex items-center justify-between gap-3 bg-[#0e0e0e] border border-[#1f1f1f] rounded-xl px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(false)}
              className="w-7 h-7 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
            </button>
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-white">{activeChallenge.title}</h2>
              <span className="text-[10px] text-gray-400">Question {currentIndex + 1} of {questions.length}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-md">
              Score: {score}
            </span>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#141414] border border-[#222] text-xs font-bold text-white">
              <Clock size={12} className="text-brand" /> {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        {/* Question Card */}
        {currentQ && (
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-500 pb-2 border-b border-[#181818]">
              <span>{currentQ.section}</span>
              <span>{currentQ.difficulty}</span>
            </div>

            <p className="text-base font-semibold text-white leading-relaxed">
              {currentQ.stem}
            </p>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedOption === opt.id

                let stateClass = "bg-[#141414] border-[#242424] text-gray-300 hover:border-[#444] hover:text-white cursor-pointer"
                if (revealed) {
                  if (opt.is_correct) {
                    stateClass = "bg-brand/10 border-brand/60 text-white font-medium"
                  } else if (isSelected && !opt.is_correct) {
                    stateClass = "bg-red-950/30 border-red-800 text-gray-400"
                  } else {
                    stateClass = "bg-[#111] border-[#1a1a1a] text-gray-600 opacity-50 cursor-default"
                  }
                } else if (isSelected) {
                  stateClass = "bg-[#1a1a1a] border-brand/60 text-white"
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    disabled={revealed}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 disabled:cursor-default ${stateClass}`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                      revealed && opt.is_correct
                        ? "bg-brand text-white"
                        : revealed && isSelected && !opt.is_correct
                        ? "bg-red-800 text-white"
                        : "bg-[#1c1c1c] text-gray-400"
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-xs sm:text-sm flex-1 leading-normal pt-0.5">
                      {opt.text}
                    </span>
                    {revealed && opt.is_correct && (
                      <CheckCircle size={15} className="text-brand flex-shrink-0 mt-0.5" />
                    )}
                    {revealed && isSelected && !opt.is_correct && (
                      <XCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Explanation */}
            {revealed && (
              <div className="bg-[#121212] border border-[#222] rounded-xl p-4 space-y-2 animate-in fade-in duration-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand block">
                  Reference & Rationale
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {currentQ.explanation}
                </p>
                {currentQ.reference && (
                  <p className="text-[10px] text-gray-500 pt-1">
                    {currentQ.reference}
                  </p>
                )}
              </div>
            )}

            {/* Next Button */}
            {revealed && (
              <button
                onClick={handleNext}
                className="w-full bg-brand hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2"
              >
                {currentIndex + 1 >= questions.length ? "View Battle Results" : "Next Question"}
                <ChevronRight size={15} />
              </button>
            )}
          </div>
        )}
      </div>
    )
  }

  // ═══════════════════════════════════════════════════════════
  // ARENA HUB VIEW (No emojis, no AI generic elements, dark theme)
  // ═══════════════════════════════════════════════════════════
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24">
      {/* Top Banner */}
      <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white tracking-tight">Quiz Arena</h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Timed clinical challenges and subject battles. Benchmark your recall and knowledge against peers.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#141414] border border-[#222] px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-300">
            <span className="text-gray-500">Your Current Rank:</span>
            <span className="font-bold text-white ml-1.5">#42</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left 2 Cols: Live Competitions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
              <Swords size={16} className="text-brand" /> Live Competitions
            </h2>
            <span className="text-xs text-gray-500">{ARENA_CHALLENGES.length} Active Events</span>
          </div>

          <div className="space-y-3">
            {ARENA_CHALLENGES.map(challenge => (
              <div
                key={challenge.id}
                className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#333] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="bg-[#161616] text-gray-300 px-2.5 py-0.5 rounded-md font-medium text-[10px] uppercase border border-[#262626]">
                      {challenge.subject}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {Math.floor(challenge.timeLimit / 60)} mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={11} /> {challenge.participants} scholars
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-base group-hover:text-brand transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-[#1a1a1a] pt-3 sm:pt-0 sm:pl-5 flex-shrink-0">
                  <div className="text-left sm:text-right">
                    <span className="text-[9px] uppercase font-bold text-gray-500 block">Reward</span>
                    <span className="text-xs font-bold text-brand">+{challenge.rewardPoints} PTS</span>
                  </div>
                  <button
                    onClick={() => startChallenge(challenge)}
                    className="bg-brand hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-brand/20 flex items-center gap-1.5"
                  >
                    Enter Battle <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Top Scholars Leaderboard */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
              <Trophy size={16} className="text-brand" /> Top Scholars
            </h2>
            <span className="text-xs text-gray-500">Weekly</span>
          </div>

          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-2 divide-y divide-[#161616]">
            {[
              { rank: 1, name: "Dr. T. Chimedza", level: "Part V &bull; Medicine", score: "9,840 PTS" },
              { rank: 2, name: "K. Ndlovu", level: "Part IV &bull; Medicine", score: "9,210 PTS" },
              { rank: 3, name: "F. Mutasa", level: "Part III &bull; BMS", score: "8,750 PTS" },
              { rank: 4, name: "R. Sibanda", level: "Part IV &bull; Pharmacy", score: "8,420 PTS" },
              { rank: 5, name: "S. Marange", level: "Part V &bull; Medicine", score: "8,190 PTS" },
            ].map(scholar => (
              <div key={scholar.rank} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#121212] transition-colors">
                <div className="flex items-center gap-3">
                  <span className={`w-5 text-center font-bold text-xs ${
                    scholar.rank === 1 ? "text-brand" : scholar.rank === 2 ? "text-gray-300" : "text-gray-500"
                  }`}>
                    #{scholar.rank}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#161616] border border-[#242424] flex items-center justify-center text-xs font-bold text-gray-300">
                    {scholar.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{scholar.name}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5" dangerouslySetInnerHTML={{ __html: scholar.level }} />
                  </div>
                </div>
                <span className="text-[11px] font-bold text-gray-300">{scholar.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
