// @flow

export type CarLocation = {
  latitude: number,
  longitude: number,
}

export const UPDATE = 'car-location/UPDATE'

export const reducer = (
  state: ?CarLocation = null,
  action: { type: string, location: CarLocation }
) => {
  const { type, location } = action
  console.log('inReducer', type, location)
  switch (type) {
    case UPDATE:
      return location

    default:
      return state
  }
}

export const setCarLocation = (location: CarLocation) => {
  console.log('HERE', location)
  return {
    type: UPDATE,
    location,
  }
}
