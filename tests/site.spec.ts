import { test, expect } from "@playwright/test";
test("Sharing assets and sitemap are exported", async ({ request }) => {
  for (const path of ["/og.png", "/icon.svg", "/sitemap.xml", "/robots.txt"]) {
    expect((await request.get(path)).status()).toBe(200);
  }
});
const routes = [
  "/",
  "/research/",
  "/build/",
  "/writing/",
  "/music/",
  "/about/",
  "/research/reverse-capability/",
  "/research/audio-captcha-sok/",
  "/research/modellect/",
];
for (const width of [375, 768, 1440])
  test(`All routes render without overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("nav a")).toHaveCount(5);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      await expect(page).toHaveTitle(/Mingjie Quinn Bao/);
    }
    expect(errors).toEqual([]);
  });
test("Research filters and links work", async ({ page }) => {
  await page.goto("/research/");
  await page.getByRole("button", { name: "language", exact: true }).click();
  await expect(page.locator(".project-entry")).toHaveCount(1);
  await page.locator(".project-entry").click();
  await expect(page.locator("h1")).toHaveText("Modellect");
  await page.getByRole("link", { name: "← RESEARCH INDEX" }).click();
  await expect(page.locator(".project-entry")).toHaveCount(3);
});
test("Keyboard navigation and signal pause", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await page.getByRole("button", { name: "Pause motion" }).click();
  await expect(
    page.getByRole("button", { name: "Resume motion" }),
  ).toHaveAttribute("aria-pressed", "true");
  const first = await page
    .locator("canvas")
    .evaluate((c: HTMLCanvasElement) => c.toDataURL());
  await page.waitForTimeout(180);
  expect(
    await page
      .locator("canvas")
      .evaluate((c: HTMLCanvasElement) => c.toDataURL()),
  ).toBe(first);
});
test("Reduced motion is static and screenshots", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.waitForTimeout(300);
  const first = await page
    .locator("canvas")
    .evaluate((c: HTMLCanvasElement) => c.toDataURL());
  await page.waitForTimeout(200);
  expect(
    await page
      .locator("canvas")
      .evaluate((c: HTMLCanvasElement) => c.toDataURL()),
  ).toBe(first);
  await page.setViewportSize({ width: 1440, height: 1050 });
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 375, height: 850 });
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
  await page.goto("/music/");
  await page.screenshot({
    path: "test-results/music-mobile.png",
    fullPage: true,
  });
});
