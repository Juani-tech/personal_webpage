// spec: specs/theme-layout-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Mobile Layout Tests', () => {
  test('Mobile Navigation Menu', async ({ page }) => {
    // 1. Set viewport to mobile size (375x667)
    await page.setViewportSize({ width: 375, height: 667 });

    // 2. Navigate to homepage
    await page.goto('/');

    // 3. Verify desktop navigation links are hidden and mobile elements are visible
    const desktopNavLinks = page.locator('nav .hidden.md\\:flex.space-x-8');
    await expect(desktopNavLinks).toBeHidden();

    const mobileButtons = page.locator('nav .md\\:hidden.flex.items-center');
    await expect(mobileButtons).toBeVisible();

    // 4. Verify theme toggle button is accessible in mobile view
    const mobileThemeToggle = page.locator('nav div.md\\:hidden button[aria-label="Toggle theme"]');
    await expect(mobileThemeToggle).toBeVisible();

    // 5. Test theme toggle functionality on mobile
    const initialIcon = mobileThemeToggle.locator('svg');
    await expect(initialIcon).toBeVisible();
    await mobileThemeToggle.click();

    // 6. Verify theme changed
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('Project Cards Layout on Mobile', async ({ page }) => {
    // 1. Set viewport to mobile size (375x667)
    await page.setViewportSize({ width: 375, height: 667 });

    // 2. Navigate to homepage
    await page.goto('/');

    // 3. Wait for projects section to load
    const projectsSection = page.locator('#projects');
    await projectsSection.waitFor();

    // 4. Verify project cards are displayed
    const projectCards = page.locator('#projects .bg-secondary-900\\/50');
    const cardCount = await projectCards.count();
    expect(cardCount).toBeGreaterThan(0);

    // 5. Verify cards are properly sized for mobile (single column)
    const firstCard = projectCards.first();
    const boundingBox = await firstCard.boundingBox();
    expect(boundingBox?.width).toBeGreaterThan(300); // Should be wide enough for mobile content
    expect(boundingBox?.width).toBeLessThan(400); // Should not be too wide

    // 6. Verify card content is readable and accessible
    const cardTitle = firstCard.locator('h3');
    await expect(cardTitle).toBeVisible();

    const cardDescription = firstCard.locator('p');
    await expect(cardDescription).toBeVisible();

    const cardLinks = firstCard.locator('a');
    const linkCount = await cardLinks.count();
    expect(linkCount).toBe(2); // Should have GitHub and Demo links
  });
});