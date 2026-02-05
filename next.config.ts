import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Forces a static export
  images: {
    unoptimized: true, // Necessary because GH Pages doesn't support the Next.js Image Optimization API
  },
};

export default nextConfig;
