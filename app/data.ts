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
    name: 'FSU Tech Connect: A P2P Marketplace Study',
    description:
      'A mixed-methods study to uncover student needs for a peer-to-peer tech marketplace, translating research insights into actionable feature recommendations.',
    link: '/p2p-marketplace-research',
    image: '/project1-bg.png',
    id: 'project1',
  },
  {
    name: 'Pivoting for Paws: A UX Research Case Study',
    description:
      "A case study in challenging assumptions. How initial heuristics were corrected by user data, leading to targeted, high-impact recommendations for a non-profit.",
    link: '/its-meow-or-never',
    image: '/project2-prototype-hero.png',
    id: 'project2',
  },
  {
    name: "The Gamer's Voice: A Reddit Data Analysis",
    description:
      'A data-driven analysis using Python to scrape and analyze community discussions on Reddit, identifying key user pain points and feature opportunities for handheld gaming.',
    link: '/handheld-analysis',
    image: '/project3-bg.png',
    id: 'project3',
  },
  {
    name: 'The Wellness Report: Sleep vs. Stress',
    description:
      'A quantitative analysis of student survey data to find correlations between sleep habits and stress. Cleaned, visualized, and presented findings using Excel and Looker Studio.',
    link: '/student-wellness-study',
    image: '/project4-lookerstudio.png',
    id: 'project4',
  },
  {
    name: 'Sleeper vs. [Competitor]: A Usability Benchmark',
    description:
      'A comparative usability study analyzing how Sleeper’s core social features (chat, media sharing) perform against key competitors. This project identifies key friction points and strategic opportunities to enhance user engagement and solidify Sleeper’s mission to connect friends over sports.',
    link: '/sleeper-research',
    image: '/placeholder.png',
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