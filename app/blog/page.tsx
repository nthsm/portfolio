'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
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

export default function BlogPage() {
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
    <motion.div
      className="max-w-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className={cn("text-6xl font-bold tracking-tight md:text-7xl inline-block mb-0")}>
            From the Blog
        </h1>
      </motion.div>

        {articles.length > 0 && (
        <motion.div className="mt-24" variants={itemVariants}>
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