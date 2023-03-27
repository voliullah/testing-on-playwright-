import { test, expect, chromium } from "@playwright/test";
import { defineConfig } from "@playwright/test";
export default defineConfig({
  expect: {
    timeout: 100 * 1000,
  },
});
test("hello world im here to do it again", async ({}) => {
  test.setTimeout(200000);
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const gotourl = await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  const username = await page.getByPlaceholder("username").fill("Admin");
  const password = await page.getByPlaceholder("password").fill("admin123");
  const clickonlogin = page.locator("text=login").click;
  page.waitForTimeout(5000);
});

test("the second one ", async ({}) => {
  test.setTimeout(200000);
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const goto1 = page.goto("http://www.google.com");
  page.waitForTimeout(5000);
});
test.only("third one is to go to HRM and login and logout ", async ({
  page,
}) => {
  test.setTimeout(200000);
  const urlpage = await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //const goto = page.locator(
  //   "//*[@class='oxd-input oxd-input--active' and @name='username']"
  // );
  //  await goto.fill('ususername')
  const username = await page
    .locator(
      "//input[@class='oxd-input oxd-input--active' and @placeholder='Username']"
    )
    .fill('Admin');

  const password = await page
    .locator(
      "//input[@class='oxd-input oxd-input--active' and @type='password']"
    )
    .fill('admin123');
  const select = page.locator("//button[@type='submit']").click;

  page.waitForTimeout(5000);
  const expectthis = expect(page).toHaveTitle(/dashboard/);
});
test.skip("next task ", async ({ page }) => {
  const urlgoto = await page.goto("");
});
