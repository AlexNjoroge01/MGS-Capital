import Image from "next/image"

import { cn } from "@/lib/utils"

type FramedImageProps = {
  src: string
  alt: string
  aspect?: "portrait" | "landscape" | "square" | "tall" | "wide"
  priority?: boolean
  className?: string
  imageClassName?: string
  /** Hairline offset frame, the site's signature detail. */
  offset?: boolean
  sizes?: string
  caption?: React.ReactNode
}

const ratios = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
}

export function FramedImage({
  src,
  alt,
  aspect = "portrait",
  priority,
  className,
  imageClassName,
  offset = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  caption,
}: FramedImageProps) {
  const isSvg = src.endsWith(".svg")

  return (
    <figure className={cn("relative", offset && "frame-offset", className)}>
      <div
        className={cn(
          "relative overflow-hidden bg-ivory",
          ratios[aspect]
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          unoptimized={isSvg}
          className={cn(
            "object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02]",
            imageClassName
          )}
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-[0.75rem] leading-relaxed tracking-[0.04em] text-ink-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
