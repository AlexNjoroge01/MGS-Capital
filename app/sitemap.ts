import type { MetadataRoute } from "next"

import { publishedServices } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/disclosures`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = publishedServices.map(
    (service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified: new Date(service.reviewedDate),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  )

  return [...staticRoutes, ...serviceRoutes]
}
