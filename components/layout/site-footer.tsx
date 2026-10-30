import Link from "next/link"


import { pillars } from "@/lib/pillars"
import { getServicesByPillar } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"
import { disclosures, lastUpdated } from "@/lib/disclosures"

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Disclosures", href: "/disclosures" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="surface-deep relative overflow-hidden">
      

      <div className="shell relative pt-20 pb-10 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="max-w-xs font-display text-[1.5rem] leading-snug font-light text-white/90 italic">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 max-w-xs text-[0.875rem] leading-relaxed font-light text-silver-light">
              A Kenyan financial services company offering insurance and
              investment advisory services for individuals, families, and
              businesses.
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-6 text-[0.625rem] tracking-[0.22em] text-silver uppercase">
              Services
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {pillars.map((pillar) => {
                const services = getServicesByPillar(pillar.slug)
                if (!services.length) return null

                return (
                  <div key={pillar.slug}>
                    <p className="mb-2.5 flex items-baseline gap-2 text-[0.5625rem] tracking-[0.18em] text-bronze uppercase">
                      <span className="font-display text-[0.75rem] text-silver">
                        {pillar.number}
                      </span>
                      {pillar.name}
                    </p>
                    <ul className="space-y-1.5">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="text-[0.8125rem] leading-snug font-light text-silver-light transition-colors hover:text-white"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-6 text-[0.625rem] tracking-[0.22em] text-silver uppercase">
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.8125rem] font-light text-silver-light transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-6 text-[0.625rem] tracking-[0.22em] text-silver uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-[0.8125rem] leading-relaxed font-light text-silver-light">
              <li>
                <a
                  href={siteConfig.phone.href}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-words transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-1">
                {siteConfig.office.name}
                <br />
                {siteConfig.office.floor}
                <br />
                {siteConfig.office.city ?? siteConfig.office.country}
              </li>
              {siteConfig.hours.length > 0 && (
                <li className="pt-1">
                  {siteConfig.hours.map((entry) => (
                    <span key={entry.days} className="block">
                      {entry.days}: {entry.time}
                    </span>
                  ))}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-[0.625rem] tracking-[0.2em] text-silver uppercase">
            Regulatory information
          </p>
          {siteConfig.registrations.length > 0 ? (
            <ul className="mt-3 space-y-1 text-[0.75rem] text-silver-light">
              {siteConfig.registrations.map((registration) => (
                <li key={registration.body}>
                  {registration.body} — {registration.detail}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 max-w-2xl text-[0.75rem] leading-relaxed text-silver">
              Licence and registration details will be published here once they
              have been supplied and confirmed. No licence number or partner
              name is displayed until then.
            </p>
          )}
          <p className="mt-5 max-w-3xl text-[0.75rem] leading-relaxed text-silver">
            {disclosures.general}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.6875rem] tracking-[0.04em] text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Last updated {lastUpdated}</p>
        </div>
      </div>
    </footer>
  )
}