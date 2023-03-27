/*learn how to put assertions
interact with input and output 
learn how to keep inspecting popup page using [newpage] and promise.all fucntions
learnt to use check and uncheck 
and found that you can check and uncheck using click function
the functions related to check are " check(), is checked() , tobeChecked(), uncheck()"

    const [newPage]= await promise.all([
    context.waitforanevent('page'),
    
    await page.locator("ajlddaljd") by clicking on this , the above event will fire  and thats where you can inspect and interact with elements on another page which is [newpage]
  ]) 








*/
import {test,expect, chromium } from '@playwright/test'
test.skip('new context and new page', async({context})=>{
    test.setTimeout(200000)
    const page = await context.newPage()
    await page.goto("https://www.securetech-consultancy.com/")
    await page.waitForLoadState();   
    const [newPage]=await Promise.all([
     context.waitForEvent('page'),
     page.locator("//i[@class='fa fa-facebook fa-lg']").click()   
    ])  
     page.waitForLoadState();
 console.log(await page.title())
 console.log(await newPage.title())

const username = newPage.getByTestId('royal_email').nth(1)
await username.fill('voliullah.khan')

const passwrod = newPage.getByTestId('royal_pass').nth(1)
await passwrod.fill('okayy okay')
const loginbutton= newPage.getByTestId('royal_login_button').nth(1)
await loginbutton.click()

})
test.skip('verify multiple tabs', async({context})=>{
    const page = await context.newPage();
    await page.goto("https://www.programsbuzz.com/")

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        // This action triggers the new tab
        page.locator('text=By iVagus Services Pvt. Ltd.').click() 
      ])
      
      // Wait for Page Load
      await newPage.waitForLoadState();          
      
      // title of new tab page
      console.log(await newPage.title());
      
      // title of existing page
      console.log(await page.title());
})
test.skip('handling new tab ',async({context})=>{
    test.setTimeout(0)
    const browser= await chromium.launch()
    const page = await context.newPage()
    await page.goto('https://www.orangehrm.com/')
   await  page.waitForLoadState()
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('[src="/_resources/themes/orangehrm/dist/images/social-icon/facebook.png"]').click()
    ])
   await newPage.waitForLoadState()
    console.log(await newPage.title());
  await  expect(newPage).toHaveTitle('Log into Facebook')
})
test.skip('try to practice interacting with inputs ',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const input =  page.getByPlaceholder('Please enter your Message').first()
    await input.fill('okay im here ')
    console.log(await input.getAttribute('placeholder'))
    expect(await(input).getAttribute('name'))
    console.log(await input.inputValue());
    
    await page.getByRole('button',{name: 'get checked value '} ).click()
    const result = await page.locator('//p[@id="message"]')
    console.log(await (result).textContent())
})
test.skip('add two values and check if the result is true ', async({page})=>{
 await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo") 
 const num1 = page.getByPlaceholder('Please enter your Message').nth(1) 
 //   const num1= page.locator("//*[@id='sum1']")
  await num1.fill('')
  const num2 = page.getByPlaceholder('Please enter your Message').nth(2) 
  console.log(await num1.getAttribute('placeholder'))

//   const num2 = page.locator("//*[@id='sum2']") 
  await num2.fill('')
  console.log(await num2.getAttribute('placeholder'))
//   console.log(await num1.inputValue())
  console.log(await num1.inputValue())  
  console.log(await num2.inputValue())  

  await page.getByRole('button',{name:'get values '}).click()
  const result = await page.locator("//p[@id='addmessage']")
  expect(await  result.textContent())
  console.log(await  result.textContent())
  
})
test('check and uncheck', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo')
    const checkthis = page.locator("//input[@id='isAgeSelected']")
    await checkthis.check()
   // await checkthis.check()
 await expect ( page.locator("//input[@id='isAgeSelected']")).toBeChecked()
expect (await page.isChecked("//input[@id='isAgeSelected']")).toBeTruthy()
 await page.check("//input[@id='isAgeSelected']")
 await checkthis.check()
 expect (await page.isChecked("//input[@id='isAgeSelected']")).toBeTruthy()
 await page.click("//input[@id='isAgeSelected']")
  expect(await page.isChecked("//input[@id='isAgeSelected']")).toBeFalsy()
})


