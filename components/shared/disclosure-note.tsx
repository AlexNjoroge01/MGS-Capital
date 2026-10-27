import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

export function DisclosureNote({
  children,
  className,
  label = "Important information",
}: {
  children: React.ReactNode
  className?: string
  label?: string
}) {
  return (
    <Alert
      className={cn(
        "border-x-0 border-b-0 border-t border-silver-light bg-transparent px-0 py-6",
        className
      )}
    >
      <AlertDescription className="text-[0.8125rem] leading-relaxed font-light text-ink-muted">
        <span className="mb-2 block text-[0.625rem] font-normal tracking-[0.2em] text-bronze-deep uppercase">
          {label}
        </span>
        {children}
      </AlertDescription>
    </Alert>
  )
}

export function GeneralDisclosure({ className }: { className?: string }) {
  return (
    <DisclosureNote className={className}>
      {siteConfig.legalName}. Information on this website is general in nature
      and does not constitute financial, investment, insurance, tax, or legal
      advice. Products and services are subject to eligibility, terms and
      conditions, and applicable regulation.
    </DisclosureNote>
  )
}
