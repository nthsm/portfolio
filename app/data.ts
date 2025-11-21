import { SiLinkedin, SiMedium } from 'react-icons/si'
import { IconType } from 'react-icons'

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
  project1: 'Mixed-Methods Research | Data-Driven Product Strategy',
  project2: 'Research Humility | Heuristic Evaluation | Usability Testing',
  project4: 'Quantitative Data Analysis | Data Integrity | Metrics',
  project5: 'Competitive Benchmarking | Python Sentiment Analysis | Mobile Usability',
}

export const PROJECTS: Project[] = [
  {
    name: 'Sleeper Mobile Usability',
    description:
      "A mixed-methods benchmark of Sleeper vs. ESPN, utilizing usability testing and programmatic sentiment analysis to quantify the impact of features such as gambling on core app utility.",
    link: '/sleeper-research',
    image: '/project5-tn.png',
    id: 'project5',
  },
  {
    name: 'FSU Tech Connect',
    description:
      'A mixed-methods study to uncover student needs for a P2P tech marketplace, translating research data into actionable feature recommendations and a viable product strategy.',
    link: '/p2p-marketplace-research',
    image: '/project1-tn.png',
    id: 'project1',
  },
  {
    name: 'Heuristics vs. Reality',
    description:
      'A case study in challenging heuristic bias with user data, leading to a pivot that delivered targeted, high-impact recommendations to a non-profit stakeholder.',
    link: '/its-meow-or-never',
    image: '/project2-tn.png',
    id: 'project2',
  },
  {
    name: 'Student Wellness Report',
    description:
      'A quantitative analysis demonstrating data cleaning and rigor to find correlations between sleep habits and stress, highlighting the importance of data integrity in research.',
    link: '/student-wellness-study',
    image: '/project4-tn.png',
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