import{test,expect} from '@playwright/test'
test ('handle jquery bootstrap dropdown ', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo')
    // the strategy should be tp first click on the container's locator so that the dom could show us container of locators for each element in dropdown
    await page.locator("#country+span").click()

    await  page.waitForTimeout(3000)
    await page.locator("ul#select2-country-results").locator('li',{
        hasText : 'Australia'
    }).click()
    await page.waitForTimeout(2000)
})
/*//htmltag[text() = 'value text']
//htmltag[normalize-space() = 'value text']
htmltag[attribute = 'attribute_value']
//htmltag[@attribute = 'attribute_value'] */
