import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import type { Faq } from "@/lib/services"

export function ServiceFaq({
  faqs,
  title = (
    <>
      Questions, <em className="italic-accent">answered.</em>
    </>
  ),
}: {
  faqs: Faq[]
  title?: React.ReactNode
}) {
  return (
    <section className="section bg-white">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow className="mb-5">FAQ</Eyebrow>
            <h2 className="display-lg">{title}</h2>
            <p className="prose-quiet mt-6 max-w-xs text-[0.9375rem]">
              If something is not covered here, ask it directly. We will give a
              straight answer.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <Accordion type="single" collapsible className="border-t-0">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`service-faq-${index}`}
                >
                  <AccordionTrigger className="gap-8 px-0 py-6 text-left text-[0.9375rem] font-normal tracking-normal normal-case text-graphite hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-0">
                    <p className="max-w-2xl pb-3 text-[0.9375rem] leading-relaxed font-light text-ink-muted">
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
