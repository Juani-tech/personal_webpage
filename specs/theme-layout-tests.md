# Personal Website Theme and Layout Tests

## 1. Theme Functionality Tests

### 1.1 Theme Toggle Button Functionality
**Seed:** `tests/theme-toggle.spec.ts`

#### 1.1.1 Toggle from Light to Dark Theme
**Steps:**
1. Navigate to the homepage
2. Ensure the page starts in light theme (no 'dark' class on document element)
3. Click the theme toggle button (Moon icon should be visible)
4. Verify the page switches to dark theme (document element has 'dark' class)
5. Verify the toggle button now shows Sun icon

**Verifications:**
- Page background changes to dark theme colors
- Text colors adjust appropriately
- Theme toggle button icon changes from Moon to Sun
- Theme preference is saved to localStorage as 'dark'

#### 1.1.2 Toggle from Dark to Light Theme
**Steps:**
1. Navigate to the homepage with dark theme active
2. Click the theme toggle button (Sun icon should be visible)
3. Verify the page switches to light theme (no 'dark' class on document element)
4. Verify the toggle button now shows Moon icon

**Verifications:**
- Page background changes to light theme colors
- Text colors adjust appropriately
- Theme toggle button icon changes from Sun to Moon
- Theme preference is saved to localStorage as 'light'

### 1.2 Theme Persistence Tests
**Seed:** `tests/theme-persistence.spec.ts`

#### 1.2.1 Theme Persists Across Page Reloads
**Steps:**
1. Navigate to the homepage
2. Toggle to dark theme and verify it's applied
3. Reload the page
4. Verify the page loads with dark theme maintained

**Verifications:**
- localStorage contains the theme preference
- Page maintains the selected theme after reload

### 1.3 System Theme Preference Detection
**Seed:** `tests/system-theme.spec.ts`

#### 1.3.1 Respects System Dark Preference
**Steps:**
1. Clear localStorage theme preference
2. Mock system preference to dark mode using JavaScript
3. Reload the page
4. Verify the page loads in dark theme

**Verifications:**
- Page detects and applies system dark preference when no manual preference is set

#### 1.3.2 Respects System Light Preference
**Steps:**
1. Clear localStorage theme preference
2. Mock system preference to light mode using JavaScript
3. Reload the page
4. Verify the page loads in light theme

**Verifications:**
- Page detects and applies system light preference when no manual preference is set

## 2. Mobile Layout Tests

### 2.1 Mobile Viewport Tests
**Seed:** `tests/mobile-layout.spec.ts`

#### 2.1.1 Mobile Navigation Menu
**Steps:**
1. Set viewport to mobile size (375x667)
2. Verify navigation menu is collapsed (hamburger menu visible)
3. Click hamburger menu to open mobile navigation
4. Verify mobile menu items are displayed
5. Verify theme toggle button is accessible in mobile view

**Verifications:**
- Navigation properly collapses on mobile
- Mobile menu opens/closes correctly
- Theme toggle works on mobile

#### 2.1.2 Project Cards Layout on Mobile
**Steps:**
1. Set viewport to mobile size (375x667)
2. Scroll to projects section
3. Verify project cards are displayed in single column layout
4. Verify cards fit within viewport width (no horizontal scrolling needed)
5. Verify card content is readable and properly spaced

**Verifications:**
- No horizontal overflow on mobile devices
- Cards stay within viewport boundaries
- Text and interactive elements are accessible

## 3. Interactive Elements Tests

### 3.1 Navigation Functionality
**Seed:** `tests/navigation.spec.ts`

#### 3.1.1 Desktop Navigation Links
**Steps:**
1. Verify all navigation links are visible on desktop
2. Click each navigation link and verify smooth scrolling to sections
3. Test social media links in navigation (GitHub, LinkedIn, Mail)

**Verifications:**
- Navigation links work in both light and dark themes
- Smooth scrolling behavior
- Social links are functional

#### 3.1.2 Mobile Navigation Links
**Steps:**
1. Set viewport to mobile size
2. Open mobile menu
3. Click each navigation link and verify menu closes and scrolls to sections
4. Test social media links in mobile menu

**Verifications:**
- Mobile navigation works correctly
- Menu closes after link clicks

### 3.2 Projects Section Interactivity
**Seed:** `tests/projects-interactivity.spec.ts`

#### 3.2.1 Project Filter Functionality
**Steps:**
1. Navigate to projects section
2. Test each category filter button (All, Full Stack, Web App, etc.)
3. Verify projects are filtered correctly
4. Test "Featured Only" toggle
5. Verify combination of category and featured filters

**Verifications:**
- Filters work in both themes
- Project grid updates correctly
- Filter states are preserved

#### 3.2.2 Project Card Interactions
**Steps:**
1. Hover over project cards
2. Verify hover effects (border color changes, etc.)
3. Click project links (GitHub and Demo)
4. Verify links open in new tabs/windows

**Verifications:**
- Hover effects work in both themes
- External links function properly
- Cards maintain proper styling during interactions