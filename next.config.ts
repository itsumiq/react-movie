import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.openmoviedb.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
