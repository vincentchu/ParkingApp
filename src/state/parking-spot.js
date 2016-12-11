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
const UPDATE_ADDRESS = 'parking-spot/UPDATE_ADDRESS'

export const reducer = (
  state: ParkingSpot = InitParkingSpot,
  action: { type: string, address?: string }
): ParkingSpot => {
  const { type, address } = action

  switch (type) {
    case PARK:
      return {
        isParked: true,
        parkedAt: new Date(),
      }

    case UPDATE_ADDRESS:
      return {
        ...state,
        address,
      }

    default:
      return state
  }
}

export const parkCar = () => (
  { type: PARK }
)

export const updateAddress = (address: string) => (
  {
    type: UPDATE_ADDRESS,
    address,
  }
)
