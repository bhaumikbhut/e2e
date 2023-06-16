import { test,expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


test('test', async ({ page }) => {


    // Step 1: Login to the application
    await page.goto('https://staging3-akes.nexquare.io');
    await page.fill('input[name="username"]', 'S0075');
    await page.fill('input[name="password"]', 'Abc!@1');
    await Promise.all([
        page.click('#log-btn'),
        page.waitForLoadState('networkidle'),
    ]);
    // Step 2: Go to 'Staff Profile Management' menu and open 'Staff Add'
    await Promise.all([
        page.click('a[href="/nexquare/editStaff"]'),
        page.waitForLoadState('networkidle'),
    ]);
    await Promise.all([
        page.click('a[href="addStaff"]'),
        page.waitForLoadState('networkidle'),
    ]);


    //Step 3. Enter all mandatory fields in 'Personal Details' section and click ‘Save’ button, will add a new staff with the data entered

    await page.getByPlaceholder('Full Name').fill(faker.name.firstName());
    await page.getByPlaceholder('Professional E-Mail').click();
    await page.getByPlaceholder('Professional E-Mail').fill(faker.internet.email());
    await page.getByPlaceholder('Date Of Birth').click();
    await page.waitForTimeout(1000)
    await page.getByRole('combobox').nth(3).selectOption('1964');
    await page.getByRole('link', { name: '9', exact: true }).click();
    await page.waitForTimeout(1000)
    await page.getByPlaceholder('Joining Date').click();
    await page.waitForTimeout(1000)
    await page.getByRole('cell', { name: '15' }).click();
    await page.getByPlaceholder('Salary Start Date').click();
    await page.waitForTimeout(1000)
    await page.getByRole('link', { name: '16' }).click();
    await page.click('#submitButton');

    //4. Go to ‘Fee Configuration’ menu, you will land on ‘Fee Collection’
    await page.getByText('Fee Configuration Fee Collection').click();
    await page.waitForLoadState('networkidle')
    //5. Enter ‘200011312’ into the ‘Global Student Search’ box and search
    await page.getByPlaceholder('Global Student Search').click();
    await page.getByPlaceholder('Global Student Search').fill('200011312');
    await page.locator('app-global-search').getByRole('button').first().click();
    await page.waitForLoadState('networkidle')

    //6. Select one pending invoice under ‘Payable’ -> ‘Pending Invoice’ section and choose the ‘Payment Mode’ under ‘Payments’(bottom left)

    await page.getByRole('button', { name: 'General Advances Paying now: 0' }).click();
    await page.locator('#mat-input-16').click({force:true});
    await page.locator('#mat-input-16').fill('1000',{force:true});

    //7. Click on ‘Pay’ button(bottom right), will collect the fee
    //8. Make sure that the payment has been completed successfully
    await page.getByRole('listbox', { name: 'Payment Mode' }).click();
    await page.getByRole('listbox', { name: 'Payment Mode' }).locator('div').nth(3).click();
    await page.getByText('Cash').click();
    await page.getByRole('button', { name: 'Pay', exact: true }).click();
    await page.waitForLoadState('networkidle')
    

});
