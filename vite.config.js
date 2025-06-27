import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
  // 👇 Add this for correct routing in production (Vercel)
  optimizeDeps: {
    include: ['react-router-dom'],
  }
});

  
  
  
  
  
  
  
  
  
  