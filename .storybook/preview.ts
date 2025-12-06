import { definePreview } from '@storybook/react-vite'

import addonDocs from '@storybook/addon-docs'
import addonLinks from '@storybook/addon-links'

import 'tailwindcss/tailwind.css'

export default definePreview({
  addons: [addonLinks(), addonDocs()],
  tags: ['autodocs'],
})
