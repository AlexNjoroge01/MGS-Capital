import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { buttonStyles } from "@/components/shared/button-styles"

import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/shared/eyebrow"

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          className="scale-110 object-cover blur-xm"
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      

      <div className="shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow className="max-w-md text-[0.625rem] leading-relaxed sm:text-[0.6875rem]">
            MGS Capital Limited · Your fiduciary investment advisory partner
          </Eyebrow>

          <h1 className="display-xl mt-8 text-graphite">
            Insurance and investment advice,{" "}
            <em className="italic-accent">considered.</em>
          </h1>

         <p className="prose-quiet mt-8 max-w-xl text-[1.0625rem] text-black lg:text-[1.1875rem]">
  A Kenyan financial services company offering insurance and
  investment advisory services for individuals, families, and
  businesses.
</p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild className={buttonStyles.primary}>
              <Link href="/services">Explore services</Link>
            </Button>
            <Button asChild className={buttonStyles.outline}>
              <Link href="/contact">Speak with Lizzie</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-center gap-4 lg:mt-24">
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