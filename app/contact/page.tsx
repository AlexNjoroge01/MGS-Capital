import type { Metadata } from "next"
import { Suspense } from "react"

import { ContactDetails } from "@/components/sections/contact-details"
import {
  EnquiryComposer,
  EnquiryComposerSkeleton,
} from "@/components/sections/enquiry-composer"
import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Contact MGS Capital — Talk to Lizzie",
  description:
    "Call, WhatsApp, or email MGS Capital in Kenya. Office at CPA Centre, Old Stanchart Building, 1st Floor. Start with a conversation — no obligation.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pt-32 pb-14 lg:pt-40 lg:pb-20">
        <div className="shell">
          <Reveal>
            <Eyebrow className="mb-7">Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="display-xl max-w-3xl text-[clamp(2.5rem,6vw,5rem)]">
              Let&apos;s begin with a{" "}
              <em className="italic-accent">conversation.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="prose-quiet mt-8 max-w-xl">
              Tell us what you are considering. There is no obligation, and no
              high-pressure sales call at the end of it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-silver-mist bg-white pb-24 lg:pb-32">
        <div className="shell grid gap-14 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow className="mb-6">Direct details</Eyebrow>
              <h2 className="display-md">
                Reach us <em className="italic-accent">directly.</em>
              </h2>
              <p className="prose-quiet mt-4 max-w-sm text-[0.9375rem]">
                Phone and WhatsApp reach the same number. Email is read by the
                team. Office visits are by arrangement — please call ahead.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="mt-9">
              <ContactDetails />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.05}>
              <Suspense fallback={<EnquiryComposerSkeleton />}>
                <EnquiryComposer />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-tight surface-ivory">
        <div className="shell grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-display text-[1.75rem] leading-snug font-light text-graphite lg:text-[2.25rem]">
                Prefer to write in detail?{" "}
                <em className="italic-accent">Email is read carefully.</em>
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Reveal delay={0.06}>
              <p className="text-[0.875rem] leading-relaxed font-light text-ink-muted">
                Office visits are by appointment. Please call ahead so that
                someone is available to meet you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
