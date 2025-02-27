import type { Metadata } from 'next';
import Navbar from '@/components/Shared/Client/Navbar';
import Footer from '@/components/Shared/Client/Footer';
import { AuthProvider } from '@/provider/ContextProvider';
import NextTopLoader from 'nextjs-toploader';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'PROTIPPZ - Best Sports Tipping Platform | Tip & Earn Rewards',
  description:
    'Join ProTippz, the best sports tipping platform. Tip your favorite players, earn rewards, win prizes, and support your favorite teams instantly!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Join ProTippz, the best sports tipping platform. Tip your favorite players, earn rewards, win prizes, and support your favorite teams instantly!"
        />
        <meta
          name="keywords"
          content="sports tipping, ProTippz, online tipping, tip athletes, best sports tipping platform, earn rewards, fan tipping, digital tipping, sports tipping community"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="PROTIPPZ - Best Sports Tipping Platform | Tip & Earn Rewards"
        />
        <meta
          property="og:description"
          content="Tip your favorite players and teams, earn rewards, and support athletes instantly. Join ProTippz, the best sports tipping community today!"
        />
        <meta
          property="og:image"
          content="https://protippz.com/assets/seo-banner.jpg"
        />
        <meta property="og:url" content="https://protippz.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PROTIPPZ - Best Sports Tipping Platform | Tip & Earn Rewards"
        />
        <meta
          name="twitter:description"
          content="Join a passionate sports tipping community, earn rewards, and win prizes. Start tipping today!"
        />
        <meta
          name="twitter:image"
          content="https://protippz.com/assets/seo-banner.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Website',
            name: 'PROTIPPZ - Best Sports Tipping Platform',
            url: 'https://protippz.com',
            description:
              'Join ProTippz, the best sports tipping platform. Tip your favorite players, earn rewards, win prizes, and support your favorite teams instantly!',
            image: 'https://protippz.com/assets/seo-banner.jpg',
            publisher: {
              '@type': 'Organization',
              name: 'ProTippz',
              logo: 'https://protippz.com/assets/logo.png',
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://protippz.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </script>
      </Head>
      <body className={``}>
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
