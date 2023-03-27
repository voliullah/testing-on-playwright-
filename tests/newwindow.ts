//  SQUAREX
import { test , expect, Page } from '@playwright/test'
let PageofEASA : Page ;
let K2XPage : Page;
test.describe('squarex',()=>{
test( ' go to wesite and check if its working ', async ({ page })=>{
    const goto = await page.goto('https://squarex.dk/index.html')
    console.log(await page.title())

    await expect(page).toHaveTitle('SquareX ApS')
    
})
test( 'now check the content at header ', async({page})=>{
    await  page.goto ('https://squarex.dk/index.html')
    const homeHeader= await page.locator('//div[@class="header-nav"]//li[@class="has-children"]//a[@class="active"][@href="index.html"]')
    console.log(await homeHeader.textContent())
    await expect(homeHeader).toContainText('Home')
    await expect(homeHeader).toBeEnabled()
    const compnayHeader=await page.getByRole('link', {name : 'company'})
    // await compnayHeader.click()
    await compnayHeader.textContent()
    console.log(await compnayHeader.textContent())
    await expect (await compnayHeader.textContent()).toContain('Company')
    const careerHeader=await page.getByRole('link', {name : 'Career'})
    await careerHeader.textContent()
    console.log(await careerHeader.textContent())
    await expect (await careerHeader.textContent()).toContain('Career')
    const contactHeader=await page.getByRole('link', {name : 'contact'}).nth(0)
    await contactHeader.textContent()
    console.log(await contactHeader.textContent())
    await expect (await contactHeader.textContent()).toContain('Contact')
    await compnayHeader.hover()
    await page.waitForLoadState()
    // await page.waitForTimeout(4000)
})

test ('paragraph one containing summary ',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const content = await page.locator('//div[@class="row"]//p[@class="font-md color-grey-500"]').textContent()
    console.log( content)
     expect(content).toContain('Our organization comprises a team of accomplished and dedicated professionals from around the world; Leveraging their diverse backgrounds and areas of expertise, our teams collaborate to deliver cutting-edge solutions and resources that aid in the realization of your ideas and visions.')
})
test ('now check the line containing text , located  above the clients section',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const lienText =await page.locator('//div//p[@class="font-lg color-brand-1"]')
    const textAboveClient= await  lienText.textContent()
    console.log(textAboveClient)
    expect(textAboveClient).toContain('At the heart of our success are our valued clients and collaborative partnerships.') 
    
})
test('in clients section check if "EASA" is clickable and a popup page is having title of EASA',async ({page}) => {
await page.goto('https://squarex.dk/index.html')
    const EASA = await page.locator('//img[@alt="iori"][@src="assets/imgs/page/homepage1/easa-logo.png"]')
    await  EASA.scrollIntoViewIfNeeded()
    await expect(EASA).toBeEnabled()
    const  [PageofEASA] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//img[@alt="iori"][@src="assets/imgs/page/homepage1/easa-logo.png"]').click()
    ])
    await  expect (PageofEASA).toHaveTitle('EASA | European Union Aviation Safety Agency')
    await PageofEASA.close()
})
test('By clickin on K2X , expect  popup page to have title of the K2X',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const K2X = await page.locator('//img[@alt="iori"][@src="assets/imgs/page/homepage1/k2x-logo.png"]')
    await  K2X.scrollIntoViewIfNeeded()
    await expect(K2X).toBeEnabled()
    const  [K2XPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//img[@alt="iori"][@src="assets/imgs/page/homepage1/k2x-logo.png"]').click()
    ])
    await expect(K2XPage).toHaveURL('https://k2x.tech/')
    await expect (K2XPage).toHaveTitle('K2x Tech')
    await K2XPage.close()
    })
test ('paragraph above the containers containing services ',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const heading =await page.locator('//div[@class="col-lg-12 text-center"]//h2[@class="color-brand-1 mb-20"]')
    await heading.scrollIntoViewIfNeeded()
    const textHere = await heading.textContent()
    console.log(textHere)
    expect (textHere).toContain('Elevate your ideas to reality with our advanced digitalization solutions.')  
})
test('update the content at data modeling  ',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const heading =await page.locator('//div[@class="col-lg-4 col-md-6 social-media personal"]//div[@class="card-offer-style-2"]//div[@class="card-info"]//p[@class="font-md color-grey-500 mb-15"]')
    await heading.scrollIntoViewIfNeeded()
    const textHere = await heading.textContent()
    console.log(textHere)
    expect (textHere).toContain("We specialize in developing custom data modeling and pipelining solutions using Alteryx, Kafka, Spark, PIG, and AWS to manage and blend data precisely according to our clients' needs. Our meticulous process ensures a comprehensive understanding of data interconnections and flow, resulting in optimal outcomes.")  
})
test('content at skills and demands are correct grammatically and changed are implemented ',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const text =await page.locator('//div[@class="col-lg-4 col-md-6 social-media personal"]//div[@class="card-offer-style-2 bg-4"]//div[@class="card-info"]//p[@class="font-md color-grey-500 mb-15"]')
    const textcontents= await text.textContent()
    console.log(textcontents)
    expect(textcontents).toContain('If you need highly skilled resources or specialists on demand, we can help you. We take care of human resource and management, and you get your skill set, based on your project needs. ')
    
})

test('describe your problem',async ({page}) => {
    await page.goto ('https://squarex.dk/index.html')
    const textLocator = await page.locator('(//div[@class="item-number hover-up"]//div[@class="info-num"]//p[@class="font-md color-grey-500"])[1]')
    const text2 =await  textLocator.textContent()
    console.log('text2')
     expect (text2).toContain('We help by getting into the details of the problem and scope.')
    
})
test('discuss with our expert team',async ({page}) => {
    await page.goto ('https://squarex.dk/index.html')
    const textLocator = await page.locator('(//div[@class="item-number hover-up"]//div[@class="info-num"]//p[@class="font-md color-grey-500"])[2]')
    const text2 =await  textLocator.textContent()
    console.log(text2)
    expect (text2).toContain('What makes us standout? We give holistic solutions with strategy, design & technology.')
})
test ('Get an offer from us',async ({page}) => {
    await page.goto ('https://squarex.dk/index.html')
    const textLocator = await page.locator('(//div[@class="item-number hover-up"]//div[@class="info-num"]//p[@class="font-md color-grey-500"])[3]')
    const text2 =await  textLocator.textContent()
    console.log(text2)
    expect (text2).toContain('What makes us different from others? We give holistic solutions with strategy, design & technology. ')
})
// 
test('check if there is no grammatical mistakes at "want to talk to our experts"',async ({page}) => {
    await page.goto ('https://squarex.dk/index.html')
    const textLocator = await page.locator('//section[@class="section mt-50 pt-50 pb-40"]//div[@class="col-lg-6"]//div[@class="box-info-video"]//p[@class="font-md color-grey-500"]')
    const text2 =await  textLocator.textContent()
    console.log(text2)
    expect (text2).toContain("Connect with our experts for personalized solutions to your unique challenges. We'll closely collaborate to understand your needs and provide customized recommendations to help you accomplish your ambitions.")
})
// 
test("check if the contact us button is working  and make sure that it takes the user to the page which is having title 'contact us '",async ({page}) => {
    await page.goto ('https://squarex.dk/index.html')
    const textLocator = await page.locator("//a[@href='contact.html'][text()='Contact Us']")
    await textLocator.click()
    await page.waitForLoadState()
    const title = await page.title()
    console.log(title)
    expect(title).toContain('Contact')
})
test('check if the email given is correct ',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const textatEmail =await page.locator('(//p[@class="px-3 font-lg-bold color-brand-1"]//span[@class="px-0 font-md"])[1]').textContent()
    console.log(textatEmail)
    await expect(textatEmail).toContain('info@squarex.dk')
})
test('check if the email phone number is correct ',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const textatNum =await page.locator('(//p[@class="px-3 font-lg-bold color-brand-1"]//span[@class="px-0 font-md"])[2]').textContent()
    console.log(textatNum)
    await expect(textatNum).toBe('+45 61 26 46 20')
})
test('check if the given address is correct ',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')
    const textatNum =await page.locator('(//p[@class="px-3 font-lg-bold color-brand-1"]//span[@class="px-0 font-md"])[3]').textContent()
    console.log(textatNum)
    await expect(textatNum).toBe('Søbakkevej 60,  Aarhus, Denmark ')
})
test('check if this button containing development is clckable ',async ({page}) => {
    await page.goto('https://squarex.dk/index.html')

    const last=await  page.locator('[href="#data-modeling"]')
    await last.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await last.click()
    await page.waitForTimeout(3000)

    const dev= await page.locator('a[href="#app-development"]')
    await dev.scrollIntoViewIfNeeded()
    await expect (dev).toBeEnabled()
    await page.waitForTimeout(2000)
    await dev.click()
    await page.waitForTimeout(3000)

    const dataMan= await page.locator('a[href="#data-management"]')
    await page.locator('a[href="#data-management"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await page.click('a[href="#data-management"]')
    await page.waitForTimeout(3000)

    // a[href="#app-development"]
    const rapid =await  page.locator('a[href="#rapid-prototyping"]')
    await rapid.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await rapid.click()
    await page.waitForTimeout(3000)
    const rooo =await  page.locator('[href="#machine-learning"]')
    await rooo.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await rooo.click()
    await page.waitForTimeout(3000)

    const an=await  page.locator('[href="#skill-on-demand-resources"]')
    await an.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await an.click()
    await page.waitForTimeout(3000)
    await page.goto('https://squarex.dk/index.html')
    const textatcopy=await page.locator('[class="color-grey-300 font-lg "]')
    const copyright00= await page.locator('[class="color-grey-300 font-lg "]').textContent()
    console.log(copyright00);
    expect(copyright00).toContain('Copyright © SquareX ApS 2023. All right reversed.')
    await textatcopy.scrollIntoViewIfNeeded()
    await page.waitForLoadState()
    await page.waitForTimeout(2000)
    // (//div[@class="box-info-video"]//p[@class="font-md color-grey-500"])[4]
})
})
test('check if the copyright information given at bottom are correct',async ({page}) => {  
})


// 
//  [class="color-grey-500 mb-15"]