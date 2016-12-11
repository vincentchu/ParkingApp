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
      console.log('with current locaton will mlount')
      const getLocationSucc = (currentLocation: Position) => {
        console.log('getLocationSucc', this.watchId)
        this.watchId !== null && this.setState({ currentLocation })
      }

      const getLocationFail = (error: Object) => {
        console.log('Failed to get Location', error)
      }

      const opts = {
        ...DefaultGeolocateOptions,
        geolocationOptions,
      }

      if (watchLocation) {
        console.log('WATCH LOC')
        this.watchId = navigator.geolocation.watchPosition(
          getLocationSucc,
          getLocationFail,
          opts
        )
        console.log('AFTER SET', this.watchId)
      } else {
        this.watchId = navigator.geolocation.getCurrentPosition(
          getLocationSucc,
          getLocationFail,
          opts
        )
      }
    }

    componentWillUnmount() {
      console.log('with current locaton will UNMUNT')
      this.watchId && navigator.geolocation.clearWatch(this.watchId)
    }

    render() {
      console.log('with current loc render')
      return (
        <Base location={this.state.currentLocation} {...this.props} />
      )
    }
  }
)

export default withCurrentLocation
