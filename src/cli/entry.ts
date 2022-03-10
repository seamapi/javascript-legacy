#!/usr/bin/env node
import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import { getCLI } from "./index"

getCLI(yargs()).parse(hideBin(process.argv))
