"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import {
  Users, FileText, Database, ShoppingBag, TrendingUp,
  ArrowRight, ShieldCheck, Plus, Sparkles, ExternalLink
} from "lucide-react"

export default function AdminOverview() {
  const supabase = createClient()
  const [stats, setStats] = useState({
    users: 0,
    materials: 0,
    questions: 0,
    products: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [uRes, mRes, qRes, pRes] = await Promise.all([
          supabase.from("student_profiles").select("id", { count: "exact", head: true }),
          supabase.from("materials").select("id", { count: "exact", head: true }),
          supabase.from("questions").select("id", { count: "exact", head: true }),
          supabase.from("medstore_products").select("id", { count: "exact", head: true }),
        ])
        setStats({
          users: uRes.count || 0,
          materials: mRes.count || 0,
          questions: qRes.count || 0,
          products: pRes.count || 12,
        })
      } catch (e) {
        console.warn("Error loading stats:", e)
      }
    }
    fetchStats()
  }, [])

  const cards = [
    {
      label: "MedStore Products",
      value: stats.products,
      icon: ShoppingBag,
      color: "text-brand",
      bg: "bg-brand/10",
      border: "border-brand/30",
      href: "/admin/store",
      subtext: "Edit titles, prices & pictures"
    },
    {
      label: "Library Materials",
      value: stats.materials,
      icon: FileText,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      href: "/admin/materials",
      subtext: "PDFs, atlases & drive shelves"
    },
    {
      label: "Active Students",
      value: stats.users,
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      href: "/admin/users",
      subtext: "Student & faculty directory"
    },
    {
      label: "MCQ Database",
      value: stats.questions,
      icon: Database,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      href: "/admin/mcqs",
      subtext: "Clinical exam questions"
    },
  ]

  return (
    <div className="max-w-6xl space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1f1f1f] pb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
              Supervisor Command Center
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 border border-brand/30 px-2.5 py-0.5 rounded-full">
              Full Admin Clearance
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Complete supervisory control over MedStore merchandise, academic library materials, and student accounts.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/dashboard"
            target="_blank"
            className="px-4 py-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-gray-300 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <span>Preview Student View</span>
            <ExternalLink size={12} />
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(c => (
          <Link
            key={c.label}
            href={c.href}
            className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#2e2e2e] rounded-2xl p-5 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.bg} ${c.color} border ${c.border}`}>
                  <c.icon size={20} />
                </div>
                <ArrowRight size={14} className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs font-semibold text-gray-400">{c.label}</p>
              <p className="text-2xl sm:text-3xl font-black text-white mt-1">{c.value.toLocaleString()}</p>
            </div>
            <p className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-[#181818]">
              {c.subtext}
            </p>
          </Link>
        ))}
      </div>

      {/* Primary Supervisor Action Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MedStore Supervisor Card */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-brand/40 rounded-2xl p-6 space-y-4 transition-all">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/30 text-brand flex items-center justify-center">
                <ShoppingBag size={22} />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">MedStore Supervisor</h2>
                <p className="text-xs text-gray-400">Total control over merchandise & gear</p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full">
              Full CRUD
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">
            Add new scrubs, jackets, and accessories. Edit product titles and live USD / ZAR prices. Delete pictures from the gallery or delete entire items with a single click.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/admin/store"
              className="px-4 py-2.5 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-brand/20"
            >
              <span>Open MedStore Supervisor</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/medstore"
              target="_blank"
              className="px-4 py-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1"
            >
              <span>Live Store</span>
              <ExternalLink size={12} />
            </Link>
          </div>
        </div>

        {/* Library Supervisor Card */}
        <div className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-amber-500/40 rounded-2xl p-6 space-y-4 transition-all">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center">
                <FileText size={22} />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Library & Materials Supervisor</h2>
                <p className="text-xs text-gray-400">Academic shelves & Google Drive folders</p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
              Full CRUD
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">
            Upload PDFs, atlases, and past exam papers. Edit titles, departments, and academic levels. Add curated Google Drive shelves or delete outdated materials.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/admin/materials"
              className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-amber-600/20"
            >
              <span>Open Library Supervisor</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/library"
              target="_blank"
              className="px-4 py-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1"
            >
              <span>Live Library</span>
              <ExternalLink size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
