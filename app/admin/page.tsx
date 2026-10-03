"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Users, FileText, Database, Layers, TrendingUp } from "lucide-react"

export default function AdminOverview() {
  const supabase = createClient()
  const [stats, setStats] = useState({ users: 0, materials: 0, questions: 0, groups: 0 })

  useEffect(() => {
    const fetchStats = async () => {
      const [uRes, mRes, qRes, gRes] = await Promise.all([
        supabase.from("student_profiles").select("id", { count: "exact", head: true }),
        supabase.from("materials").select("id", { count: "exact", head: true }),
        supabase.from("questions").select("id", { count: "exact", head: true }),
        supabase.from("groups").select("id", { count: "exact", head: true })
      ])
      setStats({
        users: uRes.count || 0,
        materials: mRes.count || 0,
        questions: qRes.count || 0,
        groups: gRes.count || 0
      })
    }
    fetchStats()
  }, [])

  const cards = [
    { label: "Total Students", value: stats.users, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { label: "Library Materials", value: stats.materials, icon: FileText, color: "text-brand", bg: "bg-brand/10", border: "border-brand/20" },
    { label: "MCQs Bank", value: stats.questions, icon: Database, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
    { label: "Study Groups", value: stats.groups, icon: Layers, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  ]

  return (
    <div className="max-w-6xl space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold">Platform Overview</h1>
        <p className="text-gray-400 mt-1">Real-time analytics and platform metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(c => (
          <div key={c.label} className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${c.bg} ${c.color} border ${c.border}`}>
              <c.icon size={20} />
            </div>
            <p className="text-sm font-semibold text-gray-400">{c.label}</p>
            <p className="text-3xl font-bold text-white mt-1">{c.value.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 text-white">
            <TrendingUp size={20} className="text-brand" />
            <h2 className="font-bold">Recent Activity (Simulated)</h2>
          </div>
          <div className="space-y-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-[#1f1f1f] last:border-0 last:pb-0">
                <div>
                  <p className="text-sm text-white">New user registered</p>
                  <p className="text-xs text-gray-500">Year 3 MBChB Student</p>
                </div>
                <span className="text-xs text-gray-600">{i * 15} mins ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}