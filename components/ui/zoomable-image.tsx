'use client'

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ZoomableImageProps {
  src: string
  alt: string
  className?: string
}

export function ZoomableImage({ src, alt, className }: ZoomableImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
      }}
    >
      <MorphingDialogTrigger>
        <MorphingDialogImage
          src={src}
          alt={alt}
          className={cn('cursor-zoom-in', className)}
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto relative p-2 md:p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-2xl">
            <MorphingDialogImage
              src={src}
              alt={alt}
              className="h-auto w-full max-w-[90vw] max-h-[85vh] rounded-lg object-contain"
            />
            <MorphingDialogClose className="absolute -top-4 -right-4 p-2 bg-zinc-900/50 hover:bg-zinc-900/80 backdrop-blur-md rounded-full text-white transition-colors border border-white/10">
              <X className="h-5 w-5" />
            </MorphingDialogClose>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}