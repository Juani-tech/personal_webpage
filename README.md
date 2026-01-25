# Personal Website - Informatics Engineer

A modern, professional personal website built with Next.js, TypeScript, and Tailwind CSS. Features a dark theme, smooth scroll animations, and responsive design.

## 🚀 Features

- **Dark Professional Theme** - Modern dark color scheme with professional gradients
- **Responsive Design** - Fully responsive across all devices
- **Smooth Scroll Animations** - Powered by Framer Motion
- **Professional Sections**:
  - Hero with introduction
  - About with skills and interests
  - Experience timeline
  - Projects portfolio with filtering
  - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal_webpage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Edit the following files to customize with your information:
- `src/components/Hero.tsx` - Update name and introduction
- `src/components/About.tsx` - Personal background and interests
- `src/components/Experience.tsx` - Work experience and education
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Contact.tsx` - Contact information and social links

### Styling
- `tailwind.config.js` - Color scheme and theme customization
- `src/app/globals.css` - Global styles and animations

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npx tsc --noEmit     # Type checking
```

## 📱 Sections

1. **Navigation** - Smooth scroll navigation with mobile menu
2. **Hero** - Professional introduction with call-to-action
3. **About** - Personal background, skills, and interests
4. **Experience** - Timeline of work experience and education
5. **Projects** - Portfolio with filtering and project cards
6. **Contact** - Contact form and social media links

## 🎯 Performance

- Optimized with Next.js Image component
- Lazy loading for animations
- Responsive images and assets
- Minimal bundle size with tree shaking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
