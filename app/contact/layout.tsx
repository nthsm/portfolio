import SiteLayout from '@/components/ui/SiteLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function LayoutContactPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <main className="prose prose-xl prose-zinc dark:prose-invert mx-auto max-w-none pb-20">
        {children}
      </main>
    </SiteLayout>
  )
}
