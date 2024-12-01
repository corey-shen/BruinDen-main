import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['maps.googleapis.com', 'maps.gstatic.com'],
  },
  async headers() {
    return [
      {
        source: '/api/placeholder/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/svg+xml',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
