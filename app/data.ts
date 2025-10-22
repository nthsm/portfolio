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

export const PROJECTS: Project[] = [
  {
    name: 'A Mixed-Methods Study of the FSU Student P2P Marketplace Experience',
    description:
      'A research-focused case study using surveys and interviews to understand the pain points, behaviors, and needs of the FSU student community when trading used tech, culminating in data-driven design recommendations.',
    link: '/circuit-source',
    image: '/placeholder.png',
    id: 'project1',
  },
   {
    name: 'Usability Audit: A Heuristic Evaluation of a Non-Profit Website',
    description:
      "A formal usability audit applying Jakob Nielsen's heuristics to identify and prioritize actionable UX improvements for a local non-profit's website.",
    link: '/its-meow-or-never',
    image: '/placeholder.png',
    id: 'project2',
  },
  {
    name: 'Analyzing Student Feedback: A Quantitative Look at Canvas Student App Reviews',
    description:
      'A data analysis project involving the collection, categorization, and visualization of public App Store reviews to identify recurring usability issues and feature requests for the Canvas Student app.',
    link: '/canvas-review-analysis',
    image: '/placeholder.png',
    id: 'project3',
  },
  {
    name: 'Analyzing Student Wellness Data: A Study on Sleep Patterns and Stress Levels',
    description:
      'A quantitative analysis project involving data cleaning and visualization of student survey data to identify correlations between sleep habits and reported stress levels.',
    link: '/student-wellness-study',
    image: '/placeholder.png',
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