"use client"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Loader2, Upload, Database, CheckCircle } from "lucide-react"
import Papa from "papaparse"

export default function AdminMcqs() {
  const supabase = createClient()
  const [userId, setUserId] = useState<string | null>(null)
  
  const [mcqFile, setMcqFile] = useState<File | null>(null)
  const [mcqLoading, setMcqLoading] = useState(false)
  const [mcqStats, setMcqStats] = useState({ success: 0, errors: 0 })
  const [mcqMessage, setMcqMessage] = useState("")

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id)
    })
  }, [])

  const handleBulkMCQ = () => {
    if (!mcqFile || !userId) return
    setMcqLoading(true); setMcqStats({ success: 0, errors: 0 }); setMcqMessage("")

    Papa.parse(mcqFile, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        let success = 0
        let errors = 0
        
        for (const row of results.data as any[]) {
          try {
            if (!row.stem || !row.correct_option) { errors++; continue }
            
            const { data: qData, error: qErr } = await supabase.from("questions").insert({
              stem: row.stem,
              explanation: row.explanation || "",
              subject: row.subject || "",
              difficulty: row.difficulty || "medium",
              type: "mcq",
              creator_id: userId,
              status: "approved"
            }).select().single()
            
            if (qErr || !qData) { errors++; continue }
            
            const options = []
            if (row.option_a) options.push({ question_id: qData.id, option_text: row.option_a, is_correct: row.correct_option.toLowerCase() === 'a' })
            if (row.option_b) options.push({ question_id: qData.id, option_text: row.option_b, is_correct: row.correct_option.toLowerCase() === 'b' })
            if (row.option_c) options.push({ question_id: qData.id, option_text: row.option_c, is_correct: row.correct_option.toLowerCase() === 'c' })
            if (row.option_d) options.push({ question_id: qData.id, option_text: row.option_d, is_correct: row.correct_option.toLowerCase() === 'd' })
            if (row.option_e) options.push({ question_id: qData.id, option_text: row.option_e, is_correct: row.correct_option.toLowerCase() === 'e' })

            const { error: optErr } = await supabase.from("question_options").insert(options)
            if (optErr) errors++
            else success++
          } catch (e) {
            errors++
          }
        }
        
        setMcqStats({ success, errors })
        setMcqMessage(`Import complete: ${success} added, ${errors} failed.`)
        setMcqLoading(false)
        setMcqFile(null)
      },
      error: () => {
        setMcqMessage("Failed to parse CSV file.")
        setMcqLoading(false)
      }
    })
  }

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">MCQ Database</h1>
        <p className="text-gray-400 mt-1">Bulk import questions from CSV.</p>
      </div>

      <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl p-4">
          <h3 className="text-sm font-bold text-white mb-2">Required CSV Columns:</h3>
          <ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
            <li><code className="text-brand">stem</code> (The question text)</li>
            <li><code className="text-brand">option_a</code>, <code className="text-brand">option_b</code>, <code className="text-brand">option_c</code>, <code className="text-brand">option_d</code>, <code className="text-brand">option_e</code></li>
            <li><code className="text-brand">correct_option</code> (Must be "A", "B", "C", "D", or "E")</li>
            <li><code className="text-brand">subject</code> (e.g. "Anatomy")</li>
            <li><code className="text-brand">difficulty</code> (e.g. "easy", "medium", "hard")</li>
            <li><code className="text-brand">explanation</code> (The answer explanation)</li>
          </ul>
        </div>

        {mcqMessage && (
          <div className={`p-4 border rounded-xl text-sm flex items-center gap-2 ${mcqStats.errors === 0 ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"}`}>
            <CheckCircle size={16}/> {mcqMessage}
          </div>
        )}

        <div className="border-2 border-dashed border-[#333] rounded-xl p-8 text-center hover:bg-[#1a1a1a] transition-colors relative">
          <input type="file" onChange={e => setMcqFile(e.target.files?.[0] || null)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".csv" />
          <Database className="mx-auto text-gray-500 mb-3" size={32} />
          <p className="text-sm font-semibold text-white">{mcqFile ? mcqFile.name : "Click or drag a CSV file to upload"}</p>
        </div>

        <div className="flex justify-end pt-2">
          <button onClick={handleBulkMCQ} disabled={mcqLoading || !mcqFile} className="bg-brand text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition-colors disabled:opacity-50">
            {mcqLoading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />} Import Questions
          </button>
        </div>
      </div>
    </div>
  )
}