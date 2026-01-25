// Manual verification of theme toggle functionality
import { chromium } from 'playwright';

async function manualThemeTest() {
  console.log('🧪 Starting manual theme toggle test...');

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('📄 Navigating to website...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    console.log('⏳ Waiting for page to load...');
    await page.waitForTimeout(2000);

    // Check initial state
    const htmlClasses = await page.getAttribute('html', 'classList');
    console.log('🎨 Initial HTML classes:', htmlClasses);

    // Find theme toggle button
    const themeButton = page.locator('button[aria-label="Toggle theme"]').first();
    const isVisible = await themeButton.isVisible();

    if (!isVisible) {
      console.log('❌ Theme toggle button not visible');
      return;
    }

    console.log('✅ Theme toggle button found');

    // Check initial icon
    const sunIcon = themeButton.locator('svg.lucide-sun');
    const moonIcon = themeButton.locator('svg.lucide-moon');

    const hasSun = await sunIcon.isVisible().catch(() => false);
    const hasMoon = await moonIcon.isVisible().catch(() => false);

    console.log(`🌞 Sun icon visible: ${hasSun}`);
    console.log(`🌙 Moon icon visible: ${hasMoon}`);

    // Click toggle
    console.log('🖱️ Clicking theme toggle...');
    await themeButton.click();

    // Wait for change
    await page.waitForTimeout(1000);

    // Check new state
    const newHtmlClasses = await page.getAttribute('html', 'classList');
    console.log('🎨 New HTML classes:', newHtmlClasses);

    // Check new icons
    const newHasSun = await sunIcon.isVisible().catch(() => false);
    const newHasMoon = await moonIcon.isVisible().catch(() => false);

    console.log(`🌞 New sun icon visible: ${newHasSun}`);
    console.log(`🌙 New moon icon visible: ${newHasMoon}`);

    // Check localStorage
    const storedTheme = await page.evaluate(() => localStorage.getItem('theme'));
    console.log('💾 Theme stored in localStorage:', storedTheme);

    console.log('🎉 Manual test completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

manualThemeTest();