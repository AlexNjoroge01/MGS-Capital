import { renderOgImage } from "@/lib/og"
import { getPillar } from "@/lib/pillars"
import { getService } from "@/lib/services"

export const alt = "MGS Capital Limited service overview"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  const pillar = service ? getPillar(service.pillar) : undefined

  return renderOgImage({
    eyebrow: pillar ? `${pillar.number} · ${pillar.name}` : "Services",
    title: service?.h1 ?? "Insurance and investment advisory in Kenya",
  })
}
