/** Shared button treatments (Blueprint §6.3) */
export const buttonStyles = {
  primary:
    "h-12 rounded-none border border-graphite bg-graphite px-8 text-[0.6875rem] font-medium tracking-[0.16em] text-white hover:border-bronze-deep hover:bg-bronze-deep hover:text-white",
  outline:
    "h-12 rounded-none border border-graphite bg-transparent px-8 text-[0.6875rem] font-medium tracking-[0.16em] text-graphite hover:border-graphite hover:bg-graphite hover:text-white",
  lightOutline:
    "h-12 rounded-none border border-white/40 bg-transparent px-8 text-[0.6875rem] font-medium tracking-[0.16em] text-white hover:border-white hover:bg-white hover:text-graphite",
  quiet:
    "h-auto rounded-none border-0 bg-transparent p-0 text-[0.6875rem] font-medium tracking-[0.16em] text-bronze-deep hover:bg-transparent hover:text-graphite",
} as const
