import { render } from 'preact';
import { App } from './app.tsx';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider.tsx';

import './styles/theme.css';
import './styles/styles.css';
import './styles/component-styles.css';

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('app')!
);
