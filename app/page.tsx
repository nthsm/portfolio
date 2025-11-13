'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PROJECTS, projectBlurbs } from './data'
import SiteLayout from '@/components/ui/SiteLayout'
import { cn } from '@/lib/utils'
import { ArrowRight, Download, MapPin, UserCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

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
  title: string;
  link: string;
  thumbnail: string;
  content: string;
}

export default function HomePage() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nthsm')
      .then(res => res.json())
      .then(data => {
        setArticles(data.items.filter((item: MediumArticle) => item.title));
      })
      .catch(err => console.error(err));
  }, []);

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
            <h1 className="text-6xl font-bold tracking-tight md:text-7xl inline-block mb-4">
                Nathan Smith
            </h1>
            <div className="space-y-1 text-base text-zinc-600 dark:text-zinc-400 md:text-lg mb-6">
                <div className="flex items-center">
                    <UserCheck className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>User Experience Researcher & Data Analyst</span>
                </div>
            </div>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 md:text-xl max-w-2xl mb-6">
                Graduate student specializing in User-Centered Design. Passionate about using mixed-methods research and data analysis to inform product strategy and create user-centric experiences.
            </p>
            <a
              href="/nathan_smith_resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>

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
                    'rounded-lg overflow-hidden transition-all duration-300 shadow-xl',
                    'hover:shadow-2xl hover:scale-105',
                    index % 2 !== 0 && 'md:order-2',
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover rounded-lg transform-gpu transition-transform duration-300"
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
                  {projectBlurbs[project.id as keyof typeof projectBlurbs] && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 -mt-2 mb-0">
                      {projectBlurbs[project.id as keyof typeof projectBlurbs]}
                    </p>
                  )}
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
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about-section"
          className="max-w-none mt-24 md:mt-32"
          variants={itemVariants}
        >
          <div className="mb-12">
            <h1 className={cn("text-6xl font-bold tracking-tight md:text-7xl inline-block")}>
                About Me
            </h1>
          </div>
          <div>
            <motion.div
              variants={itemVariants}
              className="float-right ml-8 mb-4 hidden md:block"
              style={{ shapeOutside: 'margin-box', width: '375px' }}
             >
              <Image
                src="/headshot.jpg"
                alt="A headshot of Nathan Smith"
                width={375}
                height={375}
                className="rounded-xl object-cover border-4 border-zinc-200 dark:border-zinc-800 shadow-lg"
                priority
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center mb-12 md:hidden">
              <Image
                src="/headshot.jpg"
                alt="A headshot of Nathan Smith"
                width={300}
                height={300}
                className="rounded-xl object-cover border-4 border-zinc-200 dark:border-zinc-800 shadow-lg"
                priority
              />
            </motion.div>
            <div className="max-w-none space-y-8 text-xl text-zinc-700 dark:text-zinc-300">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">My Philosophy</h2>
                <p>
                  I'm a <span className="font-bold">user researcher</span> driven by a deep curiosity about the "why" behind human-computer interaction. I believe the most successful products are built upon a rigorous <span className="font-bold">foundation of research</span> and a genuine understanding of the people they serve.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">My Process</h2>
                <p>
                  My approach blends <span className="font-bold">analytical thinking</span> and <span className="font-bold">data-driven insights</span> with the <span className="font-bold">empathy</span> of qualitative storytelling. I love diving into complex problems, speaking with users to uncover their true needs, and synthesizing those findings into <span className="font-bold">actionable strategies</span> that guide the design process.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">My Background</h2>
                <p>
                  I am currently completing my <span className="font-bold">M.S. in Information Technology</span> at Florida State University, specializing in <span className="font-bold">User-Centered Design</span>. My undergraduate background in Management Information Systems and Computer Science gives me a unique perspective, allowing me to <span className="font-bold">bridge the gap</span> between user needs, technical feasibility, and business goals.
                </p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">My Goal</h2>
                <p>
                  Ultimately, my goal is to <span className="font-bold">advocate for the user</span> at every stage of product development, ensuring that strategic decisions are <span className="font-bold">grounded in evidence</span>, not just assumptions.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Blog Section */}
        <motion.section
          id="blog-section"
          className="max-w-none mt-24 md:mt-32"
          variants={itemVariants}
        >
          <div className="mb-12">
            <h1 className={cn("text-6xl font-bold tracking-tight md:text-7xl inline-block mb-0")}>
                From the Blog
            </h1>
          </div>
          {articles.length > 0 && (
          <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article) => (
                  <a
                  key={article.title}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white dark:bg-zinc-800/50 rounded-lg shadow-md hover:shadow-xl transition-shadow no-underline"
                  >
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">{article.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-base line-clamp-3" dangerouslySetInnerHTML={{ __html: article.content }} />
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
