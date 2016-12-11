// @flow
import React from 'react'
import MapView from 'react-native-maps'
import { Text, StyleSheet, View } from 'react-native';
import { Button, NavigationBar, Title, Icon } from '@shoutem/ui'
import MapSelectorView from './MapSelectorView'

const SetCarLocation = (props: Object) => {
  return (
    <View style={{flex: 1}}>
      <MapSelectorView />
      <NavigationBar styleName="fade" centerComponent={<Title>Set Location</Title>} />
      <View style={{position: 'absolute', width: 300, height: 40, top: 200}}>
        <Button styleName="confirmation">
          <Icon name="add-event" />
          <Text>Park Car</Text>
        </Button>
      </View>
    </View>
  )
}

export default SetCarLocation
