import Head from 'next/head';
import Banner from '@/components/HomePage/Banner';
import DownloadSection from '@/components/HomePage/DownloadSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Best Sports Tipping Platform - Tip & Earn Rewards | ProTippz
        </title>
        <meta
          name="description"
          content="protippz"
        />
        <meta
          name="keywords"
          content="sports tipping, online tipping, ProTippz, tip athletes, best tipping platform for sports, earn rewards, fan tipping, digital tipping, sports tipping community"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Sports Tipping Platform - Tip & Earn Rewards | ProTippz"
        />
        <meta
          property="og:description"
          content="protippz"
        />
        <meta
          property="og:image"
          content="https://protippz.com/assets/seo-banner.jpg"
        />
        <meta property="og:url" content="https://protippz.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Sports Tipping Platform - Tip & Earn Rewards | ProTippz"
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
            name: 'ProTippz - Best Sports Tipping Platform',
            url: 'https://protippz.com',
            description:
              'protippz',
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

      <Banner />
      <DownloadSection />
    </>
  );
}
