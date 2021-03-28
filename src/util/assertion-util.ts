export const assertNotUndefined: (value: unknown, rationale: string) => asserts value = (value, rationale) => {
  if (value === undefined) {
    throw new Error(`value unexpectedly undefined - rationale was ${rationale}`)
  }
}
