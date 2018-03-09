import { merge } from 'lodash';
import { RECEIVE_PROFILE_ERRORS, RECEIVE_PROFILE } from '../actions/profile_actions';

const profileErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE_ERRORS:
      return action.errors;
    case RECEIVE_PROFILE:
      return [];
    default:
      return state;
  }
};

export default profileErrorsReducer;
