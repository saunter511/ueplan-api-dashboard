import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      'molecules': path.resolve(__dirname, 'src/components/molecules'),
      'pages': path.resolve(__dirname, 'src/components/pages'),
      'utils': path.resolve(__dirname, 'src/utils')
    }
  }
})
