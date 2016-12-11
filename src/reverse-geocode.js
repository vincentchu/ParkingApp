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
  let addr = ''

  if (resp.results[0]) {
    const addrTokens = resp.results[0].formatted_address.split(',')
    const [ street, city, stateZip, country ] = addrTokens

    addr = [
      street,
      [ city, stateZip ].join(', '),
      country,
    ].join('\n')
  } else
    addr = 'Address Unknown ...'

  return addr
}

const reverseGeocode = (location: {
  latitude: number,
  longitude: number,
}): Promise<string> => {
  const url = GoogleApi + `?latlng=${location.latitude},${location.longitude}`

  return fetch(url).then(resp => {
    if (resp.ok)
      return resp.json().then(parseResponse)
  })
}

export default reverseGeocode
