// @flow
import React from 'react'
import { Navigator } from 'react-native';
import { Provider } from 'react-redux'
import reduxStore from './redux-store'
import SetCarLocation from './SetCarLocation'

const Routes = [
  { title: 'Set Location', index: 0 },
]

const router = (route, nav) => {
  return (
    <SetCarLocation />
  )
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
