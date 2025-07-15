import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [react()],
  base: '/invitacion/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/variables" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
