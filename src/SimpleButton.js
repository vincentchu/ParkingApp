// @flow
import React from 'react'
import { Text } from 'react-native'
import { Button, Icon, View } from '@shoutem/ui'

export const ButtonWidth = 300
export const ButtonHeight = 40

const SimpleButton = (props: {
  icon: string,
  text?: string,
  style?: Object,
  onPress?: Function,
}) => {
  const { icon, text, style, onPress } = props

  const baseStyle = {
    width: ButtonWidth,
    height: ButtonHeight,
  }

  const buttonStyle = {
    ...baseStyle,
    ...(style || {}),
  }

  return (
    <View style={buttonStyle}>
      <Button styleName="confirmation" onPress={onPress}>
        <Icon name={icon} />
        <Text>{text}</Text>
      </Button>
    </View>
  )
}

export default SimpleButton
