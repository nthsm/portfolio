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
    // Pass fullWidth prop based on the route
    <SiteLayout showProgressBar fullWidth={isImonPage}>
      {/* Removed prose classes entirely from this main element */}
      <main className={cn(
        "pb-20", // Basic padding only
        !isImonPage && "prose prose-zinc dark:prose-invert mx-auto max-w-5xl" // Apply prose and constraints ONLY if NOT IMON page
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

        {/* Navigation needs to be inside a constrained container */}
        <div className={cn(!isImonPage ? "mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800" : "max-w-5xl mx-auto px-4 lg:px-8")}>
            <ProjectNavigation />
        </div>
      </main>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </SiteLayout>
  )
}
