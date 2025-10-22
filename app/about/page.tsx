'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

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

  return (
    <motion.div
      className="max-w-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div variants={itemVariants}>
            <h1 className={cn("text-6xl font-bold tracking-tight md:text-7xl inline-block mb-12")}>
                About Me
            </h1>
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
    </motion.div>
  )
}
