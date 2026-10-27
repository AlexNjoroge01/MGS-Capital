import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Reveal } from "@/components/shared/reveal"
import { SectionHeading } from "@/components/shared/section-heading"
import { servedSegments } from "@/lib/faqs"
import { getService } from "@/lib/services"

export function WhoWeServe() {
  return (
    <section className="section bg-white">
      <div className="shell">
        <SectionHeading
          eyebrow="Who we serve"
          title={
            <>
              Different lives,{" "}
              <em className="italic-accent">the same care.</em>
            </>
          }
          lead="The work spans individuals and institutions. What each has in common is a decision worth taking seriously."
        />

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-graphite/20 text-[0.625rem] tracking-[0.18em] text-ink-muted uppercase">
                <th scope="col" className="py-4 pr-6 font-normal">
                  Who
                </th>
                <th scope="col" className="py-4 pr-6 font-normal">
                  Typical need
                </th>
                <th scope="col" className="py-4 font-normal">
                  Services
                </th>
              </tr>
            </thead>
            <tbody>
              {servedSegments.map((row, index) => (
                <tr
                  key={row.segment}
                  className="border-b border-silver-mist align-top"
                >
                  <td className="w-[26%] py-6 pr-6">
                    <Reveal delay={index * 0.03}>
                      <span className="text-[0.9375rem] font-normal text-graphite">
                        {row.segment}
                      </span>
                    </Reveal>
                  </td>
                  <td className="w-[30%] py-6 pr-6">
                    <span className="text-[0.875rem] leading-relaxed font-light text-ink-muted">
                      {row.need}
                    </span>
                  </td>
                  <td className="py-6">
                    <ul className="space-y-1.5">
                      {row.serviceSlugs.map((slug) => {
                        const service = getService(slug)
                        if (!service) return null

                        return (
                          <li key={slug}>
                            <Link
                              href={`/services/${slug}`}
                              className="group inline-flex items-center gap-1.5 text-[0.8125rem] text-graphite transition-colors hover:text-bronze-deep"
                            >
                              {service.title}
                              <ArrowUpRight
                                className="size-3 text-silver transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                strokeWidth={1.25}
                              />
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
