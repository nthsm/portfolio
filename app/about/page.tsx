'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Eye, Briefcase, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

interface MediumArticle {
  title: string;
  link: string;
  thumbnail: string;
  content: string;
}

export default function AboutPage() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nthsm')
      .then(res => res.json())
      .then(data => {
        setArticles(data.items);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <motion.div
      className="max-w-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div variants={itemVariants}>
            <h1 className={cn("text-6xl font-bold tracking-tight md:text-7xl gradient-text inline-block mb-12")}>
                About Me
            </h1>
        </motion.div>

        <div className="max-w-none space-y-8 text-xl text-zinc-700 dark:text-zinc-300">
            <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">My Philosophy</h2>
                <p>
                    I'm a <span className="gradient-text font-bold">user researcher</span> driven by a deep curiosity about the "why" behind human-computer interaction. I believe the most successful products are built upon a rigorous <span className="gradient-text font-bold">foundation of research</span> and a genuine understanding of the people they serve.
                </p>
            </motion.div>
            <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">My Process</h2>
                <p>
                    My approach blends <span className="gradient-text font-bold">analytical thinking</span> and <span className="gradient-text font-bold">data-driven insights</span> with the <span className="gradient-text font-bold">empathy</span> of qualitative storytelling. I love diving into complex problems, speaking with users to uncover their true needs, and synthesizing those findings into <span className="gradient-text font-bold">actionable strategies</span> that guide the design process.
                </p>
            </motion.div>
            <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">My Background</h2>
                <p>
                    I am currently completing my <span className="gradient-text font-bold">M.S. in Information Technology</span> at Florida State University, specializing in <span className="gradient-text font-bold">User-Centered Design</span>. My undergraduate background in Management Information Systems and Computer Science gives me a unique perspective, allowing me to <span className="gradient-text font-bold">bridge the gap</span> between user needs, technical feasibility, and business goals.
                </p>
            </motion.div>
            <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">My Goal</h2>
                <p>
                    Ultimately, my goal is to <span className="gradient-text font-bold">advocate for the user</span> at every stage of product development, ensuring that strategic decisions are <span className="gradient-text font-bold">grounded in evidence</span>, not just assumptions.
                </p>
            </motion.div>
        </div>

        {articles.length > 0 && (
        <motion.div className="mt-24" variants={itemVariants}>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl mb-8">
            From the Blog
            </h2>
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
    </motion.div>
  )
}
