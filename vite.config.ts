import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    eslintPlugin({
      cache: false,
      include: [
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
      ],
      exclude: [],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.js',
  },
})
