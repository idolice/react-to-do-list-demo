import {Router, Route, hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import Video from './pages/Video'
import configure from './store'

const store = configure(undefined, process.env)


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={HomePage}/>
      <Route path="/video" component={Video}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
