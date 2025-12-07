import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// Server restart trigger
export default defineConfig({
  plugins: [react()],
})
