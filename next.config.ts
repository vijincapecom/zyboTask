 import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_APP_BASE_URL,
    REDIRECT_URL: process.env.NEXTAUTH_URL,
    NEXT_SECRET: process.env.NEXTAUTH_SECRET,
  },
    images: {
    domains: ['skilltestnextjs.evidam.zybotechlab.com'],
    loader: 'default', 
    unoptimized: false, 
  },
};

export default nextConfig;
