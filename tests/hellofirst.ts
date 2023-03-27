import {test,expect, chromium} from '@playwright/test';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  expect: {
    timeout: 100* 1000,
  },
    });

test (("MY FIRST TEST "),async () => {
    const browser = await chromium.launch(

        { headless: false })
        const context = await browser.newContext();
        const page  = await context.newPage();
        const gotofb = await page.goto("http://wwww.facebook.com/")
        expect(page).toHaveTitle("facebook");
        

       // const sec = await page.waitForTimeout(6000);
      //const gotoin =  await page.goto("https://www.instagram.com/")
     // const sec2 = await page.waitForTimeout(6000);
     // const hello =await page.goto("http://www.google.com");
       //const url= page.url;
      //const meao = console.log(page.title);
       //expect(meao).toBe("Google")




        
    
}    )
