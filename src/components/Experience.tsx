'use client';

import React from 'react';
import { experienceData } from '@/lib/data';
import { ScrollArea } from './ui/scroll-area';
import { useTranslations } from 'next-intl';

const Experience = () => {
  const t = useTranslations('experience');

  return (
    <ScrollArea className="h-full">
      {experienceData.map((item, i) => (
        <div
          key={item.id}
          className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100/70 dark:hover:bg-white/[0.04]"
        >
          <div className="mb-1 text-sm font-semibold text-neutral-700 dark:text-neutral-100">
            <span>{t(`${i}.subtitle`)}</span>
            <span>
              {t(`${i}.workSchema`) ? (
                <span className="text-xs font-normal text-neutral-500 dark:text-neutral-300">
                  {` - ${t(`${i}.workSchema`)}`}
                </span>
              ) : null}
            </span>
          </div>
          <div className="mb-0.5 flex flex-col items-start">
            <time className="mb-1 inline-flex items-center rounded-full bg-pallet-blue-4 px-2.5 py-0.5 text-[9px] font-semibold uppercase text-white">
              {t(`${i}.time`)}
            </time>
            <div className="text-xs text-neutral-500 dark:text-neutral-300">
              {t(`${i}.title`)}
            </div>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
            {t(`${i}.desc`)}
          </p>
        </div>
      ))}
    </ScrollArea>
  );
};

export default Experience;
