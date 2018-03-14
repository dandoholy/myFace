import React from 'react';

import PostIndexContainer from '../posts/feed_post_index_container';

class FeedPage extends React.Component {
  render () {
    return (
      <div className='total-feed-page-div'>
        <PostIndexContainer />
      </div>
    );
  }
}

export default FeedPage;
