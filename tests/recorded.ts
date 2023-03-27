import { chromium } from "@playwright/test";

import {test, expect}  from '@playwright/test'
test('here i am with the cursor ',async({page})=>{
// await page.goto('https://www.securetech-consultancy.com/');
//const page1Promise = page.waitForEvent('popup');
// const rr= page.locator("//i[@class='fa fa-facebook fa-lg']")
// page.locator("//i[@class='fa fa-facebook fa-lg']").click()

await page.goto('https://www.securetech-consultancy.com/');
const page1Promise = page.waitForEvent('popup');
await page.locator("//i[@class='fa fa-facebook fa-lg']").click()
  //await page.getByRole('link', { name: '' }).click();
  const page1 = await page1Promise;
await page1.getByPlaceholder('Email or phone').click();
await page1.getByPlaceholder('Email or phone').fill('hwjsj');
await page1.getByPlaceholder('Password').fill('j');
await page1.getByPlaceholder('Password').click();
await page1.getByPlaceholder('Password').fill('jjfjf');
await page1.getByRole('button', { name: 'Log in', exact: true }).click();
})