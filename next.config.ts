import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
});

export default nextConfig;
