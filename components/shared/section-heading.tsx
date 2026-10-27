import { Eyebrow } from "@/components/shared/eyebrow"
import { Reveal } from "@/components/shared/reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  lead?: React.ReactNode
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  titleClassName,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          id={id}
          className={cn("display-lg text-balance", titleClassName)}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "prose-quiet mt-7",
              align === "center" && "mx-auto"
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  )
}
