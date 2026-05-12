'use client';

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconCloudDownload } from '@tabler/icons-react';
import Image from 'next/image';
import { profile } from '@/lib/data';
import { useTranslations } from 'next-intl';

const LinkMemojiResume = () => {
  const t = useTranslations('resume');
  const controls = useAnimation();
  const controlsIcon = useAnimation();

  const [memoji, setMemoji] = useState('/memoji-1.png');

  const hoverAnimation = {
    scale: 1.1,
    transition: { duration: 0.5 },
  };

  const unhoverAnimation = {
    scale: 1,
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex flex-row justify-between overflow-hidden">
      <motion.div animate={controls} aria-hidden="true">
        <Image
          src={memoji}
          alt={t('memojiAlt')}
          width={150}
          height={150}
          priority
        />
      </motion.div>
      <motion.a
        target={'_blank'}
        href={profile.resumeUrl}
        onTouchStart={() => {
          controls.start(hoverAnimation);
          controlsIcon.start({
            scale: 1,
            display: 'block',
            transition: { duration: 0.5 },
          });
          setMemoji('/memoji-2.png');
        }}
        onTouchEnd={() => {
          controls.start(unhoverAnimation);
          controlsIcon.start({
            scale: 0,
            display: 'none',
            transition: { duration: 0.5 },
          });
          setMemoji('/memoji-1.png');
        }}
        onHoverStart={() => {
          controls.start(hoverAnimation);
          controlsIcon.start({
            scale: 1,
            display: 'block',
            transition: { duration: 0.5 },
          });
          setMemoji('/memoji-2.png');
        }}
        onHoverEnd={() => {
          controls.start(unhoverAnimation);
          controlsIcon.start({
            scale: 0,
            display: 'none',
            transition: { duration: 0.5 },
          });
          setMemoji('/memoji-1.png');
        }}
        className="group relative inline-flex h-8 cursor-pointer overflow-hidden rounded-full border border-slate-200 px-[2px] py-1.5 focus:outline-none"
      >
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm text-gray-900 backdrop-blur-3xl dark:bg-slate-950 dark:text-white">
          {t('label')}{' '}
          <span className="ml-1 group-hover:hidden group-hover:transition-all">
            &rarr;
          </span>
          <motion.span initial={{ display: 'none' }} animate={controlsIcon}>
            <IconCloudDownload
              className="ml-2 font-semibold"
              size={18}
              strokeWidth={1.5}
            />
          </motion.span>
        </span>
      </motion.a>
    </div>
  );
};

export default LinkMemojiResume;
