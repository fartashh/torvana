import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative paths so assets work at any URL depth (GitHub Pages, Vercel, local)
  base: './',
  plugins: [react()],
})
