import { test, expect, chromium, defineConfig } from "@playwright/test";
test.only("this one should run", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  //const ouuh =expect page.toHaveTitle('/index/')
  const page = await context.newPage();

  test.setTimeout(100000);
  //page.waitForTimeout(4000)
   const uuu = await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   const uu = await page.getByPlaceholder("username").fill("Admin")
   const uuuu = await page.getByPlaceholder("password").fill("admin123")
   await page.locator("//*[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()
  //page.waitForTimeout(4000)
   await page.locator("//*[@class='oxd-userdropdown-tab']").click();
  // await page.waitForResponse('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //page.waitForTimeout(4000)
  //body/div[@id='app']/div[2]/div[1]/div[1]/div[1]/div[2]/div[4]/p[1]
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByText('38', { exact: true }).click();
  await page.locator('div').filter({ hasText: '×AboutCompany Name: OrangeHRMVersion: OrangeHRM OS 5.3Active Employees: 38Employ' }).nth(2).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('button', { name: ' Add' }).click();
  })
