"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"
import { buttonStyles } from "@/components/shared/button-styles"
import { pillars } from "@/lib/pillars"
import { getServicesByPillar } from "@/lib/services"
import { cn } from "@/lib/utils"

export function PillarsSection() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="section bg-white">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow className="mb-6">What we do</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg max-w-2xl">
                Five pillars,{" "}
                <em className="italic-accent">eleven ways</em> to move forward.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Reveal delay={0.1}>
              <Button asChild className={buttonStyles.quiet}>
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-[0.6875rem] tracking-[0.16em] uppercase"
                >
                  All services
                  <ArrowUpRight className="size-3.5" strokeWidth={1.25} />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 border-t border-silver-light">
          {pillars.map((pillar, index) => {
            const services = getServicesByPillar(pillar.slug)
            if (!services.length) return null

            return (
              <Reveal key={pillar.slug} delay={index * 0.04}>
                <div
                  onMouseEnter={() => setActive(pillar.slug)}
                  onMouseLeave={() => setActive(null)}
                  className="group border-b border-silver-light py-10 lg:py-12"
                >
                  <div className="grid gap-7 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-2">
                      <span className="numeral block">{pillar.number}</span>
                      <Eyebrow className="mt-2 lg:hidden">
                        {pillar.name}
                      </Eyebrow>
                    </div>

                    <div className="lg:col-span-6 lg:pr-8">
                      <Eyebrow className="hidden lg:block">
                        {pillar.name}
                      </Eyebrow>
                      <h3 className="display-md mt-3 max-w-xl text-graphite transition-transform duration-700 ease-out group-hover:translate-x-2">
                        {pillar.promise}
                      </h3>
                      <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="inline-block border-b border-silver-light pb-0.5 text-[0.8125rem] font-normal text-graphite transition-colors duration-300 hover:border-bronze-deep hover:text-bronze-deep"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-4">
                      <Link
                        href={`/services#${pillar.slug}`}
                        aria-label={`Explore ${pillar.name} services`}
                        className="relative block aspect-[16/10] overflow-hidden bg-ivory lg:aspect-[4/3]"
                      >
                        <Image
                          src={pillar.image.src}
                          alt={pillar.image.alt}
                          fill
                          sizes="(min-width: 1024px) 30vw, 100vw"
                          unoptimized
                          className={cn(
                            "object-cover transition-all duration-[900ms] ease-out",
                            "opacity-100 lg:opacity-0 lg:group-hover:scale-[1.02] lg:group-hover:opacity-100"
                          )}
                        />
                        <span
                          className={cn(
                            "absolute inset-0 hidden items-center justify-between border border-silver-light px-5 lg:flex",
                            "transition-opacity duration-500 lg:group-hover:opacity-0"
                          )}
                        >
                          <span className="text-[0.625rem] tracking-[0.2em] text-ink-muted uppercase">
                            View pillar
                          </span>
                          <ArrowUpRight
                            className={cn(
                              "size-5 text-silver transition-all duration-500",
                              active === pillar.slug && "-translate-y-1 translate-x-1"
                            )}
                            strokeWidth={1}
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
