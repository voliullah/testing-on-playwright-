import {test,expect,chromium} from '@playwright/test'
test("send a message on insta ",async({page})=>{
test.setTimeout(500000)
    const goto =await page.goto('http://www.instagram.com')
    await page.locator("//input[@aria-label='Phone number, username, or email']").fill('voliullah.khan')
    await page.locator("//input[@aria-label='Password']").fill('')
    await page.locator("//div[@class='_ab8w  _ab94 _ab99 _ab9f _ab9m _ab9p  _abak _abb8 _abbq _abb- _abcm'][1]").click()

    await page.waitForTimeout(12000)
    await page.getByRole('button', { name: 'Not Now' }).click()
    await page.locator("//*[@aria-label='Messenger']").click()
    await page.getByRole('link', { name: 'intsagramme_user\'s profile picture' }).click();

    await page.locator("//textarea[@style='height: 18px !important;']").fill('this is an automated message from voli');
    await page.getByPlaceholder('Message...').press('Enter');
   // await page.locator("")
})