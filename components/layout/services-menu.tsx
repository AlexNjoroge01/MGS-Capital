"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { pillars } from "@/lib/pillars"
import { getServicesByPillar } from "@/lib/services"
import { cn } from "@/lib/utils"

export function ServicesMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <NavigationMenu viewport={false} className="max-w-none">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="nav-link h-auto rounded-none bg-transparent p-0 pb-2 text-[0.75rem] font-normal tracking-[0.22em] uppercase hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent"
            aria-label="Services menu"
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-[min(92vw,760px)] rounded-none border border-silver-light bg-white p-0 shadow-[0_30px_80px_-50px_rgba(30,35,38,0.45)]">
            <div className="grid grid-cols-2 gap-x-10 gap-y-9 p-9">
              {pillars.map((pillar) => {
                const services = getServicesByPillar(pillar.slug)
                if (!services.length) return null

                return (
                  <div key={pillar.slug}>
                    <p className="flex items-baseline gap-2 text-[0.625rem] tracking-[0.2em] text-bronze-deep uppercase">
                      <span className="font-display text-sm text-silver">
                        {pillar.number}
                      </span>
                      {pillar.name}
                    </p>
                    <p className="mt-2 font-display text-[1.0625rem] leading-snug text-ink-muted italic">
                      {pillar.promise}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/services/${service.slug}`}
                              onClick={onNavigate}
                              className="group flex items-center gap-2 rounded-none p-0 text-[0.8125rem] leading-snug text-graphite transition-colors hover:bg-transparent hover:text-bronze-deep focus:bg-transparent"
                            >
                              <span className="h-px w-3 bg-silver-light transition-all duration-300 group-hover:w-5 group-hover:bg-bronze" />
                              {service.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
              <div className="border-t border-silver-mist pt-6">
                <Link
                  href="/services"
                  onClick={onNavigate}
                  className="quiet-link text-[0.75rem] tracking-[0.14em] uppercase"
                >
                  All services
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function DesktopNav({ className }: { className?: string }) {
  const pathname = usePathname()

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <nav
      aria-label="Primary"
      className={cn("hidden items-center gap-9 lg:flex", className)}
    >
      <Link
        href="/"
        className="nav-link"
        data-active={isActive("/")}
      >
        Home
      </Link>
      <Link
        href="/about"
        className="nav-link"
        data-active={isActive("/about")}
      >
        About
      </Link>
      <div className="relative flex items-center">
        <ServicesMenu />
        <span
          aria-hidden
          className={cn(
            "absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-bronze transition-transform duration-500",
            pathname.startsWith("/services") && "scale-x-100"
          )}
        />
      </div>
      <Link
        href="/contact"
        className="nav-link"
        data-active={isActive("/contact")}
      >
        Contact
      </Link>
    </nav>
  )
}
