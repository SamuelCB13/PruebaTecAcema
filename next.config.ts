import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
    images: {
        domains: ["randomuser.me"]
    }
}

export default nextConfig;
