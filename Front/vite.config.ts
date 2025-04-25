import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';
import compression from 'vite-plugin-compression';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createHtmlPlugin({}),
    compression(),
    svgLoader()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/translate': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: path => path,
      }
    }
  }
});

