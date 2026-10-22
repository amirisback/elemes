import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo";

// Static application routes for SEO indexing
const staticRoutes = [
  "", // Homepage
  "/courses", // Course Catalog
  "/dashboard", // Student Dashboard
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${seoConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
