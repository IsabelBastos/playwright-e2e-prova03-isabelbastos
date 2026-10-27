import { test, expect } from '@playwright/test';

test.describe('Testes E2E - Zara', () => {

  test('Acessar a página inicial da Zara', async ({ page }) => {
    await page.goto('https://www.zara.com/br/en/');
    await expect(page).toHaveTitle(/ZARA/i);
  });

  test('Acessar a sacola de compras', async ({ page }) => {
    await page.goto('https://www.zara.com/br/en/shop/cart');

    await expect(page).toHaveURL(/shop\/cart/);
  });

  test('Acessar a área de login', async ({ page }) => {
  await page.goto(
    'https://account.zara.com/login/two-step?store_id=21701&store_code=br&language_code=en&language=en-US'
  );

  await expect(page).toHaveURL(/account\.zara\.com\/login/);
});


});