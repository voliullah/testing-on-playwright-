// tohaveattribute is case sensitive 
// make sure to start braket right after starting an expect function 
// get by placeholder means you just have to put attribute of placeolder 
// to return  placeholder value , console the respective page and use getattribute function
// IN THIS PAGE , WE HAVE   used text content , getattribute , getbyplaceholder , input value 
//










import {test,expect} from '@playwright/test'
test('testing the output of the page ',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    const write = page.getByPlaceholder('Please enter your Message')
    const seco =  write.first()
    await seco.fill("hello there")
    await page.getByRole('button', { name: 'Get Checked value' }).click();
   
    const storeoutput =  page.locator("//p[@id='message']")
    console.log(await( storeoutput).textContent())

})
test( 'this check time  attribute', async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const write = page.getByPlaceholder('Please enter your message').first()
    console.log(await write.getAttribute('placeholder'))
    await expect (write).toHaveAttribute
    ("placeholder","Please enter your Message")
    await write.type('mey nahee bataonga')
    await write.press('Enter')
    console.log(await write.getAttribute('text'))
    console.log (await write.inputValue())
    await page.getByRole('button', {name : 'get checked'}).click()
    const storeoutput = page.locator("//p[@id='message']")
   console.log( await storeoutput.textContent())

}
)
test('add them two numbers and checck the result', async({page})=>{
  await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
  const first = page.locator("//input[@id='sum1']")
  await first.fill('40')
 const w = console.log(await (first).getAttribute('placeholder'))
  expect (first).toHaveAttribute("placeholder","Please enter your Message")
  console.log(await (first).inputValue())

  
  const second =  page.locator("//input[@id='sum2']")
  await second.fill('420')

  console.log(await (second).getAttribute('id'))
  console.log(await (second).inputValue())

  expect(await (second).textContent())
  await page.getByRole('button', {name : 'get values '}).click()
  const checkout =  page.locator("//p[@id='addmessage']")
  console.log(await  (checkout).textContent())
}) 
test.only('now lets do it again to make use of everything we learn in this ',async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
const input1 =  page.getByPlaceholder("Please enter your message").first()
 await input1.fill("123")

console.log(await  (input1).inputValue())
const  showittome= (input1).getAttribute('placeholder')
await expect (input1).toHaveAttribute('placeholder','Please enter your Message') 
await page.getByRole('button',{name : 'get checked '}).click()
const showthetext =  page.locator("//p[@id='message']")
console.log(await (showthetext).textContent())



// expect(await (showittome).to("placeholder","Please enter your Message"))
})


