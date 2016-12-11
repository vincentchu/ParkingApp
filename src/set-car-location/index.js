// @flow
import React from 'react'
import { Navigator, Dimensions } from 'react-native'
import { NavigationBar, Title, View } from '@shoutem/ui'
import Routes from '../routes'
import MapSelectorView from './MapSelectorView'
import SimpleButton, { ButtonHeight, ButtonWidth } from '../SimpleButton'

const SetLocationButton = (props: { nav: Navigator }) => {
  const onPress = () => props.nav.push(Routes.ParkedView)
  const { height, width } = Dimensions.get('window')

  const style = {
    position: 'absolute',
    top: height - 2 * ButtonHeight,
    left: (width - ButtonWidth) / 2,
  }

  return (
    <SimpleButton icon="pin" text="Set Car Location" onPress={onPress} style={style} />
  )
}

const SetCarLocation = (props: { nav: Navigator }) => (
  <View style={{ flex: 1 }}>
    <MapSelectorView />
    <NavigationBar centerComponent={<Title>Set Location</Title>} />
    <SetLocationButton nav={props.nav} />
  </View>
)

export default SetCarLocation
