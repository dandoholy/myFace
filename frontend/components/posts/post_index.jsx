import React from 'react';

import Modal from '../modal/modal';
import CreatePostForm from './create_post_container';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='post-index-div'>
        <CreatePostForm />
        <ol className='post-index-list'>
          {posts.map(post => <PostIndexItem key={post.id} post={post} />)}
        </ol>
      </div>
    );
  }
}

export default PostIndex;
