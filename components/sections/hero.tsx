import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { buttonStyles } from "@/components/shared/button-styles"
import { MonogramWatermark } from "@/components/shared/monogram-watermark"
import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/shared/eyebrow"

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-white pt-28 pb-20 lg:pt-32">
      <MonogramWatermark className="-top-24 -right-40 h-[620px] w-[620px] lg:top-1/2 lg:-right-24 lg:h-[760px] lg:w-[760px] lg:-translate-y-1/2" />

      <div className="shell relative">
        <div className="max-w-4xl">
          <Eyebrow className="max-w-md text-[0.625rem] leading-relaxed sm:text-[0.6875rem]">
            MGS Capital Limited · Your fiduciary investment advisory partner
          </Eyebrow>

          <h1 className="display-xl mt-8 text-graphite">
            Insurance and investment advice,{" "}
            <em className="italic-accent">considered.</em>
          </h1>

          <p className="prose-quiet mt-8 max-w-xl text-[1.0625rem] lg:text-[1.1875rem]">
            A Kenyan financial services company offering insurance and
            investment advisory services for individuals, families, and
            businesses.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild className={buttonStyles.primary}>
              <Link href="/services">Explore services</Link>
            </Button>
            <Button asChild className={buttonStyles.outline}>
              <Link href="/contact">Speak with Lizzie</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-4 lg:mt-24">
          <span className="h-10 w-px bg-silver-light" aria-hidden />
          <span className="flex items-center gap-2 text-[0.625rem] tracking-[0.22em] text-ink-muted uppercase">
            Scroll
            <ArrowDown className="size-3" strokeWidth={1} aria-hidden />
          </span>
        </div>
      </div>
    </section>
  )
}
