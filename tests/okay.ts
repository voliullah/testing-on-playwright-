import {test , expect, chromium}  from '@playwright/test'
import {defineConfig } from '@playwright/test'
export  default defineConfig({
    expect :
    { 
        timeout :  5 *  60* 1000 ,
    },

});
test(('okay first one'), async()=>{
    test.setTimeout(20000);
    const browser = await chromium.launch({
        headless:false
        })
    const context = await browser.newContext();
    const page  = await context.newPage();
    const gotofb = page.goto("http://wwww.facebook.com")
    expect(page).toHaveTitle("Facebook - login or sign up");
    
    await page.waitForTimeout(3000)
    



})
    
