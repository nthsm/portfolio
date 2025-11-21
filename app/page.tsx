'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PROJECTS, projectBlurbs, type Project } from '@/app/data'
import SiteLayout from '@/components/ui/SiteLayout'
import { cn } from '@/lib/utils'
import { ArrowRight, Download, UserCheck } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ReactiveGallery } from '@/components/ui/reactive-gallery'

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

interface MediumArticle {
  title: string
  link: string
  thumbnail: string
  content: string
}

export default function HomePage() {
  const [articles, setArticles] = useState<MediumArticle[]>([])

  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nthsm',
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items.filter((item: MediumArticle) => item.title))
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <SiteLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pb-24 md:pb-32"
      >
        {/* Hero & Work Section */}
        <motion.section variants={itemVariants}>
          <div className="mb-16 text-left">
            <h1 className="mb-4 inline-block text-6xl font-medium tracking-tight md:text-7xl">
              Nathan Smith
            </h1>
            <div className="mb-6 space-y-1 text-base text-zinc-600 md:text-lg dark:text-zinc-400">
              <div className="flex items-center">
                <UserCheck className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>User Researcher & Data Analyst</span>
              </div>
            </div>
            <p className="mt-4 mb-6 max-w-2xl text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
              My goal is to translate research insights into product decisions
              that drive measurable improvements in user outcomes, conversion,
              and revenue.
            </p>
            <a
              href="/nathan_smith_resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-base font-medium text-white no-underline shadow-sm hover:bg-zinc-950 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>

          <div className="mt-24 flex flex-col gap-24 md:mt-32 md:gap-32">
            {PROJECTS.map((project: Project, index: number) => (
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
                    'overflow-hidden rounded-lg shadow-xl transition-all duration-300',
                    'hover:scale-105 hover:shadow-2xl',
                    index % 2 !== 0 && 'md:order-2',
                  )}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={800}
                      height={600}
                      className="block h-full w-full transform-gpu rounded-lg object-cover transition-transform duration-300 dark:hidden"
                    />
                    <Image
                      src={project.image.replace('.png', '-dark.png')}
                      alt={`${project.name} (Dark Mode)`}
                      width={800}
                      height={600}
                      className="hidden h-full w-full transform-gpu rounded-lg object-cover transition-transform duration-300 dark:block"
                    />
                  </div>
                </Link>
                <div
                  className={cn(
                    'flex flex-col items-start gap-4',
                    index % 2 !== 0 && 'md:order-1',
                  )}
                >
                  <h2 className="text-3xl font-medium tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-100">
                    {project.name}
                  </h2>
                  {projectBlurbs[project.id as keyof typeof projectBlurbs] && (
                    <p className="-mt-2 mb-0 text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                      {projectBlurbs[project.id as keyof typeof projectBlurbs]}
                    </p>
                  )}
                  <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="group mt-2 inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-base font-medium text-white no-underline shadow-sm hover:bg-zinc-950 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about-section"
          className="mt-24 max-w-none md:mt-32"
          variants={itemVariants}
        >
          <div className="mb-12">
            <h1
              className={cn(
                'inline-block text-6xl font-medium tracking-tight md:text-7xl',
              )}
            >
              About Me
            </h1>
          </div>
          <div>
            <motion.div
              variants={itemVariants}
              className="float-right mb-4 ml-8 hidden md:block"
              style={{ shapeOutside: 'margin-box', width: '375px' }}
            >
              <Link
                href="https://www.linkedin.com/in/nthsm"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src="/headshot.jpg"
                  alt="A headshot of Nathan Smith"
                  width={375}
                  height={375}
                  className="rounded-xl object-cover"
                  priority
                />
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mb-12 flex justify-center md:hidden"
            >
              <Link
                href="https://www.linkedin.com/in/nthsm"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src="/headshot.jpg"
                  alt="A headshot of Nathan Smith"
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                  priority
                />
              </Link>
            </motion.div>
            <div className="max-w-none space-y-8 text-xl text-zinc-700 dark:text-zinc-300">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                  My Philosophy
                </h2>
                <p>
                  I'm deeply curious about the "why" behind human-computer
                  interaction. I believe that understanding user behavior is
                  crucial to designing effective solutions. Without the users,
                  there is no product.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                  My Process
                </h2>
                <p>
                  My approach blends analytical thinking with the empathy of
                  qualitative storytelling. I assess a problem, speak with users
                  to uncover their needs, test, and synthesize those findings
                  into actionable strategies. I aim to help guide the design
                  process and deliver on business needs.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
                  My Background
                </h2>
                <p>
                  I am currently completing my M.S. in Information Technology at
                  Florida State University, specializing in User-Centered
                  Design. My undergraduate degree in Management Information
                  Systems gives me a unique perspective, allowing me to bridge
                  the gap between user needs, data analysis, and business goals.
                </p>
                <p>
                  Outside of work, you can usually find me exploring on my gravel bike
                  or diving into a new game on my PC. I'm currently playing Days Gone!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          id="blog-section"
          className="mt-24 max-w-none md:mt-32"
          variants={itemVariants}
        >
          <div className="mb-12">
            <h1
              className={cn(
                'mb-0 inline-block text-6xl font-medium tracking-tight md:text-7xl',
              )}
            >
              Medium Blog
            </h1>
          </div>
          {articles.length > 0 && (
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.slice(0, 3).map((article) => (
                  <a
                    key={article.title}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg bg-white p-6 no-underline shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-zinc-800/50"
                  >
                    <h3 className="mb-2 text-xl font-medium text-zinc-900 dark:text-zinc-100">
                      {article.title}
                    </h3>
                    <p
                      className="line-clamp-3 text-base text-zinc-600 dark:text-zinc-400"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.section>
      </motion.div>
    </SiteLayout>
  )
}