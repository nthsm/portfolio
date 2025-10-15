import { SiLinkedin, SiStrava } from 'react-icons/si';
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
    name: 'Ludos',
    description:
      'Ludos aims to elevate the social experience of game nights for groups of friends worldwide. The app removes common logistical hurdles by providing an intuitive platform for hosts to manage events and track scores, allowing players to focus less on the rules and more on the fun.',
    link: '/ludos',
    image: '/placeholder.png',
    id: 'project1',
  },
  {
    name: 'Circuit Source',
    description:
      'A peer-to-peer marketplace concept designed to help FSU students safely buy and sell tech and gaming gear within a trusted campus community.',
    link: '/circuit-source',
    image: '/placeholder.png',
    id: 'project2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nthsm',
    icon: SiLinkedin,
  },
  {
    label: 'Strava',
    link: 'https://www.strava.com/athletes/139602024',
    icon: SiStrava,
  },
]
