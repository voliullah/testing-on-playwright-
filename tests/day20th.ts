import {test,  expect, Page } from "@playwright/test";
let facebookTab : Page ;
let facebookTab1 : Page ;
let twitterTab : Page ;
let twitterTab1 : Page ;
let GoooglePlusTab : Page ;
let GoooglePlusTab1 : Page ;

// test.describe('All the testcases',()=>{
test('Links are not added to the icons connecting social media accounts', async ({page})=>{
    test.setTimeout(0)
    await page.goto('http://progosoft.com/')
    const [facebookTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//header[@id="Header"]//a[@title="Facebook"]')
        ])
        await facebookTab.waitForLoadState()
        await expect(facebookTab).toHaveTitle(/.*Pogosoft/)

    const [twitterTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//header[@id="Header"]//i[@class="icon-twitter"]')
        ])
        await twitterTab.waitForLoadState()
        await expect(twitterTab).toHaveTitle(/.*Pogosoft/)

    const [GoooglePlusTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator ('//header[@id="Header"]//i[@class="icon-gplus"]')    
        ])
        await GoooglePlusTab.waitForLoadState()
        await expect(GoooglePlusTab).toHaveTitle(/.*Pogosoft/)

    const [facebookTab1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//footer[@id="Footer"]//a[@title="Facebook"]')    
        ])
        await facebookTab1.waitForLoadState()
        await expect(facebookTab1).toHaveTitle(/.*Pogosoft/)
        
    const [twitterTab1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//footer[@id="Footer"]//i[@class="icon-twitter"]')    
        ])
        await twitterTab1.waitForLoadState()
        await expect(twitterTab1).toHaveTitle(/.*Pogosoft/)

    const [GoooglePlusTab1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//footer[@id="Footer"]//i[@class="icon-gplus"]')        
        ])
        await GoooglePlusTab1.waitForLoadState()
        await expect(GoooglePlusTab1).toHaveTitle(/.*Pogosoft/)

})
test('paragraph About is grammatically incorrect',async({page})=>{
    await page.goto('http://progosoft.com/#') 
    const About = page.locator('//div[@class="wpb_wrapper"]//p[@style="text-align: center;"]')  
    const Paragraph =  await About.textContent()
    expect(Paragraph).toContain('ProgoSoft is an IT consulting company providing high-quality solutions in the field of custom Software Engineering. ProgoSoft was established in 2015. With a strong focus on R&D, our experts have great exposure to emerging technologies that are not only defining but reshaping the digital world. We have a high-quality team that takes care of your solution from plan to implementation and maintenance. This makes our customers happy and their growth becomes our top priority. With a strong understanding of business needs and technology, our solutions and services are based on high-quality standards, and respective delivery times and imbued with cutting-edge technologies.')
})
test('About us ',async({page})=>{
    test.setTimeout(0)
    await page.goto('http://progosoft.com/')
    await page.waitForLoadState()
    const clickOnAbout = await page.locator('//a[@href="http://progosoft.com/about-us/"]').first()
    await clickOnAbout.click()

    const About= page.locator('//p//strong[@style="color: white;"]')
    const Paragraph =  await About.textContent()
    //console.log(Paragraph)
    expect(Paragraph).toContain('ProgoSoft is an IT consulting company providing high-quality solutions in the field of custom Software Engineering. ProgoSoft was established in 2015. With a strong focus on R&D, our experts have great exposure to emerging technologies that are not only defining but reshaping the digital world. We have a high-quality team that takes care of your solution from plan to implementation and maintenance. This makes our customers happy and their growth becomes our top priority. With a strong understanding of business needs and technology, our solutions and services are based on high-quality standards, and respective delivery times and imbued with cutting-edge technologies.')
})
test('focus on client ', async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/about-us/"]').nth(0).click()
    const paragraph = page.locator('//div[@class="wpb_text_column wpb_content_element  vc_custom_1525250292694"]//div[@class="wpb_wrapper"]')
    console.log(await paragraph.textContent())
    // expect(await paragraph.textContent()).toContain('')

})
test('domain excellence ', async ({ page })=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/about-us/"]').first()
    .click()
    const paragraph =  page.locator('//div[@class="wpb_text_column wpb_content_element  vc_custom_1525250682638"]//div[@class="wpb_wrapper"]//p[@style="text-align: left;"]')
    const textParagraph=await paragraph.textContent()
    console.log(textParagraph)

    expect(textParagraph).toContain('Forging a unique customer-centric process, we invest our collaborative expertise in our lines of business. In a short span of existence, we have quickly emerged as an innovative solution provider in the areas of Enterprise Web Applications, Health Care Solutions, Outsourcing, and software consultancy. Considering the fact that every business is unique and understanding the multifarious business requirements of clients. ')
})
test('Paragrhaph at contact us  ',async ({page}) => {
    await page.goto('http://progosoft.com/')
    await page.locator("'Contact Us'").click()
    await page.locator('//div[@class="vc_row wpb_row vc_row-fluid vc_custom_1522748224948"]').isVisible()
    const paragraphLocator = page.locator('//div[@class="vc_row wpb_row vc_row-fluid vc_custom_1522748224948"]')
    const text= await paragraphLocator.textContent()
    console.log(text)
    await expect(text).toContain('Feel free to contact us by phone, email, or through our online inquiry form.')
})
test('service -> web application first paragraph ', async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator("//span[text()='Web Applications']").click()
    const Paragraph =  page.locator('//p[@style="text-align: center;"]')
    const textContent= await Paragraph.textContent()
    console.log(textContent)
    expect(textContent).toContain('Whether you are looking for an Enterprise Web Application or a database-driven website, At ProgoSoft, our team collects and translates your business requirements into our custom-designed Application Development methodology that allows us to deliver efficient and reliable web applications for our clients. Web applications could be your core business applications, back-office solutions, CRM system, next-generation web platform, and other solutions running on the internet. ')
})
test('services -> web applications -> 	Software Quality Assurance and Testing',async ({page}) => {
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator("//span[text()='Web Applications']").click()
    // [id="Info-box-wrap-7052"]
    const textlocatoratQA = page.getByText('Reputation and brands are critically dependent on quality, out team enables your')
    // const textlocatoratQA = await page.locator('//div[@data-ultimate-target="#Info-box-wrap-5042 .aio-icon-description"]').locator('//p[2]')
    const textAtQA= await textlocatoratQA.textContent()
    console.log(textAtQA)
    expect(textAtQA).toContain('Reputation and brands are critically dependent on quality, out team enables your company to deliver the best product, and shortens it’s time to market while maintaining your customer confidence and safeguarding your prestige. ')

    
})
test('services -> web applications ->     Application development',async ({page}) => {
    await page.goto('http://progosoft.com/')
    // await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator("//span[text()='Web Applications']").click()
    // const ApplicationDevelopment =await page.locator('//div[@class="vc_column-inner "]').locator('//div[@data-ultimate-target="#Info-box-wrap-1193 .aio-icon-description"]')
    const ApplicationDevelopment =await page.getByText('Our experts will ensure faster time to market using latest')
    const text =await ApplicationDevelopment.textContent()
    console.log(text)
     expect (await text).toContain('Our experts will ensure faster time to market using the latest application development frameworks, rich UX/UI that will clearly differentiate your application among millions of others, and lower integration costs with other systems. ')
})
test('services -> web applications ->     Architecture Design',async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator("//span[text()='Web Applications']").click()
    // const locatorArchitecture= page.locator('//div[@data-ultimate-target="#Info-box-wrap-9941 .aio-icon-description"]')
    const locatorArchitecture= page.getByText('Architecture is fundamental to the technical quality,')
    const paragraph = await locatorArchitecture.textContent()
    console.log(paragraph)
    expect (paragraph).toContain('Architecture is fundamental to the technical quality, performance, scalability, and security of a software solution. At ProgoSoft we make the right choices that not only shorten the development time & reduce costs but build a sophisticated architecture for your solution.')
})
test('services ->  ERP solutions  first paragraph ',async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator('//span[text()="ERP Solutions"]').click()
    const locatorHeading = await page.locator('//p[@style="text-align: center;"]')
    const text= await locatorHeading.textContent()
    console.log(text)
    expect(text).toContain('ERP-based strategies,')
})
test('services ->  ERP solutions -cloud migrations  ',async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator('//span[text()="ERP Solutions"]').click()
    const locatorHeading = await page.getByText('Migrating to the cloud can be incredibly')
    const text= await locatorHeading.textContent()
    console.log(text)
    expect(text).toContain('and disheartening, and result in data loss or worse. Progosoft helps clients create a cost-effective')
})
test('services ->  ERP solutions -app development  ',async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator('//span[text()="ERP Solutions"]').click()
    const locatorHeading = await page.getByText('Applications backed by the compute and storage power of the')
    const text= await locatorHeading.textContent()
    console.log(text)
    expect(text).toContain('computing and storage power of the cloud allow businesses to scale their reach without the need for on-premise')
})
test('services ->  ERP solutions -> rockspace ',async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator('//span[text()="ERP Solutions"]').click()
    const locatorHeading = await page.getByText('Offerings include web application hosting')
    const text= await locatorHeading.textContent()
    console.log(text)
    expect(text).toContain('Rackspace offers a set of cloud computing products and services billed on a utility computing basis from the US-based company Rackspace. Offerings include web application hosting or platform as a service, Cloud Storage, load balancers, and databases. ')
})
test('services ->  moblie solutions all paragraph ',async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator('//span[text()="Mobile Solutions"]').click()
    const locator = await page.locator('//div[@class="wpb_text_column wpb_content_element "]').nth(1).textContent()
    console. log (locator)
    expect(locator).toContain('Smartphones, tablets, and other mobile devices have proved to be a phenomenal success and the technology driving mobile app development is becoming more powerful every year.')
    expect(locator).toContain('Many businesses – including those in industrial and commercial markets are tapping into the sector’s exponential growth and achieving significant benefits by utilizing mobile technology. However, deploying custom mobile applications to mobile users involves a unique set of challenges and choices')
    expect(locator).toContain('Mobile technology has affected virtually all aspects of human life, from governments to public and private enterprises to friends and families. Due to its pervasive presence in our day-to-day lives, mobile applications have become a powerful tool for business-to-business and business-to-consumer communications. In fact, organizations that do not incorporate mobile technologies create an unnecessary hazard in a highly competitive business environment.')
})
test('services -> healthcare -->data modeling and predicting ',async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator('//span[text()="HealthCare Solutions"]').click()
    const loctorof = await page.getByText('testing and validating a model to best predict the probability')
    const text =await loctorof.textContent()
    console.log(text)
    expect(text).toContain('A number') 
})
test('services -> healthcare -->data visuallization ',async({page})=>{
    await page.goto('http://progosoft.com/')
    await page.locator('//a[@href="http://progosoft.com/services/"]').isVisible
    await page.locator("//span[text()='Services']").hover()
    await page.locator('//span[text()="HealthCare Solutions"]').click()
    const loctorof = await page.getByText('so they can grasp difficult concepts')
    const text =await loctorof.textContent()
    console.log(text)
    expect(text).toContain('decision-makers')
})
test('Page should be secure', async ({page}) => {
    await page.goto('https://progosoft.com/');
    expect(page.url().startsWith('https')).toBe(true);
});
test('Page should be insecure', async ({page}) => {
    await page.goto('https://progosoft.com/');
    expect(page.url().startsWith('https')).toBe(false);
    console.error('Error: Website is not secure!');
});
 
/*
bug 1 -  contacts social media links======================================================================done with exception 
bug 2 -  grammer in -> about  ============================================================================done
bug 3 -  grammer in -> about " focus on client "  ========================================================done  with changes to make 
bug 4 -  grammer in -> about " domain excellence . =======================================================done 
bug 5 -  grammer in contact us.====================== ====================================================done 
bug 6 =  grammer mistakes -> services -> web applicatios    ==============================================done
bug 7 -  grammer mistakes -> services -> web applications ->     Software Quality Assurance and Testing===done
bug 8 -  grammer mistakes -> services -> web applications ->     Application development==================done 
bug 9 -  grammer mistakes -> services -> web applications ->     Architecture Design =====================done  
bug 10 - grammer mistakes -> services -> ERP Solutions    ->     Development==============================done
bug 11 - grammer mistakes -> services -> web applications ->     Cloud Migration==========================done
bug 12 - grammer mistakes -> services -> erp solutions    ->     Rack Space===============================done 
bug 13-  grammer mistakes -> services -> in Data Modeling & Prediction ===================================done
bug 14-  grammer mistakes -> services -> in Data Visualization ===========================================done
bug 15 - grammer mistakes -> services -> mobile solutions ================================================done 
bug 16 - unsecure webpage 
*/
// test.only('Page should be secure', async ({browser}) => { // page.iSecure only works on playwright 1.14 or higher 
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto('https://progosoft.com/');
//     expect(await page.isSecure()).toBe(true);
//     });
    
// test.only('Page should be insecure', async ({browser}) => {
//     const context = await browser.newContext()

//     const page = await context.newPage()

//     await page.goto('https://progosoft.com/');
//     expect(await page.isSecure()).toBe(false);
//     console.error('Error: Website is not secure!');
// });
