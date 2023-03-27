import { expect } from "@playwright/test";
import{ test } from '@playwright/test'
import moment  from "moment";
test('lets pick date again ',async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    let datetoselect = '2003-12-02'
    const dateplace = await page.locator('[type="date"]')
    await dateplace.fill(datetoselect)
    // await page.waitForTimeout(4000)
})
test.('go fot the moment now ',async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    // const randomdate=await page.locator('//td[@data-date="1677110400000"]')
    
    const clickFirst =await page.locator('[placeholder="Start date"]')
    const herewego= await page.locator('(//table//th[@class="datepicker-switch"])[1]')  ////div[@class="datepicker-days"]//th[@class="datepicker-switch"]
    const next = await page.locator('//div[@class="datepicker-days"]//th[@class="next"]')
    const prev = await page.locator('//div[@class="datepicker-days"]//th[@class="prev"]')
    const dateOne = await page.locator('//td[@class="day"][text()="18"]')
    // const isbefore = await moment(datetoselect,'MMMM YYYY').isBefore()
    // console.log('is before?'+isbefore)
    
    // await clickFirst.click() 
    // await prev.dblclick()
    // await dateOne.click()
    let   datetoselect  : string = 'July 2022';
    // console.log(textdatemonth)
    await clickFirst.click()
    while(await herewego.textContent() != datetoselect){
        await prev.click()
    }
    // await  dateOne.click()

})
test('do it here and find out what u were missing above ',async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    
    const clickFirst =await page.locator('[placeholder="Start date"]')
    const mmYY= await page.locator('(//table//th[@class="datepicker-switch"])[1]')
    const next = await page.locator('//div[@class="datepicker-days"]//th[@class="next"]')
    const prev = await page.locator('//div[@class="datepicker-days"]//th[@class="prev"]')
    const dateOne = await page.locator('//td[@class="day"][text()="18"]')

    // await clickFirst.click()
    // await prev.click()
    // await prev.click()
    // console.log(await mmYY.textContent())    

    let datetoselect : string = "May 2018"
    await clickFirst.click()
    await mmYY.textContent()
    while (await mmYY.textContent() != datetoselect) {
        await prev.click()
        
    }
    // console.log(await mmYY.textContent())
    await dateOne.click()
    await page.waitForTimeout(3000)
})