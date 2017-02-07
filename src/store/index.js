import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';

import promiseMiddleware from 'redux-promise'
import { logger } from '../middleware'
import {todos} from '../reducers/todos'

export default function configure(initialState, processEnv) {
  const env = processEnv.NODE_ENV
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  let createStoreWithMiddleware
  if (env === 'development') {
    createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware,
      promiseMiddleware
    )(create)
  } else {
    createStoreWithMiddleware = applyMiddleware(thunkMiddleware,promiseMiddleware)(create)
  }

  const store = createStoreWithMiddleware(todos, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
