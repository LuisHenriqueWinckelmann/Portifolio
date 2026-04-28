'use client';

import React, { useEffect, useMemo, useState } from 'react';
import BentoGrid from '@/components/BentoGrid';
import BentoGridItem from '@/components/BentoGridItem';
import { IconTableColumn } from '@tabler/icons-react';
import { IListItem } from '@/lib/types';
import ItemTwo from '@/components/ItemTwo';
import About from '@/components/About';
import SocialMedia from '@/components/SocialMedia';
import Experience from '@/components/Experience';
import MenuNavigation from '@/components/MenuNavigation';
import TechStack from '@/components/TechStack';
import SkeletonMask from '@/components/SkeletonMask';
import { options, projectsData } from '@/lib/data';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('projects');

  const initialItems = useMemo<IListItem[]>(
    () => [
      {
        header: <About />,
        className: 'md:col-span-2 px-7 py-8',
        active: true,
        category: 'about',
      },
      {
        header: <ItemTwo />,
        className: 'md:col-span-1',
        active: true,
        category: 'about',
      },
      {
        header: <SocialMedia />,
        className: 'md:col-span-1 px-7 py-8',
        active: true,
        category: 'about',
      },
      {
        header: <TechStack />,
        className: 'md:col-span-2 px-7 py-8',
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        active: true,
        category: 'about',
      },
      {
        header: <Experience />,
        className: 'md:col-span-3 md:row-span-4 p-4',
        active: true,
        category: 'about',
      },
      ...projectsData.map((project, index) => ({
        title: project.title,
        description: t(`${index}.description`),
        header: <SkeletonMask image={project.image} />,
        className: 'md:col-span-1 p-4',
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        active: true,
        category: 'projects' as const,
      })),
    ],
    [t],
  );

  const [items, setItems] = useState<IListItem[]>(initialItems);
  const [selected, setSelected] = useState<string>('all');

  useEffect(() => {
    setItems(
      initialItems
        .map((item) => ({
          ...item,
          active: selected === 'all' || item.category === selected,
        }))
        .sort((a, b) => Number(b.active) - Number(a.active)),
    );
  }, [initialItems, selected]);

  const handleChange = (status: string) => {
    setSelected(status);
  };

  return (
    <>
      <main className="px-6 py-3 sm:px-3 md:px-0">
        <MenuNavigation
          selected={selected}
          options={options}
          handleChange={handleChange}
        />
        <BentoGrid
          list={items}
          setList={setItems}
          className="mx-auto max-w-4xl md:auto-rows-[20rem]"
        >
          {items.map((item, index) => (
            <BentoGridItem
              key={`item-${index}-${item.title}`}
              index={index}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              active={item.active}
            />
          ))}
        </BentoGrid>
      </main>
    </>
  );
};

export default Page;
