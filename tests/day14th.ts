// frame act like a page  and make it easy for compiler to seach items
// tu put locator of a frame , you dont need to put # with its locator 
// eg ; page.frame('firstframe')
//in expect function you need to be carefull about using steric , use double steric always for toContain
//you can handle frames with if else condition t00
//learn abbout rejex 
//the difference in using frame and framelocator is that in frame you just have to put name of the class of frame in locator meanwhile you have to put the exact locator of frame in framelocator
//eg page.frame('nameofframe')
//page.framelocator('#nameofframe')
//asktufailaboutline56
import {test , expect } from '@playwright/test'
test ("select dropdown using selectcountry function",async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
await selectcountry("Denmark")

async function selectcountry (countryName){
    await page.locator("[aria-labelledby='select2-country-container']").click()
    await page.locator("//ul[@class='select2-results__options']").locator('li',{
        hasText : countryName
    }).click()
}
})
test("select multiple countries using async selectcountry function", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
   // await selectcountry('Alaska');
   // await selectcountry('Nebraska');
    await selectcountry('Arizona');
// in this i have practiced some inbulid locators 
    
  
    async function selectcountry(countryName:any) {
      //  await page.getByPlaceholder("Select state(s)").click()
      //  await page.getByRole('textbox',{name : 'Select state(s)'}).click()
        await page.locator("ul[class='select2-selection__rendered']").click()
        await page.locator("[class='select2-results__option']").locator('li',{
            has: countryName
        }).click()
// incase of frames you dont have to put # with the  css locator to to locater frame eg page.frame('firstframe') 
        
    }})
test('get to know about frames ',async ({page}) => {
    await page.goto("https://letcode.in/frame")

    const totalframes=page.frames()
    await console.log(totalframes.length)
   const frameLogin= page.frame("firstFr")
   if (frameLogin != null)(
   await frameLogin?.fill("[name='fname']","voliullah"),
   await frameLogin?.fill("[name='lname']","khan"),
    await page.waitForTimeout(3000),
    expect (await frameLogin?.locator("[class='title has-text-info']").textContent()).toContain("voliullah khan")
   ); else (console.log('frame couldnt be found '))
})
test('tryiung the function framlocator ', async ({page})=>{
    await page.goto("https://letcode.in/frame")
   // const frame =page.frameLocator("//iframe[@src='innerFrame']")
    //const putvalue =await frame.locator("//input[@name='email']")
    //await putvalue.fill("volikhamailcom")
      //const frame =await page.locator("//iframe[@src='innerFrame']")
    const putvalue =await page.locator("//input[@class='input']")
    await putvalue.fill("volikhamailcom")
   // await page.waitForTimeout(5000)
})
test('nested frame',async({page})=>{
    await page.goto("https://letcode.in/frame")
    const frameOne =page.frame('firstFr')
    await frameOne?.fill('[name="fname"]','okay bro')
    await frameOne?.fill('[name="lname"]','okay broo')
    const secondFrame= frameOne?.frameLocator('[src="innerFrame"]')
    await secondFrame?.locator("//input[@class='input']").fill('helo')
})
