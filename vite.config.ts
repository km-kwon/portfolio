import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === "production" ? "/portfolio/" : "/",
  build: {
    chunkSizeWarningLimit: 760,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;

          if (/[\\/]node_modules[\\/]three[\\/]/.test(id)) {
            return "three-core";
          }

          if (/[\\/]node_modules[\\/]@react-three[\\/]/.test(id)) {
            return "three-react";
          }

          if (/[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/.test(id)) {
            return "react-vendor";
          }

          if (/[\\/]node_modules[\\/]framer-motion[\\/]/.test(id)) {
            return "motion-vendor";
          }

          if (
            /[\\/]node_modules[\\/](react-markdown|remark-|rehype-|unified|unist-|github-slugger)[\\/]/.test(
              id,
            )
          ) {
            return "markdown-vendor";
          }

          return "vendor";
        },
      },
    },
  },
}));
