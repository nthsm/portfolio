'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SiteLayout from '@/components/ui/SiteLayout'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={cn(
              'not-prose mb-4 text-8xl leading-normal font-extrabold tracking-tighter md:text-9xl',
            )}
          >
            404
          </h1>
          <p className="not-prose mb-8 text-2xl text-zinc-700 md:text-3xl dark:text-zinc-300">
            Page Not Found
          </p>
          <p className="mx-auto mb-12 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-lg font-medium text-white no-underline shadow-sm hover:bg-zinc-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </SiteLayout>
  )
}
