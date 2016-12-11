// @flow
import React from 'react'
import TimeAgo from 'react-native-timeago'
import { connect } from 'react-redux'
import { Dimensions, Navigator } from 'react-native'
import { NavigationBar, Title, View } from '@shoutem/ui'
import CarLocation from './CarLocation'
import LocationRow from './LocationRow'
import distanceInWords from './distance-in-words'
import SimpleButton from '../SimpleButton'
import { unparkCar } from '../state/parking-spot'
import withCurrentLocation from '../with-current-location'

import type { ParkingSpot } from '../state/parking-spot'
import type { MapRegion } from '../state/map-viewport'

const ParkedCar = (props: {
  nav: Navigator,
  unparkCar: Function,
  parkedAtCoords: { latitude: number, longitude: number },
  parkedAt: Date,
  address?: string,
  location: ?Position
}) => {
  const { height } = Dimensions.get('window')
  const onPress = () => {
    props.unparkCar()
    props.nav.pop()
  }

  const distance = props.location ? distanceInWords(props.location.coords, props.parkedAtCoords) : 'Resolving ...'

  return (
    <View style={{ flex: 1 }}>
      <CarLocation height={height} />
      <NavigationBar centerComponent={<Title>Car Parked</Title>} />
      <View style={{ flex: 1, padding: 35 }}>
        <LocationRow icon="pin" text={'2471 Bryant St.\nSan Francisco, CA 94110'} />

        <LocationRow icon="ic_events">
          <TimeAgo time={props.parkedAt} />
        </LocationRow>

        <LocationRow icon="ic_books" text={distance} />

        <SimpleButton icon="left-arrow" text="Set New Parking Spot" onPress={onPress} />
      </View>
    </View>
  )
}

const mapStateToProps = (state: {
  parkingSpot: ParkingSpot,
  mapViewport: MapRegion,
}) => {
  const {
    parkedAt,
    address,
  } = state.parkingSpot


  const parkedAtCoords = {
    latitude: state.mapViewport.latitude,
    longitude: state.mapViewport.longitude,
  }

  return {
    parkedAtCoords,
    parkedAt,
    address,
  }
}


const mapDispatchToProps = { unparkCar }

export default connect(mapStateToProps, mapDispatchToProps)(
  withCurrentLocation(ParkedCar, {}, true)
)
