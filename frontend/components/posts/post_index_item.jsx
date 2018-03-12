import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ( { post } ) => {
  const date = new Date(post.created_at);
  const timeSince = Date.now()-Date.parse(date);
  let dateStr;
  let minutes;
  let hours;
  if ( timeSince < 60000 ) {
    dateStr = 'Just now';
  } else if (timeSince < 1000*60*60 ) {
    minutes = Math.floor(timeSince/(1000*60)%60);
    dateStr = `${minutes} min`;
    if (minutes > 1) {
      dateStr += 's';
    }
  } else if (timeSince < 1000*60*60*60) {
    hours = Math.floor(timeSince/(1000*60*60)%60);
    dateStr = `${hours} hr`;
    if (hours > 1) {
      dateStr += 's';
    }
  } else {
    dateStr = new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  return (
    <li className="post-index-item">
      <div className='post-author-div'>
        <Link to={`/u/${post.author_id}`}>{post.author}</Link>
        </div>
      <div className='post-timestamp-div'>{dateStr}</div>
      <div className='post-body-div'>{post.body}</div>
    </li>
  );
}

export default PostIndexItem;
