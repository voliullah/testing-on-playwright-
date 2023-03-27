import { test , expect} from '@playwright/test'
test(' go for the easy method first for date choosing ', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    let date = ('12-02-2012') // here its tricky , if you see a date by dd.mm.yy and you feel like it would be same in UI too , you gotta check it cos its not always the case .
    date = ('2021-12-18')
    // to check youhave to go and in console of the page , white documents.getElementbyId('idofelemnt').value 
    //the baove function will give you the format of the value (in this case , date ). pass it in the given format so it wont give you error like 'Malformed value ' // make sure you give vallue to date picker before checkcing its value in console .. in tthis case it gave us "year, month and date "
    await page.fill('input[type=date]',date)
})
 
// (//div[@id="sandbox-container2"]//input[@type="text"])[1] select first 







test('bootstap date picker',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-date-picker-demo')
    await page.click('[id="from"]')
    

})

//[id="from"] click
// [class="ui-datepicker-prev ui-corner-all ui-state-hover ui-datepicker-prev-hover"] prev
// [class="ui-datepicker-next ui-corner-all"] forward
// [class="ui-datepicker-title"] 