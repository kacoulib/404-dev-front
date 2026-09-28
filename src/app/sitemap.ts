import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.404-dev.com" },
    { url: "https://www.404-dev.com/en" },
    { url: "https://www.404-dev.com/support" },
  ];
}
