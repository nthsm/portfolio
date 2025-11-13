/* nthsm/portfolio/portfolio-1704bb279c5646eb9cac39f25da923cc404ed185/app/(posts)/its-meow-or-never/layout.tsx */
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { title, description } from './page.mdx'

export async function generateMetadata(): Promise<Metadata> {
  
  const projectTitle = (title ?? 'Untitled Project')
  const projectDescription = description

  return {
    title: {
        absolute: `${projectTitle} — Nathan Smith`
    },
    description: projectDescription,
  }
}

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return children
}