// @flow
import { createStore, combineReducers } from 'redux'
import { reducer as mapViewport } from './state/map-viewport'

const reducer = combineReducers({ mapViewport })

export default createStore(reducer)
