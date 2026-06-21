import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Render Static Sites need a real static export in ./out.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  // Lint errors (mostly inherited from shared components) shouldn't block a
  // production build/deploy. Type errors still fail the build.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  allowedDevOrigins: ['https://blwg5vz3-6501.inc1.devtunnels.ms', 'http://localhost:6501', 'https://blwg5vz3-6500.inc1.devtunnels.ms/', 'http://localhost:6500'],

};

export default nextConfig;
