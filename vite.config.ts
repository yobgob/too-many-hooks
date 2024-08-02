import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'custom',
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'too-many-hooks',
      fileName: 'too-many-hooks',
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'lodash-es'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lodash-es': '_',
        },
      },
    },
  },
})
