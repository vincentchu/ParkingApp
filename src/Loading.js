// @flow
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Caption, Heading } from '@shoutem/ui'

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Loading = () => (
  <View style={style.container}>
    <Heading>parkd</Heading>
    <Caption>Loading ...</Caption>
  </View>
)

export default Loading
