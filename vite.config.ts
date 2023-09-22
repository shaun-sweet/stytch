import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

console.log(path.resolve(__dirname, 'src'));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // root: path.resolve(__dirname, './src'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './web'),
    },
  },
});
