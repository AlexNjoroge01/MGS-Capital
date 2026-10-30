import Link from "next/link"
import { ArrowUpRight, MapPin, Phone } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { Eyebrow } from "@/components/shared/eyebrow"
import { siteConfig, whatsappLink } from "@/lib/site-config"

export function VisitUs() {
  return (
    <section className="section surface-ivory">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow className="mb-6">Visit us</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg">
              An office you can <em className="italic-accent">walk into.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="prose-quiet mt-7">
              Conversations can start by phone or WhatsApp, but some decisions
              are easier across a table. The office is at CPA Centre, Old
              Stanchart Building, 1st Floor. Call ahead so that a time can be
              arranged.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:pt-14">
          <Reveal delay={0.15}>
            <div className="space-y-5 border-t border-silver-light pt-7">
              <p className="flex gap-4 text-[0.9375rem] leading-relaxed font-light text-graphite">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-bronze-deep"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <span>
                  {siteConfig.office.name}
                  <br />
                  {siteConfig.office.floor}
                  <br />
                  {siteConfig.office.city ?? siteConfig.office.country}
                </span>
              </p>
              <p className="flex gap-4 text-[0.9375rem] font-light text-graphite">
                <Phone
                  className="mt-1 size-4 shrink-0 text-bronze-deep"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <a
                  href={siteConfig.phone.href}
                  className="transition-colors hover:text-bronze-deep"
                >
                  {siteConfig.phone.display}
                </a>
              </p>
              {siteConfig.hours.length > 0 && (
                <p className="text-[0.875rem] text-ink-muted">
                  {siteConfig.hours.map((entry) => (
                    <span key={entry.days} className="block">
                      {entry.days}: {entry.time}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link text-[0.75rem] tracking-[0.14em] uppercase"
              >
                Find the office
                <ArrowUpRight className="size-3.5" strokeWidth={1.25} />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link text-[0.75rem] tracking-[0.14em] uppercase"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
