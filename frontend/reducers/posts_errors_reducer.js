import { merge } from 'lodash';

import {
  RECEIVE_POST, RECEIVE_ALL_POSTS, DELETE_POST, RECEIVE_POST_ERRORS
} from '../actions/post_actions';

const postsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors;
    case RECEIVE_POST:
    case RECEIVE_ALL_POSTS:
    case DELETE_POST:
      return [];
    default:
    return state;
  }
};

export default postsErrorsReducer;
