// spec: specs/theme-layout-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation Functionality Tests', () => {
  test('Desktop Navigation Links', async ({ page }) => {
    // 1. Navigate to homepage
    await page.goto('/');

    // 2. Verify navigation menu links are visible on desktop
    const navMenuLinks = page.locator('nav .md\\:flex.space-x-8 a');
    const menuLinkCount = await navMenuLinks.count();
    expect(menuLinkCount).toBe(5); // Home, About, Experience, Projects, Contact

    // 3. Test navigation links work (smooth scrolling to sections)
    const homeLink = navMenuLinks.filter({ hasText: 'Home' });
    await homeLink.click();

    // Verify we're at the top of the page
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);

    // 4. Test social media links
    const socialLinks = page.locator('nav .md\\:flex.items-center a');
    const socialLinkCount = await socialLinks.count();
    expect(socialLinkCount).toBe(3); // GitHub, LinkedIn, Mail
  });

  test('Mobile Navigation Links', async ({ page }) => {
    // 1. Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // 2. Navigate to homepage
    await page.goto('/');

    // 3. Open mobile menu
    const hamburgerButton = page.locator('nav .md\\:hidden.flex.items-center button').nth(1);
    await hamburgerButton.click();

    // 4. Verify mobile menu is open (check for menu items)
    const mobileMenuItems = page.locator('nav .md\\:hidden.pb-4 .flex.flex-col');
    await expect(mobileMenuItems).toBeVisible();

    // 5. Test clicking a navigation link closes the menu
    const homeLink = mobileMenuItems.locator('a').filter({ hasText: 'Home' });
    await homeLink.click();

    // 6. Verify menu is closed
    await expect(mobileMenuItems).not.toBeVisible();

    // 7. Verify we're at the top of the page
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });
});