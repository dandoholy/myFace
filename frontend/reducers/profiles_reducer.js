import { merge } from 'lodash';
import { combineReducers } from 'redux';

import { RECEIVE_PROFILE } from '../actions/profile_actions';

const profilesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROFILE:
      return merge( {}, { [action.profile.id]: action.profile });
    default:
      return state;
  }
};

const byUserId = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROFILE:
      return merge({}, state, { [action.profile.user_id]: action.profile.id });
    default:
      return state;
  }
}

export default combineReducers({
  byId: profilesReducer,
  byUserId
});
