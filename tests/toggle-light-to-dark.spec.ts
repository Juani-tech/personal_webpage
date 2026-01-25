// spec: specs/theme-layout-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Theme Functionality Tests', () => {
  test('Toggle from Light to Dark Theme', async ({ page }) => {
    // 1. Navigate to the homepage
    await page.goto('/');

    // 2. Ensure the page starts in light theme (no 'dark' class on document element)
    await expect(page.locator('html')).not.toHaveClass(/dark/);

    // 3. Click the theme toggle button (Moon icon should be visible)
    const themeToggle = page.locator('button[aria-label="Toggle theme"]').first();

    // Wait for the theme toggle to be visible and check initial state
    await themeToggle.waitFor({ state: 'visible' });

    // Check that Moon icon is present (indicating light theme)
    const moonIcon = themeToggle.locator('svg.lucide-moon');
    await expect(moonIcon).toBeVisible();

    await themeToggle.click();

    // 4. Verify the page switches to dark theme (document element has 'dark' class)
    await expect(page.locator('html')).toHaveClass(/dark/);

    // 5. Verify the toggle button now shows Sun icon
    const sunIcon = themeToggle.locator('svg.lucide-sun');
    await expect(sunIcon).toBeVisible();

    // Verifications:
    // - Page background changes to dark theme colors
    await expect(page.locator('body')).toHaveClass(/bg-secondary-900/);

    // - Text colors adjust appropriately - check that the link has dark theme classes
    const navLink = page.locator('nav a').first();
    await expect(navLink).toHaveClass(/dark:text-secondary-300/);

    // - Theme preference is saved to localStorage as 'dark'
    const themePreference = await page.evaluate(() => localStorage.getItem('theme'));
    expect(themePreference).toBe('dark');
  });
});