"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-lg ${className}`} />
    )
  }

  const isDark = resolvedTheme === "dark" || theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#1a1a1a] rounded-lg transition-colors flex items-center justify-center relative ${className}`}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      aria-label="Toggle light or dark theme"
    >
      {isDark ? (
        <Sun size={18} className="text-gray-300 hover:text-white transition-transform hover:rotate-45" />
      ) : (
        <Moon size={18} className="text-gray-700 hover:text-black transition-transform hover:-rotate-12" />
      )}
    </button>
  )
}
