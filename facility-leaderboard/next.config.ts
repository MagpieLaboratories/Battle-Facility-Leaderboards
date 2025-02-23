import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Needed because Next.js uses dynamic image optimization by default
  },
};

export default nextConfig;
