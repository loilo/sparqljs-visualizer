import type { JsonValue } from 'type-fest'

export type WorkerMessage = {
  id: string
  type: 'evaluate'
  code: string
}

export type EvaluationResult = {
  success: boolean
  data: JsonValue
}

export type EvaluationWorkerResponse = {
  type: 'evaluated'
  payload: EvaluationResult
  id: string
}

export function ensureRecord(
  message: unknown,
): asserts message is Record<string, unknown> {
  if (typeof message !== 'object' || message === null) {
    throw new Error('Invalid message')
  }
}

export function validateMessage(
  message: unknown,
): asserts message is WorkerMessage {
  ensureRecord(message)

  if (typeof message.id !== 'string') {
    throw new Error('Invalid message id')
  }

  if (message.type !== 'evaluate') {
    throw new Error('Invalid message type')
  }

  if (typeof message.code !== 'string') {
    throw new Error('Invalid message payload: code')
  }
}
