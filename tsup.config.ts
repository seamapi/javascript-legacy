import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/cli/**/*.ts"],
  dts: true,
  sourcemap: true,
  format: ["cjs", "esm"],
  env: {
    NODE_ENV: "production",
  },
})
