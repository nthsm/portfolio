'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, Award, Lightbulb, LayoutGrid, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const skillsData = {
    "Figma": ["Freelance UX Designer", "M.S. in Information Technology (User-Centered Design)", "Google UX Design Professional Certificate", "Circuit Source", "Ludos"],
    "Prototyping": ["Freelance UX Designer", "M.S. in Information Technology (User-Centered Design)", "Google UX Design Professional Certificate", "Circuit Source", "Ludos"],
    "Wireframing": ["Freelance UX Designer", "M.S. in Information Technology (User-Centered Design)", "Google UX Design Professional Certificate", "Circuit Source", "Ludos"],
    "User Research": ["Freelance UX Designer", "M.S. in Information Technology (User-Centered Design)", "Circuit Source", "Ludos"],
    "Usability Testing": ["Freelance UX Designer", "M.S. in Information Technology (User-Centered Design)", "Circuit Source"],
    "HTML": ["M.S. in Information Technology (User-Centered Design)"],
    "CSS": ["M.S. in Information Technology (User-Centered Design)"],
    "JavaScript": ["M.S. in Information Technology (User-Centered Design)"],
    "React": ["Portfolio Website"],
    "Next.js": ["Portfolio Website"],
    "Tailwind CSS": ["Portfolio Website"],
    "Python": ["B.S. in Management Information Systems"],
    "Obsidian": ["M.S. in Information Technology (User-Centered Design)", "Freelance UX Designer"],
    "Jira": ["B.S. in Management Information Systems"],
    "Google Slides": ["Google UX Design Professional Certificate", "Circuit Source", "Freelance UX Designer"],
    "Google Forms": ["Google UX Design Professional Certificate", "Circuit Source", "Freelance UX Designer"],
    "Microsoft Excel": ["B.S. in Management Information Systems", "Microsoft Office Specialist: Excel Associate"],
};

const Expandable = ({ title, children, isOpen, onToggle }: { title: React.ReactNode; children: React.ReactNode; isOpen: boolean; onToggle: () => void; }) => {
  return (
    <div>
      <div
        onClick={onToggle}
        className="w-full text-left flex items-start cursor-pointer"
      >
        <ChevronDown 
            className={cn("transition-transform duration-300 mr-4 mt-1.5 flex-shrink-0", isOpen && "rotate-180")} 
        />
        <div className="flex-grow">{title}</div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pl-10">
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

const ExperienceItem = ({ title, company, duration, location, children, id, selectedSkill }: { title: string; company: string; duration: string; location: string; children?: React.ReactNode; id: string; selectedSkill: string | null; }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isRelated = selectedSkill ? (skillsData[selectedSkill as keyof typeof skillsData] || []).includes(id) : true;
  return (
    <div className={cn("relative pl-8 mb-8 last:mb-0 transition-opacity duration-300", selectedSkill && !isRelated ? "opacity-30" : "opacity-100")}>
        <div className="absolute left-[15px] top-1 h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
         <Expandable 
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
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
};

const EducationItem = ({ degree, university, duration, location, classes, clubs, id, selectedSkill }: { degree: string; university: string; duration: string; location: string, classes: string[]; clubs?: { name: string; description: string }[]; id: string; selectedSkill: string | null; }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isRelated = selectedSkill ? (skillsData[selectedSkill as keyof typeof skillsData] || []).includes(id) : true;
  return (
     <div className={cn("relative pl-8 mb-8 last:mb-0 transition-opacity duration-300", selectedSkill && !isRelated ? "opacity-30" : "opacity-100")}>
        <div className="absolute left-[15px] top-1 h-full w-px bg-zinc-200 dark:bg-zinc-800"></div>
        <Expandable
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
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
                <ul className='list-disc pl-5 prose-li:my-1'>
                    {classes.map(course => <li key={course}>{course}</li>)}
                </ul>
                {clubs && (
                  <>
                    <p className="font-semibold mt-4">Clubs & Extracurriculars:</p>
                    <ul className='list-disc pl-5 prose-li:my-1'>
                        {clubs.map(club => <li key={club.name}>{club.name}</li>)}
                    </ul>
                    {clubs.map(club => <p key={club.name} className="mt-2 text-sm italic">{club.description}</p>)}
                  </>
                )}
            </div>
        </Expandable>
    </div>
  );
};

const SkillPill = ({ skill, onClick, isSelected }: { skill: string; onClick: () => void; isSelected: boolean }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer",
                isSelected
                    ? "bg-zinc-800 text-white dark:bg-zinc-50 dark:text-zinc-900"
                    : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700"
            )}
        >
            {skill}
        </button>
    );
};

export default function ExperiencePage() {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    const handleSkillClick = (skill: string) => {
      setSelectedSkill(prevSkill => (prevSkill === skill ? null : skill));
    };

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
                        {["Figma", "Prototyping", "Wireframing", "User Research", "Usability Testing"].map(skill => (
                            <SkillPill key={skill} skill={skill} onClick={() => handleSkillClick(skill)} isSelected={selectedSkill === skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Development</h3>
                    <div className="flex flex-wrap gap-2">
                        {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Python"].map(skill => (
                            <SkillPill key={skill} skill={skill} onClick={() => handleSkillClick(skill)} isSelected={selectedSkill === skill} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Obsidian", "Jira", "Google Slides", "Google Forms", "Microsoft Excel"].map(skill => (
                            <SkillPill key={skill} skill={skill} onClick={() => handleSkillClick(skill)} isSelected={selectedSkill === skill} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
        <motion.div variants={itemVariants}>
            <Section title="Experience" icon={Briefcase}>
                <ExperienceItem
                    id="Freelance UX Designer"
                    title="Freelance UX Designer"
                    company="Self-Employed"
                    duration="2025 — Present"
                    location="Remote"
                    selectedSkill={selectedSkill}
                >
                    <ul className='list-disc pl-5'>
                      <li>Conduct user research to uncover insights and validate design decisions.</li>
                      <li>Create wireframes and interactive prototypes to visualize and test user flows.</li>
                      <li>Perform usability testing to identify pain points and refine the user experience.</li>
                    </ul>
                </ExperienceItem>
                <ExperienceItem
                    id="Guest Experience Associate"
                    title="Guest Experience Associate"
                    company="Target Corporation"
                    duration="2022 — Present"
                    location="Tallahassee, FL"
                    selectedSkill={selectedSkill}
                >
                    <ul className='list-disc pl-5'>
                        <li>Address guest needs and resolve issues to ensure a positive in-store experience.</li>
                        <li>Gather and relay customer feedback to management for process improvements.</li>
                        <li>Develop a deep understanding of customer behavior and satisfaction in a fast-paced retail environment.</li>
                    </ul>
                </ExperienceItem>
            </Section>

            <Section title="Education" icon={GraduationCap}>
                <EducationItem
                    id="M.S. in Information Technology (User-Centered Design)"
                    degree="M.S. in Information Technology (User-Centered Design)"
                    university="Florida State University"
                    duration="Aug. 2025 — Dec. 2026"
                    location="Tallahassee, FL"
                    classes={['Usability Analysis', 'Website Development and Administration', 'Design and Production of Networked Multimedia', 'Information Behavior', 'Information Architecture', 'Digital Media Production']}
                    clubs={[{ name: 'The UX Collective @ FSU Member', description: "Specializing in User-Centered Design to deepen my passion for creating intuitive and human-centered technology." }]}
                    selectedSkill={selectedSkill}
                />
                <EducationItem
                    id="B.S. in Management Information Systems"
                    degree="B.S. in Management Information Systems"
                    university="Florida State University"
                    duration="Aug. 2023 — May 2025"
                    location="Tallahassee, FL"
                    classes={['Introduction to Python', 'Organizational Behavior', 'Systems Analysis and Design', 'Big Data']}
                    clubs={[{ name: 'WVFS Tallahassee Development co-Director', description: "Obtained a minor in Computer Science to expand my knowledge of the technical and business sides of product development." }]}
                    selectedSkill={selectedSkill}
                />
            </Section>

            <Section title="Certifications" icon={Award}>
                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4">
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
    </motion.div>
  )
}
