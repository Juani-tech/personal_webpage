# AGENTS.md - Agent Guidelines for personal_webpage

This document provides guidelines for agentic coding assistants working on the personal_webpage project.

## Project Overview

personal_webpage is a personal website project. The codebase is currently empty and being initialized.

## Build, Lint, and Test Commands

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# or
npm start
```

### Build for Production
```bash
npm run build
```

### Lint and Format Code
```bash
npm run lint          # Lint code
npm run lint:fix      # Fix linting issues automatically
npm run format        # Format code
```

### Testing
```bash
npm test                     # Run all tests
npm run test:watch          # Run tests in watch mode
npm test -- path/to/test-file.test.js    # Run single test file
npm run test:coverage       # Run tests with coverage
```

### Type Checking (if using TypeScript)
```bash
npm run typecheck
npx tsc --noEmit
```

## Code Style Guidelines

### File Structure and Organization
```
src/
├── components/     # Reusable UI components
│   ├── ui/        # Basic UI primitives
│   └── layout/    # Layout components
├── pages/         # Page components/routes
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── constants/     # Application constants
├── styles/        # Global styles and theme
└── assets/        # Static assets
```

### Naming Conventions
- **Files**: PascalCase for components (`Button.tsx`), kebab-case for utils (`date-utils.ts`), camelCase for others
- **Variables/Functions**: camelCase (`userName`, `getUserData()`)
- **Components/Types**: PascalCase (`UserProfile`, `ApiResponse`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **CSS Classes**: kebab-case (`user-profile`)

### Imports and Exports
- Import order: React → Third-party → Local imports → Relative imports
- Use absolute imports with `@/` prefix for internal modules
- Group related imports together
- Use barrel exports for cleaner imports

```typescript
// Good import order
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/utils/date-utils';
```

### TypeScript Guidelines
- Define interfaces for complex objects, prefer over type aliases
- Use union types for related values
- Provide default types for generics
- Use try-catch for async operations with meaningful error handling

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

interface SelectProps<T = string> {
  options: Array<{ value: T; label: string }>;
  value: T;
  onChange: (value: T) => void;
}
```

### React Best Practices
- Use functional components with hooks
- Prefer custom hooks for reusable logic
- Keep components small and focused
- Use destructuring for props with default parameters
- Use React.memo, useMemo, useCallback for performance

### Testing Guidelines
- Place tests next to implementation: `Component.test.tsx`
- Test behavior, not implementation details
- Use data-testid for element selection
- Mock external dependencies
- Test error states and edge cases

### Git and Commit Guidelines
- Use conventional commits: `feat: add user authentication`
- Feature branches: `feature/user-authentication`
- Bugfix branches: `bugfix/login-validation`

### Security & Performance
- Never commit secrets or API keys
- Use environment variables for configuration
- Validate and sanitize user inputs
- Optimize images, implement code splitting, lazy loading

## Cursor Rules

*No Cursor rules found in .cursor/rules/ or .cursorrules*

## Copilot Rules

*No Copilot rules found in .github/copilot-instructions.md*

## Additional Notes

- Always run tests before committing changes
- Use Prettier for code formatting
- Follow accessibility best practices (WCAG guidelines)
- Keep dependencies updated and audit for vulnerabilities
- Document complex business logic with comments
- Use semantic HTML elements
- Implement proper error boundaries in React applications

---

*This document should be updated as the project evolves and new patterns emerge.*