import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared-ui': path.resolve(__dirname, 'shared-ui/src')
    }
  },
  server: {
    port: 5174
  }
})
