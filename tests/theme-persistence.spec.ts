// spec: specs/theme-layout-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Theme Persistence Tests', () => {
  test('Theme Persists Across Page Reloads', async ({ page }) => {
    // 1. Navigate to the homepage
    await page.goto('/');

    // 2. Toggle to dark theme and verify it's applied
    const themeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    await themeToggle.waitFor({ state: 'visible' });
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    // 3. Reload the page
    await page.reload();

    // 4. Verify the page loads with dark theme maintained
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Verifications:
    // - localStorage contains the theme preference
    const themePreference = await page.evaluate(() => localStorage.getItem('theme'));
    expect(themePreference).toBe('dark');

    // - Page maintains the selected theme after reload
    const sunIcon = themeToggle.locator('svg.lucide-sun');
    await expect(sunIcon).toBeVisible();
  });
});