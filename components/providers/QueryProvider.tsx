'use client'

import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

/**
 * TanStack Query client provider.
 *
 * Creates the QueryClient inside state so it is stable across re-renders
 * and not shared between server-side requests.
 */
export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Data is considered fresh for 1 minute by default
            staleTime: 60 * 1000,
            // Cache for 5 minutes
            gcTime: 5 * 60 * 1000,
            // Retry once on failure
            retry: 1,
            // Refetch when window regains focus (helpful for PWA)
            refetchOnWindowFocus: true,
          },
          mutations: {
            retry: 0,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
