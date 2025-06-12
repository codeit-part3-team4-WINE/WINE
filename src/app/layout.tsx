import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import QueryProvider from '@/libs/queryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <header className='mx-auto w-full max-w-[350rem] px-[5vw] md:px-[10vw] xl:px-[15vw]'>
          <Header />
        </header>
        <main className='mx-auto my-10 w-full max-w-[350rem] px-[5vw] md:px-[10vw] xl:px-[15vw]'>
          <QueryProvider>{children}</QueryProvider>
        </main>
        <footer className='w-screen'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
