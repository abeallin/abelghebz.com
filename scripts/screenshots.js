const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const PROJECTS = [
  { number: "01", url: "https://whenwillyoumarry.com" },
  { number: "02", url: "https://gpflow-prod.up.railway.app/data/" },
];

const OUT_DIR = path.join(__dirname, "..", "public", "screenshots");

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });

  for (const project of PROJECTS) {
    const page = await context.newPage();
    console.log(`Capturing ${project.url}...`);
    await page.goto(project.url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2000);
    const outPath = path.join(OUT_DIR, `${project.number}.png`);
    await page.screenshot({ path: outPath });
    console.log(`Saved ${outPath}`);
    await page.close();
  }

  await browser.close();
  console.log("Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
