import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  sourcemap: true,
  format: ["cjs"],
  // esbuildOptions: (options) => {
  //   options.banner = {
  //     js: `import { createRequire as topLevelCreateRequire } from 'module';\n const require = topLevelCreateRequire(import.meta.url);`
  //   }
  // }
})
