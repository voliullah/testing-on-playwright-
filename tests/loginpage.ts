import{test,expect,chromium, defineConfig} from '@playwright/test'
import defaultconfig from '@playwright/test'
export default defineConfig({
    expect : {
                timeout : 1008 *500 * 10000,
    }
    })
    test(('my first login ppage execusion') , async({})=>{        test.setTimeout(150000)

        
        const browser= await chromium.launch({headless:true})

        const context=await browser.newContext();
        const page = await context.newPage();
        const url = await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const username = await page.getByPlaceholder('Username').fill('Admin');
        const Passwrod = await page.getByPlaceholder('Password').fill('admin123');
        const loggenin = await page.click('button:has-text("login")');
        await page.waitForTimeout(10000)

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        await page.waitForTimeout(10000)

         test.describe.parallel
    })
