import type { StorybookConfig } from '@storybook/react-vite'

export default {
  stories: ['../src/**/*stories.{ts,tsx}', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Docs',
  },
} satisfies StorybookConfig
