import { reduce } from './'

import { LazyIterable } from './shared-types'

export function toArray<T>() {
  return (data: LazyIterable<T>) => {
    return reduce<T[], T>((acc, current) => {
      acc.push(current)
      return acc
    }, [])(data)
  }
}
