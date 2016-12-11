// @flow
import React from 'react'
import TimeAgo from 'react-native-timeago'
import { connect } from 'react-redux'
import { Dimensions, Navigator, Text } from 'react-native'
import { Icon, NavigationBar, Row, Subtitle, Title, View } from '@shoutem/ui'
import CarLocation from './CarLocation'
import SimpleButton from '../SimpleButton'
import { unparkCar } from '../state/parking-spot'

import type { ParkingSpot } from '../state/parking-spot'

const LocationRow = (props: {
  icon: string,
  text?: string,
  children?: any,
}) => {
  const { icon, text, children } = props

  return (
    <Row>
      <Icon name={icon} />
      <View styleName="vertical">
        <Subtitle>
          { text && <Text styleName="multiline">{text}</Text> }
          { children }
        </Subtitle>
      </View>
    </Row>
  )
}

const ParkedCar = (props: {
  nav: Navigator,
  unparkCar: Function,
  parkedAt: Date,
  address?: string,
}) => {
  const { height } = Dimensions.get('window')
  const onPress = () => {
    props.unparkCar()
    props.nav.pop()
  }

  return (
    <View style={{ flex: 1 }}>
      <CarLocation height={height} />
      <NavigationBar centerComponent={<Title>Car Parked</Title>} />
      <View style={{ flex: 1, padding: 35 }}>
        <LocationRow icon="pin" text={'2471 Bryant St.\nSan Francisco, CA 94110'} />

        <LocationRow icon="ic_events">
          <TimeAgo time={props.parkedAt} />
        </LocationRow>

        <LocationRow icon="ic_books" text={'3 miles away'} />

        <SimpleButton icon="left-arrow" text="Set New Parking Spot" onPress={onPress} />
      </View>
    </View>
  )
}

const mapStateToProps = (state: {
  parkingSpot: ParkingSpot,
}) => {
  const {
    parkedAt,
    address,
  } = state.parkingSpot

  return {
    parkedAt,
    address,
  }
}


const mapDispatchToProps = (
  { unparkCar }
)

export default connect(mapStateToProps, mapDispatchToProps)(ParkedCar)
