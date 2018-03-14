import { connect } from 'react-redux';

import CommentForm from './comment_form';
import {
  createComment, updateComment, removeComment, fetchComment, fetchAllComments
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    currentUserId: state.session.currentUser.id,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (comment) => dispatch(createComment(comment)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
