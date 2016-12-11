// @flow
import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps'
import { connect } from 'react-redux'
import withCurrentLocation from './with-current-location'
import { updateRegion } from './state/map-viewport'

import type { MapRegion } from './state/map-viewport'
//
// const deltaLat = 0.01534
// const deltaLong = 0.00702
//
// const InitRegion = {
//   latitude: 40.78825,
//   longitude: -122.4324,
//   latitudeDelta: deltaLat,
//   longitudeDelta: deltaLong,
// }
//
// class MapViewBase extends React.Component {
//   props: {
//     dispatch: Function,
//     carLocation: ?CarLocation,
//     location?: Position,
//   }
//
//   state: {
//     region: {
//       latitude: number,
//       longitude: number,
//       latitudeDelta: number,
//       longitudeDelta: number,
//     },
//   }
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       region: InitRegion,
//     }
//   }
//
//   componentWillReceiveProps(nextProps) {
//     const location = nextProps.location
//
//     if (location) {
//       const region = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//         latitudeDelta: deltaLat,
//         longitudeDelta: deltaLong,
//       }
//
//       // n.b.: This fixes a weird UI issue; if setState isn't called
//       // in a setTimeout, then the pin will not render when the current location
//       // is obtained. I think that calling setTimeout allows the view to "stutter"
//       // a bit, causing the pin to render.
//       setTimeout(() => {
//         this.setState({ region })
//       }, 0)
//
//       this.props.dispatch(setCarLocation({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       }))
//     }
//   }
//
//   regionUpdated = (region) => {
//     this.setState({ region })
//     // this.props.dispatch(setCarLocation({
//     //   latitude: region.latitude,
//     //   longitude: region.longitude,
//     // }))
//   }
//
//   render() {
//     const region = this.state.region
//     const middle = {
//       latitude: region.latitude,
//       longitude: region.longitude,
//     }
//
//     return (
//       <MapView style={StyleSheet.absoluteFillObject} showsUserLocation region={region} onRegionChange={this.regionUpdated}>
//         { middle && <MapView.Marker coordinate={middle}/>}
//       </MapView>
//     )
//   }
// }

const MapViewBase = (props: {
  dispatch: Function,
  mapViewport: MapRegion,
  location?: Position,
}) => {
  const { dispatch, mapViewport, location } = props

  const middle = {
    latitude: mapViewport.latitude,
    longitude: mapViewport.longitude,
  }

  const viewportUpdated = (region) => {
    console.log('updated viewport', region)
    dispatch(updateRegion(region))
  }

  return (
    <MapView style={StyleSheet.absoluteFillObject} showsUserLocation region={mapViewport} onRegionChange={viewportUpdated}>
      <MapView.Marker coordinate={middle}/>
    </MapView>
  )
}

const mapStateToProps = (state: { mapViewport: MapRegion }) => {
  return { mapViewport: state.mapViewport }
}

class UpdateWithCurrentLocation extends React.Component {
  componentWillMount() {
    const getLocationSucc = (location: Position) => {
      const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01534,
        longitudeDelta: 0.00702,
      }

      this.props.dispatch(updateRegion(region))

      // n.b.: This fixes a weird UI issue; if setState isn't called
      // in a setTimeout, then the pin will not render when the current location
      // is obtained. I think that calling setTimeout allows the view to "stutter"
      // a bit, causing the pin to render.
      setTimeout(() => {
        this.props.dispatch(updateRegion(region))
      }, 0)
    }

    navigator.geolocation.getCurrentPosition(
      getLocationSucc,
      undefined,
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 1000
      }
    )
  }

  render () {
    return (
      <MapViewBase {...this.props} />
    )
  }
}

export default connect(
  mapStateToProps,
)(UpdateWithCurrentLocation)
