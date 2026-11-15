export const fireAndForget = <T>(asyncTask: () => Promise<T>): void => {
  // noinspection JSIgnoredPromiseFromCall
  asyncTask()
}

export class TimeoutError extends Error {
  constructor(timeout: number) {
    super(`operation timed out after ${timeout}ms`)
    this.name = 'TimeoutError'
  }
}

export const withTimeout =
  (timeout: number) =>
  <T>(promise: Promise<T>): Promise<T> =>
    new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => reject(new TimeoutError(timeout)), timeout)
      promise.then(
        (value) => {
          clearTimeout(timer)
          resolve(value)
        },
        (error) => {
          clearTimeout(timer)
          reject(error)
        },
      )
    })

export type Resolve<T> = (value: T | PromiseLike<T>) => void
export type Reject = (reason?: any) => void
