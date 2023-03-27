import {test,expect, chromium} from  '@playwright/test'
//import { defineConfig } from '@playwright/test'
//export default defineConfig({
  //  expect:{ 
   // timeout: 100*10000
 //}
//})
test('my facebook login', async({})=>{
    test.setTimeout(15000)
const browser= await chromium.launch({headless:false})
const context = await browser.newContext()
const page = await context.newPage()
const web = await page.goto("https://www.facebook.com/")
const locate = await page.locator("//input[@id='email']").fill("voliullah.khan.7")
const locate2 = await page.locator("//input[@name='pass']").fill("")
const pressnow =  await page.locator("//button[@type='submit']").click()
const profilepic = await page.locator("//*[@style='height:40px;width:40px']")


 await page.waitForTimeout(2000)
})
