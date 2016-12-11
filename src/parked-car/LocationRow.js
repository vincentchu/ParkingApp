// @flow
import React from 'react'
import { Text } from 'react-native'
import { Icon, Row, Subtitle, View } from '@shoutem/ui'

const LocationRow = (props: {
  icon: string,
  text?: string,
  children?: any,
}) => {
  const { icon, text, children } = props

  return (
    <Row>
      <Icon name={icon} />
      <View styleName="vertical">
        <Subtitle>
          { text && <Text styleName="multiline">{text}</Text> }
          { children }
        </Subtitle>
      </View>
    </Row>
  )
}

export default LocationRow
