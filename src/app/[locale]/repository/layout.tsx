import type { Metadata } from 'next';
import { useLocale, NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'repositories.metadata',
  });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/memoji-2.png',
          href: '/memoji-2.png',
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: '/memoji-1.png',
          href: '/memoji-1.png',
        },
      ],
    },
  };
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
