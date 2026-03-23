/* Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 4: Personal notes”.
a. Thêm mới 10 note với nội dung sau ở bảng dưới đây.
i. Field “Title”: điền nội dung ở cột “Tên action”
ii. Field “Content”: điền nội dung ở cột “Mô tả”

b. Thực hiện search với keyword “một hoặc nhiều” */

import { test, expect } from '@playwright/test';

const arrContents = [
    {
        id: 1,
        name: "click",
        description: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"
    },
    {
        id: 2,
        name: "fill",
        description: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"
    },
    {
        id: 3,
        name: "type",
        description: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"
    },
    {
        id: 4,
        name: "hover",
        description: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"
    },
    {
        id: 5,
        name: "check",
        description: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"
    },
    {
        id: 6,
        name: "uncheck",
        description: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"
    },
    {
        id: 7,
        name: "selectOption",
        description: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"
    },
    {
        id: 8,
        name: "press",
        description: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"
    },
    {
        id: 9,
        name: "dblclick",
        description: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web"
    },
    {
        id: 10,
        name: "dragAndDrop",
        description: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích"
    }
];

test('add notes and search', async ({ page }) => {
    await test.step('Go to Material Playwright page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Click on "Bài học 4: Personal notes"', async () => {
        await page.locator('//table//a[contains(text(),"Personal notes")]').click();
    });

    await test.step('Add 10 notes', async () => {
        const titleInput = page.locator('//input[@id="note-title"]');
        const contentInput = page.locator('//textarea[@id="note-content"]');
        const addNoteButton = page.locator('//button[@id="add-note"]');

        // Add notes from the array
        for (let i = 0; i < arrContents.length; i++) {
            await titleInput.fill(arrContents[i].name);
            await contentInput.fill(arrContents[i].description);
            await addNoteButton.click();
        }
    });

    await test.step('Search for notes', async () => {
        const searchText = "phần tử";
        const totalResult = 7;

        // Perform search by pressing keys sequentially
        await page.locator('//input[@id="search"]').pressSequentially(searchText);

        // Verify search results returned from both title and content fields
        const searchResults = page.locator(`//*[contains(text(),"${searchText}")]`);
        await expect(searchResults).toHaveCount(totalResult);
    });
}); 