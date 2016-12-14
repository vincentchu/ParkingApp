// @flow
import { AsyncStorage } from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import { reducer as mapViewport } from './state/map-viewport'
import { reducer as parkingSpot } from './state/parking-spot'
import loadingState from './state/loading-state'

const logger = createLogger()

const reducer = combineReducers({
  mapViewport,
  parkingSpot,
  loadingState,
})

const store = createStore(reducer, undefined, autoRehydrate())
// const store = createStore(reducer, applyMiddleware(logger), autoRehydrate())
persistStore(store, {
  storage: AsyncStorage,
  blacklist: [ 'loadingState' ],
})

export default store
