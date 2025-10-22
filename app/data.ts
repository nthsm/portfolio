import { SiLinkedin, SiGithub, SiMedium } from 'react-icons/si';
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
      'A research-focused case study to understand the pain points, behaviors, and needs of the FSU student community when trading used tech, culminating in a data-driven design concept.',
    link: '/circuit-source',
    image: '/placeholder.png',
    id: 'project1',
  },
   {
    name: 'Usability Audit: A Heuristic Evaluation of a Non-Profit Website',
    description:
      "A formal usability audit of a local non-profit's website, using Jakob Nielsen's 10 usability heuristics to identify and prioritize key areas for UX and UI improvements.",
    link: '/itsmeowornever',
    image: '/placeholder.png',
    id: 'project2',
  },
  {
    name: 'Analyzing User Feedback: A Quantitative Look at FSU App Reviews',
    description:
      'A data analysis project categorizing and visualizing hundreds of public App Store reviews for an FSU-related mobile app to identify recurring user pain points and feature requests.',
    link: '/ludos',
    image: '/placeholder.png',
    id: 'project3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nthsm',
    icon: SiLinkedin,
  },
  {
    label: 'GitHub',
    link: 'https://github.com/nthsm',
    icon: SiGithub,
  },
  {
    label: 'Medium',
    link: 'https://medium.com/@nthsm',
    icon: SiMedium,
  },
]