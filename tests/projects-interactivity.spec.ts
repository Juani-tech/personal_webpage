// spec: specs/theme-layout-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Projects Section Interactivity Tests', () => {
  test('Project Filter Functionality', async ({ page }) => {
    // 1. Navigate to projects section
    await page.goto('/');
    const projectsSection = page.locator('#projects');
    await projectsSection.waitFor();

    // 2. Verify initial project count
    const initialCards = page.locator('#projects .bg-secondary-900\\/50');
    const initialCount = await initialCards.count();
    expect(initialCount).toBeGreaterThan(0);

    // 3. Test category filters
    const filterButtons = page.locator('#projects button');
    const allButton = filterButtons.filter({ hasText: 'All' });
    const fullStackButton = filterButtons.filter({ hasText: 'Full Stack' });

    // Click Full Stack filter
    await fullStackButton.click();

    // Verify filtered results
    const filteredCards = page.locator('#projects .bg-secondary-900\\/50');
    const filteredCount = await filteredCards.count();
    expect(filteredCount).toBeGreaterThan(0);
    expect(filteredCount).toBeLessThanOrEqual(initialCount);

    // 4. Test "Featured Only" toggle
    const featuredButton = page.locator('#projects button').filter({ hasText: 'Featured Only' });
    await featuredButton.click();

    // Verify further filtering
    const featuredCards = page.locator('#projects .bg-secondary-900\\/50');
    const featuredCount = await featuredCards.count();
    expect(featuredCount).toBeLessThanOrEqual(filteredCount);

    // 5. Reset filters
    await allButton.click();
    await featuredButton.click(); // Toggle off

    // Verify all projects are shown again
    const resetCards = page.locator('#projects .bg-secondary-900\\/50');
    const resetCount = await resetCards.count();
    expect(resetCount).toBe(initialCount);
  });

  test('Project Card Interactions', async ({ page }) => {
    // 1. Navigate to projects section
    await page.goto('/');
    const projectsSection = page.locator('#projects');
    await projectsSection.waitFor();

    // 2. Get first project card
    const firstCard = page.locator('#projects .bg-secondary-900\\/50').first();

    // 3. Test hover effects (check that card has hover classes)
    const hasHoverClass = await firstCard.evaluate(el =>
      el.classList.contains('hover:border-primary-500')
    );
    expect(hasHoverClass).toBe(true);

    // 4. Test external links
    const githubLink = firstCard.locator('a').filter({ hasText: 'Code' });
    const demoLink = firstCard.locator('a').filter({ hasText: 'Demo' });

    // Verify links exist
    await expect(githubLink).toBeVisible();
    await expect(demoLink).toBeVisible();

    // Note: We don't click the links as they go to external sites (#)
    // but we verify they have the correct href attributes
    const githubHref = await githubLink.getAttribute('href');
    const demoHref = await demoLink.getAttribute('href');
    expect(githubHref).toBe('#');
    expect(demoHref).toBe('#');
  });
});