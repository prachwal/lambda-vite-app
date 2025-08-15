# Copilot Instructions for `lambda-vite-app`

## Project Architecture & Patterns

- **Framework:** Preact + Vite (see `vite.config.ts`)
- **SPA Structure:** All UI is rendered from `App` (`src/app.tsx`), no routing by default
- **Component System:** Functional components only, organized in `src/components/ComponentName/`
- **State Management:** Preact hooks and signals (`@preact/signals`)
- **Theming:** CSS custom properties in `src/styles/theme.css`, with dark/light/system switching via `ThemeProvider` and `ThemeSwitcher`
- **Styling:**
  - Base styles: `src/styles/styles.css`
  - Component styles: `src/styles/component-styles.css`
  - Theme tokens: `src/styles/theme.css`
- **No business logic/services layer**: All logic is in components
- **No API calls or external data sources**

## Developer Workflows

- **Start dev server:** `npm run dev` (hot reload)
- **Build:** `npm run build` (TypeScript + Vite)
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (ESLint flat config)
- **Type check:** `npm run type-check`
- **Test:** `npm run test` (Vitest + Testing Library)
- **Coverage:** `npm run coverage`
- **Storybook:** `npm run storybook` (Preact + Vite)
- **Build all (CI):** `npm run build:all` or `bash scripts/build-all.sh` (runs lint, type-check, tests, coverage, build, docs)
- **Docs:** `npm run docs` (TypeDoc, config in `typedoc.json`/`tsdoc.json`)

## Key Conventions & Integration

- **TypeScript everywhere** (`tsconfig.app.json`)
- **Component folder structure:**
  - `src/components/ComponentName/ComponentName.tsx`
  - `ComponentName.md` (usage, props, examples)
  - `ComponentName.test.ts[x]` (Vitest)
  - `ComponentName.stories.tsx` (Storybook)
- **All exported symbols, props, and functions must have TSDoc comments**
- **When modifying a component, update docs, tests, and stories in the same folder**
- **Storybook stories must cover all major variants and states**
- **Tests must cover all logic, edge cases, and error handling**
- **Theming:** Use only CSS variables from `theme.css` for colors, spacing, radius, shadow, etc.
- **Accessibility:** All interactive elements must support keyboard navigation, focus, and high contrast

## Example Patterns

```tsx
// src/components/Counter/Counter.tsx
export function Counter() {
  return (
    <div class="card">
      <button class="counter-button" onClick={increment}>
        Count is {counter.value}
      </button>
    </div>
  );
}
```

## Integration Points & External Dependencies

- **Preact:** UI rendering and hooks
- **@preact/signals:** State management
- **Vite:** Build and dev server
- **Vitest + Testing Library:** Unit/integration tests
- **Storybook:** Component documentation and visual testing
- **TypeDoc/TSDoc:** API documentation

## Critical Notes for AI Agents

- Always use the centralized theme tokens and CSS variables for all styles
- Never hardcode colors, spacing, or breakpoints
- All new components must follow the folder and documentation structure
- When updating a component, always update its test and storybook files
- Use only functional components and hooks/signals for state
- No business logic outside components
- Reference `scripts/build-all.sh` for full CI workflow

---

If any section is unclear or missing, please ask for clarification or provide suggestions for improvement.

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
