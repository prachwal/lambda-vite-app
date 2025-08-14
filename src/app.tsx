import { Counter } from './components/Counter';
import { TechLinks } from './components/TechLinks/TechLinks.tsx';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';

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
      label: 'Preact Guide',
      url: 'https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app',
    },
  ];
}

export function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <Counter />
      <TechLinks links={getTechLinks()} layout="row" />
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
