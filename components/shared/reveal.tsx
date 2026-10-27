"use client"

import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "section" | "article" | "li" | "figure"
}

const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
