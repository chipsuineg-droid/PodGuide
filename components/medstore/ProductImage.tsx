"use client"
import { useState } from "react"

interface ProductImageProps {
  src?: string
  alt: string
  fallbackIcon?: string
  className?: string
  containerClassName?: string
}

export function ProductImage({
  src,
  alt,
  fallbackIcon = "🛍️",
  className = "w-full h-full object-contain p-2.5 transition-transform duration-500 group-hover:scale-105",
  containerClassName = "relative w-full aspect-square bg-gradient-to-b from-[#141414] to-[#0a0a0a] flex items-center justify-center overflow-hidden"
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const showImage = Boolean(src && !hasError)

  return (
    <div className={containerClassName}>
      {showImage ? (
        <>
          {/* Skeleton placeholder while image loads */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#161616] animate-pulse flex items-center justify-center">
              <span className="text-3xl opacity-20 select-none">{fallbackIcon}</span>
            </div>
          )}

          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-1.5 p-4 text-center select-none">
          <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 group-hover:border-brand/30 transition-all duration-300">
            {fallbackIcon}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-1 max-w-[120px]">
            {alt}
          </span>
        </div>
      )}
    </div>
  )
}
