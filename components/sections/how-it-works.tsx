import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import type { Service } from "@/lib/services"

export function HowItWorks({ service }: { service: Service }) {
  return (
    <section className="section-tight bg-white">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow className="mb-5">The process</Eyebrow>
            <h2 className="display-md">
              How it <em className="italic-accent">works.</em>
            </h2>
            <p className="prose-quiet mt-5 max-w-xs text-[0.9375rem]">
              The steps below describe the usual path. The detail is confirmed
              with you before anything begins.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ol className="relative border-l border-silver-light">
            {service.howItWorks.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <li className="relative pb-9 pl-8 last:pb-0">
                  <span
                    className="absolute -left-[4.5px] top-1.5 size-2 rounded-full border border-bronze bg-white"
                    aria-hidden
                  />
                  <p className="text-[0.625rem] tracking-[0.2em] text-bronze-deep uppercase">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-[1.5rem] font-light">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed font-light text-ink-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
