import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import reducers from '../reducers'

export default function configureStore() {
  const initialState = {}

  const store = createStore(
    combineReducers({ ...reducers, routing: routerReducer }),
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, createLogger(), routerMiddleware(browserHistory)),
      window.devToolsExtension ? window.devToolsExtension : f => f
    )
  )

  return store
}
