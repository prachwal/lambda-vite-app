
import { createContext } from 'preact';
import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

/**
 * Theme context value interface
 */
export type ThemeType = 'light' | 'dark' | 'system';
export interface ThemeContextValue {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

/**
 * Theme context for dark/light/system theme switching
 */
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider component for managing theme state and applying CSS variables
 * @param children - React children
 */
interface ThemeProviderProps {
    readonly children: preact.ComponentChildren;
}

/**
 * ThemeProvider functional component
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    // Signal for theme state
    const themeSignal = useSignal<ThemeType>('system');

    // Load theme from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (parsed && (parsed === 'light' || parsed === 'dark' || parsed === 'system')) {
                    themeSignal.value = parsed;
                }
            } catch { }
        }
    }, []);

    // Save theme to localStorage and update DOM
    useEffect(() => {
        const theme = themeSignal.value;
        localStorage.setItem('theme', JSON.stringify(theme));
        const root = document.documentElement;
        let appliedTheme = theme;
        if (theme === 'system') {
            appliedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        root.setAttribute('data-theme', appliedTheme);
    }, [themeSignal.value]);

    const setTheme = (t: ThemeType) => {
        themeSignal.value = t;
    };

    return (
        <ThemeContext.Provider value={{ theme: themeSignal.value, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

