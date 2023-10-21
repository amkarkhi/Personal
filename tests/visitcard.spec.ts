import { test, expect } from '@playwright/test';

test('Visit Card Render (name)', async ({ page }) => {
   await page.goto('http://localhost:3000/me');
   expect(await page.isVisible('text=Amin Karkhi')).toBeTruthy();
});



test('Visit Card Render (eng)', async ({ page }) => {
   await page.goto('http://localhost:3000/me');
   expect(await page.isVisible('text=Software Engineer')).toBeTruthy();
});
