import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { buttonStyles } from "@/components/shared/button-styles"
import { FramedImage } from "@/components/shared/framed-image"
import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import { getPillar } from "@/lib/pillars"
import { audienceLabel, type Service } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"
import { formatReviewed } from "@/lib/seo"

export function ServiceHero({ service }: { service: Service }) {
  const pillar = getPillar(service.pillar)

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 lg:pt-10 lg:pb-20">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow className="mb-7">
              {pillar?.number} · {pillar?.name}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="display-xl text-[clamp(2.5rem,5.4vw,4.5rem)] text-graphite">
              {service.h1}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="prose-quiet mt-7">{service.summary}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge
                variant="outline"
                className="border-silver-light bg-transparent px-3 py-1.5 text-[0.5625rem] tracking-[0.16em] text-ink-muted"
              >
                {audienceLabel(service.audience)}
              </Badge>
              <span className="text-[0.6875rem] tracking-[0.08em] text-silver">
                Reviewed: {formatReviewed(service.reviewedDate)}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className={buttonStyles.primary}>
                <Link href={`/contact?service=${service.slug}`}>
                  Enquire about this service
                </Link>
              </Button>
              <Button asChild className={buttonStyles.outline}>
                <a href={siteConfig.phone.href} className="gap-2.5">
                  <Phone className="size-4" strokeWidth={1.25} aria-hidden />
                  Call {siteConfig.phone.display}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5" delay={0.1}>
          <FramedImage
            src={service.image.src}
            alt={service.image.alt}
            aspect="portrait"
            priority
            offset
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </Reveal>
      </div>

      {service.audienceNote && (
        <div className="shell mt-12">
          <p className="border-l border-bronze/60 bg-ivory px-5 py-4 text-[0.875rem] font-normal text-graphite">
            {service.audienceNote}
          </p>
        </div>
      )}
    </section>
  )
}
