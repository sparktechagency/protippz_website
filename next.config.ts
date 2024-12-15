import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: '192.168.10.11',
        hostname: '3.135.129.190',
        port: '5050', 
      },
    ],
  },
};

export default nextConfig;
