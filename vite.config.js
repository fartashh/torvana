import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Must match the GitHub Pages repo subpath so asset URLs resolve correctly
  base: '/torvana/',
  plugins: [react()],
})
