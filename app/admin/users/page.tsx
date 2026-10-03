"use client"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Search, MoreHorizontal, UserCheck, UserX, Loader2 } from "lucide-react"

export default function AdminUsers() {
  const supabase = createClient()
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase.from("student_profiles").select("*").order("created_at", { ascending: false })
      setUsers(data || [])
      setLoading(false)
    }
    fetchUsers()
  }, [])

  const filtered = users.filter(u => u.full_name?.toLowerCase().includes(search.toLowerCase()) || u.programme?.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="max-w-6xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">User Management</h1>
          <p className="text-gray-400 mt-1">View and manage all registered students.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users..."
            className="w-full bg-[#111] border border-[#333] focus:border-brand rounded-xl py-2.5 pl-10 pr-4 text-sm text-white outline-none transition-colors" />
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0a0a0a] border-b border-[#1f1f1f]">
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Student</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Programme</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Level</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f1f]">
              {loading ? (
                <tr><td colSpan={5} className="p-8 text-center"><Loader2 size={24} className="animate-spin text-brand mx-auto"/></td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={5} className="p-8 text-center text-gray-500">No users found.</td></tr>
              ) : (
                filtered.map(u => (
                  <tr key={u.id} className="hover:bg-[#1a1a1a] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center font-bold text-xs text-white">{u.full_name?.[0] || "?"}</div>
                        <div className="font-semibold text-sm text-white">{u.full_name || "Unknown"}</div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-300">{u.programme || "Not set"}</td>
                    <td className="p-4 text-sm text-gray-400">{u.level || "Not set"}</td>
                    <td className="p-4">
                      {u.is_admin ? (
                        <span className="bg-brand/10 text-brand border border-brand/30 px-2 py-1 rounded text-xs font-bold">Admin</span>
                      ) : (
                        <span className="bg-green-500/10 text-green-500 border border-green-500/30 px-2 py-1 rounded text-xs font-bold">Active</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <button className="p-2 text-gray-500 hover:text-white transition-colors"><MoreHorizontal size={16} /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}