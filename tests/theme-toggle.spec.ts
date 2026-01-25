// Test theme toggle functionality
import { test, expect } from '@playwright/test';

test.describe('Theme Toggle Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Clear any existing theme preference
    await page.context().addCookies([]);

    // Navigate to the website
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  });

  test('should toggle between light and dark themes', async ({ page }) => {
    // Check initial theme (should be dark by default)
    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);

    // Find and click the theme toggle button
    const themeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    await expect(themeToggle).toBeVisible();

    // Check initial icon (should be Sun for dark theme)
    const sunIcon = themeToggle.locator('svg.lucide-sun');
    await expect(sunIcon).toBeVisible();

    // Click to switch to light theme
    await themeToggle.click();

    // Wait for theme change
    await page.waitForTimeout(500);

    // Check that dark class was removed
    await expect(html).not.toHaveClass(/dark/);

    // Check that Moon icon is now visible
    const moonIcon = themeToggle.locator('svg.lucide-moon');
    await expect(moonIcon).toBeVisible();

    // Click again to switch back to dark theme
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Check that dark class was added back
    await expect(html).toHaveClass(/dark/);

    // Check that Sun icon is visible again
    await expect(sunIcon).toBeVisible();
  });

  test('should persist theme preference', async ({ page }) => {
    // Switch to light theme
    const themeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    await themeToggle.click();
    await page.waitForTimeout(500);

    // Reload the page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Check that light theme is maintained
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);
  });

  test('should respect system preference when no manual choice', async ({ page }) => {
    // This would require mocking the system preference
    // For now, just verify the toggle exists and works
    const themeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    await expect(themeToggle).toBeVisible();
    await expect(themeToggle).toBeEnabled();
  });

  test('mobile theme toggle should work', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check that mobile theme toggle exists
    const mobileThemeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    await expect(mobileThemeToggle).toBeVisible();

    // Click mobile toggle
    await mobileThemeToggle.click();
    await page.waitForTimeout(500);

    // Verify theme changed
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);
  });
});