import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Exposes the app to the network
    port: 5173,       // You can change this if needed
    strictPort: true, // Ensures the port does not change
  }
})
