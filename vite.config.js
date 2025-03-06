import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        // host: '0.0.0.0', // This binds the server to all IP addresses, including your public IP
        port: 4000, // You can set any port you'd like
        public: '10.63.75.106',
    },
    build: {
        target: 'esnext', // or 'es2020'
      }
});

