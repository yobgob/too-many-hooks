import type { StorybookConfig } from '@storybook/react-vite'

export default {
  stories: ['../src/**/*.stories.{ts,tsx}', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.ts',
      },
    },
  },
  docs: {
    defaultName: 'Docs',
  },
} satisfies StorybookConfig
