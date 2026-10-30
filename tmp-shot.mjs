import puppeteer from "puppeteer-core"

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 })

const out = "C:\\Users\\alexn\\AppData\\Local\\Temp\\opencode"

for (const [name, url] of [
  ["home", "http://localhost:3000/"],
  ["about", "http://localhost:3000/about"],
  ["service", "http://localhost:3000/services/medical-insurance"],
]) {
  await page.goto(url, { waitUntil: "networkidle0" })
  await new Promise((r) => setTimeout(r, 1200))
  await page.screenshot({ path: `${out}\\${name}.png`, fullPage: true })
  console.log(name, "done")
}

await browser.close()
