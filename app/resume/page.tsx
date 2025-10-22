'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Download, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
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

const Section = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) => (
    <motion.section variants={itemVariants} className="mb-12">
        <h2 className="flex items-center text-3xl font-bold mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <Icon className="h-7 w-7 mr-3 text-zinc-500" />
            <span>{title}</span>
        </h2>
        {children}
    </motion.section>
);

const ExperienceItem = ({ title, company, duration, location, children }: { title: string; company: string; duration: string; location: string; children?: React.ReactNode; }) => {
  return (
    <div className="relative pl-8 mb-8 last:mb-0">
        <div className="absolute left-[8px] top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600 border-2 border-zinc-100 dark:border-zinc-950"></div>
        <div>
            <h3 className="text-xl font-semibold gradient-text md:inline-block">{title}</h3>
            <p className="text-md text-zinc-600 dark:text-zinc-400">{company}</p>
            <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                <span>{duration}</span>
                <span className="mx-2">•</span>
                <span>{location}</span>
            </div>
            {/* The prose class here is fine because it's only on the text block */}
            {children && <div className="prose prose-zinc dark:prose-invert mt-2">{children}</div>}
        </div>
    </div>
  );
};

const EducationItem = ({ degree, university, duration, location }: { degree: string; university: string; duration: string; location: string; }) => {
    return (
       <div className="relative pl-8 mb-8 last:mb-0">
          <div className="absolute left-[8px] top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600 border-2 border-zinc-100 dark:border-zinc-950"></div>
          <div>
              <h3 className="text-xl font-semibold gradient-text md:inline-block">{degree}</h3>
              <p className="text-md text-zinc-600 dark:text-zinc-400">{university}</p>
              <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                  <span>{duration}</span>
                  <span className="mx-2">•</span>
                  <span>{location}</span>
              </div>
          </div>
      </div>
    );
};

const certifications = [
  { id: "Google UX Design Professional Certificate", name: "Google UX Certificate", href: "https://coursera.org/share/8d94bef718bcd12eb437bb7357e24e19", imgSrc: "/googleux.png" },
  { id: "Microsoft Office Specialist: Excel Associate", name: "Microsoft Excel Certificate", href: "https://www.credly.com/badges/7db8b30e-9e5b-4f0e-b38b-e81f8ccc23c5/public_url", imgSrc: "/microsoftexcel.png" }
];

export default function ResumePage() {

  return (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="not-prose" // This ensures prose styles from parents are ignored
    >
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between sm:items-center mb-12 gap-4">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter gradient-text leading-normal md:inline-block">Resume</h1>
            <a
              href="/nathan_smith_resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </a>
        </motion.div>

        <motion.div variants={itemVariants}>
            <Section title="Experience" icon={Briefcase}>
                <ExperienceItem
                    title="Freelance User Researcher"
                    company="Self-Employed"
                    duration="2025 — Present"
                    location="Remote"
                >
                    <ul className='list-disc pl-5'>
                      <li>Analyzed user feedback and conducted heuristic evaluations to identify key pain points.</li>
                      <li>Synthesized quantitative and qualitative data to inform design strategy.</li>
                      <li>Developed low-fidelity wireframes and prototypes based on research findings.</li>
                    </ul>
                </ExperienceItem>
                <ExperienceItem
                    title="Guest Experience Associate"
                    company="Target Corporation"
                    duration="2022 — Present"
                    location="Tallahassee, FL"
                >
                    <ul className='list-disc pl-5'>
                        <li>Identified guest pain points and needs through daily engagement to provide effective solutions.</li>
                        <li>Improved the customer journey by resolving complex guest issues through active listening.</li>
                        <li>Observed guest behaviors to identify friction points in the physical retail environment.</li>
                    </ul>
                </ExperienceItem>
            </Section>

            <Section title="Education" icon={GraduationCap}>
                <EducationItem
                    degree="M.S. in Information Technology (User-Centered Design)"
                    university="Florida State University"
                    duration="Aug. 2025 — Dec. 2026"
                    location="Tallahassee, FL"
                />
                <EducationItem
                    degree="B.S. in Management Information Systems"
                    university="Florida State University"
                    duration="Aug. 2023 — May 2025"
                    location="Tallahassee, FL"
                />
            </Section>

            <Section title="Certifications" icon={Award}>
                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4">
                    {certifications.map((cert) => (
                        <a
                            key={cert.id}
                            href={cert.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={cert.imgSrc} alt={cert.name} width={200} height={150} className="rounded-lg transition-transform hover:scale-105 object-contain" />
                        </a>
                    ))}
                </div>
            </Section>
        </motion.div>
    </motion.div>
  )
}
