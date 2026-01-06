import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.brainboosterz.com",
      },
    ],
  },
};

export default nextConfig;
