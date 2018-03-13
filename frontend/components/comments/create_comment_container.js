import { connect } from 'react-redux';

import CommentForm from './comment_form';
import {
  createComment, updateComment, removeComment, fetchComment, fetchAllComments
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    defaultComment: {
      body: ''
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (comment) => dispatch(createComment(comment)),
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);
