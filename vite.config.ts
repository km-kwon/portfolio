import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const normalizeBasePath = (basePath: string) => {
  if (!basePath || basePath === "/") return "/";
  return `/${basePath.replace(/^\/+|\/+$/g, "")}/`;
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    base: normalizeBasePath(env.VITE_BASE_PATH ?? "/"),
  };
});
