import Link from "next/link"

import { CtaBand } from "@/components/sections/cta-band"
import { Eyebrow } from "@/components/shared/eyebrow"
import { MonogramWatermark } from "@/components/shared/monogram-watermark"
import { Button } from "@/components/ui/button"
import { buttonStyles } from "@/components/shared/button-styles"
import { pillars } from "@/lib/pillars"
import { getServicesByPillar } from "@/lib/services"

export default function NotFound() {
  return (
    <>
      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-white pt-32 pb-20">
        <MonogramWatermark className="-right-24 -bottom-24 h-[480px] w-[480px]" />
        <div className="shell relative grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow className="mb-7">404</Eyebrow>
            <h1 className="display-xl text-[clamp(2.75rem,7vw,5.5rem)]">
              Page <em className="italic-accent">not found.</em>
            </h1>
            <p className="prose-quiet mt-7 max-w-lg">
              The page you were looking for has moved, or never existed. The
              services below are a better place to start.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className={buttonStyles.primary}>
                <Link href="/">Back to home</Link>
              </Button>
              <Button asChild className={buttonStyles.outline}>
                <Link href="/services">All services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight border-t border-silver-mist bg-white">
        <div className="shell">
          <Eyebrow className="mb-8">Browse services</Eyebrow>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar) => {
              const services = getServicesByPillar(pillar.slug)
              if (!services.length) return null

              return (
                <div key={pillar.slug}>
                  <p className="text-[0.5625rem] tracking-[0.18em] text-bronze-deep uppercase">
                    {pillar.number} · {pillar.name}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-[0.8125rem] leading-snug font-light text-ink-muted transition-colors hover:text-bronze-deep"
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
      </section>

      <CtaBand />
    </>
  )
}
