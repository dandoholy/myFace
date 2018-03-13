import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    users: state.entities.users
  }
}

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  dateStr() {
    const { comment } = this.props;
    const date = new Date(comment.created_at);
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
      dateStr = new Date(comment.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return dateStr;
  }

  render() {
    const { users, comment } = this.props;
    const dateStr = this.dateStr();
    return (
      <li className="comment-index-item">
        <div className='comment-photo-div'></div>
        <div className='comment-body'>
          <a href={`/u/${comment.author_id}`}>{users[comment.author_id].full_name}</a>{comment.body}
        </div>
        <div className='comment-timestamp-div'>{dateStr}</div>
      </li>
    );
  }
}

export default connect(mapStateToProps, null)(CommentIndexItem);
