import { combineReducers } from 'redux';

import profiles from './profiles_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import usersReducer from './users_reducer';

export default combineReducers(
  {
    profiles,
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,

  }
);
