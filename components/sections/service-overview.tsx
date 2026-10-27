import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import { ServiceIcon } from "@/components/shared/service-icon"
import type { Service } from "@/lib/services"

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="section-tight border-t border-silver-mist bg-white">
      <div className="shell grid gap-9 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow className="mb-5">Overview</Eyebrow>
            <h2 className="display-md">What this service is</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          {service.overview.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <p className="prose-quiet mb-6 last:mb-0">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CoverGrid({ service }: { service: Service }) {
  return (
    <section className="section-tight border-t border-silver-mist bg-white">
      <div className="shell">
        <Reveal>
          <Eyebrow className="mb-5">Scope</Eyebrow>
          <h2 className="display-md">What it covers</h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-silver-mist sm:grid-cols-2 lg:grid-cols-3">
          {service.covers.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className="bg-white p-7 lg:p-8"
            >
              <ServiceIcon
                name={item.icon}
                className="size-5 text-bronze-deep"
              />
              <h3 className="mt-5 font-display text-[1.375rem] font-light">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed font-light text-ink-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhoFor({ service }: { service: Service }) {
  return (
    <section className="section-tight surface-ivory">
      <div className="shell grid gap-9 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow className="mb-5">Who it&apos;s for</Eyebrow>
            <h2 className="display-md">
              Who this is <em className="italic-accent">designed for.</em>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-silver-light">
            {service.whoFor.map((item, index) => (
              <li
                key={item}
                className="border-b border-silver-light py-5 text-[0.9375rem] leading-relaxed font-light text-graphite"
              >
                <Reveal delay={index * 0.03}>
                  <span className="flex gap-5">
                    <span className="font-display text-[0.9375rem] text-bronze-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
