/* 2. Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau: a. Sản phẩm 1: 2 sản phẩm 
b. Sản phẩm 2: 3 sản phẩm 
c. Sản phẩm 3: 1 sản phẩm 
 */

import { test, expect } from '@playwright/test';

test('add products to cart', async ({ page }) => {
    await test.step('Go to Material Playwright page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on "Bài học 2: Product page"', async () => {
        await page.locator('//table//a[contains(text(),"Product page")]').click();
    });

    await test.step('Add products to cart', async () => {
        // Add Product 3: three products
        for (let i = 0; i < 3; i++) {
            await page.locator('//button[@data-product-id=2]').click();
        }
        // Add Product 3: one product
        await page.locator('//button[@data-product-id=3]').click();
    });

    await test.step('Check the cart quantity', async () => {
        const cartQuantity1 = await page.locator('//td[text()="Product 2"]/following-sibling::td[2]').textContent();
        const cartQuantity2 = await page.locator('//td[text()="Product 3"]/following-sibling::td[2]').textContent();
        expect(cartQuantity1).toEqual('3');
        expect(cartQuantity2).toEqual('1');
    });
}); 