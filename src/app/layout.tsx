import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Archivo_Narrow, Bagel_Fat_One, Modak, Orbit } from 'next/font/google';
import { Toaster } from 'sonner';

const archivo = Archivo_Narrow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-archivo',
});

const bagel = Bagel_Fat_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bagel',
});

const orbit = Orbit({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-orbit',
});

const modak = Modak({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-modak',
});

const APP_NAME = 'WINE';
const APP_DEFAULT_TITLE = 'WINE APP';
const APP_TITLE_TEMPLATE = '%s - WINE App';
const APP_DESCRIPTION = 'FIND YOUR TASTE';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};
import QueryProvider from '@/libs/queryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${archivo.variable} ${bagel.variable} ${orbit.variable} ${modak.variable}`}
      lang='ko'
    >
      <body>
        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>

        <Toaster richColors position='top-center' />
        <div id='modal-root' />
      </body>
    </html>
  );
}
