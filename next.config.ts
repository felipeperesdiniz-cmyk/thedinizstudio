import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The previous site's local SEO pages became the marketing and SEO service.
  async redirects() {
    return [
      { source: '/services/local-seo', destination: '/services/marketing-and-seo', permanent: true },
      { source: '/pt/servicos/seo-local', destination: '/pt/servicos/marketing-e-seo', permanent: true },
      { source: '/es/servicios/seo-local', destination: '/es/servicios/marketing-y-seo', permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['gsap'],
  },
}

export default nextConfig
