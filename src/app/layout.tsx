import './globals.css';

import QueryProvider from '@/libs/queryProvider';

import DynamicLayout from './DynamicLayout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
<body className='overflow-x-hidden'>
    <header className='mx-auto w-full max-w-[350rem] px-[5vw] md:px-[10vw] xl:px-[15vw]'>
      <Header />
    </header>
    <main className='mx-auto my-10 w-full max-w-[350rem] px-[5vw] md:px-[10vw] xl:px-[15vw]'>
      <QueryProvider>{children}</QueryProvider>
    </main>
    <footer>
      <Footer />
    </footer>
    <div id='modal-root' />
  </body>
    </html>
  );
}
