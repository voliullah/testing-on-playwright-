import {test, expect } from '@playwright/test'
test("there you go " , async({page})=>{
test.setTimeout(30000)
await page.goto('https://demo.opencart.com/index.php?route=common/home&language=en-gb')
await page.waitForTimeout(2000)
// expect ( await page.screenshot()).toMatchSnapshot('hellloooo.png')
await page.getByPlaceholder('search').click()
await page.getByPlaceholder('search').fill('camera')
// await page.getByPlaceholder('search').press('Enter')
await page.waitForTimeout(4000)
// await page.
// await page.getByText('desktop').hover()


//await page.goto('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjc1MTg3NDk4LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D');

}
)