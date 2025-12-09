import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import svgr from 'vite-plugin-svgr'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    svgr()
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/vitest.setup.tsx',
    include: [ '**/*.{test,spec}.{js,ts,jsx,tsx}' ],
    exclude: [ ...configDefaults.exclude, 'node_modules', 'dist' ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
})
