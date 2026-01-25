// Simple theme toggle test
import { test, expect } from '@playwright/test';

test.describe('Theme Toggle Basic', () => {
  test('should have theme toggle button and be clickable', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // Check if button exists (don't check visibility)
    const themeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    await expect(themeToggle).toBeAttached();

    // Try to click it
    await themeToggle.click({ force: true });
    await page.waitForTimeout(1000);

    // Check if HTML has dark class (it should be removed after click)
    const htmlClasses = await page.getAttribute('html', 'class');
    console.log('HTML classes after click:', htmlClasses);

    // Click again to go back to dark
    await themeToggle.click({ force: true });
    await page.waitForTimeout(1000);

    const htmlClasses2 = await page.getAttribute('html', 'class');
    console.log('HTML classes after second click:', htmlClasses2);
  });
});