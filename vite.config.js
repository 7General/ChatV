import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 配置中转服务器
    proxy: { //通过代理四号线跨域
       '/path':{
        target:'https://www.baidu.com',// 替换的服务端地址
        changeOrigin:true,// 开启代理，允许跨域
        rewrite:path=>path.replace(/^\/path/,'') // 设置重写路径
       }
    }
  }
})
