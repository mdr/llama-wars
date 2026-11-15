export const assertNotUndefined: (value: unknown, rationale: string) => asserts value = (value, rationale) => {
  if (value === undefined) {
    throw new Error(`value unexpectedly undefined - rationale was ${rationale}`)
  }
}

export const assert: (condition: unknown, message?: string) => asserts condition = (condition, message) => {
  if (!condition) {
    throw new Error(message ?? 'Assertion failed')
  }
}
