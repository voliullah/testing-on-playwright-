import test, { chromium } from "@playwright/test";


test.skip ("login test demo" ,async () => {

    const browser = await chromium.launch({
        headless:false});
    const context = await browser.newContext();
    const  page = await context.newPage();
    await page.goto("https://www.instagram.com/")

    await page.waitForTimeout(5000);




})