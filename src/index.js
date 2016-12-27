import React from 'react';
import { render, findDOMNode } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers';

import App from './App';
import About from './About';
import Something from './Something';

import './index.css';

const logger = createLogger();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path={"/"} component={App} />
//     <Route path={"/about"} component={About}>
//       <Route path={"/about/:something"} component={Something} />
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );

// function playList(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TRACK': {
//       state = [...state, action.payload];
//       break;
//     }
//   }
//   return state;
// }
//
// const store = createStore(playList);
//
// const addTrackBtn = document.getElementsByClassName('addTrack')[0];
// const list = document.getElementsByClassName('list')[0];
// const trackInputField = document.getElementsByClassName('trackInput')[0];
//
// store.subscribe(() => {
//   list.innerHTML = '';
//   trackInputField.value = '';
//
//   store.getState().forEach(entry => {
//     const li = document.createElement('li');
//     li.textContent = entry;
//     list.append(li);
//   });
// });
//
//
// addTrackBtn.addEventListener('click', () => {
//   const trackTitle = trackInputField.value;
//   store.dispatch({
//     type: 'ADD_TRACK',
//     payload: trackTitle
//   });
// });


