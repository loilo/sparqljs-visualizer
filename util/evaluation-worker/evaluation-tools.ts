import { Parser } from 'sparqljs'
import type { EvaluationResult } from './evaluation-utils'

const parser = new Parser()

export async function evaluate(code: string): Promise<EvaluationResult> {
  if (code.trim().length === 0) {
    return {
      success: true,
      data: null,
    }
  }

  try {
    return {
      success: true,
      data: structuredClone(parser.parse(code) as any),
    }
  } catch (error) {
    return {
      success: false,
      data: (error as any).message,
    }
  }
}
