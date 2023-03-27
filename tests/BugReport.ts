
// STEPS TO FOLLOW 
import {test,expect,chromium} from '@playwright/test'
test ("URL to navigate to company's facebook page is broken" ,async({context})=>{
// Set time out for test to execute (loading time for the company;s webpage is too much)

   test.setTimeout(0)
// Launch the browser and navigate to the URL

   const browser= await chromium.launch({headless : false})
   const page = await context.newPage()
   await page.goto("https://www.securetech-consultancy.com/")
   await page.waitForLoadState()
//By clicking on facebook icon on page popup another tab 

   const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    await page.locator("//i[@class='fa fa-facebook fa-lg']").click()
    ])
    await newPage.waitForLoadState()
// Login to your account on facebook  

  const username = newPage.getByTestId('royal_email').nth(1)
   await username.fill('voliullah.khan.7')
   const passwrod = newPage.getByTestId('royal_pass').nth(1)
   await passwrod.fill('nopassword ')
   const loginbtn = newPage.getByTestId('royal_login_button').nth(1)
   await loginbtn.click() 
   await newPage.waitForTimeout(5000)
// Expect the page to have title

   expect(newPage).toHaveTitle(/.*securetech consultancy/)
})