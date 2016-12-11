// @flow
import React from 'react'
import { Dimensions, Text } from 'react-native'
import { Icon, NavigationBar, Row, Subtitle, Title, View } from '@shoutem/ui'
import CarLocation from './CarLocation'
import SimpleButton from '../SimpleButton'

const LocationRow = (props: {
  icon: string,
  text: string
}) => {
  const { icon, text } = props

  return (
    <Row>
      <Icon name={icon} />
      <View styleName="vertical">
        <Subtitle>
          <Text styleName="multiline">{text}</Text>
        </Subtitle>
      </View>
    </Row>
  )
}

const ParkedCar = () => {
  const { height } = Dimensions.get('window')

  return (
    <View style={{ flex: 1 }}>
      <CarLocation height={height} />
      <NavigationBar centerComponent={<Title>Car Parked</Title>} />
      <View style={{ flex: 1, padding: 35 }}>
        <LocationRow icon="pin" text={'2471 Bryant St.\nSan Francisco, CA 94110'} />
        <LocationRow icon="ic_events" text={'Parked 20 minutes ago'} />
        <LocationRow icon="ic_books" text={'3 miles away'} />
        <SimpleButton icon="left-arrow" text="Set New Parking Spot" />
      </View>
    </View>
  )
}

export default ParkedCar
