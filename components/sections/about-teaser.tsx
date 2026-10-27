import Link from "next/link"

import { FramedImage } from "@/components/shared/framed-image"
import { Reveal } from "@/components/shared/reveal"
import { Eyebrow } from "@/components/shared/eyebrow"
import { siteConfig } from "@/lib/site-config"

export function AboutTeaser() {
  return (
    <section className="section bg-white">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <FramedImage
            src="/images/about/lizzie.svg"
            alt="Abstract graphite, silver, and bronze composition in the MGS Capital palette"
            aspect="tall"
            offset
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <Reveal>
            <Eyebrow className="mb-6">Meet Lizzie</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg">
              {siteConfig.owner.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="prose-quiet mt-7">
              Lizzie leads MGS Capital and is the first point of contact for
              clients. The work is personal: a conversation about what you are
              protecting, what you are planning, and what would let you sleep
              more easily at night.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="prose-quiet mt-5">
              MGS Capital has been operating for three years, advising
              individuals, families, and businesses across insurance,
              retirement, investment, education, and enterprise finance.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-9 border-l border-bronze/50 pl-6 font-display text-[1.5rem] leading-snug font-light text-graphite italic">
              One point of contact, from the first conversation to the
              follow-through.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              href="/about"
              className="quiet-link mt-9 text-[0.75rem] tracking-[0.16em] uppercase"
            >
              About the firm
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
