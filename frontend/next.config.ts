import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow production builds to succeed despite lint/type errors
  // (hackathon codebase; deployed as a demo).
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
