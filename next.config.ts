import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "bunny-wp-pullzone-rohnewctqa.b-cdn.net" },
    ],
  },
};

export default nextConfig;
