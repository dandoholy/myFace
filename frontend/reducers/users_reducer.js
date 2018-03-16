import { merge } from 'lodash';

import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROFILE } from '../actions/profile_actions';
import { RECEIVE_FRIENDSHIP } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser == null) { return {}; }
      return merge( {}, state, {[action.currentUser.id]: action.currentUser})
    case RECEIVE_PROFILE:
      return merge({}, state, action.profile.user);
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.users);
    case RECEIVE_FRIENDSHIP:
      return merge({}, state, { [action.updatedCurrentUser.id]: action.updatedCurrentUser });
    default:
      return state;
  }
};

const byProfileId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      let newState = {}
      action.users.forEach(user => {
        newState[user.profileId] = user.id
      })

      return merge({}, state, newState)
  }
}

export default usersReducer;
//
// case RECEIVE_CURRENT_USER:
//   if (action.currentUser) {
//     return merge({}, state, { [action.currentUser.id]: action.currentUser });
//   }
