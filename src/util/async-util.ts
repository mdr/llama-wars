export const fireAndForget = <T>(asyncTask: () => Promise<T>): void => {
  asyncTask()
}
