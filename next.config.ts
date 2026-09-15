import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.poki-cdn.com',
      },
      {
        protocol: 'https',
        hostname: '*.fbcdn.net', // Matches all Facebook CDN subdomains
      },
    ],
  },
}

export default nextConfig