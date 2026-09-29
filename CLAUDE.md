@AGENTS.md

Guidance for Claude Code when working in this repository.

## Stack

**ByteSpace** is an LMS built with:

- Next.js 16 App Router
- React 19 + TypeScript
- Shadcn/Radix UI
- Tailwind CSS v4

## Commands

```bash
pnpm run dev       # Development
pnpm run build     # Production build
pnpm run start     # Start production
pnpm run lint      # ESLint
```

## Structure

```text
src/
├── app/
│   ├── (auth)/          # Auth pages
│   ├── (common)/        # Public pages
│   └── layout.tsx       # Root layout/providers
├── components/
│   ├── ui/              # Shadcn/Radix primitives — do not edit manually
│   ├── layout/          # Header, Footer, etc.
│   └── shared/          # Reusable feature components
└── lib/
    └── utils.ts         # cn() and utilities
```

Use `_components/` for route-specific components. Put reusable components in `src/components/`.

## Forms & Utilities

- Use **Zod** for all forms validation.
- Use Shadcn `Field`, `FieldGroup`, and `FieldError`.
- Use `cn()` for class merging.
- Use `getIconComponent()` for dynamic Lucide icons.
- Root provider: `NextTopLoader`.

## Code Standards

- Always use the **RFC component pattern**.
- Use **kebab-case** for file names.
- Keep code clean, simple, readable, and maintainable.
- Prefer clarity over cleverness.
- Keep functions/components focused on one responsibility.
- Build reusable and composable components.
- Follow Next.js/React best practices.
- Use **Lucide React** for icons only.
- Use `<Link>` for navigation with `cn()` and Shadcn button variants.
- Never use shadows; use borders instead.
- All UI must be responsive and mobile-friendly.
- Avoid unnecessary complexity.

## Styling & Design System

- Use **OKLCH** colors.
- Primary: `oklab(46.415% -0.02792 -0.24816)`
- Secondary: `oklch(92.275% 0.22567 123.037)`
- Support full dark mode.
- **Fonts:** Satoshi for supporting text, Plus poppins for headings; loaded as CSS variables.
- Border radius: 1.5rem for all elements except buttons and inputs, which use 1rem.
- **Do not write manual CSS inside components.**
- Define reusable/custom styles and CSS variables in `global.css`.
- For custom gradients, create a gradient utility class in `global.css` and use that class in components.
