import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        ...js.configs?.recommended,
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ['./tsconfig.app.json'],
                sourceType: 'module',
            },
            globals: {
                document: true,
                window: true,
            },
        },
        rules: {
            // Dodaj reguły TypeScript według potrzeb
        },
    },
    {
        files: ['**/*.tsx'],
        plugins: { 'jsx-a11y': jsxA11y },
        rules: {
            ...jsxA11y.configs?.recommended?.rules,
            // Dodaj własne reguły JSX/TSX według potrzeb
        },
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: { import: importPlugin },
        rules: {
            'import/order': 'error',
            'import/no-unresolved': [
                'error',
                {
                    ignore: ['/vite.svg', '@typescript-eslint/parser', './components/Counter'],
                }
            ],
            'import/no-duplicates': 'error',
        },
    },
    {
        files: ['vite.config.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: null,
                sourceType: 'module',
            },
        },
        rules: {},
    },
];