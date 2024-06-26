import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const resolve = (dir: string) => {
  return path.resolve(__dirname, dir);
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue() ],
  server: {
    port: 9527,
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    // 反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      '/api': {
        target: 'http://127.0.0.1:7001', // 通过代理接口访问实际地址。这里是实际访问的地址。vue会通过代理服务器来代理请求
        changeOrigin: true, // 开启跨域
        rewrite: path => {
          return path.replace(/^\/api/, '');
        }, // 去除前缀api
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
});
