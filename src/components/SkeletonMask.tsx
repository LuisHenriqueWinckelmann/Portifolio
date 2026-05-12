import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

interface Props {
  image?: string | StaticImageData;
}

const SkeletonMask = ({ image }: Props) => {
  const t = useTranslations('projects');

  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-[28px] border border-black/[0.2] border-slate-100 bg-black/[0.2] bg-neutral-300 dark:border-slate-900">
      {image && (
        <Image
          src={image}
          alt={t('imageAlt')}
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-[26px]"
          priority
          lazyBoundary="100px"
        />
      )}
    </div>
  );
};

export default SkeletonMask;
