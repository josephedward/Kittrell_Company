const { test, expect } = require('@playwright/test');

const BASE = process.env.TEST_BASE_URL || 'http://localhost:3000';
const HOMEPAGE = BASE + '/';

const deadLinks = [
  BASE + '/featured/Featured_Irisdale.html',
  BASE + '/pdf/plans/1-Cottage/Cottage-3-floor.pdf',
  BASE + '/pdf/plans/7-Richmond-I/Winterberry-Richmond.pdf',
];

for (const url of deadLinks) {
  test(`${url} redirects to homepage`, async ({ page }) => {
    const response = await page.goto(url, { waitUntil: 'load' });
    // Should land on homepage
    expect(page.url()).toBe(HOMEPAGE);
    // Should not be a 404 status
    expect(response.status()).not.toBe(404);
  });
}
