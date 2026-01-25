import { test, expect } from '@playwright/test';

test.describe('Theme Functionality Tests', () => {
  test('seed', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
  });
});