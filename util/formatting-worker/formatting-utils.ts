export type WorkerMessage = {
  id: string
  type: 'format'
  code: string
}

export type FormattingResult = {
  success: boolean
  result: string
}

export type FormattingWorkerResponse = {
  type: 'formatted'
  payload: FormattingResult
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

  if (message.type !== 'format') {
    throw new Error('Invalid message type')
  }

  if (typeof message.code !== 'string') {
    throw new Error('Invalid message payload: code')
  }
}
