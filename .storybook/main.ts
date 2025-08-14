import type { StorybookConfig } from '@storybook/preact-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/preact-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  staticDirs: [],
};

export default config;