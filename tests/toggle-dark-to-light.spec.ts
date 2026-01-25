// spec: specs/theme-layout-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Theme Functionality Tests', () => {
  test('Toggle from Dark to Light Theme', async ({ page }) => {
    // 1. Navigate to the homepage with dark theme active
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('theme', 'dark'));
    await page.reload();

    // 2. Ensure the page loads in dark theme
    await expect(page.locator('html')).toHaveClass(/dark/);

    // 3. Click the theme toggle button (Sun icon should be visible)
    const themeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    await themeToggle.waitFor({ state: 'visible' });

    // Check that Sun icon is present (indicating dark theme)
    const sunIcon = themeToggle.locator('svg.lucide-sun');
    await expect(sunIcon).toBeVisible();

    await themeToggle.click();

    // 4. Verify the page switches to light theme (no 'dark' class on document element)
    await expect(page.locator('html')).not.toHaveClass(/dark/);

    // 5. Verify the toggle button now shows Moon icon
    const moonIcon = themeToggle.locator('svg.lucide-moon');
    await expect(moonIcon).toBeVisible();

    // Verifications:
    // - Page background changes to light theme colors
    await expect(page.locator('body')).toHaveClass(/bg-white/);

    // - Text colors adjust appropriately - check that the link has light theme classes
    const navLink = page.locator('nav a').first();
    await expect(navLink).toHaveClass(/text-secondary-300/);

    // - Theme preference is saved to localStorage as 'light'
    const themePreference = await page.evaluate(() => localStorage.getItem('theme'));
    expect(themePreference).toBe('light');
  });
});