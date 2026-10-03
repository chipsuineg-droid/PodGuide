import { createBrowserClient } from '@supabase/ssr'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bltbfrgfsjppwhrevlql.supabase.co'
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsdGJmcmdmc2pwcHdocmV2bHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyODQ4MTQsImV4cCI6MjEwMzg2MDgxNH0.GU5mkT3O5Iuru2Hbl6hvc8ZpGlRJiGy0UoDymhKQL1E'

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
