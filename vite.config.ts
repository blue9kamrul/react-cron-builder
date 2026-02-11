import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'
import path from 'path';

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      // This is the entry point for our library
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'ReactEasyCronBuilder',
      fileName: (format) => `react-easy-cron-builder.${format}.js`
    },
    rollupOptions: {
      // PRO TIP: We make sure to externalize react and react-dom
      // so we don't bundle React inside our library (which would cause huge file sizes)
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});