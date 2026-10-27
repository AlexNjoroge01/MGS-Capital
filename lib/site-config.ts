/**
 * Single source of truth for everything the site says about the business.
 * Values marked CONFIRM are placeholders pending written confirmation from
 * MGS Capital. Do not invent facts here.
 */

export const siteConfig = {
  legalName: "MGS Capital Limited",
  shortName: "MGS Capital",
  /** Printed on the business card as "MGS Capital Ltd". */
  cardName: "MGS Capital Ltd",
  tagline: "Your fiduciary investment advisory partner",
  description:
    "MGS Capital is a financial services company offering insurance and investment advisory services.",
  /** One entity description reused on About, JSON-LD, and profiles (Blueprint §15). */
  entityDescription:
    "MGS Capital Limited is a Kenyan financial services company offering insurance and investment advisory services, including medical and general insurance, insurance premium financing, retirement plan advisory, pension consolidation, NSSF Tier II advisory, money market fund advisory, study abroad loans, trade finance, bid bonds, and fundraising support for lending companies. It is led by Lizzie Gitiche.",
  owner: {
    name: "Lizzie Gitiche",
    /** CONFIRM title (likely CEO). Not displayed until confirmed. */
    title: null as string | null,
    role: "Leads the firm and is the first point of contact for clients",
  },
  /** CONFIRM the founding year. Years in operation are computed, never hard-coded. */
  foundingYear: 2023,
  phone: {
    display: "+254 725 622 207",
    e164: "+254725622207",
    href: "tel:+254725622207",
  },
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254725622207",
    display: "+254 725 622 207",
    /** CONFIRM preferred greeting text. */
    message:
      "Hello MGS Capital, I would like to speak with Lizzie about your services.",
  },
  /**
   * One public email only. Gmail and ceo@ addresses are intentionally kept out
   * of the page source. CONFIRM the final public mailbox.
   */
  email: "enquiries@mgscapital.co.ke",
  internalEmails: [
    "ceo@mgscapital.co.ke",
    "lizzieconsult@gmail.com",
    "operations.mgs@gmail.com",
    "insurance@mgscapital.co.ke",
  ],
  office: {
    name: "CPA Centre, Old Stanchart Building",
    floor: "1st Floor",
    street: null, // CONFIRM street
    city: null, // CONFIRM city
    country: "Kenya",
    lines: ["CPA Centre, Old Stanchart Building", "1st Floor", "Kenya"],
    /** City is omitted from the map search until confirmed. */
    mapQuery: "CPA Centre, Old Stanchart Building",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=CPA+Centre%2C+Old+Stanchart+Building",
  /** CONFIRM opening hours before rendering. Empty = hidden. */
  hours: [] as { days: string; time: string }[],
  social: [] as { label: string; href: string }[],
  /** Licence and registration details. Empty until supplied — never fabricated. */
  registrations: [] as { body: string; detail: string }[],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mgscapital.co.ke",
  locale: "en_KE",
  /** CONFIRM asset: a real portrait of Lizzie is still required. */
  defaultOgImage: "/opengraph-image",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
} as const

export const yearsInOperation = (() => {
  const years = new Date().getFullYear() - siteConfig.foundingYear
  return years > 0 ? years : 1
})()

export const registeredOffice = [
  siteConfig.office.name,
  siteConfig.office.floor,
  siteConfig.office.city,
  siteConfig.office.country,
].filter(Boolean) as string[]

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    message ?? siteConfig.whatsapp.message
  )}`

export const mailtoLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)
  const query = params.toString()
  return `mailto:${siteConfig.email}${query ? `?${query}` : ""}`
}
