import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/shared/reveal"
import { Eyebrow } from "@/components/shared/eyebrow"
import { homeFaqs } from "@/lib/faqs"

export function FaqTeaser() {
  return (
    <section className="section bg-white">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow className="mb-6">Questions</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg">
              A few things people <em className="italic-accent">ask first.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="prose-quiet mt-6">
              If your question is not here, ask it directly. A short
              conversation is often the quickest answer.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="quiet-link mt-8 text-[0.75rem] tracking-[0.16em] uppercase"
            >
              Ask a question
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <Accordion type="single" collapsible className="border-t-0">
              {homeFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="gap-8 px-0 py-6 text-left text-[0.9375rem] font-normal tracking-normal normal-case text-graphite hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-0">
                    <p className="max-w-2xl pb-2 text-[0.9375rem] leading-relaxed font-light text-ink-muted">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
