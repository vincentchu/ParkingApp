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
  constructor(props) {
    super(props)
    this.state = { dispatched: false }
  }

  state: {
    dispatched: bool,
  }

  componentWillMount() {
    const { loadingState, isParked, nav } = this.props

    if (loadingState && !this.state.dispatched) {
      this.setState({ dispatched: true })

      if (isParked) {
        nav.push(Routes.ParkedView)
      } else {
        nav.push(Routes.MapView)
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { loadingState, isParked } = nextProps

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

  render() { // eslint-disable-line class-methods-use-this
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
