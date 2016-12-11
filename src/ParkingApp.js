// @flow
import React from 'react'
import { Text, StyleSheet, View, Navigator, NavigatorIOS, TouchableHighlight } from 'react-native';
import { Button, NavigationBar, Title, Row, Icon } from '@shoutem/ui'
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
