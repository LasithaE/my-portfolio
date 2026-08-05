/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/articles", destination: "/", permanent: true },
      { source: "/articles/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
