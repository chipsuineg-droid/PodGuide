"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import {
  Menu, X, Users, Library, PenTool,
  TrendingUp, GraduationCap, User, LogOut, ChevronRight, ShoppingBag
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"

const primaryItems = [
  { name: "Home", href: "/dashboard" },
  { name: "Learn", href: "/learn" },
  { name: "Practise", href: "/practise" },
  { name: "Med", href: "/medstore" },
]

const menuItems = [
  { name: "Network", href: "/campus", icon: Users, desc: "Campus feed & study groups" },
  { name: "Library", href: "/library", icon: Library, desc: "Google Drive books & archives" },
  { name: "Create", href: "/create", icon: PenTool, desc: "Upload notes, questions & summaries" },
  { name: "Grow", href: "/grow", icon: TrendingUp, desc: "Progress stats & opportunities" },
  { name: "Mentor", href: "/mentor", icon: GraduationCap, desc: "Clinical & peer mentorship" },
  { name: "Profile", href: "/profile", icon: User, desc: "Personal settings & level" },
]

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUser(user)
    })
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const handleSignOut = async () => {
    setMenuOpen(false)
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  const isMenuSectionActive = menuItems.some(item =>
    pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
  )

  const initials = user?.user_metadata?.full_name
    ? user.user_metadata.full_name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase()
    : "S"

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden flex flex-col justify-end animate-in fade-in duration-200"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-[#0e0e0e] border-t border-[#222] rounded-t-3xl p-5 max-h-[85vh] overflow-y-auto space-y-5 animate-in slide-in-from-bottom duration-250 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Grab Handle */}
            <div className="w-10 h-1 bg-white/20 rounded-full mx-auto" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#1a1a1a]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center font-bold text-white text-xs">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">
                    {user?.user_metadata?.full_name || "PodGuide Student"}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {user?.user_metadata?.programme || user?.user_metadata?.level || "Medical Student"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center text-gray-400 hover:text-white"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2 mb-2">
                All Services & Tools
              </p>
              {menuItems.map(item => {
                const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-2xl border transition-all ${
                      isActive
                        ? "bg-brand/10 border-brand/40 text-white"
                        : "bg-[#141414] border-[#1e1e1e] text-gray-300 hover:text-white hover:border-[#333]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? "bg-brand text-white" : "bg-[#1c1c1c] text-gray-400"}`}>
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-bold truncate ${isActive ? "text-brand" : "text-white"}`}>
                          {item.name}
                        </p>
                        <p className="text-[11px] text-gray-500 truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={16} className={isActive ? "text-brand" : "text-gray-600"} />
                  </Link>
                )
              })}
            </div>

            {/* Sign Out Button */}
            <div className="pt-2">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-2 p-3 bg-[#161616] hover:bg-[#1f1f1f] border border-[#262626] text-gray-400 hover:text-brand rounded-xl text-xs font-bold transition-colors"
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#0a0a0a] border-t border-[#1f1f1f] flex items-stretch z-40 lg:hidden">
        {primaryItems.map(item => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 text-[9px] font-bold uppercase tracking-wider gap-1 transition-colors ${
                isActive ? "text-brand" : "text-gray-600 hover:text-gray-400"
              }`}
            >
              <span className={`block w-5 h-0.5 rounded-full ${isActive ? "bg-brand" : "bg-transparent"}`} />
              {item.name}
            </Link>
          )
        })}

        {/* 3 Lines (Menu) Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(prev => !prev)}
          className={`flex flex-col items-center justify-center flex-1 text-[9px] font-bold uppercase tracking-wider gap-1 transition-colors ${
            menuOpen || isMenuSectionActive ? "text-brand" : "text-gray-600 hover:text-gray-400"
          }`}
          aria-label="Open more menu"
        >
          <span className={`block w-5 h-0.5 rounded-full ${menuOpen || isMenuSectionActive ? "bg-brand" : "bg-transparent"}`} />
          <div className="flex items-center gap-1">
            <Menu size={12} />
            <span>More</span>
          </div>
        </button>
      </nav>
    </>
  )
}