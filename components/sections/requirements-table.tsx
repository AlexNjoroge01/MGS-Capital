import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import type { Service } from "@/lib/services"

export function RequirementsTable({ service }: { service: Service }) {
  return (
    <section className="section-tight bg-white">
      <div className="shell grid gap-9 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow className="mb-5">Typically required</Eyebrow>
            <h2 className="display-md">
              What you will <em className="italic-accent">need.</em>
            </h2>
            <p className="prose-quiet mt-5 max-w-xs text-[0.9375rem]">
              Typical requirements. Your exact list will be confirmed during
              your consultation.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <Table>
              <TableHeader>
                <TableRow className="border-graphite/20 hover:bg-transparent">
                  <TableHead className="w-12 py-4 text-[0.625rem] tracking-[0.18em] text-ink-muted uppercase">
                    #
                  </TableHead>
                  <TableHead className="py-4 text-[0.625rem] tracking-[0.18em] text-ink-muted uppercase">
                    Document or information
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {service.requirements.map((item, index) => (
                  <TableRow
                    key={item}
                    className="border-silver-mist hover:bg-transparent"
                  >
                    <TableCell className="py-5 text-[0.75rem] text-bronze-deep">
                      {String(index + 1).padStart(2, "0")}
                    </TableCell>
                    <TableCell className="py-5 text-[0.9375rem] font-light text-graphite">
                      {item}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
