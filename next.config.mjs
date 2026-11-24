/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // SEO: la antigua URL /work&study pasa a /estudia-y-trabaja (301 permanente)
    return [
      { source: "/work&study", destination: "/estudia-y-trabaja", statusCode: 301 },
      { source: "/work%26study", destination: "/estudia-y-trabaja", statusCode: 301 },
      { source: "/work-and-study", destination: "/estudia-y-trabaja", statusCode: 301 },
    ]
  },
}

export default nextConfig
