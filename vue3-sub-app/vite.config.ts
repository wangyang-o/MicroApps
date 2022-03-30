import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 服务
	server: {
		// 自动打开
		open: true,
		port: 3030,
		// 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
		strictPort: true,
		// proxy: {
		// 	'/': {
		// 		target: `http://localhost:3000`,
		// 		// changeOrigin: true,
		// 		// rewrite: (path) => path.replace(/^\/au/, ''),
		// 	},
		// },
	},
})
