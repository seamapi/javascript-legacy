import yargs from "yargs"
import { hideBin } from "yargs/helpers"

const parser = yargs(hideBin(process.argv))

const parserWithOptions = parser
  .option("api-key", {
    describe:
      "Seam API key (the environment variable SEAM_API_KEY is used if not provided)",
  })
  .option("quiet", {
    describe: "Hide progress indicators",
    type: "boolean",
  })
  .option("json", {
    describe: "Output JSON",
    type: "boolean",
  })

export default parserWithOptions

export type YargsWithGlobalOptions = typeof parserWithOptions
