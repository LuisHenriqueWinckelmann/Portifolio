import type { Metadata } from 'next';
import './globals.css';
import Theme from '@/components/ThemeProvider';
import { useLocale, NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import PageTransitionEffect from './pageTransitionEffect';
import Footer from '@/components/Footer';
import Inner from '@/components/layouts/inner';
import { poppins } from '@/lib/fonts';
import { profile } from '@/lib/data';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'metadata',
  });
  const metadataBase = new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  );

  return {
    metadataBase,
    title: t('title'),
    description: t('description'),
    keywords: t.raw('keywords'),
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
    openGraph: {
      title: t('title'),
      type: 'website',
      images:
        'https://ucarecdn.com/b624aa7d-978f-44ef-8e45-bf3c12f1e846/memojilaptop1.png',
      url: profile.websiteUrl,
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images:
        'https://ucarecdn.com/b624aa7d-978f-44ef-8e45-bf3c12f1e846/memojilaptop1.png',
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
      <html lang={locale} suppressHydrationWarning>
        <body className={poppins.className}>
          <PageTransitionEffect>
            <Theme>
              <Inner>
                <div className="relative w-full bg-background-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                  <div className="relative z-50">{children}</div>
                  <Footer />
                </div>
              </Inner>
            </Theme>
          </PageTransitionEffect>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
