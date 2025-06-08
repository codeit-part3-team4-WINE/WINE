import './globals.css';

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
        <div id='modal-root' />
      </body>
    </html>
  );
}
