import { registerSharedWorker } from "ava/plugin"
import { URL } from "url"
import defaultAxios from "axios"
import knex from "knex"
import path from "path"
import Seam from "../../../src"

type SeedLock = {
  connectedAccountId: string
  connectWebviewId: string
  id1: string
  name1: string
}

export type WorkerPublishedMessage = {
  serverUrl: string
  externalDatabaseUrl: string
  seamAdminPassword: string
  seed: {
    apiKey: string
    workspaceId: string
    devices: {
      schlageLock: SeedLock
      smartThingsLock: SeedLock
    }
  }
}

const serverWorker = registerSharedWorker({
  filename: new URL(
    `file:${path.join(__dirname, "../", "workers", "get-server-worker.mjs")}`
  ),
  supportedProtocols: ["ava-4"],
})

export const getServer = async (writable = false) => {
  const message = serverWorker.publish(
    writable ? "GET_WRITABLE_SERVER" : "GET_READABLE_SERVER"
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
