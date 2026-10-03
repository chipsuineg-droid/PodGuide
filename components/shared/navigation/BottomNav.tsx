"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  { name: "Home", href: "/dashboard" },
  { name: "Learn", href: "/learn" },
  { name: "Practise", href: "/practise" },
  { name: "Network", href: "/campus" },
  { name: "Grow", href: "/grow" },
]

export function BottomNav() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#0a0a0a] border-t border-[#1f1f1f] flex items-stretch z-50 lg:hidden">
      {items.map(item => {
        const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 text-[9px] font-bold uppercase tracking-wider gap-1 transition-colors ${isActive ? "text-brand" : "text-gray-600 hover:text-gray-400"}`}
          >
            <span className={`block w-5 h-0.5 rounded-full ${isActive ? "bg-brand" : "bg-transparent"}`} />
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}