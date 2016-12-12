// @flow

// 2471 Bryant St. (Roughly)
// { latitude: 37.754857081368684, longitude: -122.40911928960485 }

import React from 'react'
import { Navigator } from 'react-native'
import { connect, Provider } from 'react-redux'
import Routes from './routes'
import reduxStore from './redux-store'
import SetCarLocation from './set-car-location'
import ParkedCar from './parked-car'
import Loading from './Loading'

import type { ParkingSpot } from './state/parking-spot'

const router = (route, nav) => {
  switch (route.name) {
    case Routes.LoadingView.name:
      return (<Loading nav={nav} />)

    case Routes.MapView.name:
      return (<SetCarLocation nav={nav} />)

    case Routes.ParkedView.name:
      return (<ParkedCar nav={nav} />)
  }
}

const NavigatorBase = (props: { isParked: bool }) => {
  const routeStack = [
    Routes.LoadingView,
    Routes.MapView,
    Routes.ParkedView,
  ]

  return (
    <Navigator initialRoute={Routes.LoadingView} initialRouteStack={routeStack} renderScene={router} />
  )
}

const mapStateToProps = (state: {
  parkingSpot: ParkingSpot,
}) => {
  const isParked = state.parkingSpot.isParked
  console.log('STATE', state)

  return { isParked }
}

const ConnectedNavigator = connect(mapStateToProps)(NavigatorBase)

const ParkingApp = () => (
  <Provider store={reduxStore}>
    <ConnectedNavigator />
  </Provider>
)

export default ParkingApp
