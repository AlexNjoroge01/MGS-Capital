import { pillars } from "@/lib/pillars"
import { publishedServices, type Faq, type Service } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

const escape = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c")

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escape(data) }}
    />
  )
}

export const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.shortName,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/mgs-logo.svg`,
  image: `${siteConfig.url}/logo/mgs-logo.svg`,
  description: siteConfig.entityDescription,
  slogan: siteConfig.tagline,
  telephone: siteConfig.phone.e164,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.office.name,
    addressCountry: "KE",
    ...(siteConfig.office.city ? { addressLocality: siteConfig.office.city } : {}),
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  foundingDate: String(siteConfig.foundingYear),
  founder: {
    "@type": "Person",
    name: siteConfig.owner.name,
  },
  employee: {
    "@type": "Person",
    name: siteConfig.owner.name,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: pillars.map((pillar) => ({
      "@type": "OfferCatalog",
      name: pillar.name,
      itemListElement: publishedServices
        .filter((service) => service.pillar === pillar.slug)
        .map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: `${siteConfig.url}/services/${service.slug}`,
            description: service.summary,
          },
        })),
    })),
  },
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.shortName,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-KE",
}

export const serviceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  serviceType: service.title,
  description: service.summary,
  url: `${siteConfig.url}/services/${service.slug}`,
  provider: { "@id": `${siteConfig.url}/#organization` },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      service.audience === "individual"
        ? "Individuals and families"
        : service.audience === "business"
          ? "Businesses and institutions"
          : "Individuals, families, and businesses",
  },
})

export const faqSchema = (faqs: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
})

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.path}`,
  })),
})
