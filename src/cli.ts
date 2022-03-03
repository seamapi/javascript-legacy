#!/usr/bin/env node
import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import ora from "ora"
import { paramCase } from "change-case"
import Seam, { SeamAPIError } from "."

const parser = yargs(hideBin(process.argv))

const executeCommand = async (
  methodName: string,
  args: any[],
  executeArgs: { json?: boolean; quiet?: boolean }
) => {
  const displaySpinner = !(executeArgs.quiet || executeArgs.json)

  const spinner = displaySpinner
    ? ora(
        methodName
          .split(".")
          .map((v) => paramCase(v))
          .join(".")
      ).start()
    : undefined

  const seam = new Seam()

  let method: any = seam
  for (const path of methodName.split(".")) {
    method = method[path]
  }

  try {
    const result = await method(...args)
    spinner?.succeed()

    if (executeArgs.json) {
      console.log(JSON.stringify(result, null, 2))
    } else {
      console.log(result)
    }
  } catch (error) {
    let message = "Unknown error"
    if (error instanceof SeamAPIError) {
      message = `${error.name} (HTTP ${error.status}): ${error.message}`
    } else if (error instanceof Error) {
      message = error.message
    }
    spinner?.fail(message)
    process.exit(1)
  }
}

parser
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
  .command(
    "connected-accounts",
    "interact with connected accounts",
    (yargs) => {
      yargs
        .command(
          "list",
          "list connected accounts",
          () => {},
          async (argv) => {
            await executeCommand("connectedAccounts.list", [], argv)
          }
        )
        .command(
          "get <id>",
          "get a connected account",
          (yargs) => {
            return yargs.positional("id", {
              describe: "the connected account ID",
              demandOption: true,
            })
          },
          async (argv) => {
            await executeCommand("connectedAccounts.get", [argv.id], argv)
          }
        )
    }
  )
  .command("action-attempts", "interact with action attempts", (yargs) => {
    yargs.command(
      "get <id>",
      "get an action attempt",
      (yargs) => {
        return yargs.positional("id", {
          describe: "the action attempt ID",
          demandOption: true,
        })
      },
      async (argv) => {
        await executeCommand("actionAttempts.get", [argv.id], argv)
      }
    )
  })
  .parse()
