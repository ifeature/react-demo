import React from 'react';
import { render, findDOMNode } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers';

import App from './App';
import About from './About';
import Something from './Something';
import Track from './Track';

import './index.css';

const logger = createLogger();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={"/"} component={App} />
      <Route path={"/tracks/:id"} component={Track} />
      <Route path={"/about"} component={About}>
        <Route path={"/about/:something"} component={Something} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
