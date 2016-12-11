// @flow
import React from 'react'
import geolib from 'geolib'
import TimeAgo from 'react-native-timeago'
import { connect } from 'react-redux'
import { Dimensions, Navigator } from 'react-native'
import { NavigationBar, Title, View } from '@shoutem/ui'
import CarLocation from './CarLocation'
import LocationRow from './LocationRow'
import SimpleButton from '../SimpleButton'
import { unparkCar } from '../state/parking-spot'
import withCurrentLocation from '../with-current-location'

import type { ParkingSpot } from '../state/parking-spot'
import type { MapRegion } from '../state/map-viewport'

const MileInFeet = 5280

const distanceInWords = (pos1: Object, pos2: Object): string => {
  const distanceInMeters = geolib.getDistance(pos1, pos2)

  const distanceInFeet = geolib.convertUnit('ft', distanceInMeters, 0)
  let distancePhrase = ''

  if (distanceInFeet < MileInFeet / 2) distancePhrase = `${distanceInFeet} feet away`
  else {
    const distanceInMiles = geolib.convertUnit('mi', distanceInMeters, 0)
    const unit = (distanceInMiles === 1) ? 'mile' : 'miles'
    distancePhrase = `${distanceInMiles} ${unit} away`
  }

  return distancePhrase
}


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

  let distance = 'Resolving ...'
  if (props.location)
    distance = distanceInWords(props.location.coords, props.parkedAtCoords)

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
