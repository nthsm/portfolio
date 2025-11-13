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
  project4: 'Data Analysis | Data Visualization | Looker Studio',
  project5: 'Comparative Usability Study | Benchmarking | UX Research',
};


export const PROJECTS: Project[] = [
  {
    name: 'FSU Tech Connect',
    description:
      'A mixed-methods study to uncover student needs for a peer-to-peer tech marketplace, translating research insights into actionable feature recommendations.',
    link: '/p2p-marketplace-research',
    image: '/project1-tn.png',
    id: 'project1',
  },
  {
    name: 'Pivoting for Paws',
    description:
      "A case study in challenging assumptions. How initial heuristics were corrected by user data, leading to targeted, high-impact recommendations for a non-profit.",
    link: '/its-meow-or-never',
    image: '/project2-tn.png',
    id: 'project2',
  },
  {
    name: "The Handheld Gamer's Voice",
    description:
      'A data-driven analysis using Python to scrape and analyze community discussions on Reddit, identifying key user pain points and feature opportunities for handheld gaming.',
    link: '/handheld-analysis',
    image: '/project3-tn.png',
    id: 'project3',
  },
  {
    name: 'Student Wellness Report',
    description:
      'A quantitative analysis of student survey data to find correlations between sleep habits and stress. Cleaned, visualized, and presented findings using Excel and Looker Studio.',
    link: '/student-wellness-study',
    image: '/project4-tn.png',
    id: 'project4',
  },
  {
    name: 'Sleeper vs. Competitors',
    description:
      'A comparative usability study analyzing how Sleeper’s core social features (chat, media sharing) perform against key competitors. This project identifies key friction points and strategic opportunities to enhance user engagement and solidify Sleeper’s mission to connect friends over sports.',
    link: '/sleeper-research',
    image: '/project5-tn.png',
    id: 'project5',
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