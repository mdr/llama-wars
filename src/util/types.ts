export type Option<T> = T | undefined

export interface Just<T> {
  type: 'just'
  item: T
}

export interface Nothing {
  type: 'nothing'
}

export type Maybe<T> = Just<T> | Nothing

export const toMaybe = <T>(option: Option<T>): Maybe<T> => (option === undefined ? nothing : just(option))

export const toOption = <T>(maybe: Maybe<T>): Option<T> => {
  switch (maybe.type) {
    case 'just':
      return maybe.item
    case 'nothing':
      return undefined
  }
}

export const nothing: Nothing = { type: 'nothing' }
export const just = <T>(item: T): Just<T> => ({
  type: 'just',
  item,
})

export type Pixels = number
