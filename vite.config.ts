import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { Component } from "react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      component: `${path.resolve(__dirname, "./src/components")}`,
    },
  },
});
