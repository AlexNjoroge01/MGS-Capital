import Image from "next/image"

import { cn } from "@/lib/utils"

type MonogramProps = {
  className?: string
  variant?: "colour" | "graphite" | "white"
  /** Decorative by default; pass a title for standalone use. */
  title?: string
}

/**
 * The monogram is cut from the supplied Gemini logo render so the mark on the
 * site matches the brand artwork exactly. A white cutout is used on the dark
 * footer and CTA band.
 */
export function Monogram({
  className,
  variant = "colour",
  title,
}: MonogramProps) {
  const src =
    variant === "white"
      ? "/logo/mgs-monogram-white.png"
      : "/logo/mgs-monogram.png"

  return (
    <span
      className={cn("relative inline-block size-10 shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <Image
        src={src}
        alt={title ?? ""}
        fill
        sizes="(min-width: 1024px) 180px, 120px"
        className="object-contain"
        priority={variant === "white" ? undefined : false}
      />
    </span>
  )
}
