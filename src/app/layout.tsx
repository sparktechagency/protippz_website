import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/provider/ContextProvider';
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: 'PROTIPPZ',
  description: 'protippz',
  keywords:'protippz',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://protippz.com',
    title: 'PROTIPPZ',
    description: 'protippz',
    images: [
      {
        url: 'https://i.ibb.co.com/cXf1gL5/image-1.png',
        width: 1200,
        height: 630,
        alt: 'Protippz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PROTIPPZ',
    description: 'protippz',
    images: ['https://i.ibb.co.com/cXf1gL5/image-1.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <NextTopLoader />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
