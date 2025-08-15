
import { createContext, type ComponentChildren } from 'preact';
import { useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

/**
 * Theme context value interface
 */
export type ThemeType = 'light' | 'dark' | 'system';
export interface ThemeContextValue {
    theme: ThemeType;
    // eslint-disable-next-line no-unused-vars
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
    readonly children: ComponentChildren;
}

/**
 * ThemeProvider functional component
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    // Signal for theme state
    const themeSignal = useSignal<ThemeType>('system');

    // Load theme from localStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const stored = window.localStorage.getItem('theme');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (parsed && (parsed === 'light' || parsed === 'dark' || parsed === 'system')) {
                        themeSignal.value = parsed;
                    }
                } catch { /* empty */ }
            }
        }
    }, []);
    useEffect(() => {
        const theme = themeSignal.value;
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            window.localStorage.setItem('theme', JSON.stringify(theme));
        }
        const root = typeof document !== 'undefined' ? document.documentElement : null;
        let appliedTheme = theme;
        if (theme === 'system' && typeof window !== 'undefined') {
            appliedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        if (root) {
            root.setAttribute('data-theme', appliedTheme);
        }
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

