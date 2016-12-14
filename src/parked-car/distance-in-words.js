// @flow
import geolib from 'geolib'

const MileInFeet = 5280

const distanceInWords = (pos1: Object, pos2: Object): string => {
  const distanceInMeters = geolib.getDistance(pos1, pos2)

  const distanceInFeet = geolib.convertUnit('ft', distanceInMeters, 0)
  let distancePhrase = ''

  if (distanceInFeet < MileInFeet / 2) {
    distancePhrase = `${distanceInFeet} feet away`
  } else {
    const distanceInMiles = geolib.convertUnit('mi', distanceInMeters, 0)
    const unit = (distanceInMiles === 1) ? 'mile' : 'miles'
    distancePhrase = `${distanceInMiles} ${unit} away`
  }

  return distancePhrase
}

export default distanceInWords
