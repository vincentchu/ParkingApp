// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Navigator, Dimensions } from 'react-native'
import { NavigationBar, Title, View } from '@shoutem/ui'
import Routes from '../routes'
import MapSelectorView from './MapSelectorView'
import SimpleButton, { ButtonHeight, ButtonWidth } from '../SimpleButton'
import { parkCar } from '../state/parking-spot'

const SetLocationButtonBase = (props: {
  nav: Navigator,
  parkCar: Function,
}) => {
  const { height, width } = Dimensions.get('window')

  const onPress = () => {
    props.parkCar()
    props.nav.push(Routes.ParkedView)
  }

  const style = {
    position: 'absolute',
    top: height - 2 * ButtonHeight,
    left: (width - ButtonWidth) / 2,
  }

  return (
    <SimpleButton icon="pin" text="Set Car Location" onPress={onPress} style={style} />
  )
}

const mapDispatchToProps = () => (
  { parkCar }
)

const SetLocationButton = connect(undefined, mapDispatchToProps)(SetLocationButtonBase)

const SetCarLocation = (props: { nav: Navigator }) => (
  <View style={{ flex: 1 }}>
    <MapSelectorView />
    <NavigationBar centerComponent={<Title>Set Location</Title>} />
    <SetLocationButton nav={props.nav} />
  </View>
)

export default SetCarLocation
