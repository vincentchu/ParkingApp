// @flow
import React from 'react'
import MapView from 'react-native-maps'
import { connect } from 'react-redux'
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import { Button, NavigationBar, Title, Icon } from '@shoutem/ui'
import MapSelectorView from './MapSelectorView'

const buttonWidth = 300
const buttonHeight = 40

const SetLocationButton = ({ onPress, nav }) => {
  const { height, width } = Dimensions.get('window')

  const onPress2 = () => nav.push({ title: 'Car Location', index: 1 })

  const buttonStyle = {
    position: 'absolute',
    width: buttonWidth,
    height: buttonHeight,
    top: height - (2 * buttonHeight),
    left: (width - buttonWidth)/2,
  }

  return (
    <View style={buttonStyle}>
      <Button styleName="confirmation" onPress={onPress2}>
        <Icon name="pin" />
        <Text>Set Car Location</Text>
      </Button>
    </View>
  )
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onPress: () => {
      console.log('pushed button!!')
    }
  }
}

const ConnectedSetLocationButton = connect(undefined, mapDispatchToProps)(SetLocationButton)

const SetCarLocation = ({ nav }) => (
  <View style={{flex: 1}}>
    <MapSelectorView />
    <NavigationBar centerComponent={<Title>Set Location</Title>} />
    <ConnectedSetLocationButton nav={nav}/>
  </View>
)

export default SetCarLocation
