import { IExperienceData, IProjectData } from './types';

export const profile = {
  email: 'luisseverodasilva17@gmail.com',
  resumeUrl:
    'https://drive.google.com/file/d/1qK5bGBoVLSmjOEOEaoLktqR_UddZUXF0/view?usp=sharing',
  websiteUrl: '#',
  githubUsername: 'LuisHenriqueWinckelmann',
  social: {
    github: 'https://github.com/LuisHenriqueWinckelmann',
    linkedin:
      'https://www.linkedin.com/in/luis-henrique-severo-da-silva-67a154379',
    twitter: 'https://x.com/WinckelmannDev',
    instagram: 'https://www.instagram.com/luis.winckelmann',
  },
};

export const options: string[] = ['all', 'about', 'projects'];

export const experienceData: IExperienceData[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

export const projectsData: IProjectData[] = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/y2l1g36bjudgsf6yr0eg.webp',
    url: '#',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/y2l1g36bjudgsf6yr0eg.webp',
    url: 'https://icasanova.vercel.app',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/y2l1g36bjudgsf6yr0eg.webp',
    url: '#',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/y2l1g36bjudgsf6yr0eg.webp',
    url: '#',
  },
];

export const selectedReposList: string[] = [
  'meu-projeto-next',
  'meu-dashboard-react',
  'minha-api',
];
