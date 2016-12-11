// @flow

export type MapRegion = {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}

export const deltaLat = 0.01534
export const deltaLong = 0.00702

const InitialRegion = {
  latitude: 40.78825,
  longitude: -122.4324,
  latitudeDelta: deltaLat,
  longitudeDelta: deltaLong,
}

export const UPDATE = 'map-viewport/UPDATE'

export const reducer = (
  state: MapRegion = InitialRegion,
  action: { type: string, region: MapRegion }
) => {
  const { type, region } = action
  switch (type) {
    case UPDATE:
      return region

    default:
      return state
  }
}

export const updateRegion = (region: MapRegion) => {
  return {
    type: UPDATE,
    region,
  }
}
