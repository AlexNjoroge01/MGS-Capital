import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  const monogramSvg = await readFile(
    join(process.cwd(), "public/logo/mgs-monogram.svg")
  )
  const src = `data:image/svg+xml;base64,${monogramSvg.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={132} height={132} />
      </div>
    ),
    { ...size }
  )
}
