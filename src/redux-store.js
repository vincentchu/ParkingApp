// @flow
import { AsyncStorage } from 'react-native'
import { createStore, combineReducers } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { reducer as mapViewport } from './state/map-viewport'

const reducer = combineReducers({ mapViewport })

const store = createStore(reducer, undefined, autoRehydrate())
persistStore(store, { storage: AsyncStorage })

export default store
