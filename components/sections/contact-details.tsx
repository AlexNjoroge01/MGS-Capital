"use client"

import { Copy, ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { toast } from "sonner"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { siteConfig, whatsappLink } from "@/lib/site-config"

function CopyButton({ value, label }: { value: string; label: string }) {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(value)
                toast.success(label)
              } catch {
                toast.error("Could not copy. Please select the text instead.")
              }
            }}
            aria-label={`Copy ${label.toLowerCase()}`}
            className="inline-flex size-11 items-center justify-center border border-silver-light text-silver transition-colors hover:border-bronze-deep hover:text-bronze-deep"
          >
            <Copy className="size-3.5" strokeWidth={1.25} aria-hidden />
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={8}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function ContactDetails() {
  return (
    <div className="border-t border-silver-light">
      <div className="grid grid-cols-1 gap-4 border-b border-silver-light py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-start">
        <p className="flex items-center gap-2 text-[0.5625rem] tracking-[0.18em] text-ink-muted uppercase">
          <Phone className="size-3.5 text-bronze-deep" strokeWidth={1.25} />
          Phone
        </p>
        <a
          href={siteConfig.phone.href}
          className="text-[1rem] font-light text-graphite transition-colors hover:text-bronze-deep"
        >
          {siteConfig.phone.display}
        </a>
        <div className="flex gap-2">
          <CopyButton value={siteConfig.phone.display} label="Phone number copied" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 border-b border-silver-light py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-start">
        <p className="flex items-center gap-2 text-[0.5625rem] tracking-[0.18em] text-ink-muted uppercase">
          <MessageCircle
            className="size-3.5 text-bronze-deep"
            strokeWidth={1.25}
          />
          WhatsApp
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[1rem] font-light text-graphite transition-colors hover:text-bronze-deep"
        >
          Message Lizzie on WhatsApp
        </a>
        <ExternalLink
          className="mt-1 size-3.5 text-silver"
          strokeWidth={1.25}
          aria-hidden
        />
      </div>

      <div className="grid grid-cols-1 gap-4 border-b border-silver-light py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-start">
        <p className="flex items-center gap-2 text-[0.5625rem] tracking-[0.18em] text-ink-muted uppercase">
          <Mail className="size-3.5 text-bronze-deep" strokeWidth={1.25} />
          Email
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[1rem] break-all font-light text-graphite transition-colors hover:text-bronze-deep"
        >
          {siteConfig.email}
        </a>
        <div className="flex gap-2">
          <CopyButton value={siteConfig.email} label="Email address copied" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 border-b border-silver-light py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-start">
        <p className="flex items-center gap-2 text-[0.5625rem] tracking-[0.18em] text-ink-muted uppercase">
          <MapPin className="size-3.5 text-bronze-deep" strokeWidth={1.25} />
          Office
        </p>
        <div className="text-[1rem] leading-relaxed font-light text-graphite">
          {siteConfig.office.name}
          <br />
          {siteConfig.office.floor}
          <br />
          {siteConfig.office.city ?? siteConfig.office.country}
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="quiet-link mt-3 flex w-fit items-center gap-1.5 text-[0.6875rem] tracking-[0.14em] uppercase"
          >
            Open in Google Maps
            <ExternalLink className="size-3" strokeWidth={1.25} />
          </a>
        </div>
        <span aria-hidden />
      </div>

      {siteConfig.hours.length > 0 && (
        <div className="grid grid-cols-1 gap-4 border-b border-silver-light py-6 sm:grid-cols-[7rem_1fr_auto] sm:items-start">
          <p className="text-[0.5625rem] tracking-[0.18em] text-ink-muted uppercase">
            Hours
          </p>
          <div className="text-[0.9375rem] leading-relaxed font-light text-graphite">
            {siteConfig.hours.map((entry) => (
              <span key={entry.days} className="block">
                {entry.days}: {entry.time}
              </span>
            ))}
          </div>
          <span aria-hidden />
        </div>
      )}
    </div>
  )
}
