import {test, expect } from '@playwright/test'
import moment from "moment";

test('using fill function to choose a date ', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    // let date = "20-3-2022"
    // await page.locator('[type="date"]').fill(date)
    // by executing code on this , we have got an error which says'MAlformed value" to resolve this issue we will have to check the sequence of the value in web page using documents.getelemetbyId('locator').value . and then give it a value here  in that order. that way we got its order ....
    //  that way we got its order like this YYYY-M-D , hence  
    let date = "2022-12-18" // we have to give it value in string just because fill function only accept string value , otherwise we could have give it value number 
    await page.locator('[type="date"]').fill(date)
    await page.waitForTimeout(3000) // just so i could see the execution
    
    // now that we are done choosing date with fill function , lets do it with moment
    //  in the same webpage to locate element wasnt possible in this date picker so we have to go with the one  below there 
})
test('using moment choose date', async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    // here we have to use this approach 
    // we we have seen to pick a date , we first click on placeholder and the elements in calender gets displayed then to choose a date we go prev and forward , keeping in mind the element inbetween these two so , we have to find total 4 locators ie , click , prev, next , and the one inbetween where it shows 'month year'. okay so to choose a date we go and click then go to prev or next and then click on a date . making use of three locators 

     const clicktosee = await page.locator('[placeholder="Start date"]') // clicks 
    const mmYY = await  page.locator('(//table//th[@class="datepicker-switch"])[1]') // see the month and year 
    const prev = await page.locator('(//table//th[@class="prev"])[1]') // go prev 
    const next = await page.locator('(//table//th[@class="next"])[1]') // go next 
    const date4 = await page.locator('//td[@class="day"][text()="4"]') // a day , in this case 4 
     // lets do operations on it now 
    await clicktosee.click()
    await prev.click()
    console.log(await mmYY.textContent())
    await date4.click()

    // await page.waitForTimeout(5000)
    // now to make it choose for the year and month we want ,  we have to use this approach like , first of all make a variable give it a value exactly how it will show on  mmYY (text content )  , then to make it show us that string value , we have to use while loop , in a sense that if this mmYY is not equeals to textcontent of the monthYear then keep clicking prev. 
    let  monthYear = "May 2002" // 'let' because we might change its value later 
 
    // await page.waitForTimeout(5000)
    // console.log(await mmYY.textContent())


     // now you have noticed that it only checks in prev months , what if we have to pick  a date which exists in future??
    //   for that perpose we will have to use of this library called MOMENt , so first of all we have to import it and then make a constant 
    // now we gotta make a  variable to for moment to see if its before or after 
    const thismonth= await moment(monthYear, "MMMM YYYY").isBefore() // in using moment you gotta be carefull giving it format , if you wont give it the right format , it may throw error 
    //  now to  make loog work for past and future date picking , we will use if condition inside the loog 

    console.log(thismonth)

    while (await mmYY.textContent() != monthYear){
      if (thismonth){
        await prev.click()
        }
      else {
            await next.click()
        }
    }
    await date4.click()  
    await page.waitForTimeout(5000) // these are two commands to install moment from command prompt  
    // npm install moment  
    // npm install --save-dev @types/moment , after this you will have to make tsconfig.json and fill inputs accordingly  and also put moment underdependencies in package.json
  
})
test('chck moment ', async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    console.log(await moment())    
})
test('lets play with picking dates ', async ({page})=>{
    await page.goto('https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker')
    //  here unlike abobe , the month and year have separate locators , so intotal we will have to work with 5 locators 
    const clickFirst = page.locator("input[class='hasDatepicker']") //  click  // in this case i retrieve ID ,turned out it was two IDs with same name , so ID based locators could also be more than one  
    const month = page.locator('class="ui-datepicker-month"') // month 
    const year = page.locator('[class="ui-datepicker-year"]') // year
    const prev = page.locator('[class="ui-datepicker-prev ui-corner-all"]') // prev
    const next = page.locator('[class="ui-datepicker-next ui-corner-all"]') // next 
    const todayDate = page.locator('[class="ui-state-default ui-state-highlight ui-state-hover"]') // today
    const date2= page.locator('//a[@class="ui-state-default"][text()="2"]') // date  2 of this month
     // lets go with simpler way first 
    await clickFirst.click()
    await page.dblclick("input[class='hasDatepicker']")
    await page.waitForLoadState()
    await prev.click()
    await date2. click()
    await page.waitForTimeout(5000)
    console.log(await year.textContent())
    console.log(await month.textContent())


    let dateToPick= "June 2019"
    const momentCheck = await moment(year + "MMMM YYYY").isBefore()
    console.log(momentCheck)



})
test.only('click on date picker', async ({page})=>{

    await page.goto('https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker')
    // const clickFirst0 = page.locator('//html[@class="js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths jetpack-lazy-images-js-enabled"]').
    await page.waitForLoadState()
    await page.waitForTimeout(5000)
    const frameclick =page.frameLocator('iframe[1]').locator("//input[@class='hasDatepicker']")
    // const  clickFirst = page.locator("//body/div[@id='wrapper']/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/p[1]/iframe[1]")    
    await frameclick.click()
    // await page.locator('//body[1]/p[1]/input[1]').click()
})

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker');
  await page.frameLocator('#post-2661 >> internal:role=paragraph >> iframe').locator('#datepicker').click();
  await page.frameLocator('#post-2661 >> internal:role=paragraph >> iframe').getByRole('link', { name: '1', exact: true }).click();
})