import * as React from 'react'
import { cn, getInitials } from '@/lib/utils'

/* ─── Sizes ─────────────────────────────────────────────────────────── */
const avatarSizes = {
  xs:  'h-6 w-6 text-[10px]',
  sm:  'h-8 w-8 text-xs',
  md:  'h-10 w-10 text-sm',
  lg:  'h-12 w-12 text-base',
  xl:  'h-16 w-16 text-lg',
  '2xl':'h-20 w-20 text-xl',
} as const

export type AvatarSize = keyof typeof avatarSizes

/* ─── Status indicator ───────────────────────────────────────────────── */
const statusColors = {
  online:  'bg-success',
  offline: 'bg-foreground-muted',
  away:    'bg-warning',
  busy:    'bg-error',
} as const

export type AvatarStatus = keyof typeof statusColors

/* ─── Props ─────────────────────────────────────────────────────────── */
export interface AvatarProps {
  /** Image URL */
  src?: string | null
  /** Full name used to generate initials fallback */
  name?: string
  /** Alt text for the image */
  alt?: string
  size?: AvatarSize
  /** Optional online status indicator */
  status?: AvatarStatus
  /** Extra class names */
  className?: string
  /** Background colour for initials fallback (CSS colour) */
  fallbackColor?: string
}

/**
 * Avatar — user profile picture with graceful initials fallback.
 */
export function Avatar({
  src,
  name = '',
  alt,
  size = 'md',
  status,
  className,
  fallbackColor,
}: AvatarProps) {
  const [imgError, setImgError] = React.useState(false)
  const initials = getInitials(name)

  const showImage = src && !imgError

  return (
    <div className={cn('relative shrink-0 inline-flex', className)}>
      <div
        className={cn(
          'flex items-center justify-center rounded-full overflow-hidden',
          'select-none font-semibold font-heading',
          'border-2 border-border',
          avatarSizes[size],
        )}
        style={
          !showImage
            ? {
                background: fallbackColor
                  ? `linear-gradient(135deg, ${fallbackColor}CC, ${fallbackColor}88)`
                  : 'linear-gradient(135deg, #5B4CF6, #8B5CF6)',
                color: '#fff',
              }
            : undefined
        }
        title={name || alt}
      >
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? name}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
            draggable={false}
          />
        ) : (
          <span aria-label={name}>{initials || '?'}</span>
        )}
      </div>

      {/* Status dot */}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2',
            'ring-background dark:ring-background',
            statusColors[status],
            size === 'xs' || size === 'sm' ? 'h-1.5 w-1.5' : 'h-2.5 w-2.5',
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  )
}

/* ─── Avatar Group ─────────────────────────────────────────────────── */

export interface AvatarGroupProps {
  avatars: Array<Pick<AvatarProps, 'src' | 'name' | 'fallbackColor'>>
  max?: number
  size?: AvatarSize
  className?: string
}

/**
 * AvatarGroup — stacked overlapping avatars with overflow count.
 */
export function AvatarGroup({
  avatars,
  max = 4,
  size = 'sm',
  className,
}: AvatarGroupProps) {
  const visible  = avatars.slice(0, max)
  const overflow = avatars.length - max

  return (
    <div className={cn('flex items-center', className)}>
      {visible.map((a, i) => (
        <div
          key={i}
          className="ring-2 ring-background dark:ring-background rounded-full"
          style={{ marginLeft: i === 0 ? 0 : '-0.5rem' }}
        >
          <Avatar {...a} size={size} />
        </div>
      ))}
      {overflow > 0 && (
        <div
          className={cn(
            'flex items-center justify-center rounded-full',
            'bg-surface-2 text-foreground-secondary border-2 border-border',
            'font-medium -ml-2',
            avatarSizes[size],
            size === 'xs' ? 'text-[9px]' : 'text-xs',
          )}
        >
          +{overflow}
        </div>
      )}
    </div>
  )
}
