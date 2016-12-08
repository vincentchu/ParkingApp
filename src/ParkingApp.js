// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'

export default class ParkingApp extends React.Component {
  render() {
    return (
      <View style={StyleSheet.absoluteFillObject}>
        <MapView style={StyleSheet.absoluteFillObject} />
      </View>
    )
  }
}
