import { expect, test } from "@playwright/test";

test("renders the Arabic page with local assets and working native accordions", async ({
  page,
}) => {
  const errors: string[] = [];
  const failedAssets: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) failedAssets.push(response.url());
  });
  await page.goto("/");
  await expect(page).toHaveTitle(/أكاديمية TX للتعاونيات/);
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator("html")).toHaveAttribute("lang", "ar");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "برنامج لجمعيتك.",
  );
  await expect(page.locator("details.program")).toHaveCount(7);
  await expect(page.locator("details.faq")).toHaveCount(8);

  await page.locator("#program-03 summary").click();
  await expect(page.locator("#program-03")).toHaveAttribute("open", "");
  await expect(page.locator("#program-03 .programbody")).toBeVisible();
  await page.locator("#faq summary").first().click();
  await expect(page.locator("#faq details").first().locator("p")).toBeVisible();

  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(() =>
      document.fonts.check('400 16px "IBM Plex Sans Arabic"'),
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
  expect(failedAssets).toEqual([]);
  expect(await page.locator('a[href*="chatgpt.site"]').count()).toBe(0);
});

test("role tabs work with mouse and keyboard navigation", async ({ page }) => {
  await page.goto("/");
  const tabs = page.getByRole("tab");
  await tabs.nth(1).click();
  await expect(page.getByRole("tabpanel")).toHaveAttribute(
    "aria-labelledby",
    "role-1",
  );
  await expect(page.locator("#roleTitle")).toHaveText("المالية والتشغيل");
  await tabs.nth(1).press("ArrowDown");
  await expect(tabs.nth(2)).toBeFocused();
  await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#roleTitle")).toHaveText("الحوكمة والامتثال");
  await tabs.nth(2).press("End");
  await expect(tabs.nth(3)).toBeFocused();
  await tabs.nth(3).press("Home");
  await expect(tabs.first()).toBeFocused();
  await tabs.first().press("ArrowUp");
  await expect(tabs.last()).toBeFocused();
});

test("navigation stays local and the mobile menu opens and closes", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    const toggle = page.getByRole("button", { name: /القائمة/ });
    await expect(page.locator("#navlinks")).toBeHidden();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await toggle.press("Escape");
    await expect(page.locator("#navlinks")).toBeHidden();
    await toggle.click();
    await page.locator('#navlinks a[href="#programs"]').click();
    await expect(page.locator("#navlinks")).toBeHidden();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  } else {
    await page.locator('#navlinks a[href="#programs"]').click();
  }
  await expect(page).toHaveURL(/\/#programs$/);
});

test("request form validates input, prepares an email, and copies it without posting data", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const posts: string[] = [];
  page.on("request", (request) => {
    if (request.method() === "POST") posts.push(request.url());
  });
  await page.goto("/");
  await page.getByRole("button", { name: "جهّز طلب البرنامج" }).click();
  await expect(page.locator("#formResult")).toBeHidden();
  await page.locator("#association").fill("جمعية الاختبار");
  await page.locator("#activity").fill("زراعي");
  await page.locator("#person").fill("أحمد محمد");
  await page.locator("#email").fill("invalid");
  await page.getByRole("button", { name: "جهّز طلب البرنامج" }).click();
  await expect(page.locator("#formResult")).toBeHidden();
  await page.locator("#email").fill("test@example.com");
  await expect(page.locator("#interest option")).toHaveCount(8);
  await page
    .locator("#interest")
    .selectOption({ label: "الذكاء الاصطناعي للحوكمة والامتثال" });
  await page.locator("#needs").fill("تدريب فريق الحوكمة على مراجعة الأدلة");
  await page.getByRole("button", { name: "جهّز طلب البرنامج" }).click();
  await expect(page.locator("#formResult")).toBeVisible();
  await expect(page.locator("#messageText")).toBeFocused();
  const message = await page.locator("#messageText").inputValue();
  expect(message).toContain("اسم الجمعية: جمعية الاختبار");
  expect(message).toContain(
    "مجال الاهتمام: الذكاء الاصطناعي للحوكمة والامتثال",
  );
  const href = await page.locator("#mailLink").getAttribute("href");
  const mailto = new URL(href!);
  expect(mailto.pathname).toBe("info@thetransformix.com");
  expect(mailto.searchParams.get("body")).toBe(message);
  expect(mailto.searchParams.get("subject")).toContain("جمعية الاختبار");
  await page.getByRole("button", { name: "نسخ الرسالة" }).click();
  await expect(page.getByRole("status")).toHaveText("تم نسخ الرسالة");
  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  // Windows clipboard text uses CRLF; textarea values use LF.
  expect(clipboard.replace(/\r\n/g, "\n")).toBe(message);
  expect(posts).toEqual([]);
});

test("clipboard denial leaves a selectable message and helpful feedback", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: () => Promise.reject(new Error("Clipboard unavailable")),
      },
    });
  });
  await page.goto("/");
  await page.locator("#association").fill("جمعية الاختبار");
  await page.locator("#person").fill("أحمد محمد");
  await page.locator("#email").fill("test@example.com");
  await page.getByRole("button", { name: "جهّز طلب البرنامج" }).click();
  await page.getByRole("button", { name: "نسخ الرسالة" }).click();
  await expect(page.getByRole("status")).toHaveText("حدد النص وانسخه من الحقل");
  expect(
    await page
      .locator("#messageText")
      .evaluate(
        (node: HTMLTextAreaElement) => node.selectionEnd - node.selectionStart,
      ),
  ).toBeGreaterThan(0);
});

test("layout fits narrow and wide viewports and captures a full-page preview", async ({
  page,
}, testInfo) => {
  for (const width of testInfo.project.name === "mobile"
    ? [320, 390, 720]
    : [768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `Horizontal overflow at ${width}px`).toBe(false);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
  await page.setViewportSize(
    testInfo.project.name === "mobile"
      ? { width: 390, height: 844 }
      : { width: 1440, height: 1000 },
  );
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: `artifacts/${testInfo.project.name}.png`,
    fullPage: true,
  });
});
