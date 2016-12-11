// @flow
import { AsyncStorage } from 'react-native'
import { createStore, combineReducers } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { reducer as mapViewport } from './state/map-viewport'
import { reducer as parkingSpot } from './state/parking-spot'

const reducer = combineReducers({
  mapViewport,
  parkingSpot,
})

const store = createStore(reducer, undefined, autoRehydrate())
persistStore(store, { storage: AsyncStorage })

export default store
