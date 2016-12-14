// @flow
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Navigator } from 'react-native'
import { Caption, Heading } from '@shoutem/ui'
import Routes from './routes'

import type { ParkingSpot } from './state/parking-spot'

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class Loading extends React.Component {
  state: {
    dispatched: bool,
  }

  constructor(props) {
    super(props)
    this.state = { dispatched: false }
  }

  componentWillMount() {
    console.log('MOUNTING', this.props.loadingState, this.props.isParked)

    if (this.props.loadingState && !this.state.dispatched) {
      this.setState({ dispatched: true })
      if (this.props.isParked) {
        this.props.nav.push(Routes.ParkedView)
      } else {
        this.props.nav.push(Routes.MapView)
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    const { loadingState, isParked } = nextProps
    console.log('here', loadingState, isParked)

    if (loadingState && !this.state.dispatched) {
      this.setState({ dispatched: true })
      if (isParked) {
        this.props.nav.push(Routes.ParkedView)
      } else {
        this.props.nav.push(Routes.MapView)
      }
    }
  }

  props: {
    nav: Navigator,
    loadingState: bool,
    isParked: bool,
  }

  render() {
    const { loadingState, parkingSpot } = this.props
    console.log('RENDERING!', loadingState, parkingSpot)
    return (
      <View style={style.container}>
        <Heading>parkd</Heading>
        <Caption>Loading ...</Caption>
      </View>
    )
  }
}

const mapStateToProps = ({
  loadingState,
  parkingSpot,
}: {
  loadingState: bool,
  parkingSpot: ParkingSpot
}) => (
  {
    loadingState,
    isParked: parkingSpot.isParked,
  }
)
export default connect(mapStateToProps)(Loading)
