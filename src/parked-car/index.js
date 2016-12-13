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
import { unparkCar, updateAddress } from '../state/parking-spot'
import withCurrentLocation from '../with-current-location'
import reverseGeocode from '../reverse-geocode'
import Routes from '../routes'

import type { ParkingSpot } from '../state/parking-spot'
import type { MapRegion } from '../state/map-viewport'

const ParkedCar = (props: {
  nav: Navigator,
  dispatch: Function,
  parkedAtCoords: { latitude: number, longitude: number },
  parkedAt: Date,
  address?: string,
  location: ?Position,
}) => {
  const { height } = Dimensions.get('window')
  const onPress = () => {
    props.dispatch(unparkCar())
    props.nav.immediatelyResetRouteStack([ Routes.MapView ])
  }

  const distTxt = props.location ? distanceInWords(props.location.coords, props.parkedAtCoords) : 'Resolving ...'
  const addrTxt = props.address || 'Resolving ...'

  return (
    <View style={{ flex: 1 }}>
      <CarLocation height={height} />
      <NavigationBar centerComponent={<Title>Car Parked</Title>} />
      <View style={{ flex: 1, padding: 35 }}>
        <LocationRow icon="pin" text={addrTxt} />

        <LocationRow icon="ic_events">
          <TimeAgo time={props.parkedAt} />
        </LocationRow>

        <LocationRow icon="ic_books" text={distTxt} />

        <SimpleButton icon="left-arrow" text="Set New Parking Spot" onPress={onPress} />
      </View>
    </View>
  )
}

class ParkedCarWithAddressLoading extends React.Component {

  constructor(props) {
    super(props)
    this.state = { latch: !!props.address }
  }

  state: {
    latch: bool,
  }

  componentWillMount() {
    if (!this.state.latch) {
      this.setState({ latch: true })
      reverseGeocode(this.props.parkedAtCoords).then(
        addr => this.props.dispatch(updateAddress(addr))
      )
    }
  }

  props: {
    nav: Navigator,
    dispatch: Function,
    parkedAtCoords: { latitude: number, longitude: number },
    parkedAt: Date,
    address?: string,
    location: ?Position,
  }

  render() {
    return (
      <ParkedCar {...this.props} />
    )
  }
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

export default connect(mapStateToProps)(
  withCurrentLocation(ParkedCarWithAddressLoading, {}, true)
)
