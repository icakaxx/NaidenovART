/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ndcgnswvhpnffvbzqcrn.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fsof11-1.fna.fbcdn.net',
      },
    ],
  },
}

module.exports = nextConfig



