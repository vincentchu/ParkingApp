// @flow

type AddressComponent = {
  long_name: string,
  short_name: string,
  types: string[],
}

type GeocodeComponent = {
  address_components: AddressComponent[],
  formatted_address: string,
  place_id: string,
  types: string[],
}

type FetchResp = {
  results: GeocodeComponent[],
  status: string,
}

const GoogleApi = 'https://maps.googleapis.com/maps/api/geocode/json'

const parseResponse = (resp: FetchResp): string => {
  console.log('GOT', resp)
  return 'This is a resp\nfoo\nbar'
}

const reverseGeocode = (location: {
  latitude: number,
  longitude: number,
}): Promise<string> => {
  const url = GoogleApi + `?latlng=${location.latitude},${location.longitude}`
  console.log('FETCHING url', url)

  return fetch(url).then(resp => {
    if (resp.ok)
      return resp.json().then(parseResponse)
  })
}

export default reverseGeocode
