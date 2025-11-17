'use client'

import React, { useRef, useEffect, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ParallaxHeaderProps {
  children: ReactNode
  className?: string
  speedFactor?: number
  style?: React.CSSProperties
}

export function ParallaxHeader({
  children,
  className,
  speedFactor = 0.5,
  style,
}: ParallaxHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const offset = window.scrollY
        headerRef.current.style.backgroundPositionY = `${offset * speedFactor}px`
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speedFactor])

  return (
    <div
      ref={headerRef}
      className={cn('imon-parallax-header-js', className)}
      style={style}
    >
      <div className="mx-auto w-full max-w-7xl text-center">{children}</div>
    </div>
  )
}
