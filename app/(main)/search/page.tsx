"use client"
import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const results = [
    { title: "Acute Kidney Injury", type: "Notebook", href: "/learn/notebooks/nb1" },
    { title: "ECG Interpretation", type: "Flashcard Deck", href: "/practise/flashcards" },
    { title: "Cardiology MCQs", type: "Questions", href: "/practise/questions" },
  ].filter(r => !query || r.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-3xl font-display font-bold">Search</h1>
        <p className="text-gray-400 mt-1">Find questions, notebooks, resources and more.</p>
      </div>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} autoFocus
          placeholder="Search across PodGuide..." 
          className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl py-3 pl-12 pr-4 text-white outline-none transition-colors" />
      </div>
      {query && (
        <div className="space-y-2">
          {results.length === 0 && <p className="text-gray-500 text-sm text-center py-8">No results for &ldquo;{query}&rdquo;</p>}
          {results.map(r => (
            <Link key={r.title} href={r.href}
              className="flex items-center justify-between bg-[#111] border border-[#1f1f1f] hover:border-brand rounded-xl px-5 py-4 transition-all group">
              <div>
                <p className="font-semibold text-white group-hover:text-brand transition-colors">{r.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{r.type}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}