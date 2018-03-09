import * as ProfileAPIUtil from '../util/profile_api_util.js';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';

export const receiveProfile = profile => {
  return {
    type: RECEIVE_PROFILE,
    profile
  }
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_PROFILE_ERRORS,
    errors
  }
};

export const fetchProfile = id => dispatch => {
  return ProfileAPIUtil.fetchProfile(id).then(
    profile => dispatch(receiveProfile(profile)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
};
