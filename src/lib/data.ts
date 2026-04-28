import { IExperienceData, IProjectData } from './types';

export const profile = {
  name: 'Seu Nome',
  shortName: 'seu nome.',
  role: 'Desenvolvedor Full Stack',
  headline:
    'Desenvolvedor Full Stack focado em criar interfaces modernas, sistemas uteis e experiencias web bem cuidadas.',
  email: 'seuemail@example.com',
  resumeUrl: '#',
  websiteUrl: '#',
  githubUsername: 'seu-usuario-github',
  social: {
    github: 'https://github.com/seu-usuario-github',
    linkedin: 'https://www.linkedin.com/in/seu-perfil',
    twitter: 'https://x.com/seu-usuario',
    instagram: 'https://www.instagram.com/seu-usuario',
  },
};

export const options: string[] = ['all', 'about', 'projects'];

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
  {
    id: 4,
    title: 'Bootcamp, curso ou certificacao',
    subtitle: 'Formacao',
    desc: 'Descreva aqui uma formacao relevante.',
    time: '2022 - 2023',
  },
  {
    id: 5,
    title: 'Primeiros projetos web',
    subtitle: 'Aprendizado',
    desc: 'Descreva aqui seu inicio na programacao.',
    time: '2021 - 2022',
  },
  {
    id: 6,
    title: 'Marco opcional',
    subtitle: 'Base tecnica',
    desc: 'Remova ou edite este item se nao precisar de uma sexta experiencia.',
    time: '2020 - 2021',
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
  {
    id: 2,
    title: 'Dashboard Administrativo',
    description:
      'Painel com cards, filtros e indicadores para organizar dados de negocio de maneira visual e facil de consultar.',
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/fphb7ddemp4ixeutav1b.webp',
    url: '#',
  },
  {
    id: 3,
    title: 'Sistema Web',
    description:
      'Aplicacao web com fluxo de autenticacao, organizacao de registros e componentes reutilizaveis para acelerar novas telas.',
    image:
      'https://res.cloudinary.com/deselamak/image/upload/v1699777135/portofolio/mqprcb6todunicq4cg0a.webp',
    url: '#',
  },
  {
    id: 4,
    title: 'Aplicativo de Estudos',
    description:
      'Projeto criado para praticar consumo de API, estados no React, componentizacao e organizacao de paginas em Next.js.',
    image:
      'https://ucarecdn.com/26d0d2ab-f0d4-453f-a71c-b395c744f7b0/dailycalories.png',
    url: '#',
  },
];

export const selectedReposList: string[] = [
  'meu-projeto-next',
  'meu-dashboard-react',
  'minha-api',
];
