"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Phone } from "lucide-react"

import { Logo } from "@/components/shared/logo"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { pillars } from "@/lib/pillars"
import { getServicesByPillar } from "@/lib/services"
import { siteConfig, whatsappLink } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function MobileNav({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const pathname = usePathname()

  const linkClass = (href: string) =>
    cn(
      "flex items-center justify-between border-b border-silver-mist py-5 font-display text-[1.75rem] font-light text-graphite transition-colors hover:text-bronze-deep",
      (href === "/" ? pathname === "/" : pathname.startsWith(href)) &&
        "text-bronze-deep"
    )

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-l border-silver-light bg-white p-0 sm:max-w-md"
      >
        <SheetHeader className="flex-row items-center justify-between border-b border-silver-mist px-6 py-5">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Logo />
        </SheetHeader>

        <nav aria-label="Mobile" className="px-6 pb-10">
          <Link href="/" onClick={() => onOpenChange(false)} className={linkClass("/")}>
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => onOpenChange(false)}
            className={linkClass("/about")}
          >
            About
          </Link>

          <Accordion type="single" collapsible className="border-t-0">
            <AccordionItem value="services" className="border-b-0">
              <AccordionTrigger className="py-5 hover:no-underline">
                <span
                  className={cn(
                    "font-display text-[1.75rem] font-light normal-case tracking-normal",
                    pathname.startsWith("/services")
                      ? "text-bronze-deep"
                      : "text-graphite"
                  )}
                >
                  Services
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-2">
                <div className="space-y-7 pb-4">
                  {pillars.map((pillar) => {
                    const services = getServicesByPillar(pillar.slug)
                    if (!services.length) return null

                    return (
                      <div key={pillar.slug}>
                        <p className="eyebrow mb-3 text-[0.5625rem]">
                          {pillar.number} · {pillar.name}
                        </p>
                        <ul className="space-y-2.5">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                href={`/services/${service.slug}`}
                                onClick={() => onOpenChange(false)}
                                className="text-[0.9375rem] font-light text-ink-muted transition-colors hover:text-bronze-deep"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                  <Link
                    href="/services"
                    onClick={() => onOpenChange(false)}
                    className="quiet-link text-[0.75rem] tracking-[0.14em] uppercase"
                  >
                    All services <ArrowUpRight className="size-3.5" strokeWidth={1.25} />
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/contact"
            onClick={() => onOpenChange(false)}
            className={linkClass("/contact")}
          >
            Contact
          </Link>

          <div className="mt-10 space-y-4">
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-3 text-[0.9375rem] text-graphite transition-colors hover:text-bronze-deep"
            >
              <Phone className="size-4" strokeWidth={1.25} />
              {siteConfig.phone.display}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[0.9375rem] text-graphite transition-colors hover:text-bronze-deep"
            >
              <span className="size-4" aria-hidden>
                <WhatsAppGlyph />
              </span>
              Chat on WhatsApp
            </a>
            <p className="pt-2 text-[0.8125rem] leading-relaxed text-ink-muted">
              {siteConfig.office.name}
              <br />
              {siteConfig.office.floor}
            </p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-4">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.2A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M9 8.6c.4-.1.8 0 1 .5l.5 1c.1.3 0 .5-.2.7l-.5.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.5c.2-.2.5-.3.7-.2l1 .5c.4.2.6.6.5 1-.2 1-.9 1.5-1.8 1.5-2.9-.2-5.3-2.6-5.4-5.5 0-.9.5-1.6 1.5-1.7Z"
        fill="currentColor"
      />
    </svg>
  )
}
