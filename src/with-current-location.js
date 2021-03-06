// @flow
import React from 'react'

const DefaultGeolocateOptions = {
  enableHighAccuracy: true,
  timeout: 2000,
  maximumAge: 1000,
}

const withCurrentLocation = (
  Base: typeof React.Component | Function,
  geolocationOptions: Object = {},
  watchLocation: bool = false
): ReactClass<{}> => (
  class extends React.Component {
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
        this.watchId !== null && this.setState({ currentLocation })
      }

      const getLocationFail = (error: Object) => {
        console.log('Failed to get Location', error) // eslint-disable-line no-console
      }

      const opts = {
        ...DefaultGeolocateOptions,
        geolocationOptions,
      }

      if (watchLocation) {
        this.watchId = navigator.geolocation.watchPosition(
          getLocationSucc,
          getLocationFail,
          opts
        )
      } else {
        this.watchId = navigator.geolocation.getCurrentPosition(
          getLocationSucc,
          getLocationFail,
          opts
        )
      }
    }

    componentWillUnmount() {
      this.watchId !== null && navigator.geolocation.clearWatch(this.watchId)
      this.watchId = null
    }

    render() {
      return (
        <Base location={this.state.currentLocation} {...this.props} />
      )
    }
  }
)

export default withCurrentLocation
