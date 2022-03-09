import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
  '@components': path.resolve(__dirname, 'src/components')
  },
  server: {
    open: true,
    port: 8080,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com/',	//实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
