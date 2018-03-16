import { connect } from 'react-redux';
import React from 'react';

import PostForm from './post_form';
import {
  createPost, updatePost, removePost, fetchPost, fetchAllPosts
} from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultPost = {
    author_id: state.session.currentUser.id,
    body: '',
    privacy: 1,
  };
  const post = state.entities.posts[ownProps.postId] || defaultPost;
  return {
    currentUser: state.entities.users[state.session.currentUser.id],
    defaultPost: post,
    formType: 'Edit Post',
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (post) => {
      dispatch(updatePost(post));
      dispatch(closeModal());
    },
    fetchPost: (id) => dispatch(fetchPost(id)),
    closeModal: () => dispatch(closeModal())
  };
};

class EditPostForm extends React.Component {


  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  render() {
    debugger
    const { action, formType, defaultPost, currentUser, users } = this.props;
    return (
      <PostForm
        action={action}
        formType={formType}
        defaultPost={defaultPost}
        currentUser={currentUser}
        currentUserId={currentUser.id}
        users={users} />
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
