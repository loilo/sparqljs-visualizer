// Handle conversion in a worker

import type {
  EvaluationResult,
  EvaluationWorkerResponse,
  WorkerMessage,
} from '@/util/evaluation-worker/evaluation-utils'

export function useEvaluator(input: Ref<string>): Ref<EvaluationResult> {
  if (import.meta.env.SSR) {
    return computed(() => ({ success: true, data: null }))
  }

  const worker = useEvaluationWorkerStore().get()

  function evaluate(code: string) {
    return new Promise<EvaluationResult>(resolve => {
      const id = crypto.randomUUID()

      const stop = useEventListener(
        worker,
        'message',
        (event: MessageEvent<EvaluationWorkerResponse>) => {
          if (event.data?.id !== id) return

          stop()
          resolve(event.data.payload)
        },
      )

      worker.postMessage({
        type: 'evaluate',
        id,
        code,
      } satisfies WorkerMessage)
    })
  }

  const result = asyncComputed(() => evaluate(input.value), {
    success: true,
    data: null,
  })

  return computed(() => result.value)
}
