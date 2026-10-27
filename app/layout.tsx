import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import {
  JsonLd,
  financialServiceSchema,
  websiteSchema,
} from "@/components/seo/json-ld"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/lib/site-config"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Insurance & Investment Advisory in Kenya | MGS Capital",
    template: "%s | MGS Capital Limited",
  },
  description:
    "MGS Capital Limited offers insurance and investment advisory services in Kenya, led by Lizzie Gitiche. Medical and general insurance, retirement, and finance advisory.",
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  keywords: [
    "insurance and investment advisory Kenya",
    "financial services Kenya",
    "investment adviser Kenya",
    "insurance advisory Kenya",
    "financial advisory firm Kenya",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: "Insurance & Investment Advisory in Kenya | MGS Capital",
    description: siteConfig.entityDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MGS Capital Limited — your fiduciary investment advisory partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance & Investment Advisory in Kenya | MGS Capital",
    description: siteConfig.entityDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "financial services",
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-KE" className={`${jost.variable} ${cormorant.variable}`}>
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <Toaster position="bottom-center" />
        <JsonLd data={financialServiceSchema} />
        <JsonLd data={websiteSchema} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
