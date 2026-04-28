'use client';

import React from 'react';
import { experienceData } from '@/lib/data';
import { ScrollArea } from './ui/scroll-area';
import { useTranslations } from 'next-intl';

const Experience = () => {
  const t = useTranslations('experience');

  return (
    <ScrollArea className="h-full max-h-64">
      {experienceData.map((item, i) => (
        <div key={item.id} className="group relative py-1.5 pl-5">
          <div className="mb-0.5 text-xs font-medium text-red-100">
            <span>{item.subtitle}</span>
            <span>
              {item.work_schema && (
                <span className="text-[10px] font-light text-red-200/70">
                  {` - ${item.work_schema}`}
                </span>
              )}
            </span>
          </div>
          <div className="mb-0.5 flex flex-col items-start before:absolute before:left-1.5 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-red-200/40 before:px-px after:absolute after:left-1.5 after:box-content after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-2 after:border-red-100 after:bg-pallet-pink-2 group-last:before:hidden">
            <time className="left-0 mb-0.5 inline-flex h-4 w-28 translate-y-0.5 items-center justify-center rounded-full bg-pallet-blue-4 text-[9px] font-semibold uppercase text-white">
              {t(`${i}.time`)}
            </time>
            <div className="text-[11px] font-light text-red-200">
              {item.title}
            </div>
          </div>
          <p className="line-clamp-2 text-[10px] leading-snug text-red-100/55">
            {t(`${i}.desc`)}
          </p>
        </div>
      ))}
    </ScrollArea>
  );
};

export default Experience;
