import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "bunny-wp-pullzone-rohnewctqa.b-cdn.net" },
    ],
  },
  async redirects() {
    return [
      // Redirect www to non-www (canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.podguide.org.zw" }],
        destination: "https://podguide.org.zw/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
