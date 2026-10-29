/**
 * Builds clean, transparent logo assets from the supplied Gemini render.
 * Run with: node scripts/build-logo-assets.mjs
 */
import sharp from "sharp"
import { mkdir } from "node:fs/promises"

const source = "public/Gemini_Generated_Image_4t9pxv4t9pxv4t9p.jpg"
const bg = [176, 177, 171]

async function cutout({ left, top, width, height, threshold = 8, feather = 24 }) {
  const { data, info } = await sharp(source)
    .extract({ left, top, width, height })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const out = Buffer.alloc(info.width * info.height * 4)
  let minX = info.width
  let minY = info.height
  let maxX = 0
  let maxY = 0

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const src = (y * info.width + x) * 3
      const dst = (y * info.width + x) * 4
      const r = data[src]
      const g = data[src + 1]
      const b = data[src + 2]
      const distance = Math.max(
        Math.abs(r - bg[0]),
        Math.abs(g - bg[1]),
        Math.abs(b - bg[2])
      )

      let alpha = Math.min(1, Math.max(0, (distance - threshold) / feather))
      alpha = alpha * alpha * (3 - 2 * alpha)
      if (alpha < 0.06) alpha = 0

      let cr = r
      let cg = g
      let cb = b
      if (alpha > 0 && alpha < 0.98) {
        cr = Math.max(0, Math.min(255, (r - bg[0] * (1 - alpha)) / alpha))
        cg = Math.max(0, Math.min(255, (g - bg[1] * (1 - alpha)) / alpha))
        cb = Math.max(0, Math.min(255, (b - bg[2] * (1 - alpha)) / alpha))
      }

      out[dst] = Math.round(cr)
      out[dst + 1] = Math.round(cg)
      out[dst + 2] = Math.round(cb)
      out[dst + 3] = Math.round(alpha * 255)

      if (alpha > 0.15) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }

  const pad = 10
  minX = Math.max(0, minX - pad)
  minY = Math.max(0, minY - pad)
  maxX = Math.min(info.width - 1, maxX + pad)
  maxY = Math.min(info.height - 1, maxY + pad)

  return {
    buffer: out,
    width: info.width,
    height: info.height,
    box: { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 },
  }
}

async function croppedMonogram() {
  // Region containing the M only (the wordmark sits below it).
  const cut = await cutout({ left: 260, top: 370, width: 400, height: 320 })
  return sharp(cut.buffer, {
    raw: { width: cut.width, height: cut.height, channels: 4 },
  })
    .extract(cut.box)
    .png()
    .toBuffer()
}

async function squareMonogram(size = 720) {
  const cropped = await croppedMonogram()
  const inner = Math.round(size * 0.86)
  const tile = await sharp(cropped)
    .resize({ width: inner, kernel: "lanczos3" })
    .toBuffer()
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: tile, gravity: "centre" }])
    .png()
    .toBuffer()
}

async function whiteVariant(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255
    data[i + 1] = 255
    data[i + 2] = 255
  }
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer()
}

async function fullLockup() {
  const cut = await cutout({ left: 150, top: 380, width: 620, height: 410 })
  return sharp(cut.buffer, {
    raw: { width: cut.width, height: cut.height, channels: 4 },
  })
    .extract(cut.box)
    .resize({ width: 1126, kernel: "lanczos3" })
    .png()
    .toBuffer()
}

async function icon(size, file) {
  const cropped = await croppedMonogram()
  const inner = Math.round(size * 0.84)
  const tile = await sharp(cropped)
    .resize({ width: inner, kernel: "lanczos3" })
    .toBuffer()
  const left = Math.round((size - inner) / 2)
  const top = Math.round((size - inner) / 2)
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 185, g: 187, b: 179, alpha: 1 },
    },
  })
    .composite([{ input: tile, left, top }])
    .png()
    .toFile(file)
}

await mkdir("public/logo", { recursive: true })
await mkdir("app", { recursive: true })

const monogram = await squareMonogram()
await sharp(monogram).toFile("public/logo/mgs-monogram.png")
await sharp(await whiteVariant(monogram)).toFile("public/logo/mgs-monogram-white.png")
await sharp(await fullLockup()).toFile("public/logo/mgs-logo.png")
await icon(512, "app/icon.png")
await icon(180, "app/apple-icon.png")

console.log("Logo assets written.")
