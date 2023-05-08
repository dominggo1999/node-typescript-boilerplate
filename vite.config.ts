/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "./src") }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "my-lib",
      fileName: "my-lib",
    },
  },
  plugins: [tsconfigPaths(), dts()],
  test: {
    globals: true,
  },
});
