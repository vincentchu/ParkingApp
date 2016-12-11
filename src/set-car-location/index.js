// @flow
import React from 'react'
import { Navigator } from 'react-native'
import { NavigationBar, Title, View } from '@shoutem/ui'
import Routes from '../routes'
import MapSelectorView from './MapSelectorView'
import SimpleButton from '../SimpleButton'

const SetLocationButton = (props: { nav: Navigator }) => {
  const onPress = () => props.nav.push(Routes.ParkedView)

  return (
    <SimpleButton icon="pin" text="Set Car Location" onPress={onPress} />
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
