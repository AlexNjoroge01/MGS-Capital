import { renderOgImage } from "@/lib/og"

export const alt =
  "MGS Capital Limited — your fiduciary investment advisory partner"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return renderOgImage({
    eyebrow: "Insurance and investment advisory",
    title: "Considered advice, for people and businesses in Kenya.",
  })
}
