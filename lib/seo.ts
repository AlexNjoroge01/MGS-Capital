import type { Metadata } from "next"

import { siteConfig } from "@/lib/site-config"

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString()

type PageMeta = {
  title: string
  description: string
  path: string
  /** Absolute title bypasses the "%s | MGS Capital Limited" template. */
  absoluteTitle?: boolean
  image?: string
}

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
}: PageMeta): Metadata {
  const url = absoluteUrl(path)
  const ogImage = image ?? siteConfig.defaultOgImage

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.shortName,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

/** Trim to a meta-description-safe length without cutting mid-word. */
export const clampDescription = (text: string, max = 155) =>
  text.length <= max
    ? text
    : `${text.slice(0, text.lastIndexOf(" ", max)).replace(/[,.;:]$/, "")}.`

export const formatReviewed = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  })
