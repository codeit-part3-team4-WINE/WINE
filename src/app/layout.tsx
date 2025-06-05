import './globals.css';

import Footer from '@/components/Footer';
import QueryProvider from '@/libs/queryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
