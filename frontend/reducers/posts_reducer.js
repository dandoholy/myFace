import { merge } from 'lodash';

import {
  RECEIVE_POST, RECEIVE_ALL_POSTS, DELETE_POST
} from '../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post })
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case DELETE_POST:
      const newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.currentUser == null) { return {}; }
    default:
      return state;
  }
};

export default postsReducer;
