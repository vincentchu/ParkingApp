// @flow
import React from 'react'

const DefaultGeolocateOptions = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
}

const withCurrentLocation = (
  Base: typeof React.Component | Function,
  geolocationOptions: Object = {}
): ReactClass<{}> => {
  return class extends React.Component {
    state: {
      currentLocation?: Position,
    }

    watchId = null

    constructor(props) {
      super(props)
      this.state = {}
    }

    componentWillMount() {
      const getLocationSucc = (currentLocation: Position) => {
        console.log('Got location', currentLocation)
        this.setState({ currentLocation })
      }

      const getLocationFail = (error: Object) => {
        console.log('Failed to get Location', error)
      }

      const opts = {
        ...DefaultGeolocateOptions,
        geolocationOptions
      }

      this.watchId = navigator.geolocation.watchPosition(
        getLocationSucc,
        getLocationFail,
        opts
      )
    }

    componentWillUnmount() {
      this.watchId && navigator.geolocation.clearWatch(this.watchId)
    }

    render() {
      return (
        <Base currentLocation={this.state.currentLocation} {...this.props} />
      )
    }
  }
}

export default withCurrentLocation
