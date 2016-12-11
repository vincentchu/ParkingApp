// @flow
import React from 'react'
import { Text, StyleSheet, View, Navigator, NavigatorIOS, TouchableHighlight } from 'react-native';
import { Button, NavigationBar, Title, Row, Icon } from '@shoutem/ui'
import MapView from 'react-native-maps'
import withCurrentLocation from './with-current-location'
import MapSelectorView from './MapSelectorView'

const Routes = [
  { title: 'Set Location', index: 0 },
]

const renderScene = (route, nav) => {
  return (
    <View style={{flex: 1}}>
      <MapSelectorView />
      <NavigationBar styleName="fade" centerComponent={<Title>Set Location</Title>} />
      <View style={{position: 'absolute', width: 300, height: 40, top: 200}}>
        <Button styleName="confirmation">
          <Icon name="add-event" />
          <Text>Park Car</Text>
        </Button>
      </View>
    </View>
  )
}

export default class ParkingApp extends React.Component {
  render() {
    return (
      <Navigator initialRoute={Routes[0]} style={{flex: 1}} renderScene={renderScene} />
    )
  }
}
