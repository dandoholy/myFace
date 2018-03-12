import { connect } from 'react-redux';

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
    openModal: () => dispatch(openModal('create_post')),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
