import { registerSharedTypeScriptWorker } from "ava-typescript-worker"
import { URL } from "url"
import defaultAxios from "axios"
import knex from "knex"
import path from "path"
import Seam, { AccessCode, Device, ClimateSettingSchedule } from "../../../src"

type SeedLock = {
  connectedAccountId: string
  id1: string
  name1: string
  accessCode: AccessCode
}

type SeedThermostat = {
  connectedAccountId: string
  id1: string
  name1: string
  climateSettingSchedule: ClimateSettingSchedule
}

type SeedNoiseSensors = {
  device_with_quiet_hours: Device<any, "minut">
  device_without_quiet_hours: Device<any, "minut">
  noise_threshold_quiet_hours: {
    noise_threshold_id: string
  }
  noise_threshold_normal_hours: {
    noise_threshold_id: string
  }
}

export type WorkerPublishedMessage = {
  serverUrl: string
  externalDatabaseUrl: string
  seamAdminPassword: string
  seed: {
    apiKey: string
    workspaceId: string
    connectWebviewId: string
    devices: {
      minut: SeedNoiseSensors
      schlageLock: SeedLock
      unmanagedSchlageLock: SeedLock
      augustLock: SeedLock
      nest: SeedThermostat
    }
  }
}

const serverWorker = registerSharedTypeScriptWorker({
  filename: new URL(
    `file:${path.join(__dirname, "../", "workers", "get-server-worker.ts")}`
  ),
})

export const getServer = async (
  writable = false,
  load_devices_from: ("minut" | "schlage" | "august" | "nest")[] = [
    "august",
    "schlage",
    "nest",
  ]
) => {
  const message = serverWorker.publish(
    writable
      ? `GET_WRITABLE_SERVER:${load_devices_from.join(",")}`
      : `GET_READABLE_SERVER:${load_devices_from.join(",")}`
  )

  const reply = await message.replies().next()
  const { serverUrl, externalDatabaseUrl, seed } = reply.value
    .data as WorkerPublishedMessage

  const db = knex(externalDatabaseUrl)

  const client = new Seam({
    apiKey: seed.apiKey,
    endpoint: serverUrl,
  })

  return {
    url: serverUrl,
    client,
    db,
    seed,
    axios: defaultAxios.create({
      baseURL: serverUrl,
      headers: {
        Authorization: `Bearer ${seed.apiKey}`,
      },
    }),
  }
}
