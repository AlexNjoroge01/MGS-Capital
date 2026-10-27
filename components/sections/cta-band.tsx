import { Mail, MessageCircle, Phone } from "lucide-react"

import { MonogramWatermark } from "@/components/shared/monogram-watermark"
import { Reveal } from "@/components/shared/reveal"
import { Eyebrow } from "@/components/shared/eyebrow"
import { siteConfig, whatsappLink } from "@/lib/site-config"

type CtaBandProps = {
  title?: React.ReactNode
  lead?: string
  eyebrow?: string
}

export function CtaBand({
  title = (
    <>
      Let&apos;s talk about <em className="italic-accent">what you&apos;re planning.</em>
    </>
  ),
  lead = "One conversation, no obligation. Call, message, or write — whichever is easiest.",
  eyebrow = "Next step",
}: CtaBandProps) {
  return (
    <section className="surface-deep relative overflow-hidden">
      <MonogramWatermark
        variant="white"
        className="-top-20 -right-10 h-[360px] w-[360px] lg:h-[500px] lg:w-[500px]"
      />
      <div className="shell relative py-20 lg:py-28">
        <Reveal>
          <Eyebrow className="mb-6 text-silver">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-lg max-w-3xl text-white">{title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed font-light text-silver-light">
            {lead}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={siteConfig.phone.href}
              className="inline-flex h-12 items-center justify-center gap-2.5 border border-white/40 px-7 text-[0.6875rem] font-medium tracking-[0.16em] text-white uppercase transition-colors duration-400 hover:border-white hover:bg-white hover:text-graphite"
            >
              <Phone className="size-4" strokeWidth={1.25} aria-hidden />
              Call {siteConfig.phone.display}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2.5 border border-white/40 px-7 text-[0.6875rem] font-medium tracking-[0.16em] text-white uppercase transition-colors duration-400 hover:border-white hover:bg-white hover:text-graphite"
            >
              <MessageCircle className="size-4" strokeWidth={1.25} aria-hidden />
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-12 items-center justify-center gap-2.5 border border-white/40 px-7 text-[0.6875rem] font-medium tracking-[0.16em] text-white uppercase transition-colors duration-400 hover:border-white hover:bg-white hover:text-graphite"
            >
              <Mail className="size-4" strokeWidth={1.25} aria-hidden />
              Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
