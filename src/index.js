import './scss/main.scss'

import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import { Provider } from 'react-redux';
import {AUTH_USER, UNAUTH_USER} from './redux/actions/types'
import store from './redux/store'

import JWT from './utils/jwt'

import Main from './Containers/Main'
import Landing from './Pages/Landing'
import NotFound from './Pages/NotFound'

if(JWT.fetch()){
  store.dispatch({ type: AUTH_USER });
} else {
  store.dispatch({ type: UNAUTH_USER });
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Landing}/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);