import React from 'react';
import ReactDOM from 'react-dom'

import configureStore from './store/store';
import Root from './components/root';

import * as UserAPI from './actions/user_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: {id: window.currentUser.id}},
      entities: { users: {[window.currentUser.id]: window.currentUser}} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TEST FNCS
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.user = UserAPI;
  // TEST END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
