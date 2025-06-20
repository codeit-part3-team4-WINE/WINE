import './globals.css';

import type { Metadata, Viewport } from 'next';

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

import DynamicLayout from './DynamicLayout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <DynamicLayout>
          <main className='mx-auto my-10 min-h-screen w-full max-w-[350rem] px-[5vw] md:px-[10vw] xl:px-[15vw]'>
            <QueryProvider>{children}</QueryProvider>
          </main>
        </DynamicLayout>

        <div id='modal-root' />
      </body>
    </html>
  );
}
