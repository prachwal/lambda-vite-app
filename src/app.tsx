import { Counter } from './components/Counter';
import { TechLinks } from './components/TechLinks/TechLinks.tsx';
import { ThemeSwitcher } from './components/ThemeProvider/ThemeSwitcher.tsx';
import preactLogo from './assets/preact.svg';
import viteLogo from './assets/vite.svg';

export function getTechLinks() {
  return [
    {
      label: 'API Docs',
      url: '/docs/api/index.html',
    },
    {
      label: 'Coverage Report',
      url: '/coverage/index.html',
    },
    {
      label: 'Storybook',
      url: '/storybook/index.html',
    },
    {
      label: 'Preact Guide',
      url: 'https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app',
    },
  ];
}

export function App() {
  return (
    <div class="app">
      <div class="container">
        {/* Header with logos and theme switcher */}
        <header class="flex items-center justify-center gap-lg" style={{ marginBottom: 'var(--space-2xl)' }}>
          <div class="flex items-center gap-md">
            <a href="https://vite.dev" target="_blank" class="logo-link">
              <img src={viteLogo} class="logo animate-pulse" alt="Vite logo" />
            </a>
            <a href="https://preactjs.com" target="_blank" class="logo-link">
              <img src={preactLogo} class="logo" alt="Preact logo" />
            </a>
          </div>
          <div class="theme-toggle">
            <ThemeSwitcher />
          </div>
        </header>

        {/* Main content */}
        <main class="animate-fade-in">
          <h1 class="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            Vite + Preact
          </h1>

          {/* Counter component */}
          <div class="animate-slide-in-up" style={{ marginBottom: 'var(--space-2xl)' }}>
            <Counter />
          </div>

          {/* Tech links */}
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <TechLinks links={getTechLinks()} layout="row" />
          </div>

          {/* Footer content */}
          <div class="text-center">
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Check out{' '}
              <a
                href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                create-preact
              </a>{' '}
              , the official Preact + Vite starter
            </p>
            <p class="text-muted text-sm">
              Click on the Vite and Preact logos to learn more
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}