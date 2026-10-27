import { Reveal } from "@/components/shared/reveal"

export function Statement() {
  return (
    <section className="section bg-white">
      <div className="shell">
        <Reveal>
          <p className="mx-auto max-w-4xl text-center font-display text-[1.75rem] leading-[1.35] font-light text-graphite sm:text-[2.25rem] lg:text-[2.75rem]">
            We help people and businesses choose, structure, and fund the right
            protection, retirement, investment, and growth solutions, with
            advice they can <em className="italic-accent">trust.</em>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 h-px w-16 bg-bronze/60" aria-hidden />
        </Reveal>
      </div>
    </section>
  )
}
