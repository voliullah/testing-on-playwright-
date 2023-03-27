import {test,expect} from "@playwright/test";
test('bug should be fixed asap', async({page})=>{

await page.goto('https://www.securetech-consultancy.com/')
const locateicon = page.locator("//i[@class='fa fa-facebook fa-lg']")
await locateicon.click()
page.waitForEvent('popup')
//page.goto('http://www.facebook.com')
await locateicon.scrollIntoViewIfNeeded()
await page.getByTestId('royal_email').fill('voliullah.khan')
await page.getByTestId('royal_pass').fill('wo')
await page.getByTestId('royal_login_button').click()
})













test.skip('orange hrm fb icon click', async({page})=>{
await page.goto('http://www.orangehrm.com')
await page.locator("//*[@src='/_resources/themes/orangehrm/dist/images/social-icon/facebook.png']").click()
// on click it take me to another page and i cant move forward then
await page.waitForEvent('popup')
await page.getByTestId('royal_email').fill('voliullah.khan')
await page.getByTestId('royal_pass').fill('okay okay')
await page.getByTestId('royal_login_button').click()
})
























test.skip('orange hrm fb icon ', async({page})=>{

    // dummy url
    await page.goto('https://www.myapp.com/')
    const navigationPromise =  page.waitForNavigation();
    await navigationPromise

    // User login
    await page.waitForSelector('#username-in')
    await page.fill('#username-in', 'username')
    await page.fill('#password-in', 'password')
    await page.click('//button[contains(text(),"Sign In")]')
    await navigationPromise

    // User lands in application home page and clicks on link in dashboard 
    // link will open another application in new tab 
    await page.click('(//span[text()="launch-app-from-dashboard"])[2]')

    await navigationPromise
    await page.context()
    // Waiting for element to appear in new tab and click on ok button
    await page.waitForTimeout(6000)
    await page.waitForSelector('//bdi[text()="OK"]')
    await page.click('//bdi[text()="OK"]')

})