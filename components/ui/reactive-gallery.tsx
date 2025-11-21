'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/app/data'

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export function ReactiveGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const mouseRelX = useRef(0)

  const galleryImages = [...PROJECTS, ...PROJECTS, ...PROJECTS].map(
    (p) => p.image,
  )

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      
      const deviation = e.clientX - centerX
      
      const maxDeviation = rect.width / 2
      const factor = Math.max(-1, Math.min(1, deviation / maxDeviation))
      
      mouseRelX.current = factor
    }

    container.addEventListener('mousemove', onMouseMove)
    return () => container.removeEventListener('mousemove', onMouseMove)
  }, [])

  useEffect(() => {
    let frameId: number
    const loop = () => {
      if (scrollRef.current && isHovering) {
        const speed = mouseRelX.current * 5
        scrollRef.current.scrollLeft += speed
      }
      frameId = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(frameId)
  }, [isHovering])

  return (
    <motion.section
      variants={itemVariants}
      className="mt-24 max-w-none md:mt-32"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="mb-12">
        <h1 className="mb-0 inline-block text-6xl font-medium tracking-tight md:text-7xl">
          Gallery
        </h1>
      </div>
      <div
        ref={scrollRef}
        className="scrollbar-hide flex w-full gap-6 overflow-x-auto overflow-y-hidden pb-8"
        style={{ cursor: 'ew-resize' }}
      >
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="relative h-[300px] w-[450px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
          >
            <Image
              src={src}
              alt={`Gallery image ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </motion.section>
  )
}