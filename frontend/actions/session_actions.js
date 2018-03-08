import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout(user).then(
    () => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
};