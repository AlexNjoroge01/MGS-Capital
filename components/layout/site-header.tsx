"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"

import { Logo } from "@/components/shared/logo"
import { DesktopNav } from "@/components/layout/services-menu"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  /**
   * The mobile sheet records which route it was opened on, so a client-side
   * navigation closes it without an effect that calls setState.
   */
  const [openForPath, setOpenForPath] = useState<string | null>(null)
  const pathname = usePathname()
  const open = openForPath === pathname

  const setOpen = (next: boolean) => setOpenForPath(next ? pathname : null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-white focus:px-5 focus:py-3 focus:text-[0.75rem] focus:tracking-[0.16em] focus:text-graphite focus:uppercase focus:shadow-lg"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-silver-mist bg-white/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="shell flex h-20 items-center justify-between gap-6 lg:h-24">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              className="hidden h-11 border border-graphite bg-transparent px-6 text-[0.6875rem] text-graphite hover:border-bronze-deep hover:bg-bronze-deep hover:text-white sm:inline-flex"
            >
              <Link href="/contact">Enquire</Link>
            </Button>
            <a
              href={siteConfig.phone.href}
              aria-label={`Call ${siteConfig.phone.display}`}
              className="hidden size-11 items-center justify-center border border-silver-light text-graphite transition-colors hover:border-bronze-deep hover:text-bronze-deep md:inline-flex lg:hidden xl:inline-flex"
            >
              <Phone className="size-4" strokeWidth={1.25} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center text-graphite transition-colors hover:text-bronze-deep lg:hidden"
            >
              <Menu className="size-6" strokeWidth={1} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={open} onOpenChange={setOpen} />
    </>
  )
}
