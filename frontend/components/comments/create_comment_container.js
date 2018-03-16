import { connect } from 'react-redux';

import CommentForm from './comment_form';
import {
  createComment, updateComment, removeComment, fetchComment, fetchAllComments
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultComment = {
    body: '',
    postId: ownProps.postId
  }
  return {
    users: state.entities.users,
    currentUserId: state.session.currentUser.id,
    defaultComment: defaultComment
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (comment) => dispatch(createComment(comment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
