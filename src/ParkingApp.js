// @flow
import React from 'react'
import { Navigator, Text } from 'react-native';
import { Provider } from 'react-redux'
import reduxStore from './redux-store'
import SetCarLocation from './SetCarLocation'

const Routes = [
  { title: 'Set Location', index: 0 },
  { title: 'Car Location', index: 1 },
]

const router = (route, nav) => {
  console.log('ROUTE', route)

  switch (route.index) {
    case 0:
      return (<SetCarLocation nav={nav}/>)
    case 1:
      return (<Text>Car location here</Text>)
  }
}

export default class ParkingApp extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Navigator initialRoute={Routes[0]} style={{flex: 1}} renderScene={router} />
      </Provider>
    )
  }
}
