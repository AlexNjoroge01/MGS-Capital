import { publishedServices } from "@/lib/services"
import { yearsInOperation } from "@/lib/site-config"

const facts = [
  { value: `${yearsInOperation}`, label: "Years in operation" },
  { value: `${publishedServices.length}`, label: "Services" },
  { value: "One", label: "Point of contact" },
  { value: "Kenya", label: "Individuals and businesses" },
]

export function TrustStrip() {
  return (
    <section aria-label="MGS Capital at a glance" className="border-y border-silver-mist bg-white">
      <div className="shell grid grid-cols-2 divide-silver-mist sm:grid-cols-4 sm:divide-x">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-silver-mist px-1 py-8 sm:border-b-0 sm:px-8 sm:py-10 first:sm:pl-0 last:sm:pr-0"
          >
            <p className="font-display text-[2.25rem] leading-none font-light text-graphite sm:text-[2.75rem]">
              {fact.value}
            </p>
            <p className="mt-3 text-[0.625rem] tracking-[0.16em] text-ink-muted uppercase">
              {fact.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
