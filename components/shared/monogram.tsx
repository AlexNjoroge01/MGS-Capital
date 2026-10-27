import { cn } from "@/lib/utils"

type MonogramProps = {
  className?: string
  variant?: "colour" | "graphite" | "white"
  /** Decorative by default; pass a title for standalone use. */
  title?: string
}

const gradients = {
  colour: {
    graphite: "monogram-graphite",
    silver: "monogram-silver",
    bronze: "#A8845A",
    bronzeLight: "#B99A6E",
    leg: "url(#monogram-graphite)",
    ribbon: "url(#monogram-silver)",
    ribbonOpacity: 0.96,
    shadow: "#30373A",
  },
  graphite: {
    graphite: "monogram-graphite-flat",
    silver: "monogram-silver-flat",
    bronze: "#30373A",
    bronzeLight: "#30373A",
    leg: "#30373A",
    ribbon: "#8C979D",
    ribbonOpacity: 0.9,
    shadow: "#30373A",
  },
  white: {
    graphite: "monogram-white",
    silver: "monogram-silver-white",
    bronze: "#A8845A",
    bronzeLight: "#C9CED1",
    leg: "#FFFFFF",
    ribbon: "#C9CED1",
    ribbonOpacity: 0.95,
    shadow: "#FFFFFF",
  },
} as const

export function Monogram({
  className,
  variant = "colour",
  title,
}: MonogramProps) {
  const palette = gradients[variant]
  const id = `${variant}`

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      className={cn("size-10", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        {variant === "colour" && (
          <>
            <linearGradient
              id="monogram-graphite"
              x1="20"
              y1="16"
              x2="140"
              y2="148"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B4347" />
              <stop offset="1" stopColor="#1E2326" />
            </linearGradient>
            <linearGradient
              id="monogram-silver"
              x1="26"
              y1="128"
              x2="138"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7E898F" />
              <stop offset="0.45" stopColor="#C9CED1" />
              <stop offset="0.7" stopColor="#E8EAEB" />
              <stop offset="1" stopColor="#8C979D" />
            </linearGradient>
          </>
        )}
        {variant === "graphite" && (
          <linearGradient
            id="monogram-silver-flat"
            x1="26"
            y1="128"
            x2="138"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7E898F" />
            <stop offset="1" stopColor="#C9CED1" />
          </linearGradient>
        )}
        {variant === "white" && (
          <linearGradient
            id="monogram-silver-white"
            x1="26"
            y1="128"
            x2="138"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8C979D" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        )}
      </defs>
      <g data-id={id}>
        <path
          d="M64 78 92 46l18 16-28 32-18-16Z"
          fill={palette.bronze}
          opacity={variant === "graphite" ? 0.18 : 0.9}
        />
        <path
          d="M56 92 78 68l24 22-22 24-24-22Z"
          fill={palette.bronzeLight}
          opacity={variant === "graphite" ? 0.12 : 0.85}
        />
        <path
          d="M16 140V24h28l36 66 36-66h28v116h-26V68l-38 70-38-70v72H16Z"
          fill={palette.leg}
        />
        <g transform="rotate(-42 80 80)">
          <rect
            x="-32"
            y="66"
            width="224"
            height="28"
            rx="14"
            fill={palette.ribbon}
            opacity={palette.ribbonOpacity}
          />
        </g>
      </g>
    </svg>
  )
}
