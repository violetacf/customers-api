/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import vitePluginSvgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSvgr({
      include: "**/*.svg?react",
      exclude: [
        "**/assets/backgrounds/**.svg",
        "**/assets/illustrations/**.svg",
      ],
    }),
  ],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/tests/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: {
      $: path.resolve(__dirname, "./src"),
    },
  },
  // Added this server config to avoid CORS errors
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
