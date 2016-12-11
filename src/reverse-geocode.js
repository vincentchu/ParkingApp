// @flow

const GoogleApi = 'http://maps.googleapis.com/maps/api/geocode/json'

const reverseGeocode = (location: {
  latitude: number,
  longitude: number,
}): Promise<any> => {
  const url = GoogleApi + `?latlng=${location.latitude},${location.longitude}`

  return fetch(url).then(resp => {
    if (resp.ok) {
      return resp.json().then(json => {
        console.log('GOT BACK:', json)
        return {}
      })
    }
  })
}

export default reverseGeocode
