import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import env from "vite-plugin-env-compatible";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    base: '/SnapSum/',
    plugins: [react(), env({ prefix: "VITE", mountedPath: "process.env" })],
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            404: resolve(__dirname, '404.html'),
          }
        }
      }
      
});