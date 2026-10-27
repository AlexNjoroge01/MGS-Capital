import type { Metadata } from "next"

import { AboutTeaser } from "@/components/sections/about-teaser"
import { Approach } from "@/components/sections/approach"
import { CtaBand } from "@/components/sections/cta-band"
import { FaqTeaser } from "@/components/sections/faq-teaser"
import { HomeHero } from "@/components/sections/hero"
import { PillarsSection } from "@/components/sections/pillars"
import { Statement } from "@/components/sections/statement"
import { TrustStrip } from "@/components/sections/trust-strip"
import { VisitUs } from "@/components/sections/visit-us"
import { WhoWeServe } from "@/components/sections/who-we-serve"
import { JsonLd, faqSchema } from "@/components/seo/json-ld"
import { homeFaqs } from "@/lib/faqs"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Insurance & Investment Advisory in Kenya | MGS Capital",
  description:
    "MGS Capital advises individuals, families, and businesses on insurance, retirement, and investment in Kenya. Led by Lizzie Gitiche. Start a conversation.",
  path: "/",
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <Statement />
      <PillarsSection />
      <Approach />
      <AboutTeaser />
      <WhoWeServe />
      <VisitUs />
      <FaqTeaser />
      <CtaBand />
      <JsonLd data={faqSchema(homeFaqs)} />
    </>
  )
}
