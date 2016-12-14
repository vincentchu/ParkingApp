// @flow

const reducer = (
  state: bool = false,
  action: { type: string }
): bool => {
  console.log('ACTION', action)
  switch (action.type) {
    case 'persist/REHYDRATE':
      console.log('RETURNING TRUE', state)
      return true

    default:
      console.log('RETURNING SAME', state)
      return state
  }
}

export default reducer
