import SiteLayout from '@/components/ui/SiteLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume',
}

export default function LayoutResumePage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SiteLayout>
      <main className="w-full pb-20">
        {children}
      </main>
    </SiteLayout>
  )
}