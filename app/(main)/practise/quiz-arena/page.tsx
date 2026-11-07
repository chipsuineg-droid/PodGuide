"use client"
import { useState, useEffect, useRef } from "react"
import {
  Trophy, Clock, Users, Swords, ChevronRight, ArrowLeft,
  CheckCircle, XCircle, RotateCcw, Award, Check, Loader2, Sparkles
} from "lucide-react"
import Link from "next/link"
import { getQuestionsByFilter, MCQQuestion } from "@/lib/data/mcq-bank"
import { createClient } from "@/lib/supabase/client"
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

interface RealScholar {
  user_id: string
  full_name: string | null
  level: string | null
  programme: string | null
  xp: number
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

  // Real Database Leaderboard & User State
  const [scholars, setScholars] = useState<RealScholar[]>([])
  const [currentRank, setCurrentRank] = useState<number | null>(null)
  const [currentUserXP, setCurrentUserXP] = useState<number>(0)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(true)

  // Fetch real students and rankings from Supabase
  useEffect(() => {
    async function loadLeaderboardData() {
      try {
        const supabase = createClient()
        const { data: authData } = await supabase.auth.getUser()
        const user = authData?.user
        if (user) {
          setCurrentUserId(user.id)
        }

        const { data, error } = await supabase
          .from("student_profiles")
          .select("user_id, full_name, level, programme, xp")
          .order("xp", { ascending: false })
          .limit(10)

        if (!error && data) {
          const activeScholars = data.filter(s => (s.xp || 0) > 0)
          setScholars(activeScholars)

          if (user) {
            const userIdx = data.findIndex(s => s.user_id === user.id)
            if (userIdx !== -1) {
              setCurrentRank(userIdx + 1)
              setCurrentUserXP(data[userIdx].xp || 0)
            } else {
              const { data: myProfile } = await supabase
                .from("student_profiles")
                .select("xp")
                .eq("user_id", user.id)
                .maybeSingle()
              if (myProfile) {
                setCurrentUserXP(myProfile.xp || 0)
              }
            }
          }
        }
      } catch (err) {
        console.error("Failed to load real leaderboard:", err)
      } finally {
        setLoadingLeaderboard(false)
      }
    }

    loadLeaderboardData()
  }, [])

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
          handleFinishBattle(score)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, isFinished, score])

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
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(i => i + 1)
      setSelectedOption(null)
      setRevealed(false)
    } else {
      handleFinishBattle(score)
    }
  }

  const handleFinishBattle = async (finalScore: number) => {
    setIsFinished(true)
    if (timerRef.current) clearInterval(timerRef.current)

    // Save earned XP to real database
    if (activeChallenge && currentUserId && finalScore > 0) {
      try {
        const earnedXP = Math.round((finalScore / activeChallenge.questionCount) * activeChallenge.rewardPoints)
        const supabase = createClient()
        const { data: profile } = await supabase
          .from("student_profiles")
          .select("xp")
          .eq("user_id", currentUserId)
          .maybeSingle()
        const newXP = (profile?.xp || 0) + earnedXP
        await supabase
          .from("student_profiles")
          .update({ xp: newXP })
          .eq("user_id", currentUserId)
        setCurrentUserXP(newXP)
        toast.success(`Battle completed! +${earnedXP} XP awarded.`)
      } catch (err) {
        console.error("Failed to update user XP:", err)
      }
    }
  }

  // ═══════════════════════════════════════════════════════════
  // ACTIVE BATTLE / FINISHED VIEW
  // ═══════════════════════════════════════════════════════════
  if (isPlaying && activeChallenge) {
    const currentQ = questions[currentIndex]
    const progress = ((currentIndex + 1) / questions.length) * 100
    const earnedPoints = Math.round((score / questions.length) * activeChallenge.rewardPoints)

    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-24">
        {/* Battle Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current)
              setIsPlaying(false)
            }}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors bg-[#111] border border-[#222] px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft size={13} /> Leave Battle
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400">
              Q{currentIndex + 1}/{questions.length}
            </span>
            <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md border ${
              timeLeft < 30 ? "bg-red-950/40 text-brand border-red-900/50" : "bg-[#141414] text-white border-[#242424]"
            }`}>
              <Clock size={12} className={timeLeft < 30 ? "animate-pulse" : ""} />
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#161616] rounded-full overflow-hidden">
          <div
            className="h-full bg-brand transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Battle Over Card */}
        {isFinished ? (
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-8 sm:p-10 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
              <Trophy size={32} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">Challenge Complete</h2>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                {activeChallenge.title} · {activeChallenge.subject}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              <div className="bg-[#141414] border border-[#222] rounded-xl p-3.5">
                <span className="text-[10px] text-gray-500 uppercase font-bold block">Score</span>
                <span className="text-lg font-bold text-white">{score} / {questions.length}</span>
              </div>
              <div className="bg-[#141414] border border-[#222] rounded-xl p-3.5">
                <span className="text-[10px] text-gray-500 uppercase font-bold block">Accuracy</span>
                <span className="text-lg font-bold text-brand">
                  {Math.round((score / questions.length) * 100)}%
                </span>
              </div>
              <div className="bg-[#141414] border border-[#222] rounded-xl p-3.5">
                <span className="text-[10px] text-gray-500 uppercase font-bold block">Earned</span>
                <span className="text-lg font-bold text-white">+{earnedPoints} XP</span>
              </div>
            </div>

            <div className="flex gap-3 max-w-sm mx-auto pt-2">
              <button
                onClick={() => startChallenge(activeChallenge)}
                className="flex-1 bg-brand hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-md shadow-brand/20 flex items-center justify-center gap-2"
              >
                <RotateCcw size={14} /> Play Again
              </button>
              <button
                onClick={() => setIsPlaying(false)}
                className="flex-1 bg-[#141414] border border-[#242424] hover:bg-[#1a1a1a] text-white font-bold py-3 rounded-xl text-xs transition-colors"
              >
                Back to Arena
              </button>
            </div>
          </div>
        ) : (
          /* Active Question Card */
          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand">
                {currentQ.section || activeChallenge.subject}
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                {currentQ.stem}
              </h2>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedOption === opt.id
                let stateClass = "bg-[#141414] border-[#222] text-gray-300 hover:border-[#333]"

                if (revealed) {
                  if (opt.is_correct) {
                    stateClass = "bg-brand/10 border-brand text-white font-medium"
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
  // ARENA HUB VIEW (Solid dark theme, real leaderboard)
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
            <span className="font-bold text-white ml-1.5">
              {currentRank ? `#${currentRank}` : currentUserXP > 0 ? "Active" : "Unranked"}
            </span>
            <span className="text-brand ml-2 font-bold">{currentUserXP} XP</span>
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

        {/* Right Col: Real Campus Leaderboard */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
              <Trophy size={16} className="text-brand" /> Top Scholars
            </h2>
            <span className="text-xs text-gray-500">Live Campus XP</span>
          </div>

          <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-2 divide-y divide-[#161616]">
            {loadingLeaderboard ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-2">
                <Loader2 size={20} className="animate-spin text-brand" />
                <span className="text-xs text-gray-500">Connecting to campus database...</span>
              </div>
            ) : scholars.length > 0 ? (
              scholars.map((scholar, idx) => (
                <div key={scholar.user_id} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#121212] transition-colors">
                  <div className="flex items-center gap-3">
                    <span className={`w-5 text-center font-bold text-xs ${
                      idx === 0 ? "text-brand" : idx === 1 ? "text-gray-300" : "text-gray-500"
                    }`}>
                      #{idx + 1}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#161616] border border-[#242424] flex items-center justify-center text-xs font-bold text-gray-300">
                      {(scholar.full_name || "Scholar").charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">
                        {scholar.full_name || "Medical Scholar"}
                        {scholar.user_id === currentUserId && (
                          <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded bg-brand/10 text-brand border border-brand/20 font-semibold">
                            You
                          </span>
                        )}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">
                        {scholar.level || "Part III"} · {scholar.programme || "MBChB"}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-300">{(scholar.xp || 0).toLocaleString()} XP</span>
                </div>
              ))
            ) : (
              <div className="p-6 text-center space-y-2">
                <p className="text-xs font-semibold text-gray-300">No ranked scholars yet</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Be the first to complete a quiz or challenge to claim the #1 spot on the campus leaderboard.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
