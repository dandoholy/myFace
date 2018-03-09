import { merge } from 'lodash';
import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import profileReducer from './profile_reducer';

const rootReducer = combineReducers(
  {
    session: sessionReducer,
    profile: profileReducer,
    errors: errorsReducer
  }
);

export default rootReducer;
