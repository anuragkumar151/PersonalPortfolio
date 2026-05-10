import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the app to the network
    port: 5174,       // You can change this if needed
    strictPort: true, // Ensures the port does not change
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor_react';
            if (id.includes('react-router-dom')) return 'vendor_router';
            if (id.includes('react-icons')) return 'vendor_icons';
            return 'vendor';
          }
        },
      },
    },
  },
})
