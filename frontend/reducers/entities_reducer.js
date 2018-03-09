import { combineReducers } from 'redux';

import profileReducer from './profile_reducer';

export default combineReducers(
  {
    profile: profileReducer,

  }
);
