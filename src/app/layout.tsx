import './globals.css';

import QueryProvider from '@/libs/QueryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
