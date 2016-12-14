// @flow
import { AsyncStorage } from 'react-native'
import { createStore, combineReducers } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { reducer as mapViewport } from './state/map-viewport'
import { reducer as parkingSpot } from './state/parking-spot'
import loadingState from './state/loading-state'

// If logging is desired, use the following incantation:
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import createLogger from 'redux-logger'
// const logger = createLogger()
// const store = createStore(reducer, applyMiddleware(logger), autoRehydrate())

const reducer = combineReducers({
  mapViewport,
  parkingSpot,
  loadingState,
})

const store = createStore(reducer, undefined, autoRehydrate())
persistStore(store, {
  storage: AsyncStorage,
  blacklist: [ 'loadingState' ],
})

export default store
