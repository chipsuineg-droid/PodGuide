import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS class names with conflict resolution.
 * Uses clsx for conditional classes + tailwind-merge to dedupe.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as a compact string (1200 → "1.2K")
 */
export function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `${(n / 1_000).toFixed(1)}K`
  return String(n)
}

/**
 * Returns initials from a full name (max 2 chars).
 * "John Smith" → "JS", "Alice" → "A"
 */
export function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Returns a pillar colour hex by pillar key.
 */
export const PILLAR_COLORS = {
  learn:    '#4F8EF7',
  practise: '#8B5CF6',
  campus:   '#10B981',
  create:   '#F59E0B',
  mentor:   '#EC4899',
  grow:     '#22C55E',
} as const

export type PillarKey = keyof typeof PILLAR_COLORS

/**
 * Waits for the given milliseconds (useful in async flows).
 */
export const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms))
