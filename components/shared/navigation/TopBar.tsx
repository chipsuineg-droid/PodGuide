"use client"
import { Bell, Search, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard", "/learn": "Learn", "/practise": "Practise",
  "/campus": "Campus", "/create": "Create", "/mentor": "Mentor", "/grow": "Grow", "/profile": "Profile",
}

const mockNotifications = [
  { id: "1", title: "Quiz Arena is live!", body: "Join today's daily challenge and earn 50 XP.", time: "2 min ago", read: false },
  { id: "2", title: "New announcement", body: "Check the latest update from your faculty.", time: "1 hr ago", read: false },
  { id: "3", title: "Flashcards due", body: "You have 12 cards to review today.", time: "3 hrs ago", read: true },
]

export function TopBar() {
  const pathname = usePathname()
  const [notifOpen, setNotifOpen] = useState(false)
  const [initials, setInitials] = useState("S")
  const supabase = createClient()
  const unread = mockNotifications.filter(n => !n.read).length
  const title = Object.entries(pageTitles).find(([path]) => pathname.startsWith(path))?.[1] || "PodGuide"

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.user_metadata?.full_name) {
        setInitials(user.user_metadata.full_name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase())
      }
    })
  }, [])

  return (
    <header className="h-16 bg-black border-b border-[#1f1f1f] flex items-center justify-between px-4 lg:px-6 flex-shrink-0 sticky top-0 z-20">
      <h2 className="hidden lg:block text-base font-semibold text-gray-200">{title}</h2>
      <Link href="/dashboard" className="lg:hidden font-display text-xl font-bold">Pod<span className="text-brand">Guide</span></Link>
      <div className="flex items-center gap-2">
        <Link href="/search" className="p-2 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-colors">
          <Search size={20} />
        </Link>
        <div className="relative">
          <button onClick={() => setNotifOpen(!notifOpen)}
            className="p-2 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-lg transition-colors relative">
            <Bell size={20} />
            {unread > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand rounded-full" />}
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 bg-[#111] border border-[#333] rounded-xl shadow-2xl z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#222]">
                <span className="font-semibold text-white text-sm">Notifications</span>
                <button onClick={() => setNotifOpen(false)}><X size={16} className="text-gray-400 hover:text-white" /></button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {mockNotifications.map(n => (
                  <div key={n.id} className={`px-4 py-3 border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors cursor-pointer ${!n.read ? "border-l-2 border-l-brand" : ""}`}>
                    <p className="text-sm font-medium text-white">{n.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{n.body}</p>
                    <p className="text-xs text-gray-600 mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <Link href="/profile" className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold ml-1 hover:bg-red-700 transition-colors">
          {initials}
        </Link>
      </div>
    </header>
  )
}