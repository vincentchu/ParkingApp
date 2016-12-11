// @flow

export type ParkingSpot = {
  isParked: bool,
  parkedAt: Date,
  address?: string,
}

const InitParkingSpot: ParkingSpot = {
  isParked: false,
  parkedAt: new Date(),
}

const PARK = 'parking-spot/PARK'
const UNPARK = 'parking-spot/UNPARK'
const UPDATE_ADDRESS = 'parking-spot/UPDATE_ADDRESS'

export const reducer = (
  state: ParkingSpot = InitParkingSpot,
  action: { type: string, address?: string }
): ParkingSpot => {
  const { type, address } = action
  console.log('REDUCER', action)

  switch (type) {
    case PARK:
      console.log('CLICKED PARK!')
      return {
        isParked: true,
        parkedAt: new Date(),
      }

    case UNPARK:
      return InitParkingSpot

    case UPDATE_ADDRESS:
      return {
        ...state,
        address,
      }

    default:
      return state
  }
}

export const parkCar = () => {
  console.log('PARK CAR FUNC')
  return { type: PARK }
}

export const unparkCar = () => (
  { type: UNPARK }
)

export const updateAddress = (address: string) => (
  {
    type: UPDATE_ADDRESS,
    address,
  }
)
