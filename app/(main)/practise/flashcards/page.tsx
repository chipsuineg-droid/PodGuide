"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, XCircle, Minus, Trophy } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

const deckData = [
  { id: "1", front: "What is the normal resting heart rate in adults?", back: "60–100 bpm. Bradycardia < 60 bpm. Tachycardia > 100 bpm.", subject: "Physiology" },
  { id: "2", front: "What are the 4 components of Virchow's Triad?", back: "Stasis of blood flow, Endothelial injury, Hypercoagulability. (Note: Virchow's Triad has 3 components, not 4 — this is a trick question!)", subject: "Pathology" },
  { id: "3", front: "What is the mechanism of action of beta-blockers?", back: "Competitive antagonism of β-adrenergic receptors → ↓ HR, ↓ BP, ↓ myocardial contractility.", subject: "Pharmacology" },
  { id: "4", front: "Describe the Frank-Starling Law of the Heart.", back: "Increased venous return → increased end-diastolic volume → increased stroke volume. The heart pumps what it receives.", subject: "Physiology" },
  { id: "5", front: "What electrolyte abnormality causes prolonged QT interval?", back: "Hypocalcaemia, Hypokalaemia, Hypomagnesaemia. Remember: hypO-calcaemia, hypO-kalaemia, hypO-magnesaemia.", subject: "Cardiology" },
]

export default function FlashcardsPage() {
  const supabase = createClient()
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [results, setResults] = useState<Record<string, "correct" | "wrong" | "skip">>({})
  const [finished, setFinished] = useState(false)

  const card = deckData[index]
  const total = deckData.length
  const correct = Object.values(results).filter(r => r === "correct").length

  const handleRate = async (rating: "correct" | "wrong" | "skip") => {
    setResults(r => ({ ...r, [card.id]: rating }))
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const ratingNum = rating === "correct" ? 4 : rating === "skip" ? 2 : 1
      await supabase.from("flashcard_reviews").insert({
        flashcard_id: card.id,
        user_id: user.id,
        rating: ratingNum,
      }).then(() => {})
    }
    if (index + 1 >= total) { setFinished(true); return }
    setIndex(i => i + 1)
    setFlipped(false)
  }

  const restart = () => { setIndex(0); setFlipped(false); setResults({}); setFinished(false) }

  if (finished) return (
    <div className="max-w-xl mx-auto text-center py-16 space-y-6">
      <Trophy size={64} className="text-brand mx-auto" />
      <h1 className="text-3xl font-display font-bold">Deck Complete!</h1>
      <p className="text-gray-400">You got <span className="text-white font-bold text-2xl">{correct}</span> out of <span className="text-white font-bold text-2xl">{total}</span> correct</p>
      <div className="flex gap-3 justify-center">
        <button onClick={restart} className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
          <RotateCcw size={16} /> Start Over
        </button>
        <Link href="/practise" className="flex items-center gap-2 bg-[#111] border border-[#333] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1a1a1a] transition-colors">
          Back to Practise
        </Link>
      </div>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <Link href="/practise" className="text-gray-500 hover:text-white text-sm transition-colors">← Back</Link>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-green-500 font-bold">{Object.values(results).filter(r=>r==="correct").length} ✓</span>
          <span className="text-brand font-bold">{Object.values(results).filter(r=>r==="wrong").length} ✗</span>
          <span className="text-gray-500">{index + 1}/{total}</span>
        </div>
      </div>

      <div className="w-full bg-[#1a1a1a] rounded-full h-1.5">
        <div className="bg-brand h-1.5 rounded-full transition-all duration-500" style={{ width: `${((index) / total) * 100}%` }} />
      </div>

      <div className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">{card.subject}</div>

      {/* Flip Card */}
      <div onClick={() => setFlipped(f => !f)} className="cursor-pointer select-none" style={{ perspective: "1000px" }}>
        <div className="relative w-full transition-transform duration-500" style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", height: "280px" }}>
          {/* Front */}
          <div className="absolute inset-0 bg-[#111] border border-[#1f1f1f] rounded-2xl flex flex-col items-center justify-center p-8 text-center" style={{ backfaceVisibility: "hidden" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Question</p>
            <p className="text-xl font-semibold text-white leading-relaxed">{card.front}</p>
            <p className="text-xs text-gray-600 mt-6">Tap to reveal answer</p>
          </div>
          {/* Back */}
          <div className="absolute inset-0 bg-[#0f0a0a] border border-brand/30 rounded-2xl flex flex-col items-center justify-center p-8 text-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Answer</p>
            <p className="text-base text-white leading-relaxed">{card.back}</p>
          </div>
        </div>
      </div>

      {flipped ? (
        <div className="grid grid-cols-3 gap-3">
          <button onClick={() => handleRate("wrong")}
            className="flex flex-col items-center gap-2 bg-brand/10 border border-brand/30 hover:bg-brand/20 text-brand py-4 rounded-xl transition-colors font-bold">
            <XCircle size={24} /> <span className="text-xs">Didn&apos;t know</span>
          </button>
          <button onClick={() => handleRate("skip")}
            className="flex flex-col items-center gap-2 bg-[#111] border border-[#333] hover:bg-[#1a1a1a] text-gray-400 py-4 rounded-xl transition-colors font-bold">
            <Minus size={24} /> <span className="text-xs">Unsure</span>
          </button>
          <button onClick={() => handleRate("correct")}
            className="flex flex-col items-center gap-2 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-500 py-4 rounded-xl transition-colors font-bold">
            <CheckCircle size={24} /> <span className="text-xs">Got it!</span>
          </button>
        </div>
      ) : (
        <p className="text-center text-xs text-gray-600">Rate yourself after flipping the card</p>
      )}

      <div className="flex justify-between">
        <button onClick={() => { if(index > 0) { setIndex(i => i-1); setFlipped(false) }}} disabled={index === 0}
          className="p-2 text-gray-500 hover:text-white disabled:opacity-30 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => { if(index+1 < total) { setIndex(i => i+1); setFlipped(false) }}} disabled={index+1 >= total}
          className="p-2 text-gray-500 hover:text-white disabled:opacity-30 transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}