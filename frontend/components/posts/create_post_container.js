import { connect } from 'react-redux';
import React from 'react';

import PostForm from './post_form';
import {
  createPost, updatePost, removePost, fetchPost, fetchAllPosts
} from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    defaultPost: {
      author_id: state.session.currentUser.id,
      body: '',
      privacy: 1,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (post) => dispatch(createPost(post)),
    removePost: (id) => dispatch(removePost(id)),
    openModal: () => dispatch(openModal(<CreatePostForm />)),
    closeModal: () => dispatch(closeModal()),
  };
};

const CreatePostForm = connect(mapStateToProps, mapDispatchToProps)(PostForm);
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
