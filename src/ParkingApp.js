// @flow
import React from 'react'
import { Navigator, Text } from 'react-native';
import { Provider } from 'react-redux'
import Routes from './routes'
import reduxStore from './redux-store'
import SetCarLocation from './SetCarLocation'

const router = (route, nav) => {
  switch (route.name) {
    case Routes.MapView.name:
      return (<SetCarLocation nav={nav}/>)

    case Routes.ParkedView.name:
      return (<Text>Car location here</Text>)
  }
}

export default class ParkingApp extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Navigator initialRoute={Routes.MapView} style={{flex: 1}} renderScene={router} />
      </Provider>
    )
  }
}
