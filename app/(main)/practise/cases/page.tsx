import { Stethoscope, Clock, CheckCircle } from "lucide-react"

export default function ClinicalCasesPage() {
  const cases = [
    { id: "c1", title: "A 45-year-old with crushing chest pain", speciality: "Cardiology", difficulty: "Hard", completed: false, time: "15 mins" },
    { id: "c2", title: "A 22-year-old with acute right iliac fossa pain", speciality: "Surgery", difficulty: "Medium", completed: true, time: "10 mins" },
    { id: "c3", title: "A 6-month-old with a barking cough", speciality: "Paediatrics", difficulty: "Easy", completed: false, time: "5 mins" },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-display font-bold">Clinical Cases</h1>
        <p className="text-gray-400 mt-1">Interactive patient scenarios. Take the history, examine, and diagnose.</p>
      </div>

      <div className="space-y-4">
        {cases.map((c) => (
          <div key={c.id} className="bg-[#111] border border-[#1f1f1f] hover:border-[#444] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all group">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.completed ? "bg-green-900/20 text-green-500" : "bg-[#1a1a1a] text-gray-400 group-hover:bg-brand/10 group-hover:text-brand"} transition-colors`}>
                <Stethoscope size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg group-hover:text-brand transition-colors">{c.title}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs">
                  <span className="bg-[#1a1a1a] text-gray-300 px-2 py-0.5 rounded border border-[#2a2a2a]">{c.speciality}</span>
                  <span className={`px-2 py-0.5 rounded border font-medium ${c.difficulty === "Hard" ? "bg-brand/10 border-brand/30 text-brand" : c.difficulty === "Medium" ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-500" : "bg-green-500/10 border-green-500/30 text-green-500"}`}>
                    {c.difficulty}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1"><Clock size={12} /> {c.time}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full sm:w-auto bg-white text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
              {c.completed ? "Review Case" : "Start Case"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}