"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard, BookOpen, Library, BrainCircuit,
  ShoppingBag, Users, PenTool, TrendingUp, LogOut
} from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

const items = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Learn", href: "/learn", icon: BookOpen },
  { name: "Library", href: "/library", icon: Library },
  { name: "Practise", href: "/practise", icon: BrainCircuit },
  { name: "Network", href: "/campus", icon: Users },
  { name: "MedStore", href: "/medstore", icon: ShoppingBag },
  { name: "Create", href: "/create", icon: PenTool },
  { name: "Mentor", href: "/mentor", icon: Users },
  { name: "Grow", href: "/grow", icon: TrendingUp },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
    })
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  const initials = user?.user_metadata?.full_name?.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase() || "S"

  return (
    <div className="w-64 bg-[#0a0a0a] border-r border-[#1f1f1f] h-screen flex-col hidden lg:flex">
      <div className="h-16 flex items-center px-6 border-b border-[#1f1f1f]">
        <Link href="/dashboard" className="text-xl font-display font-black tracking-tight text-white flex items-center gap-2">
          <div className="w-6 h-6 bg-brand rounded-md flex items-center justify-center">
            <span className="text-white text-xs">P</span>
          </div>
          PodGuide
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="space-y-1">
          {items.map((item) => (
            <Link key={item.name} href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
                  ? "bg-brand text-white font-bold"
                  : "text-gray-400 hover:text-white hover:bg-[#1a1a1a]"
              }`}>
              <item.icon size={18} />
              <span className="font-semibold text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-[#1f1f1f]">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-xs font-bold text-gray-300">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">{user?.user_metadata?.full_name || "Student"}</p>
            <p className="text-xs text-gray-500 truncate">{user?.user_metadata?.level || "Student"}</p>
          </div>
          <button onClick={handleSignOut} className="p-2 text-gray-500 hover:text-brand transition-colors" title="Sign Out">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}