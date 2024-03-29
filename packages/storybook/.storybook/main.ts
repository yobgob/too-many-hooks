import { StorybookConfig } from '@storybook/react-vite'

export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.docs.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  },
} satisfies StorybookConfig
