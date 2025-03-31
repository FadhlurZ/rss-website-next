import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.nos.nl',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
