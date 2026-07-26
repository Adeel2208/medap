/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images directly from /public instead of through Vercel's on-demand
    // optimizer. This keeps all next/image usages (logos, galleries, portraits)
    // working reliably on Vercel and avoids optimizer failures on large PNGs.
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Enable compression for better performance
  compress: true,
  // Generate sitemap during build
  generateBuildId: async () => {
    return 'medap-build-' + new Date().getTime()
  },
  // Optimize for SEO
  poweredByHeader: false,
  // Enable trailing slashes for better SEO
  trailingSlash: false,
  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig