import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cv_suhartanto",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
