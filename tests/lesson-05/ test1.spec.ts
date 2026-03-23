import { test, expect } from '@playwright/test';

/* Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 1: Register Page (có đủ các element)”
a. Nhập thông tin cho các field: Username, Email, Gender, Hobbies,
Interests, Country, Date of Birth, Profile Picture, Biography
b. Click button Register */

test('register a new user', async ({ page }) => {
    await test.step('Go to Material Playwright page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on "Bài học 1: Register Page (có đủ các element)"', async () => {
        await page.locator('//table//a[contains(text(),"Register Page")]').click();
    });

    await test.step('Fill in the registration form', async () => {
        await page.locator('//input[@id="username"]').fill('Mint mint');
        await page.locator('//input[@id="email"]').fill('mint123@example.com');
        await page.locator('//input[@id="male"]').click();
        await page.locator('//input[@id="reading"]').click();
        await page.locator('//select[@id="interests"]').selectOption('Music');
        await page.locator('//select[@id="country"]').selectOption('Canada');
        await page.locator('//input[@id="profile"]').setInputFiles('data/profile.jpg');
        await page.locator('//textarea[@id="bio"]').fill('This is Mint mint .');
    });

    await test.step('Click on "Register" button', async () => {
        await page.locator('//button[text()="Register"]').click();
    });

    await test.step('Click on "Register" button', async () => {
        await page.locator('//button[text()="Register"]').click();
    });

    await test.step('Check the registration result', async () => {
        const userEmail = await page.locator('//table//td[contains(text(),"mint123@example.com")]').textContent();
        expect(userEmail).toEqual('mint123@example.com');
    });

});
