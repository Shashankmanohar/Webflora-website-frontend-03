import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Disabling experimental compiler which might be causing slow renders on Windows
  reactCompiler: false, 
  
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/it-company-in-patna',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/it-company-in-patna/:path*',
        permanent: true,
      },
    ];
  }, 
  
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@iconify/react"],
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

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
