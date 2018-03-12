import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import profileErrorsReducer from './profiles_errors_reducer';
import postsErrorsReducer from './posts_errors_reducer';

const errorsReducer = combineReducers(
  {
    session: sessionErrorsReducer,
    profile: profileErrorsReducer,
    posts: postsErrorsReducer,
    
  }
);

export default errorsReducer;
