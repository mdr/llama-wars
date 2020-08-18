import * as Bluebird from 'bluebird'

export const fireAndForget = <T>(asyncTask: () => Promise<T>): void => {
  asyncTask()
}

export const withTimeout = (timeout: number) => <T>(promise: Promise<T>): Promise<T> =>
  Bluebird.Promise.resolve(promise).timeout(timeout)

export type Resolve<T> = (value?: T | PromiseLike<T>) => void
export type Reject = (reason?: any) => void
