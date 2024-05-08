import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'custom',
  plugins: [dts({ insertTypesEntry: true }), react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'too-many-hooks',
      fileName: 'too-many-hooks',
    },
    rollupOptions: {
      external: ['react', 'react-dom', '.storybook'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
