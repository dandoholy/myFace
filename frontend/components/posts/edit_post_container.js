import { connect } from 'react-redux';

import PostForm from './login_form';
import {
  createPost, updatePost, removePost, fetchPost, fetchAllPosts
} from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultPost = {
    author_id: state.session.currentUser.id,
    body: '',
    privacy: 1,
  };
  const post = state.posts[ownProps.match.params.postId] || defaultPost;
  return {
    post,
    formType: 'Edit Post'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (post) => dispatch(updatePost(post)),
    removePost: (id) => dispatch(removePost(id)),
    fetchPost: (id) => dispatch(fetchPost(id)),
  };
};

class EditPostForm extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id != nextProps.match.params.postId ) {
      this.props.fetchPost(nextProps.match.params.postId);
    }
  }

  render() {
    const { action, formType, post } = this.props;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
