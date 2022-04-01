import { SeamEvent } from "seamapi-types"

type Distribute<EventType> = EventType extends SeamEvent["event_type"]
  ? {
      event_type: EventType
      data: Extract<SeamEvent, { event_type: EventType }>["payload"]
    }
  : never

export type SeamWebhookEvent = Distribute<SeamEvent["event_type"]>
