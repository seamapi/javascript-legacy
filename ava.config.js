module.exports = {
  files: ["tests/**/*.test.ts"],
  extensions: ["ts"],
  require: ["esbuild-runner/register"],
  timeout: "300s",
}
