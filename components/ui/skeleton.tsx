import * as React from 'react'
import { cn } from '@/lib/utils'

/* ─── Skeleton ──────────────────────────────────────────────────────── */

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Skeleton shape */
  variant?: 'rectangular' | 'rounded' | 'circular' | 'text'
  /** Width (e.g. "100%", "200px", "w-32") */
  width?: string | number
  /** Height (e.g. "1rem", "40px") */
  height?: string | number
  /** Disable animation */
  animated?: boolean
}

/**
 * Skeleton — loading placeholder with shimmer animation.
 * Uses the `.skeleton` CSS class defined in globals.css.
 */
export function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
  animated = true,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        'skeleton',
        // Variant shapes
        variant === 'circular'    && 'rounded-full',
        variant === 'rounded'     && 'rounded-xl',
        variant === 'rectangular' && 'rounded-lg',
        variant === 'text'        && 'rounded h-4 w-full',
        !animated                 && 'animation-none',
        className,
      )}
      style={{
        width:  width,
        height: height,
        ...style,
      }}
      aria-busy="true"
      aria-label="Loading…"
      {...props}
    />
  )
}

/* ─── Skeleton presets for common patterns ──────────────────────────── */

/** A skeleton card matching the standard card layout */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('card p-5 space-y-4', className)}>
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" height={14} />
          <Skeleton variant="text" width="40%" height={12} />
        </div>
      </div>
      <Skeleton variant="rectangular" height={80} />
      <div className="space-y-2">
        <Skeleton variant="text" height={12} />
        <Skeleton variant="text" width="80%" height={12} />
      </div>
    </div>
  )
}

/** A skeleton for a list item row */
export function SkeletonListItem({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3 p-3', className)}>
      <Skeleton variant="rounded" width={44} height={44} />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="55%" height={14} />
        <Skeleton variant="text" width="35%" height={11} />
      </div>
      <Skeleton variant="rounded" width={60} height={24} />
    </div>
  )
}

/** Skeleton table row */
export function SkeletonTableRow({
  cols = 4,
  className,
}: {
  cols?: number
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-4 px-4 py-3', className)}>
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          // First col is wider
          width={i === 0 ? '35%' : `${Math.floor(65 / (cols - 1))}%`}
          height={13}
        />
      ))}
    </div>
  )
}
