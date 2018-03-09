import { merge } from 'lodash';

import { RECEIVE_PROFILE } from '../actions/profile_actions';

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROFILE:
      return merge( {}, { profile: action.profile});
    default:
      return state;
  }
};

export default profileReducer;
