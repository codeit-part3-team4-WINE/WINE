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
        <Header />
        <QueryProvider>{children}</QueryProvider>
        <Footer />
        <div id='modal-root' />
      </body>
    </html>
  );
}
