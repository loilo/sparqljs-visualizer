import * as formatter from 'sparql-formatter/lib/formatter'
import * as parser from 'sparql-formatter/lib/parser'

export async function format(code: string) {
  return formatter.format(parser.parse(code), 2)
}
