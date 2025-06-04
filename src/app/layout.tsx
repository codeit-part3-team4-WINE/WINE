import './globals.css';

import QueryProvider from '@/libs/queryProviderRename';

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
