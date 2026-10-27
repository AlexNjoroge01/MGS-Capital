"use client"

import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

type HairlineProps = {
  className?: string
  /** Slight delay so the line draws after its heading. */
  delay?: number
  tone?: "light" | "strong" | "bronze" | "white"
}

export function Hairline({
  className,
  delay = 0,
  tone = "light",
}: HairlineProps) {
  const reduced = useReducedMotion()
  const colour =
    tone === "bronze"
      ? "bg-bronze/60"
      : tone === "strong"
        ? "bg-silver-light"
        : tone === "white"
          ? "bg-white/25"
          : "bg-silver-mist"

  if (reduced) {
    return <div className={cn("h-px w-full", colour, className)} />
  }

  return (
    <motion.div
      className={cn("h-px w-full origin-left", colour, className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
