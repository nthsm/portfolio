import { SiLinkedin, SiMedium } from 'react-icons/si';
import { IconType } from 'react-icons';

export type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type SocialLink = {
  label: string
  link: string
  icon: IconType
}

export const projectBlurbs: { [key: string]: string } = {
  project1: 'UX Research | Data Analysis | Feature Prioritization',
  project2: 'UX Design | Heuristics | User Testing | Prototyping',
  project3: 'Data Analysis | Sentiment Analysis | Python',
  project4: 'Data Analysis | Survey Insights | Data Visualization'
};


export const PROJECTS: Project[] = [
  {
    name: 'FSU P2P Tech Marketplace: A User Research Deep Dive',
    description:
      'A mixed-methods research study analyzing FSU student behaviors, needs, and pain points regarding peer-to-peer tech marketplaces, culminating in data-driven feature recommendations.',
    link: '/p2p-marketplace-research',
    image: '/placeholder.png',
    id: 'project1',
  },
  {
    name: 'Redesign: It\'s Meow or Never',
    description:
      "A comprehensive UX project involving heuristic evaluation, user research, prototyping, and usability testing to improve a non-profit's website and better support their mission.",
    link: '/its-meow-or-never',
    image: '/project2-prototype-hero.png',
    id: 'project2',
  },
  {
    name: 'Student Wellness Data: Sleep Strategies and Stress Levels',
    description:
      'A quantitative analysis project involving data cleaning and visualization of student survey data to identify correlations between sleep habits and reported stress levels.',
    link: '/student-wellness-study',
    image: '/project4-lookerstudio.png',
    id: 'project4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nthsm',
    icon: SiLinkedin,
  },
  {
    label: 'Medium',
    link: 'https://medium.com/@nthsm',
    icon: SiMedium,
  },
]