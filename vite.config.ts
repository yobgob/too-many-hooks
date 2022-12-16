import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
  appType: 'custom',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'too-many-hooks',
      fileName: 'too-many-hooks',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [dts()],
})
