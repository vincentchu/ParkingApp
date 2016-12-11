// @flow
import React from 'react'
import { Navigator } from 'react-native'
import { Provider } from 'react-redux'
import Routes from './routes'
import reduxStore from './redux-store'
import SetCarLocation from './set-car-location'
import ParkedCar from './parked-car'

const router = (route, nav) => {
  switch (route.name) {
    case Routes.MapView.name:
      return (<SetCarLocation nav={nav} />)

    case Routes.ParkedView.name:
      return (<ParkedCar nav={nav} />)
  }
}

const ParkingApp = () => (
  <Provider store={reduxStore}>
    <Navigator initialRoute={Routes.MapView} style={{ flex: 1 }} renderScene={router} />
  </Provider>
)

export default ParkingApp
