import puppeteer from "puppeteer-core"

const browser = await puppeteer.launch({
  executablePath:
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 960, deviceScaleFactor: 1 })
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" })
await page.screenshot({ path: "tmp-home.png" })

// Hover the Services trigger and wait for the panel to animate in.
const trigger = await page.$('[aria-label="Services menu"]')
console.log("trigger", trigger ? "found" : "missing")
if (trigger) {
  await trigger.hover()
  await new Promise((r) => setTimeout(r, 900))
  await page.screenshot({ path: "tmp-menu.png" })
  const panel = await page.$('[data-slot="navigation-menu-content"]')
  if (panel) {
    const box = await panel.boundingBox()
    console.log("panel box", box)
    const text = await panel.evaluate((el) => el.textContent?.slice(0, 120))
    console.log("panel text", text)
  }
}

await browser.close()
