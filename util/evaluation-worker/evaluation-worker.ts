// Handle the actual conversion
import { evaluate } from './evaluation-tools'
import { EvaluationWorkerResponse, validateMessage } from './evaluation-utils'

addEventListener('message', async event => {
  const data = event.data
  validateMessage(data)

  const result = await evaluate(data.code)

  postMessage({
    type: 'evaluated',
    payload: result,
    id: data.id,
  } satisfies EvaluationWorkerResponse)
})
