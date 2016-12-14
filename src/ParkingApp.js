// @flow

// 2471 Bryant St. (Roughly)
// { latitude: 37.754857081368684, longitude: -122.40911928960485 }

import React from 'react'
import { Navigator } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './routes'
import reduxStore from './redux-store'
import SetCarLocation from './set-car-location'
import ParkedCar from './parked-car'
import Loading from './Loading'

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

const ParkingApp = () => (
  <Provider store={reduxStore}>
    <Navigator initialRoute={Routes.LoadingView} renderScene={router} />
  </Provider>
)

export default ParkingApp
