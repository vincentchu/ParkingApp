// @flow
import React from 'react'
import { Navigator, Text, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import { Button, NavigationBar, Title, Image, Icon, Row, View, Subtitle, Caption, Spinner } from '@shoutem/ui'
import CarLocation from './CarLocation'
import { deltaLat, deltaLong } from '../state/map-viewport'

import type { MapRegion } from '../state/map-viewport'

const LocationRow = (props: {
  icon: string,
  text: string
}) => {
  const { icon, text } = props

  return (
    <Row>
      <Icon name={icon} />
      <View styleName="vertical">
        <Subtitle>
          <Text styleName="multiline">{text}</Text>
        </Subtitle>
      </View>
    </Row>
  )
}

const ParkedCar = (props: { nav: Navigator }) => {
  const onPress = () => props.nav.pop()
  const { height, width } = Dimensions.get('window')

  return (
    <View style={{ flex: 1 }}>
      <CarLocation height={height} />
      <NavigationBar centerComponent={<Title>Car Parked</Title>} />
      <View style={{ flex: 1, padding: 35 }}>
        <LocationRow icon="pin" text={'2471 Bryant St.\nSan Francisco, CA 94110'} />
        <LocationRow icon="ic_events" text={'Parked 20 minutes ago'} />
        <LocationRow icon="ic_books" text={'3 miles away'} />
        <Row>
          <Spinner size="large" />
        </Row>
      </View>
    </View>
  )
}

export default ParkedCar
