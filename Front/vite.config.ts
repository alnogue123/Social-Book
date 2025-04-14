import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [vue(), vueDevTools(), createHtmlPlugin({})],
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
        rewrite: path => path
      }
    }
  }
})

