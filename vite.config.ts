import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@sources": path.resolve(__dirname, "./src/sources"),
    },
  },
  plugins: [react()],
});
