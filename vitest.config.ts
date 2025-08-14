import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';

export default defineConfig({
    root: new URL('.', import.meta.url).pathname,
    plugins: [preact()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/test/setup.ts',
        coverage: {
            reporter: ['text', 'json', 'html'],
            reportsDirectory: './public/coverage',
            exclude: [
                'public',
                '**/assets/**',
                '**/*.d.ts',
                '**/*.test.ts',
                '**/*.stories.tsx',
                '**/index.ts',
                '**/main.tsx',
                '**/app.tsx',
                'eslint.config.js',
                'vite.config.ts',
                'vitest.config.ts'
            ],
        },
    },
});
