import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/styles/global.css';

import { ClientLayout } from '@/app/clientLayout';

const robotoFont = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Web app',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
