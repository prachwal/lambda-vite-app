import { useContext, useEffect } from 'preact/hooks';
import { ThemeContext } from './ThemeProvider';

import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import monitorIcon from '../../assets/monitor.svg';

/**
 * ThemeSwitcher: single toggle icon, cycles through light/dark/system, logs theme changes
 */
export function ThemeSwitcher() {
    const ctx = useContext(ThemeContext);
    if (!ctx) return null;
    const { theme, setTheme } = ctx;

    useEffect(() => {
        // Debug: log theme changes
        console.debug('[ThemeSwitcher] Theme changed:', theme);
    }, [theme]);

    // Cycle order: light -> dark -> system -> light
    let nextTheme: typeof theme;
    if (theme === 'light') {
        nextTheme = 'dark';
    } else if (theme === 'dark') {
        nextTheme = 'system';
    } else {
        nextTheme = 'light';
    }
    let icon;
    if (theme === 'light') icon = sunIcon;
    else if (theme === 'dark') icon = moonIcon;
    else icon = monitorIcon;
    const label = `Switch theme (current: ${theme})`;

    return (
        <button
            aria-label={label}
            title={label}
            onClick={() => {
                setTheme(nextTheme);
                console.debug('[ThemeSwitcher] Switched to:', nextTheme);
            }}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
        >
            <img src={icon} alt={theme + ' theme'} width={28} height={28} />
        </button>
    );
}
