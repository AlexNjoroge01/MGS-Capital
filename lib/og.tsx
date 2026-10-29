import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

type OgOptions = {
  eyebrow: string
  title: string
}

const displayFont = await readFile(
  join(process.cwd(), "assets/fonts/CormorantGaramond-Light.woff")
)
const uiFont = await readFile(join(process.cwd(), "assets/fonts/Jost-Regular.woff"))
const monogramPng = await readFile(
  join(process.cwd(), "public/logo/mgs-monogram.png")
)
const monogram = `data:image/png;base64,${monogramPng.toString("base64")}`

export function renderOgImage({ eyebrow, title }: OgOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "64px 76px 56px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-80px",
            width: "560px",
            height: "560px",
            opacity: 0.05,
            display: "flex",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={monogram} alt="" width={560} height={560} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={monogram} alt="" width={54} height={54} />
            <div
              style={{
                fontFamily: "Jost",
                fontSize: 19,
                letterSpacing: 7,
                color: "#30373A",
              }}
            >
              MGS CAPITAL LIMITED
            </div>
          </div>
          <div
            style={{
              fontFamily: "Jost",
              fontSize: 13,
              letterSpacing: 4,
              color: "#8A6B45",
            }}
          >
            INSURANCE · INVESTMENT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Jost",
              fontSize: 16,
              letterSpacing: 5,
              color: "#8A6B45",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontFamily: "Cormorant",
              fontWeight: 300,
              fontSize: title.length > 42 ? 64 : 78,
              lineHeight: 1.05,
              color: "#30373A",
              marginTop: 22,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: 64,
              height: 1,
              background: "#A8845A",
              marginTop: 32,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #C9CED1",
            paddingTop: 24,
            fontFamily: "Jost",
            fontSize: 15,
            color: "#5E676B",
          }}
        >
          <div>Your fiduciary investment advisory partner</div>
          <div>mgscapital.co.ke</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Cormorant",
          data: displayFont,
          style: "normal",
          weight: 300,
        },
        {
          name: "Jost",
          data: uiFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  )
}
