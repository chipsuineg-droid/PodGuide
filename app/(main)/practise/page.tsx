"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { Brain, Layers, Stethoscope, Trophy, ChevronRight, Loader2, Target, TrendingUp, CheckCircle } from "lucide-react"

export default function PractisePage() {
  const supabase = createClient()
  const [stats, setStats] = useState({ questions: 0, flashcardDecks: 0, attempts: 0, correct: 0 })
  const [recentAttempts, setRecentAttempts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const [qCount, deckCount, attempts] = await Promise.all([
        supabase.from("questions").select("id", { count: "exact", head: true }),
        supabase.from("flashcard_decks").select("id", { count: "exact", head: true }).eq("user_id", user.id),
        supabase.from("question_attempts")
          .select("is_correct, attempted_at, questions(stem)")
          .eq("user_id", user.id)
          .order("attempted_at", { ascending: false })
          .limit(5),
      ])

      const totalAttempts = attempts.data?.length || 0
      const correctAttempts = attempts.data?.filter((a: any) => a.is_correct).length || 0

      setStats({
        questions: qCount.count || 0,
        flashcardDecks: deckCount.count || 0,
        attempts: totalAttempts,
        correct: correctAttempts,
      })
      setRecentAttempts(attempts.data || [])
      setLoading(false)
    }
    load()
  }, [])

  const accuracy = stats.attempts > 0 ? Math.round((stats.correct / stats.attempts) * 100) : 0

  const sections = [
    {
      name: "Question Bank",
      icon: Brain,
      href: "/practise/questions",
      desc: "Filter by subject, topic and difficulty. Practice MCQs with instant feedback.",
      count: `${stats.questions.toLocaleString()} questions`,
      color: "group-hover:text-brand",
      bg: "group-hover:bg-brand/10",
    },
    {
      name: "Flashcards",
      icon: Layers,
      href: "/practise/flashcards",
      desc: "Study your decks using spaced repetition. Create custom decks for any subject.",
      count: `${stats.flashcardDecks} decks`,
      color: "group-hover:text-purple-400",
      bg: "group-hover:bg-purple-500/10",
    },
    {
      name: "Clinical Cases",
      icon: Stethoscope,
      href: "/practise/cases",
      desc: "Work through interactive patient presentations step by step.",
      count: "Coming soon",
      color: "group-hover:text-blue-400",
      bg: "group-hover:bg-blue-500/10",
    },
    {
      name: "Quiz Arena",
      icon: Trophy,
      href: "/practise/quiz-arena",
      desc: "Daily challenges, weekly competitions and subject battles with other students.",
      count: "Coming soon",
      color: "group-hover:text-yellow-400",
      bg: "group-hover:bg-yellow-500/10",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-display font-bold text-white">Practise</h1>
        <p className="text-gray-400 mt-1 text-sm">Test yourself. Identify gaps. Build lasting confidence.</p>
      </div>

      {/* Stats Row */}
      {loading ? (
        <div className="flex items-center gap-2 text-gray-500 text-sm"><Loader2 size={16} className="animate-spin" /> Loading your stats...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Questions Available", value: stats.questions.toLocaleString(), icon: Brain, color: "text-brand" },
            { label: "My Flashcard Decks", value: stats.flashcardDecks, icon: Layers, color: "text-purple-400" },
            { label: "Total Attempts", value: stats.attempts, icon: Target, color: "text-blue-400" },
            { label: "Overall Accuracy", value: `${accuracy}%`, icon: TrendingUp, color: "text-green-400" },
          ].map(s => (
            <div key={s.label} className="bg-[#111] border border-[#1f1f1f] rounded-xl p-4">
              <s.icon size={16} className={`${s.color} mb-2`} />
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Quick Start Banner */}
      <div className="bg-[#0f0a0a] border border-brand/20 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand mb-1">Daily Practice</p>
          <p className="text-white font-semibold">20 questions recommended today</p>
          <p className="text-sm text-gray-400 mt-0.5">Consistent daily practice improves retention by up to 60%.</p>
        </div>
        <Link href="/practise/questions"
          className="flex items-center gap-2 bg-brand text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-red-700 transition-colors flex-shrink-0">
          Start Now <ChevronRight size={16} />
        </Link>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sections.map(s => {
          const Icon = s.icon
          return (
            <Link key={s.name} href={s.href}
              className="bg-[#111] border border-[#1f1f1f] hover:border-[#333] rounded-xl p-6 flex flex-col gap-4 transition-all group">
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center transition-colors ${s.bg}`}>
                  <Icon size={20} className={`text-gray-400 transition-colors ${s.color}`} />
                </div>
                <span className="text-xs text-gray-600">{s.count}</span>
              </div>
              <div>
                <h3 className="font-bold text-white">{s.name}</h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-brand font-semibold mt-auto">
                Open <ChevronRight size={14} />
              </div>
            </Link>
          )
        })}
      </div>

      {/* Recent Attempts */}
      {recentAttempts.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-white mb-3">Recent Activity</h2>
          <div className="bg-[#111] border border-[#1f1f1f] rounded-xl overflow-hidden">
            {recentAttempts.map((a: any, i: number) => (
              <div key={i} className="flex items-start gap-3 px-5 py-3.5 border-b border-[#1a1a1a] last:border-0">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${a.is_correct ? "bg-green-500/10" : "bg-brand/10"}`}>
                  {a.is_correct
                    ? <CheckCircle size={12} className="text-green-400" />
                    : <span className="text-brand text-xs font-bold">✗</span>}
                </div>
                <p className="text-sm text-gray-300 line-clamp-1 flex-1">{a.questions?.stem || "Question"}</p>
                <span className="text-xs text-gray-600 flex-shrink-0">
                  {new Date(a.attempted_at).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
          <Link href="/practise/questions" className="text-xs text-brand hover:text-white transition-colors mt-3 inline-block font-semibold">
            Practice more questions →
          </Link>
        </div>
      )}
    </div>
  )
}