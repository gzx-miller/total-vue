/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/total-vue/' : '/',
  plugins: [vue()],
  test: {
    environment: 'jsdom',
  },
})
