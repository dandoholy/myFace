import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const posts = Object.values(state.entities.posts).reverse();

  // const wallPosts = posts.filter(post => (post.wall_id == )
  const users = Object.values(state.entities.users);
  return {
    posts,
    users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
