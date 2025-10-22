'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PROJECTS } from './data'
import SiteLayout from '@/components/ui/SiteLayout'
import { cn } from '@/lib/utils'
import { ArrowRight, Download, MapPin, UserCheck } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

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

export default function HomePage() {
  return (
    <SiteLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pb-24 md:pb-32"
      >
        <motion.div className="mb-16 text-left" variants={itemVariants}>
            <h1 className="text-6xl font-bold tracking-tight md:text-7xl gradient-text inline-block mb-4">
                Nathan Smith
            </h1>
            <div className="space-y-1 text-base text-zinc-600 dark:text-zinc-400 md:text-lg mb-6">
                <div className="flex items-center">
                    <UserCheck className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>User Researcher & Experience Strategist</span>
                </div>
            </div>

            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 md:text-xl max-w-2xl mb-6">
                FSU graduate student specializing in User-Centered Design. Passionate about using mixed-methods research and data analysis to inform product strategy and create user-centric experiences.
            </p>
            <a
              href="/nathan_smith_resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32 mt-24 md:mt-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={cn(
                'grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12',
              )}
            >
              <Link
                href={project.link}
                className={cn(
                  'rounded-lg overflow-hidden group transition-shadow duration-300 shadow-xl hover:shadow-2xl',
                  index % 2 !== 0 && 'md:order-2',
                )}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover rounded-lg transform-gpu transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div
                className={cn(
                  'flex flex-col items-start gap-4',
                  index % 2 !== 0 && 'md:order-1',
                )}
              >
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
                  {project.name}
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="group mt-2 inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SiteLayout>
  )
}
