import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import type { Service } from "@/lib/services"

export function ServiceCallout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="border-y border-silver-light bg-ivory">
      <div className="shell flex gap-5 py-6">
        <span className="mt-1 h-10 w-px shrink-0 bg-bronze/70" aria-hidden />
        <p className="max-w-3xl text-[0.875rem] leading-relaxed font-normal text-graphite">
          {children}
        </p>
      </div>
    </aside>
  )
}

export function TierExplainer({ service }: { service: Service }) {
  if (!service.explainer) return null

  return (
    <section className="section-tight border-t border-silver-mist bg-white">
      <div className="shell">
        <Reveal>
          <Eyebrow className="mb-5">At a glance</Eyebrow>
          <h2 className="display-md">{service.explainer.title}</h2>
          <p className="prose-quiet mt-4 max-w-2xl text-[0.9375rem]">
            {service.explainer.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px bg-silver-mist sm:grid-cols-2">
          {service.explainer.points.map((point, index) => (
            <Reveal
              key={point.title}
              delay={index * 0.04}
              className="bg-white p-7 lg:p-8"
            >
              <p className="font-display text-[0.875rem] text-bronze-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-[1.375rem] font-light">
                {point.title}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed font-light text-ink-muted">
                {point.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Glossary({ service }: { service: Service }) {
  if (!service.glossary) return null

  return (
    <section className="section-tight border-t border-silver-mist bg-white">
      <div className="shell grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow className="mb-5">Glossary</Eyebrow>
            <h2 className="display-md">
              The words that <em className="italic-accent">matter.</em>
            </h2>
            <p className="prose-quiet mt-4 max-w-xs text-[0.875rem]">
              Hover or focus a term to read a plain-English definition.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {service.glossary.map((entry, index) => (
              <Reveal key={entry.term} delay={index * 0.03}>
                <div className="border-b border-silver-light pb-4">
                  <dt>
                    <HoverCard openDelay={100} closeDelay={80}>
                      <HoverCardTrigger asChild>
                        <button
                          type="button"
                          className="cursor-help border-b border-dotted border-bronze-deep/60 pb-0.5 text-left text-[0.9375rem] font-normal text-graphite"
                        >
                          {entry.term}
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent
                        side="top"
                        className="w-72 border-silver-light bg-white p-4"
                      >
                        <p className="text-[0.8125rem] leading-relaxed font-light text-ink-muted">
                          {entry.definition}
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </dt>
                  <dd className="mt-2 text-[0.8125rem] leading-relaxed font-light text-ink-muted">
                    {entry.definition}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
