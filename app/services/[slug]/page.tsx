import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BenefitsConsiderations } from "@/components/sections/benefits-considerations"
import { CtaBand } from "@/components/sections/cta-band"
import { HowItWorks } from "@/components/sections/how-it-works"
import { RelatedServices } from "@/components/sections/related-services"
import { RequirementsTable } from "@/components/sections/requirements-table"
import { ServiceFaq } from "@/components/sections/service-faq"
import { ServiceHero } from "@/components/sections/service-hero"
import {
  CoverGrid,
  ServiceOverview,
  WhoFor,
} from "@/components/sections/service-overview"
import {
  Glossary,
  ServiceCallout,
  TierExplainer,
} from "@/components/sections/service-extras"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { DisclosureNote } from "@/components/shared/disclosure-note"
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo"
import { getService, publishedServices } from "@/lib/services"

export const dynamicParams = false

export function generateStaticParams() {
  return publishedServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) return {}

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
    absoluteTitle: true,
    image: `/services/${service.slug}/opengraph-image`,
  })
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) notFound()

  return (
    <>
      <div className="shell pt-28 pb-10 lg:pt-32">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      <ServiceHero service={service} />

      {service.callout && <ServiceCallout>{service.callout}</ServiceCallout>}

      <ServiceOverview service={service} />
      <TierExplainer service={service} />
      <WhoFor service={service} />
      <CoverGrid service={service} />
      <Glossary service={service} />
      <HowItWorks service={service} />
      <BenefitsConsiderations service={service} />
      <RequirementsTable service={service} />
      <ServiceFaq faqs={service.faqs} />

      <div className="shell">
        <DisclosureNote>{service.disclosure}</DisclosureNote>
      </div>

      <RelatedServices service={service} />
      <CtaBand
        eyebrow={service.title}
        title={
          <>
            Talk to us about{" "}
            <em className="italic-accent">{service.title.toLowerCase()}.</em>
          </>
        }
        lead="A short conversation will confirm whether this is the right route, and what it would involve."
      />

      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
    </>
  )
}
