# Next.js Coding Standards

This document defines the coding standards and best practices for building applications with Next.js.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Naming Conventions](#naming-conventions)
3. [Code Style](#code-style)
4. [Component Architecture](#component-architecture)
5. [State Management](#state-management)
6. [Data Fetching](#data-fetching)
7. [Styling](#styling)
8. [Icons](#icons)
9. [TypeScript](#typescript)
10. [Error Handling](#error-handling)
11. [Testing](#testing)
12. [Performance](#performance)
13. [Security](#security)

---

## Project Structure

```
project/
├── app/                      # App Router (Next.js 13+)
│   ├── (auth)/              # Route groups
│   ├── (dashboard)/
│   ├── api/                 # API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── layout/              # Layout components
│   └── features/            # Feature-specific components
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── stores/                  # State management (Zustand, etc.)
├── types/                   # TypeScript type definitions
├── constants/               # Application constants
├── config/                  # Configuration files
├── public/                  # Static assets
└── tests/                   # Test files
```

---

## Naming Conventions

### Files and Folders

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `UserProfile.tsx` |
| Hooks | camelCase with `use` prefix | `useAuth.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRIES.ts` |
| Types/Interfaces | PascalCase | `UserResponse.ts` |
| Route Groups | lowercase with parentheses | `(auth)/` |

### Code

```typescript
// Components - PascalCase
const UserProfile = () => { ... }

// Variables/functions - camelCase
const userData = { ... }
const fetchUser = async () => { ... }

// Constants - UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com'

// Types/Interfaces - PascalCase
interface UserProps { ... }
type ApiResponse<T> = { ... }

// Private members - leading underscore
const _internalHelper = () => { ... }
```

---

## Code Style

### General Rules

- Use **2 spaces** for indentation
- Maximum line length: **100 characters**
- Use **single quotes** for strings
- Always use **semicolons**
- Use **trailing commas** in multi-line objects/arrays

```typescript
// ✅ Good
const user = {
  name: 'John',
  age: 30,
};

// ❌ Bad
const user = {
  name: "John",
  age: 30
}
```

### Imports

```typescript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Next.js imports
import Link from 'next/link';
import { useRouter } from 'next/router';

// 3. Third-party imports
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

// 4. Internal imports (absolute paths)
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

// 5. Type imports
import type { User } from '@/types/user';

// 6. Style imports
import styles from './Component.module.css';
```

### Functions

```typescript
// Use arrow functions for consistency
const fetchData = async (id: string) => {
  const response = await fetch(`/api/data/${id}`);
  return response.json();
};

// Early returns for guard clauses
const processUser = (user: User | null) => {
  if (!user) return null;
  if (!user.isActive) return null;
  
  return { ...user };
};
```

---

## Component Architecture

### Component Structure

```typescript
'use client'; // If client component

import React from 'react';

// Types
interface Props {
  name: string;
  age?: number;
}

// Component
export const UserProfile: React.FC<Props> = ({ name, age = 0 }) => {
  // Hooks at the top
  const [state, setState] = useState('');
  
  // Event handlers
  const handleClick = () => { ... };
  
  // Render
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
```

### Server vs Client Components

```typescript
// ✅ Server Component (default)
// - Fetch data directly
// - No useState, useEffect, onClick
export default async function Page() {
  const data = await fetch('...');
  return <div>{data}</div>;
}

// ✅ Client Component (when interactivity needed)
'use client';

export default function Page() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

### Component Composition

```typescript
// ✅ Good - Small, focused components
const UserProfile = () => (
  <Card>
    <Avatar />
    <UserInfo />
    <ActionButtons />
  </Card>
);

// ❌ Bad - Monolithic component
const UserProfile = () => {
  // 200 lines of mixed logic and JSX
};
```

---

## State Management

### Local State

```typescript
const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);
```

### Server State (React Query / SWR)

```typescript
// Using SWR
import useSWR from 'swr';

const { data, error, isLoading } = useSWR('/api/user', fetcher);
```

### Global State (Zustand)

```typescript
// stores/useAuthStore.ts
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
```

---

## Data Fetching

### Server Components

```typescript
// app/page.tsx
export default async function Page() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store', // or 'force-cache', 'default'
  });
  const data = await res.json();
  
  return <div>{data}</div>;
}
```

### Client Components (SWR)

```typescript
'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function UserProfile() {
  const { data, error } = useSWR('/api/user', fetcher);
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  
  return <div>{data.name}</div>;
}
```

---

## Styling

### React Bootstrap with Sass (Recommended)

```typescript
// components/Button.tsx
import { Button as BootstrapButton } from 'react-bootstrap';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick 
}) => (
  <BootstrapButton 
    variant={variant} 
    size={size}
    onClick={onClick}
    className="custom-button"
  >
    {children}
  </BootstrapButton>
);
```

```scss
// components/Button.scss
.custom-button {
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  &.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
  }
}
```

### Sass Setup

```scss
// styles/_variables.scss
$primary: #667eea;
$secondary: #764ba2;
$success: #48bb78;
$danger: #f56565;
$font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
$border-radius: 0.375rem;
$spacer: 1rem;

// styles/_mixins.scss
@mixin responsive-font($min, $max) {
  font-size: clamp($min, $min + 0.5vw, $max);
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin breakpoint($point) {
  @if $point == 'sm' {
    @media (min-width: 576px) { @content; }
  } @else if $point == 'md' {
    @media (min-width: 768px) { @content; }
  } @else if $point == 'lg' {
    @media (min-width: 992px) { @content; }
  } @else if $point == 'xl' {
    @media (min-width: 1200px) { @content; }
  }
}

// styles/globals.scss
@import 'variables';
@import 'mixins';
@import 'bootstrap/scss/bootstrap';

// Custom overrides
body {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```typescript
// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### CSS Modules

```typescript
// Component.module.scss
.card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @include breakpoint(md) {
    padding: 2rem;
  }
}

// Component.tsx
import styles from './Component.module.scss';

<div className={styles.card}>Content</div>
```

### Class Variance Authority (CVA)

```typescript
import { cva } from 'class-variance-authority';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      success: 'btn-success',
      danger: 'btn-danger',
    },
    size: {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

<button className={buttonVariants({ variant: 'primary', size: 'lg' })} />
```

### Tailwind CSS (Alternative)

```typescript
const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    {children}
  </button>
);
```

---

## Icons

### Lucide React (Recommended)

This project uses [Lucide React](https://lucide.dev) for icons. Lucide provides a beautiful, consistent set of open-source icons.

#### Installation

```bash
npm install lucide-react
# or
yarn add lucide-react
```

#### Basic Usage

```typescript
import { Search, User, Settings, ChevronDown } from 'lucide-react';

const Component = () => (
  <div>
    <Search size={20} />
    <User className="text-blue-500" />
    <Settings strokeWidth={1.5} />
  </div>
);
```

#### Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon width and height in pixels |
| `color` | `string` | `currentColor` | Icon stroke color |
| `strokeWidth` | `number` | `2` | Stroke width in pixels |
| `className` | `string` | - | CSS class for additional styling |
| `onClick` | `function` | - | Click event handler |

#### Best Practices

```typescript
// ✅ Good - Consistent sizing with Tailwind
import { Search } from 'lucide-react';

<Search className="w-5 h-5" />
<Search className="w-6 h-6 text-gray-500" />

// ✅ Good - Using size prop for custom sizes
<Search size={16} />
<Search size={24} className="text-primary" />

// ✅ Good - Wrapping in buttons with proper accessibility
<button aria-label="Search">
  <Search size={20} />
</button>

// ✅ Good - Consistent icon button pattern
const IconButton = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="p-2 hover:bg-gray-100 rounded"
  >
    <Icon size={20} />
  </button>
);

// ❌ Bad - Inconsistent sizes
<Search size={17} />
<Search size={23} />

// ❌ Bad - Inline styles for coloring
<Search style={{ color: 'blue' }} />
```

#### Common Icon Patterns

```typescript
import {
  // Navigation
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  
  // Actions
  Search,
  Edit,
  Delete,
  Plus,
  X,
  Check,
  
  // Status
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  
  // UI
  Settings,
  Menu,
  MoreVertical,
  ExternalLink,
  Download,
  Upload,
  
  // User
  User,
  LogOut,
  LogIn,
} from 'lucide-react';
```

#### Icon Button Component

```typescript
// components/ui/IconButton.tsx
import { LucideIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const iconButtonVariants = cva('inline-flex items-center justify-center rounded-md transition-colors', {
  variants: {
    variant: {
      ghost: 'hover:bg-gray-100',
      primary: 'bg-primary text-white hover:bg-primary/90',
      outline: 'border border-gray-300 hover:bg-gray-50',
    },
    size: {
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3',
    },
  },
  defaultVariants: {
    variant: 'ghost',
    size: 'md',
  },
});

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: LucideIcon;
  label: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  variant,
  size,
  className,
  ...props
}) => (
  <button
    aria-label={label}
    title={label}
    className={iconButtonVariants({ variant, size, className })}
    {...props}
  >
    <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
  </button>
);
```

#### Accessibility Guidelines

- Always provide `aria-label` or `aria-labelledby` for icon-only buttons
- Use `role="img"` with `aria-label` for decorative icons
- Ensure sufficient color contrast (4.5:1 minimum)
- Test with screen readers

```typescript
// Icon-only button
<button aria-label="Close modal">
  <X size={20} />
</button>

// Icon with text
<button>
  <Download className="mr-2" size={16} />
  Download
</button>

// Decorative icon
<div role="img" aria-label="Success">
  <CheckCircle className="text-green-500" />
</div>
```

---

## TypeScript

### Strict Mode

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Type Definitions

```typescript
// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export type UserRole = 'admin' | 'user' | 'guest';
```

### Props Typing

```typescript
interface Props {
  title: string;
  count?: number;
  onClick: () => void;
  children: React.ReactNode;
}

export const Component: React.FC<Props> = ({ title, count, onClick, children }) => {
  return (
    <div onClick={onClick}>
      <h1>{title}</h1>
      {count && <span>{count}</span>}
      {children}
    </div>
  );
};
```

---

## Error Handling

### Try-Catch Blocks

```typescript
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
```

### Error Boundaries

```typescript
// components/ErrorBoundary.tsx
'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }
    return this.props.children;
  }
}
```

---

## Testing

### Jest + React Testing Library

```typescript
// __tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Playwright (E2E)

```typescript
// tests/e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Home/);
});
```

---

## Performance

### Optimization Techniques

```typescript
// Lazy loading
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});

// Memoization
const MemoizedComponent = memo(Component);
const expensiveValue = useMemo(() => compute(a, b), [a, b]);
const handleClick = useCallback(() => { ... }, [deps]);

// Image optimization
import Image from 'next/image';
<Image src="/img.jpg" alt="Description" width={500} height={300} priority />
```

### Bundle Analysis

```bash
# Analyze bundle size
yarn build
npx next-bundle-analyzer
```

---

## Security

### Best Practices

```typescript
// ✅ Sanitize user input
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);

// ✅ Use environment variables
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// ✅ Validate with Zod
import { z } from 'zod';
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

// ❌ Never expose secrets in client code
// process.env.SECRET_KEY (without NEXT_PUBLIC_ prefix)
```

### Headers

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};
```

---

## Git Conventions

### Commit Messages

```
feat: add user authentication
fix: resolve login redirect issue
docs: update README with setup instructions
style: format code with prettier
refactor: extract user validation logic
test: add unit tests for auth service
chore: update dependencies
```

### Branch Naming

```
feature/user-auth
fix/login-bug
hotfix/security-patch
release/v1.0.0
```

---

## Recommended Tools

### Extensions

- ESLint
- Prettier
- TypeScript
- Sass/SCSS IntelliSense
- Bootstrap 5 Quick Snippets

### Libraries

| Purpose | Library |
|---------|---------|
| UI Framework | React Bootstrap |
| Styling | Sass/SCSS |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| State | Zustand / Jotai |
| Data Fetching | SWR / TanStack Query |
| Class Utilities | class-variance-authority |
| Dates | date-fns / dayjs |
| HTTP | Axios / fetch |

---

## Checklist Before PR

- [ ] Code follows naming conventions
- [ ] Components are properly typed
- [ ] Tests pass locally
- [ ] No console.log in production code
- [ ] Images are optimized
- [ ] Accessibility checked (a11y)
- [ ] Responsive design verified
- [ ] Environment variables documented

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
