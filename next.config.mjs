/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Disabling experimental compiler which might be causing slow renders on Windows
  reactCompiler: false, 
  
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@iconify/react"],
    turbopack: {
      // Fixes the 'workspace root' warning and prevents scanning entire user profile
      root: './',
    },
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
