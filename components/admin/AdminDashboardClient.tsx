"use client"
import { useState } from "react"
import { IntegratedAdminDashboard } from "./IntegratedAdminDashboard"
import { Shield, Eye, ArrowLeft } from "lucide-react"

interface AdminClientProps {
  initialProfiles: any[]
  initialModules: any[]
  initialQuestions: any[]
  currentAdminId: string
  currentAdminName: string
  studentViewComponent: React.ReactNode
}

export function AdminDashboardClient({
  initialProfiles,
  initialModules,
  initialQuestions,
  currentAdminId,
  currentAdminName,
  studentViewComponent
}: AdminClientProps) {
  const [viewMode, setViewMode] = useState<"admin" | "student">("admin")

  if (viewMode === "student") {
    return (
      <div className="space-y-6">
        {/* Sticky Banner indicating Admin Preview Mode */}
        <div className="bg-[#1a0f0f] border border-brand/40 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand/20 text-brand flex items-center justify-center font-bold">
              <Eye size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Student Dashboard Preview Mode</p>
              <p className="text-[11px] text-gray-400">
                You are previewing the student interface. Modules and tools render as authorized for your curriculum.
              </p>
            </div>
          </div>

          <button
            onClick={() => setViewMode("admin")}
            className="px-4 py-2 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-brand/20 flex-shrink-0"
          >
            <ArrowLeft size={13} /> Return to Admin Dashboard
          </button>
        </div>

        {studentViewComponent}
      </div>
    )
  }

  return (
    <IntegratedAdminDashboard
      initialProfiles={initialProfiles}
      initialModules={initialModules}
      initialQuestions={initialQuestions}
      currentAdminId={currentAdminId}
      currentAdminName={currentAdminName}
      onSwitchToStudentView={() => setViewMode("student")}
    />
  )
}
