import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@views': path.resolve(__dirname, 'src/views')
    }
  },
  server: {
    open: true,
    port: 8080,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',	//实际请求地址
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
