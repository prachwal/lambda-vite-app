import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import preact from '@preact/preset-vite';

// Get __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: path.resolve(__dirname, '.'),
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
                '**/*.test.tsx',
                '**/*.stories.tsx',
                '**/index.ts',
                '**/main.tsx',
                '**/app.tsx',
                '**/vite.config.ts',
                '**/vitest.config.ts',
                '**/eslint.config.js',
                '**/.storybook/**',
            ],
        },
    },
});
