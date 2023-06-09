import { test, expect } from '@playwright/test';

test('Fill out sign up form', async ({ page }) => {
  // Navigate to the sign up page
  await page.goto('http://vimentobackend-env.eba-dmebp3sv.eu-west-1.elasticbeanstalk.com/signup');

    const firstName = await page.locator('//input[@class="form-control"]').nth(0)
    await firstName.click()
    await firstName.type('hello there ')
    
    const lastName = await page.locator('//input[@class="form-control"]').nth(1)
    await lastName.click()
    await lastName.type('makawa ')

    function generateRandomString(): string {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Define the character set to use
        let randomString = '';
        for (let i = 0; i < 8; i++) {
          const randomIndex = Math.floor(Math.random() * alphabet.length); // Generate a random index into the character set
          randomString += alphabet.charAt(randomIndex); // Append the character at the random index to the string
        }
        return randomString + '@gmail.com';
      }
      
      const autoGeneratedString = generateRandomString();
      console.log(autoGeneratedString); // Output: e.g. "b5h6g2c8"
      
    
    const Emaail = await page.locator('//input[@class="form-control"]').nth(2)
    await Emaail.click()
    await Emaail.type(autoGeneratedString)

    const password = await page.locator('//input[@class="form-control"]').nth(3)
    await password.click()
    await password.type('makawahaha')

    const password_  = await page.locator('//input[@class="form-control"]').nth(4)
    await password_.click()
    await password_.type('makawahaha')
    page.on('dialog', async dialog => {
        const message = dialog.message();
        console.log(`Popup alert message: ${message}`);
        await dialog.dismiss();
      });
    
    // Trigger the popup alert

    const button = await page.getByRole('button',{name : "create an account"})
    await button.click()
    await page.waitForTimeout(8000)

    const text = await page.getByAltText('Already have an account ?')
    expect(await text.textContent()).toBe('Already have an account ?')


    
//   // Fill in the first name field
//   const firstNameField = await page.locator('#first-name');
//   await firstNameField.fill('waliullah');

//   // Fill in the last name field
//   const lastNameField = await page.locator('#last-name');
//   await lastNameField.fill('khan');

//   // Submit the form
//   const submitButton = await page.locator('#submit-button');
//   await submitButton.click();

//   // Assert that we have been redirected to the confirmation page
//   const confirmationMessage = await page.textContent('.confirmation-message');
//   expect(confirmationMessage).toContain('Thank you for signing up!');
 });
 //object example 
 //person is an object , inside it the address is also an object with properties (streets,city , state)
 let person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY"
    }
  };
  //example of a function 
  function addNumbers(a, b) {
    return a + b;
  }
  //example of a control flow ( which control the order of program execution)
  let x = 10;

    if (x > 5) {
    console.log("x is greater than 5");
    } else {
    console.log("x is less than or equal to 5");
    }