#!/bin/bash
set -e

# Clean output directories
rm -rf dist public/storybook public/coverage public/docs/api

# Lint
npm run lint

# Type check
npm run type-check

# Test & coverage
npm run test
npm run coverage

# Build app
npm run build

# Build Storybook static
npm run build-storybook

# Build API docs
npm run docs

echo "Build complete: app, storybook, coverage, docs."
