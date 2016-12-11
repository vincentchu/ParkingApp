// @flow
import React from 'react'
import { Navigator } from 'react-native'
import { connect, Provider } from 'react-redux'
import Routes from './routes'
import reduxStore from './redux-store'
import SetCarLocation from './set-car-location'
import ParkedCar from './parked-car'

import type { ParkingSpot } from './state/parking-spot'

const router = (route, nav) => {
  switch (route.name) {
    case Routes.MapView.name:
      return (<SetCarLocation nav={nav} />)

    case Routes.ParkedView.name:
      return (<ParkedCar nav={nav} />)
  }
}

const NavigatorBase = (props: { isParked: bool }) => {
  const initialRoute = props.isParked ? Routes.ParkedView : Routes.MapView

  return (
    <Navigator initialRoute={initialRoute} renderScene={router} />
  )
}

const mapStateToProps = (state: {
  parkingSpot: ParkingSpot,
}) => {
  const isParked = state.parkingSpot.isParked

  return { isParked }
}

const ConnectedNavigator = connect(mapStateToProps)(NavigatorBase)

const ParkingApp = () => (
  <Provider store={reduxStore}>
    <ConnectedNavigator />
  </Provider>
)

export default ParkingApp
