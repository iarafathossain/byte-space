# ByteSpace

A learning platform (LMS) frontend where learners discover courses and creators publish them. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4** and **shadcn/ui** (Base UI primitives).

## Getting Started

**Requirements:** Node.js 20+ and [pnpm](https://pnpm.io) 11.

```bash
git clone https://github.com/iarafathossain/byte-space.git
cd byte-space
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production, set the public site URL (used for canonical and social-share links):

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

| Script           | Description                |
| ---------------- | -------------------------- |
| `pnpm run dev`   | Start the dev server       |
| `pnpm run build` | Create a production build  |
| `pnpm run start` | Serve the production build |
| `pnpm run lint`  | Run ESLint                 |

## Pages

| Route                  | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `/`                    | Landing page (hero, courses, learning paths, testimonials…) |
| `/courses`             | Course catalog with search, filters, sorting and pagination |
| `/courses/[slug]`      | Course details with About / Lessons / Reviews tabs          |
| `/creators`            | Searchable creator directory                                |
| `/creators/[slug]`     | Creator profile with their filterable courses               |
| `/sign-in`, `/sign-up` | Auth pages with Zod-validated forms                         |

## Project Structure

```text
src/
├── app/
│   ├── (auth)/            # Sign-in / sign-up (no site header or footer)
│   ├── (common)/          # Public pages (shared header + footer layout)
│   ├── layout.tsx         # Root layout: fonts, SEO metadata, top loader
│   ├── not-found.tsx      # Custom 404
│   └── globals.css        # Design tokens (OKLCH), utilities, gradients
├── assets/                # SVG icons (via SVGR) and images
├── components/
│   ├── ui/                # shadcn/ui primitives — generated, not edited by hand
│   ├── layout/            # Header, footer, mobile navigation
│   └── shared/            # Reusable feature components (cards, filters, empty state…)
├── data/                  # Typed sample data (courses, creators, reviews, navigation…)
└── lib/
    ├── course-filters.ts  # URL filter parsing, filtering, sorting, pagination
    ├── validations/       # Zod schemas
    └── utils.ts           # cn(), formatTimeAgo()
```

## Architecture

- **App Router with route groups.** `(common)` and `(auth)` share URLs at the root but use different layouts, so auth pages render full-screen without the site header.
- **Server Components by default.** Pages and most components render on the server. Client Components (`"use client"`) are small, interactive islands: forms, dropdowns, tabs, the share and follow buttons.
- **URL as state.** Course filters (`q`, `level`, `category`, `price`, `sort`, `page`) live in search params, validated with Zod. Filtered views are shareable and bookmarkable, and the back button works.
- **Static generation where possible.** Course detail pages are pre-rendered with `generateStaticParams`. Listing pages that read search params render on demand.
- **Typed data layer.** All content comes from `src/data`, keeping UI components presentational and making the swap to a real API straightforward.
- **Optimized assets.** Images use `next/image` with static imports; Satoshi (local) and Poppins (Google) load through `next/font` as CSS variables.
- **SEO.** Root metadata with a title template, Open Graph and Twitter cards, and robots rules; each page sets its own title and canonical URL.

## Patterns

- **Composition over duplication.** Shared building blocks such as `SubPageHeader`, `SectionHeading`, `CourseResults`, `EmptyState` and `GridBackground` are composed by pages instead of repeating markup.
- **Variant-driven components.** One component, several looks: `AppButton` (`variant="brand"`, link or button), `AuthForm` (`variant="sign-in" | "sign-up"`), `HappyStudentsCard` (`tone="lime"`).
- **Scoped reuse.** `CourseFilterBar` and `CoursePagination` take a `scope` (base path plus default category), so the same filters drive both `/courses` and creator profiles.
- **Accessible by default.** Semantic landmarks, stretched-link cards, `aria-current` / `aria-pressed` states, screen-reader labels, and keyboard-friendly shadcn primitives.

## Coding Conventions

- **Files:** kebab-case (`course-card.tsx`); route-only components go in a `_components/` folder next to the route, reusable ones in `src/components/`.
- **Components:** React function components with typed props; one responsibility per component.
- **Styling:** Tailwind utility classes only, merged with `cn()`. No inline CSS in components; tokens, custom utilities and gradients are defined in `globals.css`.
- **Design system:** OKLCH color tokens with dark-mode values, 1.5rem radius for surfaces, borders instead of shadows, mobile-first responsive layouts.
- **Forms:** Zod schemas plus shadcn `Field`, `FieldLabel` and `FieldError`.
- **Navigation:** `next/link` styled with `cn()` and shadcn `buttonVariants`.
- **Icons:** Lucide React; brand and design icons are SVGs in `src/assets/icons`.
- **Imports:** external packages first, then `@/` aliases, then relative imports.
