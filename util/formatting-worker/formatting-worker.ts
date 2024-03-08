// Handle the actual conversion
import { format } from './formatting-tools'
import {
  type FormattingWorkerResponse,
  validateMessage,
} from './formatting-utils'

addEventListener('message', async event => {
  const data = event.data
  validateMessage(data)

  let success = true
  let result = ''
  try {
    console.log('FORMAT', data.code)
    result = await format(data.code)
    console.log('RESULT', result)
  } catch (err) {
    console.error('ERR', err)
    success = false
  }

  postMessage({
    type: 'formatted',
    payload: {
      success,
      result,
    },
    id: data.id,
  } satisfies FormattingWorkerResponse)
})
