import type { Metadata } from 'next';
import Navbar from '@/components/Shared/Client/Navbar';
import Footer from '@/components/Shared/Client/Footer';
import { AuthProvider } from '@/provider/ContextProvider';
import NextTopLoader from 'nextjs-toploader';
import ShocaseMarquee from '@/components/HomePage/ShocaseMarquee';

export const metadata: Metadata = {
  title: 'PROTIPPZ',
  description: 'Join Protippz to tip your favorite players and teams, earn rewards, win prizes, and connect with a passionate sports community.',
  keywords: 'sports tipping, tip players, support teams, win prizes, sports rewards, professional sports, college sports, fan rewards',
  openGraph: {
    title: 'Protippz - Support Your Favorite Players & Teams',
    description: 'Start tipping your favorite players and teams, earn exclusive rewards, and become part of a passionate sports community.',
    url: 'https://www.protippz.com',
    type: 'website',
    images: [
      {
        url: 'https://www.protippz.com',
        width: 1200,
        height: 630,
        alt: 'Protippz Sports Tipping Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Protippz', 
    title: 'Protippz - Support Your Favorite Players & Teams',
    description: 'Tip your favorite players and teams, earn rewards, and win prizes. Join a passionate sports community today!',
    images: ['https://www.protippz.com']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <ShocaseMarquee />
        <NextTopLoader />
        <AuthProvider>
          <Navbar />
          <div className="min-h-[72vh] flex flex-col justify-center items-center">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
