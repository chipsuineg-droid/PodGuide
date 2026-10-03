"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Rocket, Target, Trophy, TrendingUp, CheckCircle, ExternalLink, Loader2, Flame, BookOpen, Brain } from "lucide-react"
import Link from "next/link"

type Attempt = { is_correct: boolean; attempted_at: string }
type Review = { rating: number; reviewed_at: string }

const opportunities = [
  {
    title: "Elton John AIDS Foundation — Student Research Grant",
    org: "EJAF Global",
    type: "Research",
    description: "Open to medical students researching HIV/AIDS, sexual health, or infectious disease in sub-Saharan Africa.",
    deadline: "31 Oct 2026",
    url: "https://www.ejaf.com",
    tags: ["HIV", "Research", "Africa"],
  },
  {
    title: "WHO AFRO Internship Programme",
    org: "World Health Organization",
    type: "Internship",
    description: "6-month global health internship with the WHO Africa Regional Office. Open to penultimate and final year health science students.",
    deadline: "15 Nov 2026",
    url: "https://www.who.int/careers/internships",
    tags: ["Global Health", "Policy"],
  },
  {
    title: "Africa Health Sciences Student Congress",
    org: "AHSSC",
    type: "Conference",
    description: "Annual academic conference for health science students across Africa. Present research, attend workshops, and network.",
    deadline: "30 Sep 2026",
    url: "#",
    tags: ["Conference", "Research", "Networking"],
  },
  {
    title: "MSF Field Medicine Online Course",
    org: "Médecins Sans Frontières",
    type: "Course",
    description: "Free online course on humanitarian medicine, field surgery, and emergency response. Certificate upon completion.",
    deadline: "Open enrollment",
    url: "https://www.msf.org/resources/elearning",
    tags: ["Humanitarian", "Emergency", "Free"],
  },
  {
    title: "Commonwealth Medical Fellowship",
    org: "Commonwealth Scholarship Commission",
    type: "Fellowship",
    description: "Funded fellowship for final-year and postgraduate students to train at a Commonwealth institution for 6–12 months.",
    deadline: "28 Feb 2027",
    url: "https://www.hcuk.ac.uk/csc",
    tags: ["Fellowship", "Funded", "Training"],
  },
  {
    title: "Google.org Health Innovation Award",
    org: "Google.org",
    type: "Award",
    description: "For student-led health tech projects addressing healthcare access gaps in low- and middle-income countries.",
    deadline: "1 Dec 2026",
    url: "https://www.google.org",
    tags: ["HealthTech", "Innovation", "Award"],
  },
]

const typeColors: Record<string, string> = {
  Research: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Internship: "bg-green-500/10 text-green-400 border-green-500/20",
  Conference: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Course: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Fellowship: "bg-brand/10 text-brand border-brand/20",
  Award: "bg-orange-500/10 text-orange-400 border-orange-500/20",
}

export default function GrowPage() {
  const supabase = createClient()
  const [stats, setStats] = useState({ streak: 0, totalQ: 0, correct: 0, flashcardReviews: 0 })
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const [attempts, reviews] = await Promise.all([
        supabase.from("question_attempts").select("is_correct, attempted_at").eq("user_id", user.id),
        supabase.from("flashcard_reviews").select("rating, reviewed_at").eq("user_id", user.id),
      ])

      const att: Attempt[] = attempts.data || []
      const rev: Review[] = reviews.data || []
      const correct = att.filter(a => a.is_correct).length

      // Calculate streak
      const today = new Date()
      let streak = 0
      const dates = new Set(att.map(a => new Date(a.attempted_at).toDateString()))
      for (let i = 0; i < 30; i++) {
        const d = new Date(today)
        d.setDate(d.getDate() - i)
        if (dates.has(d.toDateString())) streak++
        else if (i > 0) break
      }

      setStats({ streak, totalQ: att.length, correct, flashcardReviews: rev.length })
      setLoading(false)
    }
    load()
  }, [])

  const accuracy = stats.totalQ > 0 ? Math.round((stats.correct / stats.totalQ) * 100) : 0
  const types = ["All", ...Array.from(new Set(opportunities.map(o => o.type)))]
  const filtered = filter === "All" ? opportunities : opportunities.filter(o => o.type === filter)

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-12">
      <div>
        <h1 className="text-3xl font-display font-bold text-white">Grow</h1>
        <p className="text-gray-400 mt-1 text-sm">Track your progress and discover opportunities.</p>
      </div>

      {/* Progress Stats */}
      <div>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Your Progress</h2>
        {loading ? (
          <div className="flex items-center gap-2 text-gray-500 text-sm"><Loader2 size={16} className="animate-spin" /> Loading...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Study Streak", value: `${stats.streak} days`, icon: Flame, color: "text-brand" },
              { label: "Questions Attempted", value: stats.totalQ, icon: Brain, color: "text-blue-400" },
              { label: "Accuracy", value: `${accuracy}%`, icon: Target, color: "text-green-400" },
              { label: "Flashcard Reviews", value: stats.flashcardReviews, icon: BookOpen, color: "text-purple-400" },
            ].map(s => (
              <div key={s.label} className="bg-[#111] border border-[#1f1f1f] rounded-xl p-4">
                <s.icon size={16} className={`${s.color} mb-2`} />
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: "First Question", icon: "🎯", earned: stats.totalQ >= 1, desc: "Answer your first question" },
            { name: "10 Questions", icon: "🔟", earned: stats.totalQ >= 10, desc: "Complete 10 questions" },
            { name: "First Review", icon: "🃏", earned: stats.flashcardReviews >= 1, desc: "Review your first flashcard" },
            { name: "3-Day Streak", icon: "🔥", earned: stats.streak >= 3, desc: "Study 3 days in a row" },
            { name: "50% Accuracy", icon: "📊", earned: accuracy >= 50 && stats.totalQ >= 5, desc: "Hit 50% accuracy" },
            { name: "Scholar", icon: "🎓", earned: stats.totalQ >= 100, desc: "Answer 100 questions" },
            { name: "Week Streak", icon: "⚡", earned: stats.streak >= 7, desc: "7-day study streak" },
            { name: "Top Performer", icon: "🏆", earned: accuracy >= 80 && stats.totalQ >= 20, desc: "80%+ accuracy on 20+ questions" },
          ].map(a => (
            <div key={a.name}
              className={`rounded-xl p-4 text-center border transition-all ${a.earned ? "bg-[#111] border-brand/20" : "bg-[#0a0a0a] border-[#1a1a1a] opacity-40"}`}>
              <div className="text-3xl mb-2">{a.icon}</div>
              <p className={`text-xs font-bold ${a.earned ? "text-white" : "text-gray-600"}`}>{a.name}</p>
              <p className="text-[10px] text-gray-600 mt-0.5">{a.desc}</p>
              {a.earned && <CheckCircle size={12} className="text-green-400 mx-auto mt-2" />}
            </div>
          ))}
        </div>
      </div>

      {/* Opportunities Board */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
            <Rocket size={14} className="text-brand" /> Opportunities Board
          </h2>
          <div className="flex gap-2 flex-wrap">
            {types.map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${filter === t ? "bg-brand text-white border-brand" : "bg-[#111] text-gray-400 border-[#333] hover:text-white"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(opp => (
            <div key={opp.title} className="bg-[#111] border border-[#1f1f1f] hover:border-[#333] rounded-xl p-5 flex flex-col transition-all">
              <div className="flex items-start justify-between mb-3 gap-2">
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${typeColors[opp.type] || "bg-gray-500/10 text-gray-400 border-gray-500/20"}`}>
                  {opp.type}
                </span>
                <div className="flex gap-1 flex-wrap justify-end">
                  {opp.tags.map(t => (
                    <span key={t} className="text-[9px] bg-[#1a1a1a] text-gray-500 px-1.5 py-0.5 rounded border border-[#2a2a2a]">{t}</span>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-white text-sm leading-snug mb-1">{opp.title}</h3>
              <p className="text-xs text-brand font-semibold mb-2">{opp.org}</p>
              <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1">{opp.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-[#1a1a1a]">
                <p className="text-xs text-gray-500">Deadline: <span className="text-gray-300 font-semibold">{opp.deadline}</span></p>
                <a href={opp.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-white hover:text-brand transition-colors">
                  Apply <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}