import Link from "next/link"

import { Monogram } from "@/components/shared/monogram"
import { cn } from "@/lib/utils"

type LogoProps = {
  variant?: "graphite" | "white"
  className?: string
  /** Hide the wordmark on very small screens if needed. */
  showWordmark?: boolean
}

export function Logo({
  variant = "graphite",
  className,
  showWordmark = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="MGS Capital — home"
      className={cn("group flex items-center gap-3", className)}
    >
      <Monogram
        variant={variant === "white" ? "white" : "colour"}
        className="h-11 w-11 shrink-0 transition-opacity duration-500 group-hover:opacity-80 sm:h-12 sm:w-12"
      />
      {showWordmark && (
        <span
          className={cn(
            "flex flex-col justify-center leading-none",
            variant === "white" ? "text-white" : "text-graphite"
          )}
        >
          <span className="text-[0.8rem] font-normal tracking-[0.3em] uppercase sm:text-[0.875rem]">
            MGS Capital
          </span>
          <span
            className={cn(
              "mt-1.5 text-[0.5rem] font-normal tracking-[0.24em] uppercase",
              variant === "white" ? "text-silver-light" : "text-ink-muted"
            )}
          >
            Investment advisory
          </span>
        </span>
      )}
    </Link>
  )
}
