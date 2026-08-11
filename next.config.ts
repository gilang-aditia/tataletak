import type { NextConfig } from "next";

// search dicocokkan persis oleh Next, jadi tiap lebar gambar yang dipakai
// butuh entri sendiri. Lihat helper unsplash() di src/lib/images.ts.
const unsplashPattern = (search: string) => ({
  protocol: "https" as const,
  hostname: "images.unsplash.com",
  pathname: "/**",
  search,
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [unsplashPattern("?w=400&q=80"), unsplashPattern("?w=1200&q=80")],
  },
};

export default nextConfig;
