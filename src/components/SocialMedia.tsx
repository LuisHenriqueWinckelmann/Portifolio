'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FaXTwitter } from 'react-icons/fa6';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { IListSocialMedia } from '@/lib/types';
import { profile } from '@/lib/data';

const socialMediaList: IListSocialMedia[] = [
  {
    icon: <Github className="text-white" />,
    link: profile.social.github,
    text: 'Github',
    color: 'black dark:text-white',
    borderColor: 'border-black dark:border-white',
    shadow: 'shadow-black',
  },
  {
    icon: <Linkedin />,
    link: profile.social.linkedin,
    text: 'Linkedin',
    color: 'pallet-blue-4',
    borderColor: 'border-pallet-blue-3',
    shadow: 'shadow-blue-700',
  },
  {
    icon: <FaXTwitter />,
    link: profile.social.twitter,
    text: 'Twitter / X',
    color: 'pallet-blue-1',
    borderColor: 'border-pallet-blue-1',
    shadow: 'shadow-blue-500',
  },
  {
    icon: <Instagram />,
    link: profile.social.instagram,
    text: 'Instagram',
    color: 'pallet-pink-2',
    borderColor: 'border-pallet-pink-2',
    shadow: 'shadow-pink-500',
  },
  {
    icon: <Mail />,
    link: `mailto:${profile.email}`,
    text: 'Email',
    color: 'pallet-purple-2',
    borderColor: 'border-pallet-purple-2',
    shadow: 'shadow-purple-700',
  },
];

const SocialMedia = () => {
  return (
    <div className="flex h-full w-full items-center">
      <ul className="w-full space-y-3">
        {socialMediaList.map((item, i) => (
          <motion.li
            key={item.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex w-full cursor-pointer items-center justify-start rounded-md border bg-white px-2 py-1.5 transition-all hover:bg-transparent hover:shadow-[4px_4px_0px_0px] hover:shadow-gray-800 dark:bg-card dark:hover:bg-accent dark:hover:shadow-[4px_4px_0px_0px] dark:hover:shadow-accent',
                item.borderColor,
              )}
            >
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-[10px] p-2 text-white',
                  `bg-${item.color}`,
                  {
                    'bg-black': i === 0,
                  },
                )}
              >
                {item.icon}
              </div>
              <span className={cn('ml-2', `text-${item.color}`)}>
                {item.text}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
