import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command, mode})=>{ 
  const env = loadEnv(mode, process.cwd(), '')
  return{
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '^/baseApi':{
        target:'http://localhost:10000',
        changeOrigin:true,
        rewrite:(path)=> path.replace(/^\/baseApi/, '/api')
      }
    }
    
  }
}})
