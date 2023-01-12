import { test, expect } from '@playwright/test';

test('new test mint', async ({ page })=>{
await page.goto('https://dev.mint-dispatch.com/Login');
await page.getByLabel('e-mail').fill('adminmint.com');
await page.getByLabel('password').fill('Aa111');
await page.getByRole('button', { name: 'Login'}).click();
await page.screenshot({ path: 'screenshot.png', fullPage: true });
});