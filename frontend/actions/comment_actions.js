import * as CommentAPIUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT;'
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS;'
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveCommentErrors = errors => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const receiveAllComments = comments => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

export const deleteComment = commentId => {
  return {
    type: DELETE_COMMENT,
    commentId
  };
};

export const fetchComment = id => dispatch => {
  return (
    CommentAPIUtil.fetchComment(id).then(
      comment => dispatch(receiveComment(comment)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON))
    )
  );
};

export const fetchAllComments = () => dispatch => {
  return (
    CommentAPIUtil.fetchComments().then(
      comments => dispatch(receiveAllComments(comments)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON))
    )
  );
};

export const createComment = comment => dispatch => {
  return (
    CommentAPIUtil.createComment(comment).then(
      comment => dispatch(receiveComment(comment)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON))
    )
  );
};

export const updateComment = comment => dispatch => {
  return (
    CommentAPIUtil.updateComment(comment).then(
      comment => dispatch(receiveComment(comment)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON))
    )
  );
};

export const removeComment = id => dispatch => {
  return (
    CommentAPIUtil.deleteComment(id).then(
      comment => dispatch(deleteComment(comment.id)),
      errors => dispatch(receiveCommentErrors(errors.responseJSON))
    )
  );
};
