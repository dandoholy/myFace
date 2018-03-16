import * as UserAPI from '../util/user_api_util';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const RECEIVE_FRIENDSHIP_ERRORS = 'RECEIVE_FRIENDSHIP_ERRORS';
export const DELETE_FRIENDSHIP = 'DELETE_FRIENDSHIP';

export const receiveFriendship = updatedCurrentUser => {
  return {
    type: RECEIVE_FRIENDSHIP,
    updatedCurrentUser
  }
}

export const receiveFriendshipErrors = errors => {
  return {
    type: RECEIVE_FRIENDSHIP_ERRORS,
    errors
  }
}

export const removeFriendship = friendshipId => {
  return {
    type: REMOVE_FRIENDSHIP,
    friendshipId
  }
}

export const createFriendship = requested_id => dispatch => {
  return (
    UserAPI.createFriendship(requested_id).then(
      friendship => dispatch(receiveFriendship(friendship)),
      errors => dispatch(receiveFriendshipErrors(errors))
    )
  );
};

export const updateFriendship = (requested_id, status) => dispatch => {
  return(
    UserAPI.updateFriendship(requested_id, status).then(
      friendship => dispatch(receiveFriendship(friendship)),
      errors => dispatch(receiveFriendshipErrors(errors))
    )
  );
};

export const destroyFriendship = requested_id => dispatch => {
  return(
    UserAPI.destroyFriendship(requested_id).then(
      friendship => dispatch(removeFriendship(friendship.id)),
      errors => dispatch(receiveFriendshipErrors(errors))
    )
  );
};
