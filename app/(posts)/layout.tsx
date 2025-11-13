/* nthsm/portfolio/portfolio-1704bb279c5646eb9cac39f25da923cc404ed185/app/(posts)/layout.tsx */
'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SiteLayout from '@/components/ui/SiteLayout'
import { ProjectNavigation } from '@/components/ui/ProjectNavigation'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
// Removed useTheme, useEffect, useState as they are no longer needed here

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // A new array to check if the current page is one of the case studies
  const caseStudyPaths = [
    '/its-meow-or-never',
    '/student-wellness-study',
    '/p2p-marketplace-research',
    '/handheld-analysis'
  ]
  
  const isCaseStudyPage = caseStudyPaths.includes(pathname)

  // --- Theme override logic has been REMOVED ---

  return (
    <SiteLayout showProgressBar fullWidth={isCaseStudyPage}>
      <main className={cn(
        "pb-20",
        // This conditional logic is now restored:
        !isCaseStudyPage && "prose prose-zinc dark:prose-invert mx-auto max-w-5xl" 
      )}>
        {/* This conditional logic is also restored: */}
        {!isCaseStudyPage && (
          <Link
            href="/"
            className="no-underline mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        )}

        {children}

        {/* The project navigation is now correctly wrapped in the conditional styles */}
        <div className={cn(
            !isCaseStudyPage ? "" : "max-w-5xl mx-auto px-4 lg:px-8"
        )}>
            <ProjectNavigation />
        </div>
      </main>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </SiteLayout>
  )
}