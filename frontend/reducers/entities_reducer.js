import { combineReducers } from 'redux';

import profilesReducer from './profiles_reducer';
import postsReducer from './posts_reducer';

export default combineReducers(
  {
    profiles: profilesReducer,
    posts: postsReducer,

  }
);
