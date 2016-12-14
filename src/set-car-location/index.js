// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Navigator, Dimensions } from 'react-native'
import { NavigationBar, Title, View } from '@shoutem/ui'
import Routes from '../routes'
import MapSelectorView from './MapSelectorView'
import SimpleButton, { ButtonHeight, ButtonWidth } from '../SimpleButton'
import { parkCar } from '../state/parking-spot'

const SetLocationButtonBase = (props: {
  nav: Navigator,
  parkCar: Function,
}) => {
  console.log('SET LOCATION BUTTON', props.nav.getCurrentRoutes())
  const { height, width } = Dimensions.get('window')

  const onPress = () => {
    props.parkCar()
    console.log('ROUTE STACK', props.nav.getCurrentRoutes())
    // props.nav.replace(Routes.ParkedView)
    props.nav.push(Routes.ParkedView)
    console.log('ROUTE STACK after', props.nav.getCurrentRoutes())
  }

  const style = {
    position: 'absolute',
    top: height - 2 * ButtonHeight,
    left: (width - ButtonWidth) / 2,
  }

  return (
    <SimpleButton icon="pin" text="Set Car Location" onPress={onPress} style={style} />
  )
}

const mapDispatchToProps = { parkCar }

const SetLocationButton = connect(undefined, mapDispatchToProps)(SetLocationButtonBase)

// const SetCarLocation = (props: { nav: Navigator }) => (
//   <View style={{ flex: 1 }}>
//     <MapSelectorView />
//     <NavigationBar centerComponent={<Title>Set Location</Title>} />
//     <SetLocationButton nav={props.nav} />
//   </View>
// )

class SetCarLocation extends React.Component {
  componentWillMount() {
    console.log('SetCarLocation mounting')
  }

  componentWillUnmount() {
    console.log('SetCarLocation unmounting')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapSelectorView />
        <NavigationBar centerComponent={<Title>Set Location</Title>} />
        <SetLocationButton nav={this.props.nav} />
      </View>
    )
  }
}

export default SetCarLocation
