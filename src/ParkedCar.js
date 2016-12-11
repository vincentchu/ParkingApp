// @flow
import React from 'react'
import { Navigator, Text, View, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'
import { Button, NavigationBar, Title, Icon } from '@shoutem/ui'

const ParkedCar = (props: { nav: Navigator }) => {
  const onPress = () => props.nav.pop()
  const { height, width } = Dimensions.get('window')

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height / 2 }}>
        <MapView style={StyleSheet.absoluteFillObject} />
      </View>
      <NavigationBar centerComponent={<Title>Car Parked</Title>} />
      <View style={{ height: height / 2 }}>
        <Text>Data here</Text>
      </View>
    </View>
  )
}

export default ParkedCar
