//  learn to handle three types of  alerts , bootstrap models and drop down
//learn about selectoptions 
// in order to pass many values to the  selectoptions  we have to put them (label , index or value ) in arrays []
// learn why i cant diretly call tohavetext from a variable storing a locator 
// for one option you can actually select direct from locator by just putting comma after locator and put value as  'has text'
//

import { test, expect } from '@playwright/test'
// in this test i have accidently learbt you can select an option from a dropdown by using just locator 
test('lets practice inouit',async ({page})=>{
await   page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    const optionslocator = page.locator('id=select-demo')
    const choose= page.locator('id=select-demo',{  //LESRN WHY DONT WE USE AWAIT HERE 
        hasText :   "Sunday" 
    })
})
test('choose three', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    // const  chooseButton = page.locator('id=select-demo') 
    
    // chooseButton.click()
    // page.waitForTimeout(3000)
    await page.selectOption('id=select-demo',[
        //in this case the selectors have multiple things to choose , so the first one here will be selected and in this scenarion sunday comes before tuesday so if we put more options , the first one gets selected 
        {value: 'Tuesday'},
        {label : 'Sunday'},
        {index : 4}
    ])
    page.waitForTimeout(3000)
  //  const expectedVal = await page.locator("//p[@class='selected-value text-size-14']").textContent()
  //why cant we use tohavetext here ??? ask tufail
    expect (await page.locator("//p[@class='selected-value text-size-14']").textContent()).toContain('Sunday')
    page.waitForTimeout(5000)
})
test('lets handle alert again', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
    //CALL the event listener before clicking an option which results an alert  
    // to perform operations(sccept , dismiss to write something in box of alert) on evetlister , do it inside it 
    page.on('dialog', async(alert)=>{
        const texee = alert.message()
        console.log(texee)
        await alert.accept()
        //you have to accept or dismiss otherwise test will fail

    }
    )
    await page.locator("button:text('Click Me')").nth(0).click()
})
test('now handle the ones where you have to accept or dismiss and put assertion',async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.once('dialog',async(alert)=>{
        const message = alert.message()
        console.log(message)  
        await alert.accept()
    })
    await page.locator("button:text('Click  Me')").nth(1).click()
    expect (await page.locator("id=confirm-demo").textContent()).toContain("OK!")
    page.once('dialog',async(alert)=>{
        const message = alert.message()
        await alert.dismiss()
    })  
    await page.locator("button:text('Click  Me')").nth(1).click()
    console.log(await page.locator("//*[@id='confirm-demo']").textContent())
  expect (await page.locator("//*[@id='confirm-demo']").textContent()).toContain('Cancel!')
})
test('dismiss and put assertion to see ', async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on('dialog',async(alert)=>{
        const message = alert.message()
        await alert.dismiss()
    })  
    await page.locator("button:text('Click  Me')").nth(1).click()
    console.log(await page.locator("//*[@id='confirm-demo']").textContent())
  expect (await page.locator("//*[@id='confirm-demo']").textContent()).toContain('Cancel!')
})
test('okay here i will try to do it again',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on ('dialog',async(alert)=>{
        const text = alert.message()
        console.log(text);
        await alert.accept()
    })
    await page.locator("button:has-text('Click Me')").nth(1).click()
    //in those tests we couldnt fetch string so we are using textcontent before calling tocantain
    expect (await page.locator("id=confirm-demo").textContent()).toContain("OK!")
})
test(" handle the alert where you have to put something in alert", async ({page})=>{
    await page.goto("http://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on('dialog',async(alert)=>{
        const text = alert.message()
     await   alert.accept()
    })
    await page.locator("button:has-text('Click Me')").nth(0).click()
})
test("now put them all in one and make some assertion", async({page})=>{
    await page.goto("http://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on('dialog',async(alert)=>{
        const text = alert.message()
        console.log(text)
        await alert.accept()
    })
    await page.locator("button:has-text('Click Me')").nth(0).click()

})

test('the seond one to do again ',async({page})=>{
     await page.goto('http://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
     page.on('dialog', async(alert)=>{
        const usermessage= alert.message()
        await alert.accept()
        console.log(usermessage)
         
    await page.locator("button:has-text('Click Me')").nth(1).click()
    expect (page.locator('#id=confirm-demo')).toContainText('OK!')
    })
})

test('the seond one to do again okk ',async({page})=>{
    await page.goto('http://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
    page.on('dialog',async(alert)=>{
        const the3rdone = alert.defaultValue()
        await alert.accept('hello')
        console.log(the3rdone)
    })
    await page.locator("button:has-text('Click Me')").nth(2).click()
    page.waitForTimeout(3000)
    //nth(-1) to be for the last one
    const result =await page.locator("//*[@id='prompt-demo']").textContent()
    console.log(result)
    expect (await page.locator("//*[@id='prompt-demo']").textContent()).toContain("hello")

})
 //
test('select from droppdwon',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
   await  page.selectOption("//*[@id='select-demo']",{
        label : 'Sunday'
    })
    console.log(await page.locator("//*[@class='selected-value text-size-14']").textContent())
    expect ( await page.locator("//*[@class='selected-value text-size-14']").textContent()).toContain('Sunday')
})
// to select multiple in a same dropdown you have to do the same but put them(lable , index or value ) in array
test('select multiple in one dropdown',async ({page}) => {
   await  page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("//*[@id='multi-select']", [
    { label : 'California'} , { index : 2 }, {value : 'Ohio'}
   ])
})
 