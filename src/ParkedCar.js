// @flow
import React from 'react'
import { Navigator, Text, View, TouchableHighlight } from 'react-native';

const ParkedCar = (props: { nav: Navigator }) => {

  const onPress = () => {
    props.nav.pop()
  }

  return (
    <View style={{ padding: 100 }}>
      <TouchableHighlight onPress={onPress}>
        <Text>Car Location here</Text>
      </TouchableHighlight>
    </View>
  )
}

export default ParkedCar
