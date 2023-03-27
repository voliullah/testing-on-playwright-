import { test , expect, chromium } from '@playwright/test'
test('test ',async ({page}) => {
    await page.goto ('https://freecrm.com/')
    await page.waitForTimeout(3000)
    const signup =await page.locator('//a[@href="https://register.freecrm.com/register/"][@class="btn btn-sm btn-white btn-icon btn-icon-left btn-shadow btn-border btn-rect offset-sm-top-60 offset-top-30"]')
    await signup.click()
    const placeholder = await page.locator('//input[@placeholder="Email address"]')
    await placeholder.fill('voliullah.khan@gmail.com')
    await page.locator('//input[@value="YES"]').check()
    // await page.click('//div[@role="presentation"][@class="recaptcha-checkbox-border"]')
    await page.click('//button[@type="submit"]')
    await page.waitForTimeout(3000)
})
test('test login ',async ({context}) => {
    const page = await context.newPage()
    test.setTimeout(200000)
    await page.goto('https://ui.cogmento.com/')
    // await page.waitForLoadState()
    const email = await page.locator('//input[@placeholder="Email"]')
    await email.fill('voliullah.khan@gmail.com')
    // await page.waitForLoadState()
    const pass =await page.locator('//input[@name="password"]')
    await pass.fill('Tufailkhan')
    const loginButun =await  page.locator('[class="ui fluid large blue submit button"]')
    await loginButun.click()
    // await page.waitForLoadState()

    // await page.waitForLoadState()
    // const textLogo=await logo.textContent()
    // console.log(textLogo)
    // console.log(logo.getAttribute('class'))
    // await expect(logo).toHaveAttribute('class','header item')
    // await expect(textLogo)
    // await page.hover('//i[@class="home icon"]')
    // await page.hover('//i[@class="calendar icon"]')
    // await page.click('//i[@class="calendar icon"]')
    // await page.hover('//a[@href="/calendar"]')
    // await page.waitForTimeout(2000)
    const confirmlogin=await page.locator('//b[text()="Waliullah Khan"]')
    // expect(confirmlogin).toBeInstanceOf('Waliullah Khan')
    // await page.locator()
    // await page.waitForSelector('//div[@class="header item"]')
    // await page.locator('//div[@class="header item"]')
    await page.locator('//a[@href="/calendar"]')
    await page.click('//a[@href="/calendar"]')
        await page.click('[class="rbc-day-bg rbc-today"]')
        await page.locator('[class="ui button"]').click()
        await page.click('[class="rbc-day-bg rbc-today"]')
        await page.click('(//input[@autocomplete="new-password"])[1]')
        await page.locator('(//div[@class="ui selection dropdown"])[1]')
    // await page.locator('//div[@class="rbc-date-cell"]//button[text()="01"]').click()
        await page.locator('//div[@class="react-datepicker__day react-datepicker__day--010"][text()="10"]')
    // const login =await page.locator('[class="ui linkedin button"]')
    // await login.click()
    // await page.locator('[class="ui button"]').click()
    // await page.locator('button[class="ui linkedin button"]').click()
    await page.fill('//div[@class="ui right corner labeled input"]//input[@autocomplete="new-password"]','waliullah')
    await page.locator('//div[@class="ui right corner labeled input"]//input[@autocomplete="new-password"]').press('Enter')
    // await page.click('//input[@class="calendarField react-datepicker-ignore-onclickoutside"]')
    // await page.click('[class="calendarField react-datepicker-ignore-onclickoutside"]')
    await page.locator('//div[@class="react-datepicker__input-container"]').first().click()
    await page.click('[class="react-datepicker__day react-datepicker__day--001 react-datepicker__day--selected react-datepicker__day--today"]')
    await page.click('//li[@class="react-datepicker__time-list-item "][text()="00:30"]')
    await page.click('//div[@role="listbox"][@name="category"]')
    await page.waitForLoadState()
    await page.click('//div[@role="option"]//span[text()="Meeting"]')
    await page.fill('//textarea[@autocomplete="new-password"][@rows="3"][@name="description"]','helllo im here to write something ')
    // await page.locator('//input[@class="hidden"]').check()
    await page.fill('//div[@name="task"]//input[@class="search"][@type="text"]', 'hello bro just search')
    await page.locator('//div[@name="task"]//input[@class="search"][@type="text"]').click()
    await page.locator('//div[@class="ui selection dropdown"]//div[@class="divider text"]')
    await page.locator('//div[@name="channels"]//i[@class="dropdown icon"][@aria-hidden="true"]').click()
    await page.locator('//div[@aria-checked="false"]//span[text()="Email"]').click()
    await page.locator('//div[@aria-checked="false"]//span[text()="SMS"]').click()
    const save =await page.locator('//div[@name="company"]//input[@type="text"]')
    await save.type('yall mofoooooo')
    await page.click('//div[@class="ui active visible fluid search selection dropdown"]//input[@class="search"][@type="text"]')
    await page.locator('//div[@class="ui input"]//input[@autocomplete="new-password"]').type('okay this onee')
    await page.locator('//div[@class="ui input"]//input[@autocomplete="new-password"]').click()
    await page.locator('[class="ui fluid selection dropdown"]').click()
    await page.click('//span[text()="Waliulah khan <voliullah.khan@gmail.com>"]')
    // await page.locator('[class="calendarField react-datepicker-ignore-onclickoutside"]').click()
    await page.locator('(//input[@class="calendarField"])[2]').click()
    await page.locator('[class="react-datepicker__day react-datepicker__day--005 react-datepicker__day--weekend"]').click()
    await page.locator('//li[@class="react-datepicker__time-list-item "][text()="00:45"]').click()
    await page.locator('//label//div[@class="ui fluid multiple search selection dropdown"]').click()
    // await page.locator('//label//div[@class="ui fluid multiple search selection dropdown"]').press('Enter')
    await page.click('[class="ui linkedin button"]')
    // const textTitle = await page.locator('//div[@class="field"]//div[text()="Title"]').textContent()
    const textTitle = await page.locator('//div//p[text()="waliullah"]').textContent()
    await expect(textTitle).toContain('waliullah')
    const newPage = await context.newPage()
    await newPage.goto('https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjNi7zS3bj9AhWLO-wKHajPDPAQPAgI')
    await newPage.waitForTimeout(3000)
    await newPage.close()
    const newPagefacebook = await context.newPage()
    await newPagefacebook.goto('http://www.facebook.com')
    expect (newPagefacebook).toHaveTitle(/.*Facebook/);
    await newPagefacebook.waitForTimeout(2000)
    await newPagefacebook.close()  
})
test ( 'lets do it now ',async ({context}) => {
    const page = await context.newPage()
    await page.goto('https://ui.cogmento.com/')
    const email = await page.locator('//input[@placeholder="Email"]')
    await email.fill('voliullah.khan@gmail.com')
    const pass =await page.locator('//input[@name="password"]')
    await pass.fill('Tufailkhan')
    await page.waitForTimeout(1000)
    const loginButun =await  page.locator('[class="ui fluid large blue submit button"]')
    await loginButun.click()
    await page.waitForLoadState()
    await page.waitForSelector('//b[@style="display: flex; align-items: center; margin-left: 10px;"]')
    const loggedin= await page.locator('//b[@style="display: flex; align-items: center; margin-left: 10px;"]')
    console.log(await loggedin.textContent())
    await expect(await loggedin.textContent()).toContain('Waliullah') 
    await page.locator('//a[@href="/calendar"]')
    await page.click('//a[@href="/calendar"]')
    await page.waitForTimeout(3000)
    await page.waitForSelector('//div[@class="rbc-row-bg"]//div[@class="rbc-day-bg rbc-today"]')
    await page.click('//div[@class="rbc-row-bg"]//div[@class="rbc-day-bg rbc-today"]')
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name : 'Cancel'}).click()
    await page.waitForTimeout(2000)
    await page.click('//a//button[@class="ui linkedin button"]')
    await page.waitForTimeout(2000)
    await page.waitForSelector('//div[@class="ui right corner labeled input"]//input[@autocomplete="new-password"]')
    await page.waitForTimeout(2000)
    const title =await page.locator('//div[@class="ui right corner labeled input"]//input[@autocomplete="new-password"]')
    await title.fill('thionefor the game ')
    await page.waitForTimeout(2000)
    await page.locator('[class="ui linkedin button"]').click()
    await page.waitForTimeout(3000)
    await page.waitForSelector('//p[text()="thionefor the game"]')
    const expectsaved=await page.locator('//p[text()="thionefor the game"]')
    const  textsaved=await expectsaved.textContent()
    console.log(textsaved)
    await expect(textsaved).toContain('thionefor the game')
    await page.waitForTimeout(3000)
    await page.click('//i[@class="trash icon"]')
    await page.waitForLoadState()
    await page.waitForSelector('//button[@class="ui red button"]')
    await page.click('//button[@class="ui red button"]')
    await page.waitForTimeout(2000)  
    const Facebook = await context.newPage()
    await Facebook.goto('http://www.facebook.com/')
    const titleFB=await Facebook.title()
    console.log(titleFB)
    await Facebook.close()
    await page.waitForTimeout(1000) 
    const google =await  context.newPage()
    await google.goto('http://www.google.com')
    const titlegoogle = await google.title()
    console.log(titlegoogle)
    await google.close()
    await page.waitForTimeout(1000)  
})
