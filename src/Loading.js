// @flow
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Navigator } from 'react-native'
import { Caption, Heading } from '@shoutem/ui'
import Routes from './routes'

import type { ParkingSpot } from './state/parking-spot'

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Loading = (props: {
  nav: Navigator,
  loadingState: bool,
  isParked: bool,
}) => {
  const { nav, loadingState, isParked } = props

  if (loadingState) {
    console.log('LOADING DONE!', isParked)
    if (isParked)
      nav.push(Routes.ParkedView)
    else
      nav.push(Routes.MapView)
  } else {
    console.log('LOADING STILL IN PROGRESS')
  }

  return (
    <View style={style.container}>
      <Heading>parkd</Heading>
      <Caption>Loading ...</Caption>
    </View>
  )
}

const mapStateToProps = (state: {
  loadingState: bool,
  parkingSpot: ParkingSpot
}) => (
  {
    loadingState: state.loadingState,
    isParked: state.parkingSpot.isParked,
  }
)
export default connect(mapStateToProps)(Loading)
