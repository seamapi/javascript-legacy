module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/npm", { npmPublish: true }],
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    ["@semantic-release/github", {
      "assets": [
        {"path": "cli-binaries/seamapi-linux", "label": "seamapi-linux-x64-${nextRelease.gitTag}"},
        {"path": "cli-binaries/seamapi-macos", "label": "seamapi-macos-x64-${nextRelease.gitTag}"},
        {"path": "cli-binaries/seamapi-win.exe", "label": "seamapi-win-x64-${nextRelease.gitTag}.exe"},
      ]
    }],
  ],
}
