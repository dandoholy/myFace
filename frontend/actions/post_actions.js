import * as PostAPIUtil from '../util/posts_api_util';

export const RECEIVE_POST = 'RECEIVE_POST;'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS;'
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receivePostErrors = errors => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors
  };
};

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const receiveAllPosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

export const deletePost = postId => {
  return {
    type: DELETE_POST,
    postId
  };
};

export const fetchPost = id => dispatch => {
  return (
    PostAPIUtil.fetchPost(id).then(
      post => dispatch(receivePost(post)),
      errors => dispatch(receivePostErrors(errors.responseJSON))
    )
  );
};

export const fetchAllPosts = () => dispatch => {
  return (
    PostAPIUtil.fetchPosts().then(
      posts => dispatch(receiveAllPosts(posts)),
      errors => dispatch(receivePostErrors(errors.responseJSON))
    )
  );
};

export const createPost = post => dispatch => {
  return (
    PostAPIUtil.createPost(post).then(
      post => dispatch(receivePost(post)),
      errors => dispatch(receivePostErrors(errors.responseJSON))
    )
  );
};

export const updatePost = post => dispatch => {
  return (
    PostAPIUtil.updatePost(post).then(
      post => dispatch(receivePost(post)),
      errors => dispatch(receivePostErrors(errors.responseJSON))
    )
  );
};

export const removePost = id => dispatch => {
  return (
    PostAPIUtil.deletePost(id).then(
      post => dispatch(deletePost(post.id)),
      errors => dispatch(receivePostErrors(errors.responseJSON))
    )
  );
};
