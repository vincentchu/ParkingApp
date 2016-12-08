// @flow
import React from 'react'
import { Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'

const DefaultGeolocateOptions = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
}

const withCurrentLocation = (Base: typeof React.Component | Function): ReactClass<{}> => {
  return class extends React.Component {
    state = { currentLocation: Object }

    watchId: ?number = null

    constructor(props) {
      super(props)
      this.state = { currentLocation: {} }
    }

    componentWillMount() {
      const getLocationSucc = (currentLocation: Object) => {
        console.log('Got location', currentLocation)
        this.setState({ currentLocation })
      }

      const getLocationFail = (error: Object) => {
        console.log('Failed to get Location', error)
      }

      this.watchId = navigator.geolocation.watchPosition(
        getLocationSucc,
        getLocationFail,
        DefaultGeolocateOptions
      )
    }

    componentWillUnmount() {
      this.watchId && navigator.geolocation.clearWatch(this.watchId)
    }

    render() {
      return (
        <Base currentLocation={this.state.currentLocation} {...this.props} />
      )
    }
  }
}

const MapViewBase = ({ currentLocation }) => {
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
