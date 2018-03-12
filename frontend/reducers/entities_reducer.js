import { combineReducers } from 'redux';

import profiles from './profiles_reducer';
import postsReducer from './posts_reducer';

export default combineReducers(
  {
    profiles,
    posts: postsReducer,

  }
);
