
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace 'portfolio' with your actual repository name if different
  base: '/portfolio/', 
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
});
