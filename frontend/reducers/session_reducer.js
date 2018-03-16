import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({ currentUser: null });

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser == null) { return merge({}, _nullUser); }
      return merge({}, { currentUser: {id: action.currentUser.id } });
    default:
      return state;
  }
};

export default sessionReducer;
