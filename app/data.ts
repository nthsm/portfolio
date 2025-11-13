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
  project1: 'UX Research | Survey Design | Feature Strategy',
  project2: 'UX Research | Heuristic Evaluation | Usability Testing',
  project3: 'Data Analysis | Python | Sentiment Analysis',
  project4: 'Data Analysis | Data Visualization | Looker Studio'
};


export const PROJECTS: Project[] = [
  {
    name: 'FSU Tech Connect: A P2P Marketplace Study',
    description:
      'A mixed-methods study to uncover student needs for a peer-to-peer tech marketplace, translating research insights into actionable feature recommendations.',
    link: '/p2p-marketplace-research',
    image: '/project1-tn.png',
    id: 'project1',
  },
  {
    name: 'Pivoting for Paws: A UX Research Case Study',
    description:
      "A case study in challenging assumptions. How initial heuristics were corrected by user data, leading to targeted, high-impact recommendations for a non-profit.",
    link: '/its-meow-or-never',
    image: '/project2-tn.png',
    id: 'project2',
  },
  {
    name: 'The Wellness Report: Sleep vs. Stress',
    description:
      'A quantitative analysis of student survey data to find correlations between sleep habits and stress. Cleaned, visualized, and presented findings using Excel and Looker Studio.',
    link: '/student-wellness-study',
    image: '/project4-tn.png',
    id: 'project4',
  },
  {
    name: "The Gamer's Voice: A Reddit Data Analysis",
    description:
      'A data-driven analysis using Python to scrape and analyze community discussions on Reddit, identifying key user pain points and feature opportunities for handheld gaming.',
    link: '/handheld-analysis',
    image: '/project3-tn.png',
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
    label: 'Medium',
    link: 'https://medium.com/@nthsm',
    icon: SiMedium,
  },
]