import React from 'react';


import PostIndexItem from './post_index_item';
class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className='post-index-div'>
        <ol className='post-index-list'>
          {posts.map(post => <PostIndexItem key={post.id} post={post} />)}
        </ol>
      </div>
    );
  }
}

export default PostIndex;
