// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as carLocation } from './state/car-location'
import { reducer as mapViewport } from './state/map-viewport'

const reducer = combineReducers({
  carLocation,
  mapViewport,
})

export default createStore(reducer)
