import type { Argv } from "yargs"

export const getParserWithOptions = (yargsInstance: Argv) =>
  yargsInstance
    .option("api-key", {
      describe:
        "Seam API key (the environment variable SEAM_API_KEY is used if not provided)",
      type: "string",
    })
    .option("quiet", {
      describe: "Hide progress indicators",
      type: "boolean",
    })
    .option("json", {
      describe: "Output JSON",
      type: "boolean",
    })
    .option("endpoint", {
      describe: "Seam API Endpoint (defaults to https://connect.getseam.com)",
      hidden: true,
      type: "string",
    })
    .option("workspace-id", {
      describe:
        "Workspace Id to perform action against (only if using session key auth)",
      hidden: true,
      type: "string",
    })
    .group(
      [
        "api-key",
        "endpoint",
        "workspace-id",
        "quiet",
        "json",
        "help",
        "version",
      ],
      "Global Options:"
    )

export type YargsWithGlobalOptions = ReturnType<typeof getParserWithOptions>
type ExtractGeneric<T> = T extends Argv<infer X> ? X : never
export type GlobalOptions = ExtractGeneric<YargsWithGlobalOptions>
