import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/personal_webpage" : "",
  assetPrefix: isProd ? "/personal_webpage/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
