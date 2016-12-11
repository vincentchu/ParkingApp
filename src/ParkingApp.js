// @flow
import React from 'react'
import { Navigator } from 'react-native';
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
      <Navigator initialRoute={Routes[0]} style={{flex: 1}} renderScene={router} />
    )
  }
}
