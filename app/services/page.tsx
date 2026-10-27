import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"

import { CtaBand } from "@/components/sections/cta-band"
import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import { Button } from "@/components/ui/button"
import { buttonStyles } from "@/components/shared/button-styles"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { pillars } from "@/lib/pillars"
import { audienceLabel, getServicesByPillar, publishedServices } from "@/lib/services"
import { siteConfig, whatsappLink } from "@/lib/site-config"
import { buildMetadata } from "@/lib/seo"

const numberWords = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
]

export const metadata: Metadata = buildMetadata({
  title: "Services — Insurance, Retirement & Finance | MGS Capital",
  description:
    "Eleven advisory services across insurance, retirement, investment, education, and enterprise finance. Explore what MGS Capital can help you with in Kenya.",
  path: "/services",
})

export default function ServicesPage() {
  const count = publishedServices.length

  return (
    <>
      <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="shell">
          <Reveal>
            <Eyebrow className="mb-7">Services</Eyebrow>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="display-xl max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
              {numberWords[count] ?? count} ways we help you{" "}
              <em className="italic-accent">move forward.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="prose-quiet mt-8 max-w-xl">
              Five pillars, {count} services. Each one has its own page, because
              the detail matters. Start with the pillar that sounds like your
              situation, or call and we will point you to the right place.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="shell">
        {pillars.map((pillar) => {
          const services = getServicesByPillar(pillar.slug)
          if (!services.length) return null

          return (
            <section
              key={pillar.slug}
              id={pillar.slug}
              className="scroll-mt-28 border-t border-silver-light py-14 lg:py-20"
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <span className="numeral block text-[3.5rem] lg:text-[4.5rem]">
                      {pillar.number}
                    </span>
                    <h2 className="display-md mt-4">{pillar.name}</h2>
                    <p className="mt-4 max-w-sm font-display text-[1.375rem] leading-snug font-light text-ink-muted italic">
                      {pillar.promise}
                    </p>
                    <p className="mt-5 max-w-sm text-[0.875rem] leading-relaxed font-light text-ink-muted">
                      {pillar.summary}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <ul>
                    {services.map((service, index) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group block border-b border-silver-light py-7 first:pt-0"
                        >
                          <Reveal delay={index * 0.04}>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                              <h3 className="font-display text-[1.75rem] leading-tight font-light transition-all duration-500 group-hover:translate-x-1 group-hover:text-bronze-deep lg:text-[2rem]">
                                {service.title}
                              </h3>
                              <Badge
                                variant="outline"
                                className="border-silver-light bg-transparent px-2.5 text-[0.5rem] tracking-[0.14em] text-ink-muted"
                              >
                                {audienceLabel(service.audience)}
                              </Badge>
                            </div>
                            <div className="mt-3 flex items-start justify-between gap-8">
                              <p className="max-w-2xl text-[0.9375rem] leading-relaxed font-light text-ink-muted">
                                {service.summary}
                              </p>
                              <ArrowUpRight
                                className="mt-1 size-4 shrink-0 text-silver transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-bronze-deep"
                                strokeWidth={1.1}
                                aria-hidden
                              />
                            </div>
                          </Reveal>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="section-tight bg-white">
        <div className="shell">
          <Reveal>
            <Eyebrow className="mb-5">At a glance</Eyebrow>
            <h2 className="display-md max-w-2xl">
              All {count} services,{" "}
              <em className="italic-accent">side by side.</em>
            </h2>
          </Reveal>

          <Reveal className="mt-10">
            <Table>
              <TableHeader>
                <TableRow className="border-graphite/20 hover:bg-transparent">
                  <TableHead className="py-4 text-[0.625rem] tracking-[0.16em] text-ink-muted uppercase">
                    Service
                  </TableHead>
                  <TableHead className="py-4 text-[0.625rem] tracking-[0.16em] text-ink-muted uppercase">
                    Best for
                  </TableHead>
                  <TableHead className="py-4 text-[0.625rem] tracking-[0.16em] text-ink-muted uppercase">
                    What it helps with
                  </TableHead>
                  <TableHead className="py-4 text-[0.625rem] tracking-[0.16em] text-ink-muted uppercase">
                    Key thing to know
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pillars.flatMap((pillar) => {
                  const services = getServicesByPillar(pillar.slug)
                  if (!services.length) return []

                  return [
                    <TableRow
                      key={`group-${pillar.slug}`}
                      className="border-silver-light hover:bg-transparent"
                    >
                      <TableCell
                        colSpan={4}
                        className="pt-7 pb-3 text-[0.5625rem] tracking-[0.2em] text-bronze-deep uppercase"
                      >
                        {pillar.number} · {pillar.name}
                      </TableCell>
                    </TableRow>,
                    ...services.map((service) => (
                      <TableRow
                        key={service.slug}
                        className="border-silver-mist align-top hover:bg-ivory/60"
                      >
                        <TableCell className="py-5 pr-5 whitespace-normal">
                          <Link
                            href={`/services/${service.slug}`}
                            className="text-[0.875rem] font-normal text-graphite transition-colors hover:text-bronze-deep"
                          >
                            {service.title}
                          </Link>
                        </TableCell>
                        <TableCell className="py-5 pr-5 text-[0.8125rem] whitespace-normal text-ink-muted">
                          {service.audience === "individual"
                            ? "Individuals"
                            : service.audience === "business"
                              ? "Businesses"
                              : "People and businesses"}
                        </TableCell>
                        <TableCell className="max-w-[22rem] py-5 pr-5 text-[0.8125rem] leading-relaxed whitespace-normal text-ink-muted">
                          {service.tagline}
                        </TableCell>
                        <TableCell className="max-w-[20rem] py-5 text-[0.8125rem] leading-relaxed whitespace-normal text-ink-muted">
                          {service.thingsToKnow[0]}
                        </TableCell>
                      </TableRow>
                    )),
                  ]
                })}
              </TableBody>
            </Table>
          </Reveal>
        </div>
      </section>

      <section className="section-tight surface-ivory">
        <div className="shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Not sure where to start?</Eyebrow>
              <h2 className="display-md max-w-xl">
                Tell us what is on your mind.{" "}
                <em className="italic-accent">We will point you to the right place.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button asChild className={buttonStyles.primary}>
              <a href={siteConfig.phone.href} className="gap-2.5">
                <Phone className="size-4" strokeWidth={1.25} aria-hidden />
                Call us
              </a>
            </Button>
            <Button asChild className={buttonStyles.outline}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Services"
        title={
          <>
            A service list is a map.{" "}
            <em className="italic-accent">The conversation is the journey.</em>
          </>
        }
      />
    </>
  )
}
