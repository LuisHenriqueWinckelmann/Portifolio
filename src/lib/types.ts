import { StaticImageData } from 'next/image';

export interface IExperienceData {
  id: number;
}

export interface IBentoGridItem {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  url?: string;
  index: number;
  active?: boolean;
}

export interface IListItem {
  header: React.JSX.Element;
  className: string;
  active: boolean;
  category: 'home' | 'about' | 'projects';
  title?: string;
  description?: string;
  url?: string;
  icon?: React.ReactNode;
}

export interface IListSocialMedia {
  labelKey: string;
  link: string;
  color: string;
  borderColor: string;
  icon: React.ReactNode;
}

export interface IProjectData {
  id: number;
  image: string | StaticImageData;
  url: string;
}
