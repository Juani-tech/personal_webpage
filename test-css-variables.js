// Quick verification of CSS variables in browser
console.log('🔍 Testing CSS variable-based theme system...');

const tests = [
  { name: 'Check CSS variables are set', test: async () => {
    const bgPage = getComputedStyle(document.documentElement).getPropertyValue('--bg-page');
    const textPrimary = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
    const bgCard = getComputedStyle(document.documentElement).getPropertyValue('--bg-card');
    
    console.log(`--bg-page: ${bgPage}`);
    console.log(`--text-primary: ${textPrimary}`);
    console.log(`--bg-card: ${bgCard}`);
    
    if (bgPage && textPrimary && bgCard) {
      console.log('✅ CSS variables are properly set');
      return true;
    }
    console.log('❌ CSS variables not found or incomplete');
    return false;
  }},
  { name: 'Check theme toggle button exists', test: async () => {
    const themeToggle = document.querySelector('button[aria-label="Toggle theme"]');
    if (themeToggle) {
      console.log('✅ Theme toggle button found');
      return true;
    }
    console.log('❌ Theme toggle button not found');
    return false;
  }},
  { name: 'Simulate theme toggle', test: async () => {
    const themeToggle = document.querySelector('button[aria-label="Toggle theme"]');
    if (!themeToggle) {
      console.log('❌ Theme toggle button not found');
      return false;
    }
    
    themeToggle.click();
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const newBgPage = computedStyle.getPropertyValue('--bg-page');
    
    console.log('After toggle, --bg-page:', newBgPage);
    
    if (newBgPage === '#ffffff' || newBgPage === '#0f172a') {
      console.log('✅ Theme toggled to light mode');
      return true;
    }
    
    console.log('❌ Theme not in light mode');
    return false;
  }}
];

(async function runTests() {
  console.log('🧪 Starting CSS variable tests...\n');
  
  let passed = 0;
  for (const test of tests) {
    console.log(`\n📋 Test: ${test.name}`);
    const result = await test.test();
    if (result) passed++;
  }
  
  console.log(`\n📊 Results: ${passed}/${tests.length} tests passed`);
  
  if (passed === tests.length) {
    console.log('🎉 All tests passed!');
  } else {
    console.log('⚠️  Some tests failed');
  }
}

runTests().catch(console.error);