// @flow
import React from 'react'
import { Text, StyleSheet, View, NavigatorIOS, TouchableHighlight } from 'react-native';
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

const renderScene = (route, nav) => {
  console.log('nav', nav)
  console.log('navigator', navigator)

  const onPress = () => {
    if (route.index == 0) {
      nav.push(Routes[1])
    } else {
      nav.pop()
    }
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <Text>Hello, {route.title}</Text>
    </TouchableHighlight>
  )
}

const MyScene = (props) => {
  const onPress = () => {
    props.navigator.push(Routes[1])
  }

  console.log('rendering MyScene')
  return (
    <View>
      <TouchableHighlight onPress={onPress}>
        <Text>Hello, World - {props.index}</Text>
      </TouchableHighlight>
    </View>
  )
}

class MyScene2 extends React.Component {
  props: {
    title: string,
    navigator: Object,
    index: number,
  }

  constructor(props, context) {
    super(props, context);
  }

  _onForward = () => {
    this.props.navigator.push(Routes[1]);
  }

  render() {
    return (
      <View style={{ padding: 100 }}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const Routes = [
  { title: 'First Scene', component: MyScene2, passProps: { index: 0 } },
  { title: 'Second Scene', component: MyScene2, passProps: { index: 1 } },
]


export default class ParkingApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={Routes[0]}
        style={{flex: 1}}
      />
    )
  }
}
