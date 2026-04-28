import { IExperienceData, IProjectData } from './types';

export const profile = {
  name: 'Luis Henrique Winckelmann',
  shortName: 'Luis Winckelmann',
  role: 'Desenvolvedor Full Stack Java',
  headline:
    'Desenvolvedor Full Stack Java focado em criar interfaces modernas, sistemas uteis e facilidades para o seu negocio.',
  email: 'luisseverodasilva17@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1qK5bGBoVLSmjOEOEaoLktqR_UddZUXF0/view?usp=sharing',
  websiteUrl: '#',
  githubUsername: 'LuisHenriqueWinckelmann',
  social: {
    github: 'https://github.com/LuisHenriqueWinckelmann',
    linkedin: 'https://www.linkedin.com/in/luis-henrique-severo-da-silva-67a154379',
    twitter: 'https://x.com/WinckelmannDev',
    instagram: 'https://www.instagram.com/luis.winckelmann',
  },
};

export const options: string[] = ['all', 'about'];

export const experienceData: IExperienceData[] = [
  {
    id: 1,
    title: 'Sua empresa atual ou projeto principal',
    subtitle: 'Desenvolvedor Full Stack',
    desc: 'Descreva aqui sua experiencia mais recente.',
    time: '2025 - Presente',
  },
  {
    id: 2,
    title: 'Projeto profissional ou freelance',
    subtitle: 'Frontend Developer',
    work_schema: 'Freelance',
    desc: 'Descreva aqui uma experiencia anterior.',
    time: '2024 - 2025',
  },
  {
    id: 3,
    title: 'Projeto de estudos avancado',
    subtitle: 'React e Next.js',
    desc: 'Descreva aqui um projeto que mostre sua evolucao tecnica.',
    time: '2023 - 2024',
  },
];

export const projectsData: IProjectData[] = [
  {
    id: 1,
    title: 'Projeto Frontend',
    description:
      'Interface responsiva criada para apresentar um produto digital com foco em performance, clareza visual e boa experiencia de navegacao.',
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
