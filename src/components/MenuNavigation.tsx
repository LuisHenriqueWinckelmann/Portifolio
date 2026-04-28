import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { mochiy_pop_one } from '@/lib/fonts';
import { profile } from '@/lib/data';

interface Props {
  selected?: string;
  options?: string[];
  handleChange?: (status: string) => void;
}

const MenuNavigation = ({ selected, options, handleChange }: Props) => {
  const t = useTranslations('navigation');

  return (
    <MaxWidthWrapper className="flex flex-col items-center py-6 sm:flex-row">
      <div className="relative">
        <h2
          className={cn(
            'text-bold mb-2 animate-gradient bg-[linear-gradient(to_right,theme(colors.red.300),theme(colors.pallet-blue.1),theme(colors.pallet-blue.2),theme(colors.pallet-pink.2),theme(colors.red.200),theme(colors.pallet-blue.2),theme(colors.pallet-blue.1),theme(colors.red.300))] bg-[length:200%_auto] bg-clip-text text-2xl text-transparent sm:mb-0',
            mochiy_pop_one.className,
          )}
        >
          {profile.shortName}
        </h2>
      </div>
      {options && handleChange ? (
        <nav className="mx-auto flex w-fit flex-wrap gap-2 rounded-full bg-slate-200 p-1.5 dark:border dark:border-white/[0.2] dark:bg-card">
          {options.map((option) => (
            <Chip
              text={t(option)}
              option={option}
              selected={selected === option}
              setSelected={handleChange}
              key={option}
            />
          ))}
        </nav>
      ) : null}
    </MaxWidthWrapper>
  );
};

const Chip = ({
  text,
  option,
  selected,
  setSelected,
}: {
  text: string;
  option: string;
  selected: boolean;
  setSelected: (status: string) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => setSelected(option)}
      className={`${
        selected
          ? 'text-gray-900'
          : 'text-gray-500 hover:bg-slate-700 hover:text-slate-200'
      } relative rounded-md px-2 py-1 text-sm transition-colors sm:px-3.5 sm:py-0.5`}
    >
      <span className="relative z-10">{text}</span>
      {selected ? (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-red-100 to-white shadow-md shadow-red-950/20 dark:from-red-500 dark:to-red-200 dark:shadow-red-950/60"
        />
      ) : null}
    </button>
  );
};

export default MenuNavigation;
