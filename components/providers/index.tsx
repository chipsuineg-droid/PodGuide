'use client'

import { ThemeProvider } from './ThemeProvider'
import { QueryProvider } from './QueryProvider'

/**
 * Root providers wrapper — wraps all client-side context providers.
 *
 * Order matters:
 *  1. ThemeProvider  — outermost so all children can access theme
 *  2. QueryProvider  — TanStack Query for server-state management
 *
 * Add additional providers here (e.g. Zustand store initialiser,
 * Analytics, Feature flags) without touching layout.tsx.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </ThemeProvider>
  )
}
