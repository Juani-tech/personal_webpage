// spec: specs/theme-layout-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('System Theme Preference Tests', () => {
  test('Respects System Dark Preference', async ({ page }) => {
    // 1. Clear localStorage theme preference and mock system preference before page load
    await page.addInitScript(() => {
      // Clear localStorage
      localStorage.removeItem('theme');

      // Mock matchMedia to return dark preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
          matches: query === '(prefers-color-scheme: dark)',
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => {},
        }),
      });
    });

    // 2. Navigate to the page
    await page.goto('/');

    // 3. Verify the page loads in dark theme
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Verifications:
    // - Page detects and applies system dark preference when no manual preference is set
    const themePreference = await page.evaluate(() => localStorage.getItem('theme'));
    expect(themePreference).toBeNull(); // Should not save to localStorage for system preference

    const sunIcon = page.locator('button[aria-label="Toggle theme"]').first().locator('svg.lucide-sun');
    await expect(sunIcon).toBeVisible();
  });

  test('Respects System Light Preference', async ({ page }) => {
    // 1. Clear localStorage theme preference and mock system preference before page load
    await page.addInitScript(() => {
      // Clear localStorage
      localStorage.removeItem('theme');

      // Mock matchMedia to return light preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
          matches: false, // Light mode
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => {},
        }),
      });
    });

    // 2. Navigate to the page
    await page.goto('/');

    // 3. Verify the page loads in light theme
    await expect(page.locator('html')).not.toHaveClass(/dark/);

    // Verifications:
    // - Page detects and applies system light preference when no manual preference is set
    const themePreference = await page.evaluate(() => localStorage.getItem('theme'));
    expect(themePreference).toBeNull(); // Should not save to localStorage for system preference

    const moonIcon = page.locator('button[aria-label="Toggle theme"]').first().locator('svg.lucide-moon');
    await expect(moonIcon).toBeVisible();
  });
});