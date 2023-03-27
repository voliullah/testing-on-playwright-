// 


import{test, expect, Page} from '@playwright/test'
let facebook : Page
test('startign with handling many tabs ',async({context})=>{
    const page = await context.newPage()
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("'Like us On Facebook'")
    ])
    
    // const pages =await  context.newPage()
   

    console.log(await newPage.url())
    console.log('hi there ')

})
test('go for only one tab first ', async ({page})=>{// ask tufail why its showing only one  retrieved here but you can find another one in trace 
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
    console.log(page.url())
    const [newPage]=await Promise.all([ // all the promises should be resolved before diving in next 
        page.waitForEvent('popup'),
        page.locator("'Follow On Twitter'").click()

    ])
    await newPage.waitForLoadState()// so we could retrieve its url before browser gets closed 
    const url = await newPage.url();
    console.log(url)
    // console.log('hi there ')
    // in this test page wasnt closing automatically , test were getting failed at hooks so i tried using close function 
    //    await page.close()
    //    await newPage.close()
})
test('go for multiple pages handling now ', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
    //  console.log(await page.getByTitle('Follow @Lambdatesting').first().textContent())
  const [multiPage]= await   Promise.all([
     page.waitForEvent('popup'),  
     page.click("'Follow Twitter & Facebook'")
    ])
    await multiPage.waitForLoadState() // if you wont use it , the browser will get closed before consoling its nombers 
    const pages = multiPage.context().pages() // save nomber of pages 
    console.log('nomber of pages'+pages.length);
    console.log(page.url());
    console.log(multiPage.url());
    
    
    
                                 // in there below operations if there is multiple pages it will only deal with the first popup page , the rest will be ignore if you want to go with operations in newPage (   note   : before declaring pages in context ) 
                                        //     await newPage.waitForLoadState()
                                        //    console.log(newPage.url())
                                        //    console.log(page.url())
 })
test.only('go for three tabs now ', async({page})=>{//TypeError: Cannot read properties of undefined (reading 'locator')
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
    //console.log(page.url())
    await page.waitForLoadState()

    const [threePages] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("'Follow All'")
    ])
    
    await threePages.waitForLoadState()
    const pages= threePages.context().pages()
    
    console.log(pages.length)
    pages.forEach(tab => {
        console.log(tab.url())

    });
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if (url == "https://www.facebook.com/lambdatest/") {
             facebook = pages[index]
         
        }

    }
    // console.log(facebook)
    const text=  await facebook.locator("//h1").textContent()
    console.log(text)
    const gell = facebook.locator("//a//span[text()='About']")
    await gell.click()
    // for (let index = 0; index < pages.length; index++) { //bug  if i do the same for twitter it doesnt work showing   type error at locator , ask tufail
    //     const url = pages[index].url();
    //     if (url == "https://twitter.com/Lambdatesting/") {
    //          twitter =pages[index]

            
    //     }
        
    // }
    // const text=  twitter.locator("'Tweets & replies'")
    //     const [newPage] =await Promise.all([
    //         page.waitForEvent('popup'),
    //         page.click('a[target="_blank"]')
    //     ])
    //     newPage.waitForLoadState()
    //     await newPage.goto('https://www.fb.com')
    //     await newPage.waitForTimeout(1000)
})
test('handle all of them in one test ', async({page})=>{
    await page.goto('https://letcode.in/windows')
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('#home')
    ])
    await page.waitForLoadState()
    await newPage.waitForLoadState()
    console.log(newPage.url())
    console.log(page.url())
    //id="multi"
    //id="home"
})