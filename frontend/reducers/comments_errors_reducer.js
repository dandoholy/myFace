import { merge } from 'lodash';

import {
  RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, DELETE_COMMENT, RECEIVE_COMMENT_ERRORS
} from '../actions/comment_actions';

const commentsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT:
    case RECEIVE_ALL_COMMENTS:
    case DELETE_COMMENT:
      return [];
    default:
    return state;
  }
};

export default commentsErrorsReducer;
