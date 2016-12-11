// @flow
import React from 'react'
import { Navigator, Text, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import { Button, NavigationBar, Title, Image, Icon, Row, View, Subtitle, Caption, Spinner } from '@shoutem/ui'
import { deltaLat, deltaLong } from '../state/map-viewport'

import type { MapRegion } from '../state/map-viewport'

const CarLocationBase = (props: {
  height: number,
  region: MapRegion
}) => {
  const { height, region } = props

  const regionWithZoom = {
    ...region,
    latitudeDelta: deltaLat,
    longitudeDelta: deltaLong,
  }

  const carLocation = {
    latitude: region.latitude,
    longitude: region.longitude,
  }

  return (
    <View style={{ height: height / 2.5 }}>
      <MapView style={StyleSheet.absoluteFillObject} showsUserLocation initialRegion={regionWithZoom}>
        <MapView.Marker coordinate={carLocation}/>
      </MapView>
    </View>
  )
}

const mapStateToProps = (state: { mapViewport: MapRegion }) => {
  return {
    region: state.mapViewport,
  }
}

const CarLocation = connect(mapStateToProps)(CarLocationBase)

const ParkedCar = (props: { nav: Navigator }) => {
  const onPress = () => props.nav.pop()
  const { height, width } = Dimensions.get('window')

  return (
    <View style={{ flex: 1 }}>
      <CarLocation height={height} />
      <NavigationBar centerComponent={<Title>Car Parked</Title>} />
      <View style={{ flex: 1, padding: 35 }}>
        <Row>
          <Icon name="pin" />
          <View styleName="vertical">
            <Subtitle>
              <Text styleName="multiline">{"2471 Bryant St.\nSan Francisco, CA 94110"}</Text>
            </Subtitle>
          </View>
        </Row>
        <Row>
          <Icon name="ic_events" />
          <View styleName="vertical">
            <Subtitle>Parked 20 Minutes Ago</Subtitle>
          </View>
        </Row>
        <Row>
          <Icon name="ic_books" />
          <View styleName="vertical">
            <Subtitle>3 miles away</Subtitle>
          </View>
        </Row>
        <Row>
          <Spinner size="large" />
        </Row>
      </View>
    </View>
  )
}

export default ParkedCar
