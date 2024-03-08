declare module 'sparql-formatter/lib/parser' {
  declare var parse: (input: string) => any
  export { parse }
}

declare module 'sparql-formatter/lib/formatter' {
  declare var format: (input: any, depth: number) => string
  export { format }
}

declare module 'vue3-json-viewer' {
  declare var JsonViewer: any
  export { JsonViewer }
}
