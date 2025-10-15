'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, Award, Lightbulb, LayoutGrid, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const Expandable = ({ title, children }: { title: React.ReactNode; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left flex justify-between items-center cursor-pointer"
      >
        {title}
        <ChevronDown 
            className={cn("transition-transform duration-300", isOpen && "rotate-180")} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


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

const ExperienceItem = ({ title, company, duration, location, children }: { title: string; company: string; duration: string; location: string; children?: React.ReactNode }) => (
    <div className="relative pl-8 mb-8 last:mb-0">
        <div className="absolute left-0 top-1 h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
         <Expandable 
            title={
                <div>
                    <h3 className="text-xl font-semibold gradient-text md:inline-block">{title}</h3>
                    <p className="text-md text-zinc-600 dark:text-zinc-400">{company}</p>
                    <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                        <span>{duration}</span>
                        <span className="mx-2">•</span>
                        <span>{location}</span>
                    </div>
                </div>
            }
        >
            {children && <div className="prose prose-zinc dark:prose-invert mt-2">{children}</div>}
        </Expandable>
    </div>
);

const EducationItem = ({ degree, university, duration, location, classes }: { degree: string; university: string; duration: string; location: string, classes: string[] }) => (
     <div className="relative pl-8 mb-8 last:mb-0">
        <div className="absolute left-0 top-1 h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
        <Expandable
             title={
                <div>
                    <h3 className="text-xl font-semibold gradient-text md:inline-block">{degree}</h3>
                    <p className="text-md text-zinc-600 dark:text-zinc-400">{university}</p>
                    <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-500 mt-1">
                        <span>{duration}</span>
                        <span className="mx-2">•</span>
                        <span>{location}</span>
                    </div>
                </div>
            }
        >
            <div className="prose prose-zinc dark:prose-invert mt-2">
                <p className="font-semibold">Notable Coursework:</p>
                <ul className='list-disc pl-5'>
                    {classes.map(course => <li key={course}>{course}</li>)}
                </ul>
            </div>
        </Expandable>
    </div>
);

const SkillPill = ({ skill, relatedTo }: { skill: string, relatedTo: string[] }) => {
    return (
        <div className="relative group">
            <div className="px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700">
                {skill}
            </div>
            <div className="absolute bottom-full mb-2 hidden group-hover:block w-max bg-zinc-800 dark:bg-zinc-700 text-white text-xs rounded py-1 px-2">
                <strong>Used:</strong>
                <ul className="list-disc pl-4">
                    {relatedTo.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default function ExperiencePage() {
  return (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        <motion.div variants={itemVariants} className="text-left mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2 gradient-text leading-normal md:inline-block">{`For your convenience.`}</h1>
        </motion.div>

        <Section title="Skills" icon={Lightbulb}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Design</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill skill="Figma" relatedTo={["Freelance", "M.S. IT", "Google UX Cert", "Portfolio Website"]} />
                        <SkillPill skill="Prototyping" relatedTo={["Freelance", "M.S. IT", "Google UX Cert"]} />
                        <SkillPill skill="Wireframing" relatedTo={["Freelance", "M.S. IT", "Google UX Cert"]} />
                        <SkillPill skill="User Research" relatedTo={["Freelance", "M.S. IT", "Circuit Source"]} />
                        <SkillPill skill="Usability Testing" relatedTo={["Freelance", "M.S. IT", "Portfolio Website", "Circuit Source"]} />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Development</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill skill="HTML" relatedTo={["M.S. IT",]} />
                        <SkillPill skill="CSS" relatedTo={["M.S. IT",]} />
                        <SkillPill skill="JavaScript" relatedTo={["M.S. IT",]} />
                        <SkillPill skill="React" relatedTo={["Portfolio Website"]} />
                        <SkillPill skill="Next.js" relatedTo={["Portfolio Website"]} />
                        <SkillPill skill="Tailwind CSS" relatedTo={["Portfolio Website"]} />
                        <SkillPill skill="Python" relatedTo={["B.S. MIS"]} />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        <SkillPill skill="Obsidian" relatedTo={["M.S. IT", "Freelance"]} />
                        <SkillPill skill="Jira" relatedTo={["B.S. MIS"]} />
                        <SkillPill skill="Google Slides" relatedTo={["Google UX Cert", "Circuit Source"]} />
                        <SkillPill skill="Google Forms" relatedTo={["Google UX Cert", "Circuit Source"]} />
                        <SkillPill skill="Microsoft Excel" relatedTo={["Microsoft Excel Cert", "B.S. MIS"]} />
                    </div>
                </div>
            </div>
        </Section>

        <Section title="Experience" icon={Briefcase}>
            <ExperienceItem 
                title="Freelance UX Designer"
                company="Self-Employed"
                duration="2025 — Present"
                location="Remote"
            >
                <p>As a freelance designer, my work typically involves user research, creating wireframes and prototypes, and conducting usability tests to refine designs.</p>
            </ExperienceItem>
            <ExperienceItem 
                title="Guest Experience Associate"
                company="Target Corp."
                duration="2022 — Present"
                location="Tallahassee, FL"
            >
                <p>In this role, I focus on ensuring a positive experience for every guest. My responsibilities include addressing customer needs, resolving issues, and gathering feedback to improve in-store processes. This has given me valuable insights into customer behavior and satisfaction.</p>
            </ExperienceItem>
        </Section>

        <Section title="Education" icon={GraduationCap}>
            <EducationItem 
                degree="M.S. in Information Technology (User-Centered Design)"
                university="Florida State University"
                duration="Aug. 2025 — Dec. 2026"
                location="Tallahassee, FL"
                classes={['Usability Analysis', 'Website Development and Administration', 'Design and Production of Networked Multimedia', 'Information Behavior', 'Information Architecture', 'Digital Media Production']}
            />
            <EducationItem 
                degree="B.S. in Management Information Systems"
                university="Florida State University"
                duration="Aug. 2023 — May 2025"
                location="Tallahassee, FL"
                classes={['Introduction to Python', 'Organizational Behavior', 'Systems Analysis and Design', 'Big Data']}
            />
        </Section>
        
        <Section title="Certifications" icon={Award}>
            <div className="flex flex-col sm:flex-row gap-4">
                 <a href="https://coursera.org/share/8d94bef718bcd12eb437bb7357e24e19" target="_blank" rel="noopener noreferrer">
                    <Image src="/googleux.png" alt="Google UX Certificate" width={200} height={150} className="rounded-lg transition-transform hover:scale-105" />
                </a>
                <a href="https://www.credly.com/badges/7db8b30e-9e5b-4f0e-b38b-e81f8ccc23c5/public_url" target="_blank" rel="noopener noreferrer">
                    <Image src="/microsoftexcel.png" alt="Microsoft Excel Certificate" width={200} height={150} className="rounded-lg transition-transform hover:scale-105" />
                </a>
            </div>
        </Section>
        
        <Section title="Projects" icon={LayoutGrid}>
            <p className="text-lg">
            <Link
              href="/"
              className="group mt-2 inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-800 no-underline"
            >
              View my work here
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            </p>
        </Section>
    </motion.div>
  )
}
