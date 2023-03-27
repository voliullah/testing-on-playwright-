import {test,expect } from '@playwright/test'
test('handling alerts',async({page})=>{
await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
//page.on is an event listener 

//we will have to call page.on function before clicking on the locator which may result in a popup alert
    page.on("dialog", async(alert)=>{ // we are using async function because we would be dealing with promises in this function
//assume we want to see the text in the alert 
    const writtentext = alert.message()
    console.log(writtentext) 
    await alert.accept()     
//whaatever actions we have to perform on alert should be written inside this function.

})
await  page.locator("button:has-text('Click Me')").nth(0).click()


})
test ('handling confirm and ignore alerts', async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
    page.on('dialog',async(alert)=>{
        const text = alert.defaultValue()

        await alert.dismiss()
        // console.log(alert)
        console.log(text)

    })


    await page.locator("button:has-text('Click Me')").nth(1).click()
    await expect( page.locator('id=confirm-demo')).toContainText('Cancel!')


})