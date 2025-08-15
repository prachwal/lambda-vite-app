/* global console */
import { useContext, useEffect } from 'preact/hooks';

import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import monitorIcon from '../../assets/monitor.svg';
import { ThemeContext } from './ThemeProvider.tsx';

/**
 * ThemeSwitcher: Modern theme toggle button with smooth animations
 * Cycles through light/dark/system themes
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

    // Select appropriate icon
    let icon: string;
    let iconAlt: string;
    if (theme === 'light') {
        icon = sunIcon;
        iconAlt = 'Light theme';
    } else if (theme === 'dark') {
        icon = moonIcon;
        iconAlt = 'Dark theme';
    } else {
        icon = monitorIcon;
        iconAlt = 'System theme';
    }

    const label = `Switch to ${nextTheme} theme (current: ${theme})`;

    return (
        <button
            class="btn btn-ghost theme-switcher-btn"
            aria-label={label}
            title={label}
            onClick={() => {
                setTheme(nextTheme);
                console.debug('[ThemeSwitcher] Switched to:', nextTheme);
            }}
            style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-full)',
                padding: 'var(--space-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-card-bg)',
                border: '1px solid var(--color-border-primary)',
                boxShadow: 'var(--shadow-sm)',
                backdropFilter: 'var(--backdrop-blur)',
                WebkitBackdropFilter: 'var(--backdrop-blur)',
                transition: 'var(--transition-all)',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'scale(1.1) rotate(10deg)';
                target.style.boxShadow = 'var(--shadow-md)';
            }}
            onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'scale(1) rotate(0deg)';
                target.style.boxShadow = 'var(--shadow-sm)';
            }}
            onMouseDown={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'scale(0.95)';
            }}
            onMouseUp={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'scale(1.1) rotate(10deg)';
            }}
        >
            <img
                src={icon}
                alt={iconAlt}
                width={24}
                height={24}
                style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                    transition: 'var(--transition-all)',
                }}
            />
        </button>
    );
}