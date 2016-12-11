// @flow
import React from 'react'
import { Navigator } from 'react-native';
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

export default class ParkingApp extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Navigator initialRoute={Routes.ParkedView} style={{flex: 1}} renderScene={router} />
      </Provider>
    )
  }
}
