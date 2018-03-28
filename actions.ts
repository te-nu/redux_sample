// action types
export const INCREMENT = 'INCREMENT'

// other
// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */
 
export function addCount(num: number) {
  return { type: INCREMENT, num: num }
}