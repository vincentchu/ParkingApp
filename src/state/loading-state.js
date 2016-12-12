// @flow

const reducer = (
  state: bool = false,
  action: { type: string }
): bool => {
  console.log('RECV', action)
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true

    default:
      return state
  }
}

export default reducer
