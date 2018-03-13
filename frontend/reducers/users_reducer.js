import { RECEIVE_ALL_POSTS } from '../actions/post_actions'
import { merge } from 'lodash'

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
