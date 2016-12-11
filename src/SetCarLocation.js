// @flow
import React from 'react'
import MapView from 'react-native-maps'
import { Navigator, Text, StyleSheet, View, Dimensions } from 'react-native';
import { Button, NavigationBar, Title, Icon } from '@shoutem/ui'
import Routes from './routes'
import MapSelectorView from './MapSelectorView'

const buttonWidth = 300
const buttonHeight = 40

const SetLocationButton = ({ nav }) => {
  const { height, width } = Dimensions.get('window')
  const onPress = () => nav.push(Routes.ParkedView)

  const buttonStyle = {
    position: 'absolute',
    width: buttonWidth,
    height: buttonHeight,
    top: height - (2 * buttonHeight),
    left: (width - buttonWidth)/2,
  }

  return (
    <View style={buttonStyle}>
      <Button styleName="confirmation" onPress={onPress}>
        <Icon name="pin" />
        <Text>Set Car Location</Text>
      </Button>
    </View>
  )
}

const SetCarLocation = (props: { nav: Navigator }) => (
  <View style={{flex: 1}}>
    <MapSelectorView />
    <NavigationBar centerComponent={<Title>Set Location</Title>} />
    <SetLocationButton nav={props.nav}/>
  </View>
)

export default SetCarLocation
