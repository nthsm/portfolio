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
  const isImonPage = pathname === '/its-meow-or-never'

  return (
    <SiteLayout showProgressBar fullWidth={isImonPage}>
      <main className={cn(
        "pb-20",
        !isImonPage && "prose prose-zinc dark:prose-invert mx-auto max-w-5xl"
      )}>
        {!isImonPage && (
          <Link
            href="/"
            className="no-underline mb-12 inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        )}

        {children}

        <div className={cn(
            !isImonPage ? "" : "max-w-5xl mx-auto px-4 lg:px-8"
        )}>
            <ProjectNavigation />
        </div>
      </main>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </SiteLayout>
  )
}
