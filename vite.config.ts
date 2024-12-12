import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import env from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
    base: process.env.GITHUB_PAGES
    ? "SnapSum"
    : "./",
    plugins: [react(), env({ prefix: "VITE", mountedPath: "process.env" })],
});