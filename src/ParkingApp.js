// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default class ParkingApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    )
  }
}
