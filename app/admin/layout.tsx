"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Users, FileText, Database, LogOut, ShieldCheck, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

  useEffect(() => {
    if (pathname === "/admin/login") {
      setIsAdmin(true) // Don't block the login page
      return
    }

    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push("/admin/login"); return }

      const { data } = await supabase.from("student_profiles").select("is_admin").eq("user_id", user.id).single()
      if (data && data.is_admin) {
        setIsAdmin(true)
      } else {
        router.push("/dashboard") // Normal user trying to access admin
      }
    }
    checkAdmin()
  }, [pathname, router])

  if (pathname === "/admin/login") return <>{children}</>

  if (isAdmin === null) return <div className="flex items-center justify-center h-screen bg-black"><Loader2 className="animate-spin text-brand" size={32} /></div>

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const items = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Materials", href: "/admin/materials", icon: FileText },
    { name: "MCQ Database", href: "/admin/mcqs", icon: Database },
  ]

  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Admin Sidebar */}
      <div className="w-64 bg-[#0a0a0a] border-r border-[#1f1f1f] h-screen flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-[#1f1f1f]">
          <Link href="/admin" className="text-xl font-display font-black tracking-tight text-brand flex items-center gap-2">
            <ShieldCheck size={24} /> Admin
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="space-y-1">
            {items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.name} href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                    isActive ? "bg-brand/10 text-brand font-bold border border-brand/30" : "text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
                  }`}>
                  <item.icon size={18} />
                  <span className="font-semibold text-sm">{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-[#1f1f1f]">
          <button onClick={handleSignOut} className="flex items-center gap-3 px-3 py-2.5 w-full text-left text-gray-500 hover:text-brand transition-colors rounded-lg hover:bg-brand/10">
            <LogOut size={18} />
            <span className="font-semibold text-sm">Sign Out Admin</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}