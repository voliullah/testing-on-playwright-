import {test, expect , chromium, selectors } from '@playwright/test'
import { defineConfig } from '@playwright/test'
export default defineConfig({
    expect : {
        timeout : 200* 1000 ,

}
})
test (('my first one '), async({})=>{
    test.setTimeout(150000);
  const browser = await chromium.launch({headless:true});
  const context = await browser.newContext() ;
  const page = await context.newPage();
  const goto = page.goto('http://www.google.com/') ;
  const search = page.locator("//*[@class='gLFyf']').fill('hello world");
 const waiting =  await page.waitForTimeout(5000);
 const searchit = await page.locator('div.L3eUgb:nth-child(2) div.o3j99.ikrT4e.om7nvf:nth-child(3) div:nth-child(1) div.A8SBwf:nth-child(1) div.FPdoLc.lJ9FBc:nth-child(6) center:nth-child(1) > input.gNO89b').click
// const press= await page.locator("//*[@class='gNO89b' and @type='submit'][2]").click();
}


)



