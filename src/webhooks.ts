import { Webhook } from "svix"
import { SeamEvent } from "./types/webhook-events"

/**
 * Parse and verify webhook payloads.
 */
export class SeamWebhook {
  private wh: Webhook

  /**
   * Create a new instance of SeamWebhook.
   * @param secret your webhook secret from the dashboard
   */
  constructor(secret: string) {
    this.wh = new Webhook(secret)
  }

  /**
   * Verify a payload received from a webhook and return the typed event.
   * @param payload must be a string (should not be the parsed JSON object)
   * @param headers request headers (used to verify against the secret)
   * @returns event
   */
  verify(payload: string, headers: Record<string, string>): SeamEvent {
    return this.wh.verify(payload, headers) as SeamEvent
  }
}
