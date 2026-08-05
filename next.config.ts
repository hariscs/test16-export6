import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  staticPageGenerationTimeout: 180,
  experimental: {
    inlineCss: true,
    cpus: 4,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
