"use client"
import { useState } from "react"
import {
  Users, Shield, BookOpen, Brain, ShoppingBag, HardDrive,
  Trash2, Edit3, Plus, Search, Check, X, Award,
  ChevronRight, Eye, Loader2
} from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

interface Profile {
  id: string
  user_id: string
  full_name: string
  programme?: string
  level?: string
  program_id?: string
  academic_level?: string
  is_admin: boolean
  is_mentor: boolean
  study_streak: number
  xp: number
  created_at: string
}

interface ModuleItem {
  id: string
  code: string
  title: string
  description: string
  icon: string
  credits: number
  program_modules?: Array<{ program_id: string; academic_level: string }>
}

interface QuestionItem {
  id: string
  stem: string
  difficulty: string
  status: string
  created_at: string
}

interface AdminDashboardProps {
  initialProfiles: Profile[]
  initialModules: ModuleItem[]
  initialQuestions: QuestionItem[]
  currentAdminId: string
  currentAdminName: string
  onSwitchToStudentView: () => void
}

type TabId = "overview" | "users" | "wards" | "quizzes" | "store" | "library"

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "users", label: "Users & Staff" },
  { id: "wards", label: "Wards & Rotations" },
  { id: "quizzes", label: "Quizzes & MCQs" },
  { id: "store", label: "MedStore" },
  { id: "library", label: "Library" },
]

export function IntegratedAdminDashboard({
  initialProfiles,
  initialModules,
  initialQuestions,
  currentAdminId,
  currentAdminName,
  onSwitchToStudentView
}: AdminDashboardProps) {
  const [tab, setTab] = useState<TabId>("overview")
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles)
  const [modules, setModules] = useState<ModuleItem[]>(initialModules)
  const [questions, setQuestions] = useState<QuestionItem[]>(initialQuestions)

  // User Manager
  const [userSearch, setUserSearch] = useState("")
  const [userFilter, setUserFilter] = useState<"all" | "students" | "mentors" | "admins">("all")
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null)
  const [editName, setEditName] = useState("")
  const [editProgram, setEditProgram] = useState("")
  const [editLevel, setEditLevel] = useState("")
  const [savingUser, setSavingUser] = useState(false)

  // Ward Creator
  const [showWardModal, setShowWardModal] = useState(false)
  const [wardCode, setWardCode] = useState("")
  const [wardTitle, setWardTitle] = useState("")
  const [wardDesc, setWardDesc] = useState("")
  const [wardIcon, setWardIcon] = useState("🏥")
  const [wardProgram, setWardProgram] = useState("medicine")
  const [wardLevel, setWardLevel] = useState("Year 4")
  const [wardCredits, setWardCredits] = useState(15)
  const [creatingWard, setCreatingWard] = useState(false)

  // Quiz Creator
  const [showQuizModal, setShowQuizModal] = useState(false)
  const [qStem, setQStem] = useState("")
  const [qExplanation, setQExplanation] = useState("")
  const [qDifficulty, setQDifficulty] = useState("medium")
  const [optA, setOptA] = useState("")
  const [optB, setOptB] = useState("")
  const [optC, setOptC] = useState("")
  const [optD, setOptD] = useState("")
  const [correctOpt, setCorrectOpt] = useState<number>(0)
  const [creatingQuiz, setCreatingQuiz] = useState(false)

  // Store Modal (placeholder)
  const [showStoreModal, setShowStoreModal] = useState(false)

  // ── USER ACTIONS ──
  const handleToggleRole = async (targetUserId: string, field: "is_admin" | "is_mentor", currentValue: boolean) => {
    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "toggle_role", payload: { targetUserId, field, value: !currentValue } })
      })
      const data = await res.json()
      if (res.ok) {
        setProfiles(prev => prev.map(p => p.user_id === targetUserId ? { ...p, [field]: !currentValue } : p))
        toast.success(`Role updated: ${field}`)
      } else {
        toast.error(data.error || "Failed to update role")
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const handleDeleteUser = async (targetUserId: string, name: string) => {
    if (!confirm(`Permanently delete ${name}? This cannot be undone.`)) return
    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_user", payload: { targetUserId } })
      })
      const data = await res.json()
      if (res.ok) {
        setProfiles(prev => prev.filter(p => p.user_id !== targetUserId))
        toast.success(`${name} deleted`)
      } else {
        toast.error(data.error || "Failed to delete user")
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingProfile) return
    setSavingUser(true)
    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update_user",
          payload: {
            targetUserId: editingProfile.user_id,
            updates: { full_name: editName.trim(), program_id: editProgram, academic_level: editLevel }
          }
        })
      })
      const data = await res.json()
      if (res.ok) {
        setProfiles(prev => prev.map(p => p.user_id === editingProfile.user_id
          ? { ...p, full_name: editName.trim(), program_id: editProgram, academic_level: editLevel }
          : p
        ))
        toast.success("Profile updated")
        setEditingProfile(null)
      } else {
        toast.error(data.error || "Failed to update profile")
      }
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setSavingUser(false)
    }
  }

  // ── WARD ACTIONS ──
  const handleCreateWard = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!wardCode.trim() || !wardTitle.trim()) {
      toast.error("Ward code and title are required")
      return
    }
    setCreatingWard(true)
    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create_ward",
          payload: {
            code: wardCode.trim(), title: wardTitle.trim(), description: wardDesc.trim(),
            icon: wardIcon, credits: wardCredits, program_id: wardProgram, academic_level: wardLevel
          }
        })
      })
      const data = await res.json()
      if (res.ok && data.module) {
        setModules(prev => [data.module, ...prev])
        toast.success(`Ward ${data.module.code} published`)
        setShowWardModal(false)
        setWardCode(""); setWardTitle(""); setWardDesc("")
      } else {
        toast.error(data.error || "Failed to create ward")
      }
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setCreatingWard(false)
    }
  }

  const handleDeleteWard = async (moduleId: string, code: string) => {
    if (!confirm(`Delete module ${code}?`)) return
    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_ward", payload: { moduleId } })
      })
      if (res.ok) {
        setModules(prev => prev.filter(m => m.id !== moduleId))
        toast.success(`${code} deleted`)
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  // ── QUIZ ACTIONS ──
  const handleCreateQuiz = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!qStem.trim() || !optA.trim() || !optB.trim()) {
      toast.error("Provide a stem and at least 2 options")
      return
    }
    setCreatingQuiz(true)
    const options = [
      { text: optA, is_correct: correctOpt === 0 },
      { text: optB, is_correct: correctOpt === 1 },
      { text: optC, is_correct: correctOpt === 2 },
      { text: optD, is_correct: correctOpt === 3 },
    ].filter(o => o.text.trim())
    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create_question",
          payload: { stem: qStem.trim(), explanation: qExplanation.trim(), difficulty: qDifficulty, options }
        })
      })
      const data = await res.json()
      if (res.ok && data.question) {
        setQuestions(prev => [data.question, ...prev])
        toast.success("MCQ published to student bank")
        setShowQuizModal(false)
        setQStem(""); setQExplanation(""); setOptA(""); setOptB(""); setOptC(""); setOptD("")
      } else {
        toast.error(data.error || "Failed to add question")
      }
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setCreatingQuiz(false)
    }
  }

  const handleDeleteQuestion = async (questionId: string) => {
    if (!confirm("Remove this question from the bank?")) return
    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_question", payload: { questionId } })
      })
      if (res.ok) {
        setQuestions(prev => prev.filter(q => q.id !== questionId))
        toast.success("Question removed")
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const filteredProfiles = profiles.filter(p => {
    const matchSearch =
      userSearch === "" ||
      p.full_name?.toLowerCase().includes(userSearch.toLowerCase()) ||
      p.program_id?.toLowerCase().includes(userSearch.toLowerCase()) ||
      p.academic_level?.toLowerCase().includes(userSearch.toLowerCase())
    if (userFilter === "admins") return matchSearch && p.is_admin
    if (userFilter === "mentors") return matchSearch && p.is_mentor
    if (userFilter === "students") return matchSearch && !p.is_admin
    return matchSearch
  })

  // ── INPUT CLASS ──
  const inputCls = "w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"

  return (
    <div className="max-w-7xl mx-auto pb-24 space-y-0">

      {/* ── COMMAND CENTER HEADER ── */}
      <div className="border-b border-[#1a1a1a] pb-7 mb-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-px h-5 bg-brand" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">
                Master Administrator
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
              COMMAND<span className="text-brand">.</span>
            </h1>
            <p className="text-xs text-gray-500 max-w-lg leading-relaxed">
              Logged in as <span className="text-white font-bold">{currentAdminName}</span>.
              Full clearance — manage users, curriculum, quizzes, store, and library.
            </p>
          </div>
          <button
            onClick={onSwitchToStudentView}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2.5 bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#2b2b2b] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-all"
          >
            <Eye size={13} className="text-brand" /> Preview Student View
          </button>
        </div>
      </div>

      {/* ── NAV TABS ── */}
      <div className="flex border-b border-[#1a1a1a] overflow-x-auto gap-0">
        {TABS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`relative px-5 py-4 text-xs font-bold transition-all whitespace-nowrap ${
              tab === item.id
                ? "text-white"
                : "text-gray-600 hover:text-gray-300"
            }`}
          >
            {item.label}
            {tab === item.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand" />
            )}
            {item.id === "users" && tab !== "users" && (
              <span className="ml-1.5 text-[10px] text-gray-700">({profiles.length})</span>
            )}
            {item.id === "wards" && tab !== "wards" && (
              <span className="ml-1.5 text-[10px] text-gray-700">({modules.length})</span>
            )}
            {item.id === "quizzes" && tab !== "quizzes" && (
              <span className="ml-1.5 text-[10px] text-gray-700">({questions.length})</span>
            )}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW TAB ── */}
      {tab === "overview" && (
        <div className="pt-7 space-y-6">
          {/* Metric Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1a1a1a]">
            {[
              {
                label: "Registered Users",
                value: profiles.length,
                sub: `${profiles.filter(p => p.is_admin).length} admins · ${profiles.filter(p => p.is_mentor).length} mentors`
              },
              {
                label: "Curriculum Modules",
                value: modules.length,
                sub: "BMS, Medicine, Pharmacy, Nursing"
              },
              {
                label: "Question Bank",
                value: questions.length,
                sub: "Practice MCQs"
              },
              {
                label: "System Status",
                value: "Live",
                sub: "Route guards active"
              },
            ].map(m => (
              <div key={m.label} className="bg-[#0a0a0a] p-6 space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">{m.label}</p>
                <p className="text-3xl font-black text-white">{m.value}</p>
                <p className="text-[11px] text-gray-500">{m.sub}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">Quick Actions</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  onClick: () => { setTab("wards"); setShowWardModal(true) },
                  title: "Add Clinical Ward",
                  sub: "Publish a new hospital rotation to the curriculum engine.",
                  icon: "🏥"
                },
                {
                  onClick: () => { setTab("quizzes"); setShowQuizModal(true) },
                  title: "Add MCQ Question",
                  sub: "Insert a multiple-choice question into the student practice bank.",
                  icon: "🧠"
                },
                {
                  onClick: () => setTab("store"),
                  title: "Manage MedStore",
                  sub: "Add, remove, or configure TANC merchandise and scrub collections.",
                  icon: "🛍️"
                },
              ].map(action => (
                <button
                  key={action.title}
                  onClick={action.onClick}
                  className="text-left bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#2b2b2b] rounded-2xl p-5 transition-all group"
                >
                  <div className="text-2xl mb-3">{action.icon}</div>
                  <p className="text-sm font-bold text-white group-hover:text-brand transition-colors">{action.title}</p>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{action.sub}</p>
                  <div className="mt-4 flex items-center gap-1 text-[10px] text-brand font-bold uppercase tracking-wider">
                    Open <ChevronRight size={11} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── USERS TAB ── */}
      {tab === "users" && (
        <div className="pt-7 space-y-5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                placeholder="Search by name, programme, or level…"
                value={userSearch}
                onChange={e => setUserSearch(e.target.value)}
                className="w-full bg-[#0d0d0d] border border-[#1a1a1a] focus:border-[#333] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"
              />
            </div>
            <div className="flex gap-1.5">
              {(["all", "students", "mentors", "admins"] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setUserFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all border ${
                    userFilter === f
                      ? "bg-brand text-white border-brand"
                      : "bg-[#0d0d0d] text-gray-500 border-[#1a1a1a] hover:text-white hover:border-[#2b2b2b]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#0d0d0d] border-b border-[#1a1a1a]">
                    {["User", "Programme & Level", "Role", "Activity", "Actions"].map(h => (
                      <th key={h} className="py-3.5 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#111]">
                  {filteredProfiles.map(p => (
                    <tr key={p.id} className="hover:bg-[#0d0d0d] transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand/15 border border-brand/20 text-brand font-black text-xs flex items-center justify-center flex-shrink-0">
                            {p.full_name?.[0]?.toUpperCase() || "U"}
                          </div>
                          <div>
                            <p className="font-bold text-white">{p.full_name || "Anonymous"}</p>
                            <p className="text-[10px] text-gray-700 font-mono">{p.user_id.substring(0, 12)}…</p>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <p className="text-gray-300 font-medium">
                          {p.program_id?.toUpperCase() || p.programme || "—"}
                        </p>
                        <p className="text-[10px] text-gray-600">
                          {p.academic_level || p.level || "Not onboarded"}
                        </p>
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {p.is_admin ? (
                            <span className="text-[10px] font-bold uppercase text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-sm">
                              Admin
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold uppercase text-gray-500 bg-[#111] border border-[#1f1f1f] px-2 py-0.5 rounded-sm">
                              Student
                            </span>
                          )}
                          {p.is_mentor && (
                            <span className="text-[10px] font-bold uppercase text-gray-300 bg-[#111] border border-[#2b2b2b] px-2 py-0.5 rounded-sm">
                              Mentor
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <p className="text-gray-300">{p.study_streak || 0}d streak</p>
                        <p className="text-[10px] text-gray-600">{(p.xp || 0).toLocaleString()} XP</p>
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1.5 justify-end">
                          <button
                            onClick={() => { setEditingProfile(p); setEditName(p.full_name || ""); setEditProgram(p.program_id || "medicine"); setEditLevel(p.academic_level || "Year 4") }}
                            className="p-1.5 rounded-lg bg-[#111] border border-[#1f1f1f] text-gray-500 hover:text-white hover:border-[#333] transition-all"
                            title="Edit Profile"
                          >
                            <Edit3 size={12} />
                          </button>

                          <button
                            onClick={() => handleToggleRole(p.user_id, "is_admin", p.is_admin)}
                            className={`p-1.5 rounded-lg border transition-all ${
                              p.is_admin
                                ? "bg-brand/10 border-brand/20 text-brand"
                                : "bg-[#111] border-[#1f1f1f] text-gray-500 hover:text-white hover:border-[#333]"
                            }`}
                            title={p.is_admin ? "Revoke Admin" : "Promote to Admin"}
                          >
                            <Shield size={12} />
                          </button>

                          <button
                            onClick={() => handleToggleRole(p.user_id, "is_mentor", p.is_mentor)}
                            className={`p-1.5 rounded-lg border transition-all ${
                              p.is_mentor
                                ? "bg-white/10 border-white/20 text-white"
                                : "bg-[#111] border-[#1f1f1f] text-gray-500 hover:text-white hover:border-[#333]"
                            }`}
                            title={p.is_mentor ? "Remove Mentor" : "Grant Mentor"}
                          >
                            <Award size={12} />
                          </button>

                          <button
                            onClick={() => handleDeleteUser(p.user_id, p.full_name || "this user")}
                            className="p-1.5 rounded-lg bg-brand/5 border border-brand/10 text-brand/60 hover:bg-brand/15 hover:border-brand/30 hover:text-brand transition-all"
                            title="Delete User"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredProfiles.length === 0 && (
                <div className="text-center py-12 text-gray-600 text-xs">
                  No users match the current filter.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── WARDS TAB ── */}
      {tab === "wards" && (
        <div className="pt-7 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-white">Curriculum Wards & Rotations</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                These modules dynamically populate on student dashboards by programme and year.
              </p>
            </div>
            <button
              onClick={() => setShowWardModal(true)}
              className="px-4 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5"
            >
              <Plus size={13} /> Add Ward
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {modules.map(mod => (
              <div
                key={mod.id}
                className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#2b2b2b] rounded-2xl p-5 flex flex-col justify-between transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-2xl">{mod.icon || "🏥"}</span>
                    <button
                      onClick={() => handleDeleteWard(mod.id, mod.code)}
                      className="p-1.5 rounded-lg text-gray-700 hover:text-brand transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-brand">{mod.code}</span>
                      <span className="text-[10px] text-gray-600">{mod.credits} Credits</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-brand transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                      {mod.description || "Faculty accredited rotation syllabus."}
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-[#1a1a1a]">
                  <Link
                    href={`/module/${mod.id}`}
                    className="text-[11px] text-brand hover:text-white font-bold transition-colors flex items-center gap-1"
                  >
                    View Module <ChevronRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
            {modules.length === 0 && (
              <p className="col-span-full text-center py-12 text-gray-600 text-xs">
                No wards in the curriculum engine. Click "Add Ward" to publish one.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ── QUIZZES TAB ── */}
      {tab === "quizzes" && (
        <div className="pt-7 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-white">MCQ Question Bank</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Practice questions available to all students across clinical rotations.
              </p>
            </div>
            <button
              onClick={() => setShowQuizModal(true)}
              className="px-4 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5"
            >
              <Plus size={13} /> Add MCQ
            </button>
          </div>

          <div className="space-y-2">
            {questions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 flex items-start justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-gray-700">#{idx + 1}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
                      q.difficulty === "hard"
                        ? "text-brand bg-brand/10 border-brand/20"
                        : q.difficulty === "easy"
                        ? "text-gray-400 bg-[#111] border-[#1f1f1f]"
                        : "text-gray-300 bg-[#111] border-[#1f1f1f]"
                    }`}>
                      {q.difficulty}
                    </span>
                    <span className="text-[10px] text-gray-700">· {q.status || "approved"}</span>
                  </div>
                  <p className="text-xs text-white leading-relaxed font-medium">{q.stem}</p>
                </div>
                <button
                  onClick={() => handleDeleteQuestion(q.id)}
                  className="p-2 text-gray-700 hover:text-brand transition-colors flex-shrink-0"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
            {questions.length === 0 && (
              <div className="text-center py-12 text-gray-600 text-xs border border-[#1a1a1a] rounded-xl">
                No questions in the bank. Click "Add MCQ" to publish one.
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── STORE TAB ── */}
      {tab === "store" && (
        <div className="pt-7 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-white">MedStore Merchandise</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                TANC scrubs, doctor's jackets, and clinical accessories. Manage from the live MedStore page.
              </p>
            </div>
            <Link
              href="/medstore"
              className="px-4 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5"
            >
              Open Live MedStore →
            </Link>
          </div>

          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#111] border border-[#1f1f1f] flex items-center justify-center mx-auto text-2xl">
              🛍️
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">TANC Catalog — 8 Collections Live</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto leading-relaxed">
                Signature Soft-Shell Jackets, ScrubLab Sets, Cleo Joggers, Lily & Leo Tops, Lab Coats, Littmann III stethoscopes, and Scrub Caps are synchronized and available to students.
              </p>
            </div>
            <Link
              href="/medstore"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] border border-[#1f1f1f] hover:border-[#2b2b2b] text-white text-xs font-bold rounded-xl transition-all"
            >
              Add or remove products in MedStore →
            </Link>
          </div>
        </div>
      )}

      {/* ── LIBRARY TAB ── */}
      {tab === "library" && (
        <div className="pt-7 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-white">Google Drive Faculty Library</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Curated syllabus folders, cadaveric atlases, and ward guidebooks linked from Drive.
              </p>
            </div>
            <Link
              href="/library"
              className="px-4 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5"
            >
              Open Library →
            </Link>
          </div>

          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#111] border border-[#1f1f1f] flex items-center justify-center mx-auto text-2xl">
              📁
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Google Drive Integration Active</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto leading-relaxed">
                Add new curated folders using Google Drive share links. Students access them directly from the Faculty Library, filtered by programme and level.
              </p>
            </div>
            <Link
              href="/library"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111] border border-[#1f1f1f] hover:border-[#2b2b2b] text-white text-xs font-bold rounded-xl transition-all"
            >
              Manage folders in Faculty Library →
            </Link>
          </div>
        </div>
      )}

      {/* ─────────────────────────────── */}
      {/* MODALS */}
      {/* ─────────────────────────────── */}

      {/* Edit User Profile Modal */}
      {editingProfile && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setEditingProfile(null)}>
          <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl w-full max-w-md p-6 space-y-5 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-0.5">Admin Action</span>
                <h3 className="text-sm font-black text-white">Edit User Profile</h3>
              </div>
              <button onClick={() => setEditingProfile(null)} className="w-7 h-7 rounded-lg bg-[#111] border border-[#1f1f1f] flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                <X size={14} />
              </button>
            </div>
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Full Name</label>
                <input type="text" required value={editName} onChange={e => setEditName(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Programme</label>
                <select value={editProgram} onChange={e => setEditProgram(e.target.value)} className={inputCls}>
                  <option value="medicine">Medicine (MBChB / MBBS)</option>
                  <option value="bms">Biomedical Science (BMS)</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="nursing">Nursing</option>
                  <option value="dentistry">Dentistry</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Academic Level</label>
                <select value={editLevel} onChange={e => setEditLevel(e.target.value)} className={inputCls}>
                  <option value="Part 1">Part 1</option>
                  <option value="Part 2">Part 2</option>
                  <option value="Part 3">Part 3</option>
                  <option value="Year 4">Year 4 (Clinical)</option>
                  <option value="Year 5">Year 5 (Clinical)</option>
                  <option value="Year 6">Year 6 (Final Year)</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="flex gap-2 pt-1">
                <button type="submit" disabled={savingUser} className="flex-1 py-2.5 bg-brand hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5">
                  {savingUser ? <Loader2 size={12} className="animate-spin" /> : "Save Changes"}
                </button>
                <button type="button" onClick={() => setEditingProfile(null)} className="px-4 py-2.5 bg-[#111] border border-[#1f1f1f] hover:border-[#2b2b2b] text-gray-500 hover:text-white rounded-xl text-xs font-bold">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Ward Modal */}
      {showWardModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setShowWardModal(false)}>
          <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl w-full max-w-md p-6 space-y-5 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-0.5">Curriculum Engine</span>
                <h3 className="text-sm font-black text-white">Add Clinical Ward or Rotation</h3>
              </div>
              <button onClick={() => setShowWardModal(false)} className="w-7 h-7 rounded-lg bg-[#111] border border-[#1f1f1f] flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                <X size={14} />
              </button>
            </div>
            <form onSubmit={handleCreateWard} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Ward Code *</label>
                  <input required type="text" placeholder="e.g. SURG405" value={wardCode} onChange={e => setWardCode(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Icon</label>
                  <input type="text" value={wardIcon} onChange={e => setWardIcon(e.target.value)} className={inputCls + " text-center"} maxLength={2} />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Ward Title *</label>
                <input required type="text" placeholder="e.g. Cardiothoracic & Trauma Surgery" value={wardTitle} onChange={e => setWardTitle(e.target.value)} className={inputCls} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Programme</label>
                  <select value={wardProgram} onChange={e => setWardProgram(e.target.value)} className={inputCls}>
                    <option value="medicine">Medicine</option>
                    <option value="bms">Biomedical Sciences</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="nursing">Nursing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Target Level</label>
                  <select value={wardLevel} onChange={e => setWardLevel(e.target.value)} className={inputCls}>
                    <option value="Part 1">Part 1</option>
                    <option value="Part 2">Part 2</option>
                    <option value="Part 3">Part 3</option>
                    <option value="Year 4">Year 4 (Clinical)</option>
                    <option value="Year 5">Year 5 (Clinical)</option>
                    <option value="Year 6">Year 6 (Finals)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Description</label>
                <textarea rows={2} placeholder="Clinical objectives, ward schedule, competencies…" value={wardDesc} onChange={e => setWardDesc(e.target.value)} className={inputCls + " resize-none"} />
              </div>
              <div className="flex gap-2 pt-1">
                <button type="submit" disabled={creatingWard} className="flex-1 py-2.5 bg-brand hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5">
                  {creatingWard ? <Loader2 size={12} className="animate-spin" /> : "Publish to Curriculum"}
                </button>
                <button type="button" onClick={() => setShowWardModal(false)} className="px-4 py-2.5 bg-[#111] border border-[#1f1f1f] hover:border-[#2b2b2b] text-gray-500 hover:text-white rounded-xl text-xs font-bold">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add MCQ Modal */}
      {showQuizModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setShowQuizModal(false)}>
          <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl w-full max-w-lg p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-0.5">Question Bank</span>
                <h3 className="text-sm font-black text-white">Create Practice MCQ</h3>
              </div>
              <button onClick={() => setShowQuizModal(false)} className="w-7 h-7 rounded-lg bg-[#111] border border-[#1f1f1f] flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                <X size={14} />
              </button>
            </div>
            <form onSubmit={handleCreateQuiz} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Clinical Vignette / Stem *</label>
                <textarea required rows={3} placeholder="A 45-year-old patient presents to casualty with…" value={qStem} onChange={e => setQStem(e.target.value)} className={inputCls + " resize-none"} />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Answer Options</label>
                  <span className="text-[10px] text-gray-700">Click radio to mark correct</span>
                </div>
                <div className="space-y-2">
                  {[
                    { val: optA, set: setOptA, idx: 0, label: "A" },
                    { val: optB, set: setOptB, idx: 1, label: "B" },
                    { val: optC, set: setOptC, idx: 2, label: "C" },
                    { val: optD, set: setOptD, idx: 3, label: "D" },
                  ].map(opt => (
                    <div key={opt.idx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="correctOption"
                        checked={correctOpt === opt.idx}
                        onChange={() => setCorrectOpt(opt.idx)}
                        className="accent-brand cursor-pointer"
                      />
                      <span className="text-xs font-black text-gray-500 w-4">{opt.label}</span>
                      <input
                        type="text"
                        placeholder={`Option ${opt.label}…`}
                        value={opt.val}
                        onChange={e => opt.set(e.target.value)}
                        className={inputCls + " flex-1"}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Difficulty</label>
                <div className="flex gap-2">
                  {["easy", "medium", "hard"].map(d => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setQDifficulty(d)}
                      className={`flex-1 py-2 text-xs font-bold capitalize rounded-xl border transition-all ${
                        qDifficulty === d
                          ? d === "hard" ? "bg-brand border-brand text-white" : "bg-white/10 border-white/20 text-white"
                          : "bg-[#0d0d0d] border-[#1a1a1a] text-gray-600 hover:text-white"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1.5">Explanation</label>
                <textarea rows={2} placeholder="Why the correct option is correct, referencing guidelines…" value={qExplanation} onChange={e => setQExplanation(e.target.value)} className={inputCls + " resize-none"} />
              </div>
              <div className="flex gap-2 pt-1">
                <button type="submit" disabled={creatingQuiz} className="flex-1 py-2.5 bg-brand hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5">
                  {creatingQuiz ? <Loader2 size={12} className="animate-spin" /> : "Save to Question Bank"}
                </button>
                <button type="button" onClick={() => setShowQuizModal(false)} className="px-4 py-2.5 bg-[#111] border border-[#1f1f1f] hover:border-[#2b2b2b] text-gray-500 hover:text-white rounded-xl text-xs font-bold">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
