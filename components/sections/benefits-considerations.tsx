import { Check } from "lucide-react"

import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import type { Service } from "@/lib/services"

export function BenefitsConsiderations({ service }: { service: Service }) {
  return (
    <section className="section-tight surface-ivory">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow className="mb-5">The benefit</Eyebrow>
              <h2 className="display-md">What it gives you</h2>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((benefit, index) => (
                <Reveal key={benefit} delay={index * 0.04}>
                  <li className="flex gap-3.5 border-b border-silver-light pb-4 last:border-0">
                    <Check
                      className="mt-1.5 size-3.5 shrink-0 text-bronze-deep"
                      strokeWidth={1.4}
                      aria-hidden
                    />
                    <span className="text-[0.9375rem] leading-relaxed font-light text-graphite">
                      {benefit}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-silver-light lg:pl-20">
            <Reveal>
              <Eyebrow className="mb-5">Things to know</Eyebrow>
              <h2 className="display-md">The honest detail</h2>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {service.thingsToKnow.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <li className="flex gap-3.5 border-b border-silver-light pb-4 last:border-0">
                    <span
                      className="mt-2.5 size-1 shrink-0 bg-silver"
                      aria-hidden
                    />
                    <span className="text-[0.9375rem] leading-relaxed font-light text-ink-muted">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
