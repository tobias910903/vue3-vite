import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {

    }
  },
  server: {
    // port: 8080,
    // https: false,
    // hotOnly: false,
    // proxy: {
    //   '/api': {
    //     changeOrigin: true, // 是否跨域
    //     target: 'http://127.0.0.1/',
    //   }
    // }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})
