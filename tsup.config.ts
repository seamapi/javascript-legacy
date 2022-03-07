import { defineConfig } from "tsup"
import { cache } from "esbuild-plugin-cache"

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/cli/index.ts",
    "src/cli/entry.ts",
    "src/cli/browser.ts",
  ],
  dts: true,
  sourcemap: true,
  format: ["cjs", "esm"],
  env: {
    NODE_ENV: "production",
  },
  esbuildPlugins: [cache({})],
})
