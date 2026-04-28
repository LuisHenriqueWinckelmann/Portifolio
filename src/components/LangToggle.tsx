import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const TOGGLE_CLASSES =
  'text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10';

const LangToggle = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleLocale = () => {
    router.push(locale === 'pt' ? '/en' : '/pt');
  };

  if (locale === 'undefined') return null;

  return isMounted ? (
    <SliderToggle selected={locale} setSelected={toggleLocale} />
  ) : null;
};

const SliderToggle = ({
  selected,
  setSelected,
}: {
  selected: string | undefined;
  setSelected: () => void;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === 'en' ? 'text-white' : 'text-slate-300'
        }`}
        onClick={setSelected}
      >
        <span className="relative z-10 text-lg">EN</span>
        <span className="relative z-10">EN</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === 'pt' ? 'text-white' : 'text-slate-800'
        }`}
        onClick={setSelected}
      >
        <span className="relative z-10 text-lg">BR</span>
        <span className="relative z-10">PT</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === 'pt' ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
          className="h-full w-1/2 animate-gradient rounded-full bg-[linear-gradient(to_right,theme(colors.pallet-pink.1),theme(colors.pallet-pink.2),theme(colors.pallet-purple.1),theme(colors.pallet-purple.2),theme(colors.pallet-pink.1),theme(colors.pallet-pink.2),theme(colors.pallet-purple.1),theme(colors.pallet-pink.1))] bg-[length:200%_auto] shadow-md"
        />
      </div>
    </div>
  );
};

export default LangToggle;
