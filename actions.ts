// action types
export const INCREMENT = 'INCREMENT'

export function addCount(num: number) {
  return { type: INCREMENT, num: num }
}