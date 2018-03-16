import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { openModal, closeModal } from '../../actions/modal_actions';
import EditCommentForm from './edit_comment_container';
import { removeComment } from '../../actions/comment_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.currentUser.id],
    users: state.entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (commentId, postId) => dispatch(openModal(<EditCommentForm commentId={commentId} postId={postId}/>)),
    removeComment: (commentId) => dispatch(removeComment(commentId))
  }
}

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleClick() {
    this.setState( { buttonClicked: !this.state.buttonClicked } );
  }

  deleteComment() {
    const { comment, removeComment } = this.props;
    removeComment(comment.id);
  }

  dateStr() {
    const { comment } = this.props;
    const date = new Date(comment.created_at);
    const timeSince = Date.now()-Date.parse(date);
    let dateStr;
    let minutes;
    let hours;
    let days;
    if ( timeSince < 60000 ) {
      dateStr = 'Just now';
    } else if (timeSince < 1000*60*60 ) {
      minutes = Math.floor(timeSince/(1000*60)%60);
      dateStr = `${minutes} min`;
      if (minutes > 1) {
        dateStr += 's';
      }
    } else if (timeSince < 1000*60*60*24) {
      hours = Math.floor(timeSince/(1000*60*60)%24);
      dateStr = `${hours} hr`;
      if (hours > 1) {
        dateStr += 's';
      }
    }
    else if (timeSince < 1000*60*60*24*7) {
      days = Math.floor(timeSince/(1000*60*60*24)%365);
      dateStr = `${days} d`;
    } else {
      dateStr = new Date(comment.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return dateStr;
  }

  render() {
    const { users, comment, currentUser, openModal } = this.props;
    const dateStr = this.dateStr();
    const dropdownClasses = (this.state.buttonClicked) ? "shown" : "hidden";
    const dropdown = (currentUser.id == comment.author_id) ? (
      <div className='comment-edit-delete-dropdown' onClick={this.handleClick}>
        <i className="material-icons dropdown">arrow_drop_down</i>
        <div className='comment-dropdown-positioner'>
          <ul className={`comment-post-dropdown ${dropdownClasses}`}>
            <li className='comment-dropdown-option' onClick={() => openModal(comment.id, comment.post_id)}>EDIT</li>
            <li className='comment-dropdown-option' onClick={this.deleteComment}>DELETE</li>
          </ul>
        </div>
      </div>
    ) : null;
    return (
      <li className="comment-index-item">
        {dropdown}
        <div className='comment-photo-div'><img src={users[comment.author_id].miniPic}/></div>
        <div className='comment-content'>
          <div className='comment-body'>
            <span><a href={`/#/u/${comment.author_id}`}>{users[comment.author_id].full_name} </a>{comment.body}</span>
          </div>
            <div className='comment-timestamp-div'>{dateStr}</div>
        </div>
      </li>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem);
