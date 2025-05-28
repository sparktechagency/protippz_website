import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // or 'SAMEORIGIN' if you want to allow framing on your domain only
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';", // prevents any framing
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: '192.168.10.11',
        hostname: '10.0.60.137',
        port: '5050',
      },
      {
        protocol: 'http',
        // hostname: '192.168.10.11',
        hostname: '0.0.0.0',
        port: '5050',
      },
      {
        protocol: 'http',
        // hostname: '192.168.10.11',
        hostname: '10.0.60.37',
        port: '5050',
      },
      {
        protocol: 'https',
        // hostname: '192.168.10.11',
        hostname: 'api.protippz.com',
        // port: '5050',
      },
      {
        protocol: 'https',
        // hostname: '192.168.10.11',
        hostname: 'protippz-bucket.s3.us-east-2.amazonaws.com',
        // port: '5050',
      },
      {
        protocol: 'https',
        // hostname: '192.168.10.11',
        hostname: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
        // port: '5050',
      },
    ],
  },
};

export default nextConfig;
