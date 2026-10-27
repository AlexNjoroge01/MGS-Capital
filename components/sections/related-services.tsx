import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import { audienceLabel, getRelatedServices, type Service } from "@/lib/services"

export function RelatedServices({ service }: { service: Service }) {
  const related = getRelatedServices(service)
  if (!related.length) return null

  return (
    <section className="section-tight border-t border-silver-mist bg-white">
      <div className="shell">
        <Reveal>
          <Eyebrow className="mb-5">Related services</Eyebrow>
          <h2 className="display-md">
            Often considered <em className="italic-accent">alongside this.</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {related.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <Card className="h-full rounded-none border-silver-light bg-transparent py-0 shadow-none transition-colors duration-500 hover:border-bronze/60">
                <CardContent className="flex h-full flex-col justify-between p-7 lg:p-9">
                  <div>
                    <p className="text-[0.5625rem] tracking-[0.18em] text-ink-muted uppercase">
                      {audienceLabel(item.audience)}
                    </p>
                    <h3 className="mt-4 font-display text-[1.75rem] font-light">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed font-light text-ink-muted">
                      {item.summary}
                    </p>
                  </div>
                  <Link
                    href={`/services/${item.slug}`}
                    className="mt-7 inline-flex items-center gap-2 border-b border-silver-light pb-1 text-[0.6875rem] tracking-[0.16em] text-graphite uppercase transition-colors hover:border-bronze-deep hover:text-bronze-deep"
                  >
                    Explore {item.title}
                    <ArrowUpRight className="size-3.5" strokeWidth={1.25} />
                  </Link>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
