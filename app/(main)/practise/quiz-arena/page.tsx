import { Trophy, Clock, Users, Swords, Zap, ChevronRight } from "lucide-react"

export default function QuizArenaPage() {
  const activeQuizzes = [
    { id: "q1", title: "Daily Challenge", subject: "Mixed", time: "10 mins", participants: 42, reward: "50 XP", type: "daily" },
    { id: "q2", title: "Subject Battle", subject: "Pharmacology", time: "20 mins", participants: 128, reward: "200 XP", type: "battle" },
    { id: "q3", title: "Weekend League", subject: "Anatomy", time: "30 mins", participants: 504, reward: "500 XP", type: "league" },
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Quiz Arena</h1>
          <p className="text-gray-400 mt-1">Compete with peers, climb the leaderboard, earn XP.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#111] border border-[#1f1f1f] px-4 py-2 rounded-lg text-sm">
            <span className="text-gray-500">Your Rank:</span> <span className="font-bold text-white ml-1">#42</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Active Competitions */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Swords size={20} className="text-brand" /> Live Competitions
          </h2>
          
          <div className="space-y-4">
            {activeQuizzes.map((quiz) => (
              <div key={quiz.id} className="bg-[#111] border border-[#1f1f1f] hover:border-[#444] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${quiz.type === "daily" ? "bg-blue-500/10 text-blue-500" : quiz.type === "battle" ? "bg-brand/10 text-brand" : "bg-purple-500/10 text-purple-500"}`}>
                    {quiz.type === "daily" ? <Zap size={20} /> : quiz.type === "battle" ? <Swords size={20} /> : <Trophy size={20} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-brand transition-colors">{quiz.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-500">
                      <span className="font-medium text-gray-300">{quiz.subject}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {quiz.time}</span>
                      <span className="flex items-center gap-1"><Users size={12} /> {quiz.participants} players</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-[#1f1f1f] pt-4 sm:pt-0 sm:pl-6 w-full sm:w-auto">
                  <div className="text-center sm:text-right flex-1 sm:flex-none">
                    <p className="text-[10px] uppercase font-bold text-gray-500">Reward</p>
                    <p className="text-brand font-bold">{quiz.reward}</p>
                  </div>
                  <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors flex-shrink-0">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Leaderboard */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Trophy size={20} className="text-brand" /> Top Scholars
          </h2>
          <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-1">
            {[1, 2, 3, 4, 5].map((rank) => (
              <div key={rank} className={`flex items-center justify-between p-3 rounded-lg ${rank === 1 ? "bg-[#1a1a1a] border border-[#2a2a2a]" : "hover:bg-[#1a1a1a] transition-colors"}`}>
                <div className="flex items-center gap-3">
                  <span className={`w-6 text-center font-bold text-sm ${rank === 1 ? "text-yellow-500" : rank === 2 ? "text-gray-400" : rank === 3 ? "text-orange-500" : "text-gray-600"}`}>#{rank}</span>
                  <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-brand text-xs font-bold">
                    S{rank}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Student {rank}</p>
                    <p className="text-[10px] text-gray-500">Medicine &bull; Part V</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-white">{(10000 - rank * 450).toLocaleString()} XP</span>
              </div>
            ))}
            <button className="w-full text-center text-xs text-gray-500 hover:text-white py-3 transition-colors">
              View full leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}