import { render } from 'preact';
import './index.css';
import { App } from './app.tsx';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider.tsx';

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('app')!
);
