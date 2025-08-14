# Copilot Instructions for `lambda-vite-app`

## Project Overview

- **Framework:** Preact + Vite (see `vite.config.ts`)
- **Entry Point:** `src/main.tsx` renders `App` to `#app` element
- **Main Component:** `src/app.tsx` (UI logic, state, and demo interactions)
- **Assets:** SVGs in `src/assets/` and `public/`
- **Styling:** CSS in `src/app.css` and `src/index.css`

## Architecture & Patterns

- **Single-page app**: All UI is rendered from `App` (no routing by default)
- **Functional components only** (no classes)
- **State management:** Preact hooks (`useState`, etc.)
- **No business logic/services layer**: All logic is in components for now
- **No API calls or external data sources**
- **Assets:** Use relative imports for SVGs/images

## Developer Workflows

- **Start dev server:** `npm run dev` (hot reload enabled)
- **Build:** `npm run build` (TypeScript + Vite)
- **Preview production build:** `npm run preview`
- **No test scripts or test files present**

## Conventions & Integration

- **TypeScript everywhere** (see `tsconfig.app.json`)
- **Preact-specific imports:** Use `preact/hooks` for state, `preact` for render
- **Vite SVG imports:** `/vite.svg` from `public/`, others from `src/assets/`
- **No custom ESLint/formatting config detected**
- **No Storybook, SSR, or advanced state management**

## Example Patterns

```tsx
// src/app.tsx
import { useState } from "preact/hooks";
export function App() {
  const [count, setCount] = useState(0);
  // ...UI logic...
}
```

## Key Files

- `src/main.tsx`: App entry, renders `App`
- `src/app.tsx`: Main UI component
- `vite.config.ts`: Vite + Preact integration
- `package.json`: Scripts, dependencies

## Guidance for AI Agents

- Follow Preact functional component patterns
- Use Vite conventions for asset imports
- Keep logic in components (no services/hooks yet)
- Use TypeScript for all new code
- Reference existing file structure for new features

## Component File Organization & Documentation

- Each component must reside in its own subfolder under `src/components/ComponentName/`.
- The subfolder must contain:
  - The main component file (`ComponentName.tsx` or `.ts`)
  - A documentation file (`ComponentName.md`) describing usage, props, and examples
  - A test file (`ComponentName.test.ts[x]`)
  - A Storybook file (`ComponentName.stories.tsx`)
- All `.tsx` and `.ts` files must have full TSDoc documentation for exported symbols, props, and functions.
- When modifying a component, always update the documentation, test, and storybook files in the same subfolder to reflect changes.
- Example structure:
  ```
  src/components/Button/
    Button.tsx
    Button.md
    Button.test.tsx
    Button.stories.tsx
  ```
- Documentation should include:
  - Description of the component and its purpose
  - Props interface with TSDoc comments
  - Usage examples
  - Notes on accessibility and integration
- Storybook stories must cover all major variants and states of the component.
- Tests should cover all logic, edge cases, and error handling for the component.
