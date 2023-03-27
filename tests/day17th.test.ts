import {test, expect, request} from "@playwright/test"
test('try downloading ', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')
    const blank =await page.locator('#textbox')
    await blank.fill("helo bro , hows you doing ")
    await blank.press('Enter')
     

    await page.click('//*[@id="create"]')
    const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.click('[id="link-to-download"]')

    ])
    const pathoffile  =await download.path() //  it actually show us the path of file .
    console.log(pathoffile)  // if you go to docs you can see by using path the file gets downloaded but in temp memory , if we are willing to save it , we will have to save it  ..... for that perpose we use (saveAs) function below 
    const retreiveFileName= await download.suggestedFilename() // in this step we can save the file name at download. could be used if we have to make some assertions later on , on the name of file  
    await download.saveAs('firstfilemm') // just incase if the popup have multiple files to download then we will have to resolve it by arrays eg- download[0] or we can do it using loop like we used to do resolving milut popup tabs
    // if you would give it a name which is already there in local storage , it willl replace that one 
    
    /// let me try downloading it again 
     
    await blank.fill("downloading it second time  ")
    await blank.press('Enter')
    await page.click('//*[@id="create"]')
    const [downloadAgain]=await Promise.all([
        page.waitForEvent('download'),
        page.click('[id="link-to-download"]')

    ])
    const name = downloadAgain.suggestedFilename()
    console.log(name);
    //put an assertion on name of the file 
    expect(name).toContain('Lambda')
    console.log(name.toUpperCase())
    // save it now 
    //await downloadAgain.saveAs('second file downloaded')
    // play with it 
    console.log(name.slice()) // returns part of string
    console.log(name.charAt(4)) // returns char at 5th position , since it starts from zero 
    expect(await name.charAt(3)).toBe('b') // very strict in this case  ( l a m b )
    console.log( name.charCodeAt(6)) // idk wat it is but its giving me 105
    console.log(name.endsWith('a')) // dont know what it is but its false 
    console.log(name.indexOf('0,1,2,3,4')) //learn
    console.log(name.trimEnd())
    console.log(name.trimStart())
    console.log(name.valueOf())

    
    // ok noww lets do it again  from somewhere else 
})
test('donwload this photo from website. i messedup with locators later  ', async({page})=>{
    await page.goto('https://file-examples.com/')
    // a javascript bootstap alert popups here , locator could be visible after a while in dom
    //await page.waitForEvent('popup')
    await page.click('[id="menu-item-31"]')
    //now go and download a photo from here 
    await page.frameLocator('iframe[name="aswift_5"]').frameLocator('iframe[name="ad_iframe"]').getByRole('button', { name: 'Tutup iklan' }).click();    
    await page.click('[id="menu-item-29"]')
    await page.locator('[href="https://file-examples.com/index.php/sample-images-download/"]').first().click()
    await page.click('[href="https://file-examples.com/index.php/sample-images-download/sample-jpg-download/"]')
    
    await page.click('[id="menu-item-31"]')
    const [donwloadPhoto] = await Promise.all([
        page.waitForEvent('download'),
        page.click('[href="https://file-examples.com/wp-content/uploads/2017/10/file_example_JPG_100kB.jpg"]')
    ])
    await donwloadPhoto.saveAs('photothistime')
    
    
    // const alert =await page.locator("[id='primary']")
    // await alert.click()

    await page.click('[href="https://file-examples.com/index.php/sample-video-files/sample-avi-files-download/"]')
    const downledFile =await Promise.all([
        page.waitForEvent('download'),
        page.click('[href="https://file-examples.com/wp-content/uploads/2018/04/file_example_AVI_480_750kB.avi"]')

    ])

    await downledFile[0].saveAs('sampledocWordfile')
    const nameofFile = downledFile[0].suggestedFilename()
    console.log((nameofFile))

})
 
test('codegen downloader ', async({page}) =>{
 
  
  await page.goto('https://file-examples.com/');
  await page.locator('#menu-item-27').getByRole('link', { name: 'Sample documents' }).click();
  await page.frameLocator('iframe[name="aswift_5"]').frameLocator('iframe[name="ad_iframe"]').getByRole('button', { name: 'Tutup iklan' }).click();
  await page.getByRole('row', { name: 'DOC, DOCX Microsoft Word Document, Office Open XML document Select file size & download' }).getByRole('link', { name: 'Select file size & download' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('row', { name: '100kB DOC Download sample DOC file' }).getByRole('link', { name: 'Download sample DOC file' }).click();
  const download = await downloadPromise;
  await page.goto('https://file-examples.com/index.php/sample-documents-download/sample-doc-download/');
  await page.locator('#menu-item-29').getByRole('link', { name: 'Sample images' }).click();
  await page.getByRole('row', { name: 'JPG JPEG (Joint Photographic Experts Group) Select file size & download' }).getByRole('link', { name: 'Select file size & download' }).click();
  await page.getByRole('row', { name: '100 kB JPG Download sample JPG file' }).getByRole('link', { name: 'Download sample JPG file' }).click()
    
})
test('do it again', async ({context})=>{
    
    const page = await context.newPage()
    await page.goto('https://file-examples.com/')
    
     await page.click("//li[@id='menu-item-29']")

    // HERE I TRIED ENOUGH TO TRYING DIFFERENT LOCATORS TO DEAL WITH MODAL ALERT , IT DIDINT WORK UNTILL I USE INBUILD LOCATOR, no matter which locator you gon use , its not gonna work , it only works using codegen locator 

    // await page.waitForSelector('[id="dismiss-button"]')
    // const selecto =await page.waitForSelector('[id="dismiss-button"]')
    // await selecto.click()
    
    // await page.click('[id="menu-item-29"]')
    // await page.getByRole('button', {name : 'Tutup iklan'}).click()
    // await page.locator('button:has-text("tutup")')
    // await page.waitForSelector('div[role="dialog"] button:has-text("Tutup")')
    // await page.click('div[role="dialog"] button:has-text("Tutup")')
    //   this is the codegen-locator
    await page.frameLocator('iframe[name="aswift_5"]').frameLocator('iframe[name="ad_iframe"]').getByRole('button', { name: 'Tutup iklan' }).click();

    
    //await page.click()
    await page.click("//li[@id='menu-item-29']")
    //  await page.click('[id="ad_position_box"]')
    await page.click('[href="https://file-examples.com/index.php/sample-images-download/sample-webp-download/"]')
    await page.click('[href="https://file-examples.com/wp-content/uploads/2020/03/file_example_WEBP_50kB.webp"]')

    await page.waitForTimeout(4000)
})
test( 'try uploading now ', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')
    const blank =await page.locator('#textbox')
    await blank.fill("helo bro , hows you doing ")
    await blank.press('Enter')
    await page.waitForLoadState()
     

    await page.click('//*[@id="create"]')
    
    const downloadiee= page.waitForEvent('download')
    await page.click('[id="link-to-download"]')  
    await (await downloadiee).saveAs('hellothere')
    await downloadiee;
    const nameofFile = ((await (downloadiee)).suggestedFilename())
     // learn why cant we use it as we used to use in promisfunction, i means why do we have to put await inside bracket 
    console.log(nameofFile)
    const pathe =    await (await downloadiee).path()
    console.log(pathe);
    
    
})
test('donwload again , put assertion on name ', async({page})=>{
    await page.goto('https://letcode.in/file')
    await page.waitForLoadState()
    const downledkhan = page.waitForEvent('download') //// remember dont use awailt here with event popup 
    await page.locator('[id="xls"]').click()
    await downledkhan;
    await (await downledkhan).saveAs('thisfile')
    const nameOne=await (await downledkhan).suggestedFilename()
    console.log(nameOne)
    console.log('one')

    const downloadAgain=  page.waitForEvent('download')
    await page.click('#pdf')
    await downloadAgain;
    await (await downloadAgain).saveAs('secondone')
    const nameSecond =await (await downloadAgain).suggestedFilename()
    console.log(nameSecond)
    console.log('two')

    const downloadPromise =  page.waitForEvent('download')
    await page.click('//a[text()="Download Text"]')
    await downloadPromise;  
    await (await downloadPromise).saveAs('thirdone')
    console.log(await (await downloadPromise).path())
    console.log('three')

    const [download]= await Promise.all([
        page.waitForEvent('download'),
        page.click('//a[text()="Download Text"]')
    ])
    await download.path()
    await download.saveAs('promisesone')
    console.log(await download.suggestedFilename())
    console.log(await download.path())
    console.log('4thone')
    // locators used // id="xls"// id=""     // //a[text()="Download Text"]

    
})
test('now go for uploading ',async ({page}) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')
    await page.setInputFiles('//input[@type="file"]', ['upload/one.png', 'upload/second.png'

    ])
    await page.click('[class="glyphicon glyphicon-edit"]')
    await page.waitForLoadState()
    // await page.click('//li[@id="tab-util-wi9el1q3l-crop"]')
    await page.getByRole('button', {name: 'Crop'}).click()
    await page.click("//span[text()='Rotate left']")
    await page.click('[class="PinturaButtonLabel"]')
 // could be done using the promise function too 
    const [uploade] = await Promise.all([
        page.waitForEvent('filechooser')
       ,page.click('//input[@type="file"]') 
    ])
    await uploade.setFiles(['upload/one.png', 'upload/second.png'])
    const checkmulti= await uploade.isMultiple()
    console.log(checkmulti)
})
// test()