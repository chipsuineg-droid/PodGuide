import * as React from 'react'
import { cn } from '@/lib/utils'

/* ─── Badge variants ────────────────────────────────────────────────── */
const badgeVariants = {
  // Core semantic
  default: [
    'bg-surface-2 text-foreground border-border',
    'dark:bg-surface-2 dark:text-foreground dark:border-border',
  ],
  secondary: [
    'bg-surface-3 text-foreground-secondary border-transparent',
  ],
  success: [
    'bg-success/15 text-success border-success/25',
    'dark:bg-success/10 dark:text-success dark:border-success/20',
  ],
  warning: [
    'bg-warning/15 text-warning border-warning/25',
    'dark:bg-warning/10 dark:text-warning dark:border-warning/20',
  ],
  error: [
    'bg-error/15 text-error border-error/25',
    'dark:bg-error/10 dark:text-error dark:border-error/20',
  ],
  info: [
    'bg-info/15 text-info border-info/25',
    'dark:bg-info/10 dark:text-info dark:border-info/20',
  ],
  brand: [
    'bg-brand/15 text-brand border-brand/25',
    'dark:bg-brand/10 dark:text-brand dark:border-brand/20',
  ],

  // Pillar variants
  'pillar-learn': [
    'bg-pillar-learn/15 text-pillar-learn border-pillar-learn/25',
  ],
  'pillar-practise': [
    'bg-pillar-practise/15 text-pillar-practise border-pillar-practise/25',
  ],
  'pillar-campus': [
    'bg-pillar-campus/15 text-pillar-campus border-pillar-campus/25',
  ],
  'pillar-create': [
    'bg-pillar-create/15 text-pillar-create border-pillar-create/25',
  ],
  'pillar-mentor': [
    'bg-pillar-mentor/15 text-pillar-mentor border-pillar-mentor/25',
  ],
  'pillar-grow': [
    'bg-pillar-grow/15 text-pillar-grow border-pillar-grow/25',
  ],
} as const

export type BadgeVariant = keyof typeof badgeVariants

const badgeSizes = {
  sm: 'text-[10px] px-1.5 py-0 h-4',
  md: 'text-xs px-2 py-0.5',
  lg: 'text-sm px-2.5 py-1',
} as const

export type BadgeSize = keyof typeof badgeSizes

/* ─── Props ─────────────────────────────────────────────────────────── */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  pulse?: boolean
}

/**
 * Badge — inline status / label chip.
 *
 * Supports all six pillar colours and semantic states.
 */
export function Badge({
  className,
  variant = 'default',
  size = 'md',
  dot = false,
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        // Base
        'inline-flex items-center gap-1 rounded-full border font-medium',
        'whitespace-nowrap leading-none',
        // Variant
        ...badgeVariants[variant],
        // Size
        badgeSizes[size],
        className,
      )}
      {...props}
    >
      {/* Optional dot indicator */}
      {dot && (
        <span
          className={cn(
            'block h-1.5 w-1.5 shrink-0 rounded-full',
            pulse && 'animate-pulse',
            // Use current text colour for dot
            'bg-current',
          )}
          aria-hidden
        />
      )}
      {children}
    </span>
  )
}
