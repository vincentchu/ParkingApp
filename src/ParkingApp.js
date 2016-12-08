// @flow
import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'
import withCurrentLocation from './with-current-location'

const MapViewBase = ({ currentLocation }: { currentLocation: Position }) => {
  console.log('Injected with:', currentLocation)
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView style={StyleSheet.absoluteFillObject} />
    </View>
  )
}

const MapViewWrapped = withCurrentLocation(MapViewBase)

export default class ParkingApp extends React.Component {
  render() {
    return (
      <MapViewWrapped />
    )
  }
}
