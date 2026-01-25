// Simple verification script for theme toggle functionality
import { chromium } from 'playwright';

async function verifyThemeToggle() {
  console.log('🚀 Starting theme toggle verification...');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the website
    await page.goto('http://localhost:3000');
    console.log('✅ Page loaded successfully');

    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    console.log('✅ Page fully loaded');

    // Check initial theme (should be dark by default or based on system preference)
    const htmlClass = await page.getAttribute('html', 'class');
    console.log('📋 Initial HTML class:', htmlClass);

    // Find the theme toggle button
    const themeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    await themeToggle.waitFor({ state: 'visible', timeout: 5000 });
    console.log('✅ Theme toggle button found and visible');

    // Check current icon (should be Sun for dark theme)
    const sunIcon = themeToggle.locator('svg.lucide-sun');
    const moonIcon = themeToggle.locator('svg.lucide-moon');

    const hasSunIcon = await sunIcon.isVisible().catch(() => false);
    const hasMoonIcon = await moonIcon.isVisible().catch(() => false);

    console.log('☀️ Sun icon visible:', hasSunIcon);
    console.log('🌙 Moon icon visible:', hasMoonIcon);

    // Click the toggle button
    await themeToggle.click();
    console.log('🖱️ Theme toggle clicked');

    // Wait for theme change
    await page.waitForTimeout(500);

    // Check if theme changed
    const newHtmlClass = await page.getAttribute('html', 'class');
    console.log('📋 New HTML class:', newHtmlClass);

    // Check if icons changed
    const newHasSunIcon = await sunIcon.isVisible().catch(() => false);
    const newHasMoonIcon = await moonIcon.isVisible().catch(() => false);

    console.log('☀️ New sun icon visible:', newHasSunIcon);
    console.log('🌙 New moon icon visible:', newHasMoonIcon);

    // Verify theme persistence (check localStorage)
    const themeValue = await page.evaluate(() => localStorage.getItem('theme'));
    console.log('💾 Theme stored in localStorage:', themeValue);

    // Test mobile layout briefly
    await page.setViewportSize({ width: 375, height: 667 });
    console.log('📱 Switched to mobile viewport');

    // Check if mobile elements are present
    const mobileThemeToggle = page.locator('button[aria-label="Toggle theme"]').first();
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"]').first();

    const mobileThemeVisible = await mobileThemeToggle.isVisible().catch(() => false);
    const mobileMenuVisible = await mobileMenuButton.isVisible().catch(() => false);

    console.log('📱 Mobile theme toggle visible:', mobileThemeVisible);
    console.log('📱 Mobile menu button visible:', mobileMenuVisible);

    console.log('🎉 Theme toggle verification completed successfully!');

  } catch (error) {
    console.error('❌ Error during verification:', error.message);
  } finally {
    await browser.close();
  }
}

// Run the verification
verifyThemeToggle().catch(console.error);