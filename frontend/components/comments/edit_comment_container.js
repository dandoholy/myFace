import { connect } from 'react-redux';
import React from 'react';

import CommentForm from './comment_form';
import {
  updateComment, removeComment, fetchComment
} from '../../actions/comment_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const defaultComment = {
    body: '',
    post_id: ownProps.postId
  };
  const comment = state.entities.comments[ownProps.commentId] || defaultComment;
  return {
    currentUser: state.entities.users[state.session.currentUser.id],
    users: state.entities.users,
    currentUserId: state.entities.users[state.session.currentUser.id].id,
    defaultComment: comment
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (comment) => {
      dispatch(updateComment(comment));
      dispatch(closeModal());
    },
    fetchComment: (id) => dispatch(fetchComment(id)),
    closeModal: () => dispatch(closeModal())
  };
};

class EditCommentForm extends React.Component {
  componentDidMount() {
    this.props.fetchComment(this.props.commentId);
    debugger
  }

  render () {
    const {
      postId, action, formType, currentUser, users, currentUserId, defaultComment
    } = this.props;
    return (
      <CommentForm
        action={ action }
        currentUser={ currentUser }
        postId={ postId }
        currentUserId={currentUser.id}
        defaultComment={defaultComment}
        users={users} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentForm);
