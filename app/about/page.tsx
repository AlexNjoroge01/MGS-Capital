import type { Metadata } from "next"

import { CtaBand } from "@/components/sections/cta-band"
import { ServiceFaq } from "@/components/sections/service-faq"
import { Eyebrow } from "@/components/shared/eyebrow"
import { FramedImage } from "@/components/shared/framed-image"
import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { aboutFaqs, howWeWork, principles } from "@/lib/faqs"
import { buildMetadata } from "@/lib/seo"
import { siteConfig, yearsInOperation } from "@/lib/site-config"

export const metadata: Metadata = buildMetadata({
  title: "About MGS Capital — Financial Advice in Kenya",
  description:
    "Meet MGS Capital Limited and Lizzie Gitiche. A Kenyan financial services firm built on considered, plain-English insurance and investment advice.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow className="mb-7">About</Eyebrow>
            </Reveal>
            <Reveal delay={0.04}>
              <h1 className="display-xl text-[clamp(2.5rem,6vw,5rem)]">
                A calmer way to approach{" "}
                <em className="italic-accent">advice.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="prose-quiet mt-8 max-w-xl">
                MGS Capital Limited is a Kenyan financial services company
                offering insurance and investment advisory services. It has been
                operating for {yearsInOperation} years, and is led by Lizzie
                Gitiche.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:self-end">
            <Reveal delay={0.1}>
              <p className="border-t border-silver-light pt-5 text-[0.6875rem] leading-loose tracking-[0.12em] text-ink-muted uppercase">
                Established
                <br />
                <span className="font-display text-[2rem] tracking-normal text-graphite normal-case">
                  {siteConfig.foundingYear}
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight border-t border-silver-mist bg-white">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow className="mb-5">Our story</Eyebrow>
              <h2 className="display-md">
                Built around the <em className="italic-accent">conversation.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="prose-quiet">
                MGS Capital began with a straightforward observation: financial
                decisions are easier to make when someone explains them
                properly. The firm has spent {yearsInOperation} years helping
                individuals, families, and businesses navigate insurance,
                retirement, investment, education, and enterprise finance.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="prose-quiet mt-6">
                The work is deliberately joined up. An insurance renewal can
                raise a cash-flow question, which connects to premium financing.
                A change of employer can leave retirement savings in several
                places, which calls for consolidation. Advice that sees the
                whole picture is more useful than advice that sees only one
                product.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="prose-quiet mt-6">
                The services serve two audiences: individuals and families, and
                businesses and institutions. The approach is the same — listen,
                compare, explain the costs and risks, then help with the
                paperwork through to completion.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight surface-ivory">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <FramedImage
              src="/images/about/lizzie.svg"
              alt="Abstract graphite, silver, and bronze composition in the MGS Capital palette"
              aspect="tall"
              offset
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow className="mb-5">The person you will speak to</Eyebrow>
              <h2 className="display-lg">{siteConfig.owner.name}</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="prose-quiet mt-6">
                Lizzie leads MGS Capital and is the first point of contact for
                clients. She works directly with individuals, families, and
                business owners, taking the time to understand what is being
                decided before recommending a route.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="prose-quiet mt-5">
                That means one consistent point of contact: the person who
                hears the situation is the person who follows the paperwork
                through. For clients who have dealt with being passed between
                departments elsewhere, it is a different experience.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <dl className="mt-9 grid gap-5 border-t border-silver-light pt-7 sm:grid-cols-2">
                <div>
                  <dt className="text-[0.5625rem] tracking-[0.18em] text-ink-muted uppercase">
                    Phone
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] font-light">
                    <a
                      href={siteConfig.phone.href}
                      className="transition-colors hover:text-bronze-deep"
                    >
                      {siteConfig.phone.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.5625rem] tracking-[0.18em] text-ink-muted uppercase">
                    Email
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] break-words font-light">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="transition-colors hover:text-bronze-deep"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="shell">
          <SectionHeading
            eyebrow="What we believe"
            title={
              <>
                Four principles,{" "}
                <em className="italic-accent">quietly applied.</em>
              </>
            }
          />

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-silver-light">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                delay={index * 0.06}
                className="lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <p className="font-display text-[0.875rem] text-bronze-deep">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-[1.625rem] font-light">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed font-light text-ink-muted">
                  {principle.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight border-t border-silver-mist bg-white">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow className="mb-5">How we work</Eyebrow>
              <h2 className="display-md">
                Four steps, <em className="italic-accent">no short cuts.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="border-t border-silver-light">
              {howWeWork.map((step, index) => (
                <li
                  key={step.title}
                  className="border-b border-silver-light py-6"
                >
                  <Reveal delay={index * 0.04}>
                    <div className="flex gap-6">
                      <span className="font-display text-[1rem] text-bronze-deep">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="font-display text-[1.375rem] font-light">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 max-w-xl text-[0.9375rem] leading-relaxed font-light text-ink-muted">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-tight surface-ivory">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow className="mb-5">Credentials and regulation</Eyebrow>
              <h2 className="display-md">
                Published only when{" "}
                <em className="italic-accent">confirmed.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="prose-quiet text-[0.9375rem]">
                The services touch several regulated areas in Kenya. Depending
                on the licences MGS Capital holds and the partners it works
                with, the relevant bodies may include the Insurance Regulatory
                Authority, the Retirement Benefits Authority, the Capital
                Markets Authority, and the Central Bank of Kenya.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="mt-7 border border-silver-light bg-white p-6">
                <p className="text-[0.5625rem] tracking-[0.2em] text-bronze-deep uppercase">
                  Licence and registration details
                </p>
                {siteConfig.registrations.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {siteConfig.registrations.map((registration) => (
                      <li
                        key={registration.body}
                        className="text-[0.875rem] text-graphite"
                      >
                        {registration.body} — {registration.detail}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 max-w-xl text-[0.875rem] leading-relaxed font-light text-ink-muted">
                    These will be published here once they have been supplied
                    and verified. No licence number, registration number, or
                    partner name is displayed until then.
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceFaq
        faqs={aboutFaqs}
        title={
          <>
            About the <em className="italic-accent">firm.</em>
          </>
        }
      />

      <CtaBand
        eyebrow="About"
        title={
          <>
            The best way to understand the firm is{" "}
            <em className="italic-accent">to speak to it.</em>
          </>
        }
      />
    </>
  )
}
