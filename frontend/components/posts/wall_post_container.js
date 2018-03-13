import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostForm from './post_form';
import {
  createPost, updatePost, removePost, fetchPost, fetchAllPosts
} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const profileId = state.entities.profiles.byUserId[userId];
  return {
    defaultPost: {
      author_id: state.session.currentUser.id,
      body: '',
      privacy: 1,
      wall_id: profileId
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (post) => dispatch(createPost(post)),
    removePost: (id) => dispatch(removePost(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
