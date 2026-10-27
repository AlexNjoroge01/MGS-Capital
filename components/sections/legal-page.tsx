import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"

type LegalPageProps = {
  eyebrow: string
  title: React.ReactNode
  intro: string
  updated: string
  children: React.ReactNode
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: LegalPageProps) {
  return (
    <article>
      <header className="border-b border-silver-mist bg-white pt-32 pb-14 lg:pt-40 lg:pb-20">
        <div className="shell">
          <Reveal>
            <Eyebrow className="mb-7">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="display-lg max-w-3xl">{title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="prose-quiet mt-7 max-w-2xl">{intro}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-[0.625rem] tracking-[0.18em] text-ink-muted uppercase">
              Last updated: {updated}
            </p>
          </Reveal>
        </div>
      </header>

      <div className="bg-white py-16 lg:py-24">
        <div className="shell">
          <div className="legal-copy lg:ml-[25%]">{children}</div>
        </div>
      </div>
    </article>
  )
}
