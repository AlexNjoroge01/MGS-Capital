import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { approachSteps } from "@/lib/faqs"

export function Approach() {
  return (
    <section className="section surface-ivory">
      <div className="shell">
        <SectionHeading
          eyebrow="Our approach"
          title={
            <>
              Unhurried advice,{" "}
              <em className="italic-accent">properly followed through.</em>
            </>
          }
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-silver-light">
          {approachSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.08}
              className="md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-display text-[1.125rem] text-bronze-deep">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-[1.75rem] font-light">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed font-light text-ink-muted">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
