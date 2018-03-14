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
