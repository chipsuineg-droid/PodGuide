"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { CheckCircle, XCircle, ChevronRight, Loader2, RotateCcw, Trophy } from "lucide-react"
import Link from "next/link"

type Option = { id: string; option_text: string; is_correct: boolean; explanation: string }
type Question = { id: string; stem: string; difficulty: string; subject: string; topic: string; explanation: string; question_options: Option[] }

export default function QuestionsPage() {
  const supabase = createClient()
  const [questions, setQuestions] = useState<Question[]>([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("questions")
        .select("*, question_options(*)")
        .eq("status", "approved")
        .limit(10)
      setQuestions((data as Question[]) || [])
      setLoading(false)
    }
    fetch()
  }, [])

  const q = questions[current]

  const handleSelect = async (optId: string) => {
    if (revealed) return
    setSelected(optId)
    setRevealed(true)
    const opt = q.question_options.find(o => o.id === optId)
    const correct = opt?.is_correct ?? false
    if (correct) setScore(s => s + 1)

    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from("question_attempts").insert({
        user_id: user.id,
        question_id: q.id,
        selected_option_id: optId,
        is_correct: correct,
      })
    }
  }

  const next = () => {
    if (current + 1 >= questions.length) { setFinished(true); return }
    setCurrent(c => c + 1)
    setSelected(null)
    setRevealed(false)
  }

  const restart = () => { setCurrent(0); setSelected(null); setRevealed(false); setScore(0); setFinished(false) }

  if (loading) return <div className="flex items-center justify-center h-64"><Loader2 size={32} className="animate-spin text-brand" /></div>

  if (questions.length === 0) return (
    <div className="max-w-2xl mx-auto text-center py-20 space-y-4">
      <p className="text-gray-400">No questions found. Make sure you have run the SQL schema in Supabase.</p>
      <Link href="/practise" className="text-brand hover:text-red-400 text-sm">← Back to Practise</Link>
    </div>
  )

  if (finished) return (
    <div className="max-w-xl mx-auto text-center py-16 space-y-6">
      <Trophy size={64} className="text-brand mx-auto" />
      <h1 className="text-3xl font-display font-bold">Session Complete!</h1>
      <p className="text-gray-400">You scored <span className="text-white font-bold text-2xl">{score}</span> out of <span className="text-white font-bold text-2xl">{questions.length}</span></p>
      <div className="flex gap-3 justify-center">
        <button onClick={restart} className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
          <RotateCcw size={16} /> Try Again
        </button>
        <Link href="/practise" className="flex items-center gap-2 bg-[#111] border border-[#333] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1a1a1a] transition-colors">
          Back to Practise
        </Link>
      </div>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <Link href="/practise" className="text-gray-500 hover:text-white text-sm transition-colors">← Back</Link>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-500">{current + 1} / {questions.length}</span>
          <span className="bg-[#111] border border-[#1f1f1f] px-3 py-1 rounded-full text-xs font-bold">Score: {score}</span>
        </div>
      </div>

      <div className="w-full bg-[#1a1a1a] rounded-full h-1.5">
        <div className="bg-brand h-1.5 rounded-full transition-all duration-500" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex gap-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-1 rounded">{q.subject}</span>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${q.difficulty === "easy" ? "text-green-500 bg-green-500/10" : q.difficulty === "hard" ? "text-brand bg-brand/10" : "text-yellow-500 bg-yellow-500/10"}`}>{q.difficulty}</span>
        </div>
        <p className="text-lg font-semibold text-white leading-relaxed">{q.stem}</p>
        <div className="space-y-3">
          {q.question_options.map((opt, i) => {
            let cls = "bg-[#0a0a0a] border-[#333] text-gray-300 hover:border-brand hover:text-white"
            if (revealed && opt.id === selected && opt.is_correct) cls = "bg-green-500/10 border-green-500 text-white"
            else if (revealed && opt.id === selected && !opt.is_correct) cls = "bg-brand/10 border-brand text-white"
            else if (revealed && opt.is_correct) cls = "bg-green-500/10 border-green-500 text-white"
            else if (revealed) cls = "bg-[#0a0a0a] border-[#222] text-gray-500 opacity-60"
            return (
              <button key={opt.id} onClick={() => handleSelect(opt.id)} disabled={revealed}
                className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center gap-3 ${cls} disabled:cursor-default`}>
                <span className="font-bold text-sm w-5 flex-shrink-0">{String.fromCharCode(65 + i)}.</span>
                <span className="text-sm flex-1">{opt.option_text}</span>
                {revealed && opt.is_correct && <CheckCircle size={18} className="text-green-500 flex-shrink-0" />}
                {revealed && opt.id === selected && !opt.is_correct && <XCircle size={18} className="text-brand flex-shrink-0" />}
              </button>
            )
          })}
        </div>
        {revealed && (
          <div className="bg-[#0a0a0a] border border-[#222] rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Explanation</p>
            <p className="text-sm text-gray-300 leading-relaxed">{q.explanation}</p>
          </div>
        )}
      </div>
      {revealed && (
        <button onClick={next} className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
          {current + 1 >= questions.length ? "See Results" : "Next Question"} <ChevronRight size={18} />
        </button>
      )}
    </div>
  )
}