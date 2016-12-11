// @flow
import React from 'react'
import { Text, StyleSheet, View, Navigator, NavigatorIOS, TouchableHighlight } from 'react-native';
import { Button, NavigationBar, Title, Row, Icon } from '@shoutem/ui'
import MapView from 'react-native-maps'
import withCurrentLocation from './with-current-location'

const InitRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const MapViewBase = (props: { currentLocation: ?Position }) => {
  let region = {}
  let marker

  if (props.currentLocation) {
    const { coords } = props.currentLocation
    region = {
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

    marker = {
      latitude: coords.latitude,
      longitude: coords.longitude,
    }
  } else {
    region = InitRegion
  }

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView style={StyleSheet.absoluteFillObject} showsUserLocation region={region}>
        { marker && <MapView.Marker coordinate={marker}/>}
      </MapView>
    </View>
  )
}

const MapViewWrapped = withCurrentLocation(MapViewBase)

const Routes = [
  { title: 'Set Location', index: 0 },
]

const renderScene = (route, nav) => {
  return (
    <View style={{flex: 1}}>
      <MapViewWrapped />
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
