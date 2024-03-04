import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Specify the host as '0.0.0.0' to listen on all network interfaces
    port: 3000, // Specify the desired port number
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})