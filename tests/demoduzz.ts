import { test, expect, chromium } from '@playwright/test';
 
test('go to facebook and login', async ({ page }) => {
    await page.goto("https://www.facebook.com/")
    await page.getByTestId('royal_email').click();
    await page.getByTestId('royal_email').fill('voliullah.khan.7');
    await page.getByTestId('royal_pass').click();
    await page.getByTestId('royal_pass').fill('a2');
    await page.getByTestId('royal_login_button').click();
    await page.waitForTimeout(2000)
    await page.getByRole('link',{ name:'friends'}).click()
    await page.getByRole('link', {name : 'All friends'}).click()
    await page.getByRole('link', {name : 'adnan shah'}).click()
    await page.getByRole('link', { name: 'Message' , exact : true }).click()
    
    await page.waitForTimeout(4000)
     await page.waitForTimeout(1000);
     
  })