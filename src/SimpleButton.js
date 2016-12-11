// @flow
import React from 'react'
import { Text, Dimensions } from 'react-native'
import { Button, Icon, View } from '@shoutem/ui'

const buttonWidth = 300
const buttonHeight = 40

const SimpleButton = (props: {
  icon: string,
  text: string,
  onPress?: Function,
}) => {
  const { height, width } = Dimensions.get('window')
  const { icon, text, onPress } = props

  const buttonStyle = {
    position: 'absolute',
    width: buttonWidth,
    height: buttonHeight,
    top: height - 2 * buttonHeight,
    left: (width - buttonWidth) / 2,
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
