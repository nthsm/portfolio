'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SiteLayout from '@/components/ui/SiteLayout'
import { ProjectNavigation } from '@/components/ui/ProjectNavigation'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const caseStudyPaths = [
    '/its-meow-or-never',
    '/student-wellness-study',
    '/p2p-marketplace-research',
    '/handheld-analysis',
    '/sleeper-research',
  ]

  const isCaseStudyPage = caseStudyPaths.includes(pathname)

  return (
    <SiteLayout showProgressBar fullWidth={isCaseStudyPage}>
      <main
        className={cn(
          'pb-20',
          !isCaseStudyPage &&
            'prose prose-zinc dark:prose-invert mx-auto max-w-5xl',
        )}
      >
        {!isCaseStudyPage && (
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 no-underline transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        )}

        {children}

        <div
          className={cn(
            !isCaseStudyPage ? '' : 'mx-auto max-w-5xl px-4 lg:px-8',
          )}
        >
          <ProjectNavigation />
        </div>
      </main>
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="lazyOnload"
      />
    </SiteLayout>
  )
}
