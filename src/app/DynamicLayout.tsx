'use client';

import './globals.css';

import { usePathname } from 'next/navigation';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function DynamicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <>
      {!isAuthPage && (
        <header className='mx-auto w-full max-w-[350rem] px-[5vw] md:px-[10vw] xl:px-[15vw]'>
          <Header />
        </header>
      )}
      {children}

      {!isAuthPage && (
        <footer className='w-screen'>
          <Footer />
        </footer>
      )}
    </>
  );
}
