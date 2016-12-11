// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'
import withCurrentLocation from './with-current-location'

const deltaLat = 0.01534
const deltaLong = 0.00702

const InitRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: deltaLat,
  longitudeDelta: deltaLong,
}

class MapViewBase extends React.Component {
  props: {
    location?: Position,
  }

  state: {
    region?: {
      latitude: number,
      longitude: number,
      latitudeDelta: number,
      longitudeDelta: number,
    },
    middle?: {
      latitude: number,
      longitude: number,
    },
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    const location = nextProps.location
    if (location) {
      const coords = location.coords
      const region = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: deltaLat,
        longitudeDelta: deltaLong,
      }

      this.setState({
        region,
        middle: coords,
      })
    }
  }

  regionUpdated = (region: {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
  }) => {
    // const latitude = (region.latitude + region.latitudeDelta) / 2
    // const longitude = (region.longitude + region.longitudeDelta) / 2
    //
    // this.setState({
    //   middleOfRegion: {
    //     latitude: latitude,
    //     longitude: longitude,
    //   }
    // })
  }

  render() {
    const region = this.state.region || InitRegion
    const middle = this.state.middle

    return (
      <MapView style={StyleSheet.absoluteFillObject} showsUserLocation region={region} onRegionChange={this.regionUpdated}>
        { middle && <MapView.Marker coordinate={middle}/>}
      </MapView>
    )
  }
}

export default withCurrentLocation(MapViewBase)
