let alertpage: Page
let popupdoublepages : Page ;
import{test, expect, Page} from '@playwright/test'
test('1 , go to a page and hadle one alert , do some operations on popup', async({page})=>{
    await page.goto('https://letcode.in/windows')
    const [newPage] = await Promise.all([ 
         page.waitForEvent('popup'),
         page.click("//button[@id='home']")
        ])

        const header = await newPage.locator('//h1').textContent()
        console.log(header)
        await expect(header).toContain('Practice and become pro in test')
        await newPage.locator("//a[text()='Edit']").click()
        await newPage.locator('//a[@href="/video/edit"]').click()

        // await page.locator('//a//span[@aria-hidden="true"]').first().click()     ask tufail its not visible untill you open inspect though
        
        const [fbPage] = await Promise.all([
            newPage.waitForEvent('popup'),
            await newPage.click('[data-icon="facebook-f"]')
        ])
        const textfb=await fbPage.title()
        console.log(fbPage.url())

        
        const [popupdoublepages] = await Promise.all([
            page.waitForEvent('popup'),
            page.click("//button[@id='multi']")
        ])

        await popupdoublepages.waitForLoadState()
        const pages = await page.context().pages()
        console.log(pages.length)
        
        pages.forEach(tab=> {
            console.log(tab.url())
        });

        const [instaPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.click('[data-icon="instagram"]')
        ])
        const titleInsta = await instaPage.title()
        console.log(titleInsta)
        await instaPage.locator("//div[text()='Log In']").click()
        await instaPage.fill('[name="username"]','lllvoliullkdkah.khan')
        await instaPage.fill('[name="password"]',"weeewo[o")
        await instaPage.click("//button[@type='submit']")
        await instaPage.waitForTimeout(2000)

        await newPage.click("//div//a[@href='/signup']")
        await newPage.getByPlaceholder('Enter your name').fill('hello there ')
        await newPage.getByPlaceholder('Enter valid email address').fill('hello khan shaab')
        await newPage.getByPlaceholder('Enter your password')
        await newPage.check('#agree')
        await newPage.getByRole('button',{name: 'SIGN UP'})
        await popupdoublepages.waitForLoadState()
         for (let index = 0; index < pages.length; index++) {

             const totalpages = pages[index].url();
             console.log('hi'); // learn why its showing hi three times(easy)
            

             if (totalpages == 'https://letcode.in/alert') { // here i was facing an issue i neeed to discuss with someone that when i was running my code inside the for loop and if condition , it was working ... understand . how , later i managed to run it outside but learn how it works  
                 alertpage =pages[index]    
                }
            }
        await alertpage.waitForLoadState()
        const urlofalert= await alertpage.url()         
        console.log(urlofalert)
        const checktextalert= await alertpage.locator('//h1').textContent()
        expect(checktextalert).toContain('Alert')

        // await alertpage.click('#accept') this line wasted my hour  cos i called listner on another page lol
        await alertpage.waitForTimeout(2000)
        //alertpage.reload()
        
        await alertpage.once('dialog',async alert=>{
            const thiss = await  alert.message()
            console.log(thiss);
            
            await alert.accept()
        })
        await alertpage.click('#accept')
        
        alertpage.once('dialog', async singlealert => {
        const textofalert = singlealert.message(); // page.on should not be used if you have to handle an alert twice or handle more than one alert in a single test 
    
        // page.on should not be used if you have to handle an alert twice or handle more than one alert in a single test 
        console.log(textofalert)
        await singlealert.accept();
        });
        await alertpage.click('#accept')
        await alertpage.waitForTimeout(2000)
    })

test.skip('now handle the ones where you have to accept or dismiss and put assertion',async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.once('dialog',async(alert)=>{
        const message = alert.message()
        console.log(message)  
        await alert.accept()
    })
    await page.locator("button:text('Click  Me')").first().click()
    //expect (await page.locator("id=confirm-demo").textContent()).toContain("OK!")
    page.once('dialog',async(alert)=>{
        const message = alert.message()
        await alert.accept()
    })  
    // await page.locator("button:text('Click  Me')").nth(1).click()
    await page.locator("button:text('Click  Me')").first().click()

   console.log(await page.locator("//*[@id='confirm-demo']").textContent())
   expect (await page.locator("//*[@id='confirm-demo']").textContent()).toContain('Cancel!')
   await page.goto("https://letcode.in/alert")
   page.once('dialog', async (alert) => {
        const thiss = await alert.message();
        console.log(thiss);

        await alert.accept();
    })

    await page.click('#accept')
    page.once('dialog', singlealert => {
    const textofalert = singlealert.message();
    console.log(textofalert);
    singlealert.accept();

    });
    await page.click('#accept')


})
test.only ('try something on here ',async ({page})=>{
    await page.goto('https://letcode.in/')
    await page.locator('//a[text()="Work-Space"]').click()
    await page.locator('//a[text()="Edit"]').click()
    await page.fill('#fullName',"heythere")
    await page.locator("//input[@id='join']")
    const getvalue = await page.locator('#getMe').textContent()
    console.log(getvalue)
    await page.locator('#join').clear()
    const tab =await page.locator('[id="join"]')
    await tab.click()
    await tab.press('Tab')
    await page.locator('#clearMe').clear()
    expect(await page.locator('#noEdit')).toBeDisabled()

    await page.locator('#clearMe').clear()
    const wordsstored =await page.locator('[id="dontWrite"]').textContent()
    expect(await wordsstored).toContain('This text is readonly')

})
test ( 'okay the second test case is here , for buttons ', async({page})=>{
    await page.goto('https://letcode.in/')
    await page.locator('//a[text()="Work-Space"]').click()
    await page.click("//a[text()='Click']")
    await page.click('#home')
    await page.goBack()
    await page.locator('[id="color"]')
  //  const presshold = await page.locator('Button Hold!')
   // await presshold.press(press)
    
})