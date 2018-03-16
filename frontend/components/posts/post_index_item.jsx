import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CreateCommentContainer from '../comments/create_comment_container';
import CommentItem from '../comments/comment_index_item';
import { removePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditPostContainer from './edit_post_container';

const mapStateToProps = state => {
  const comments = Object.values(state.entities.comments);
  return {
    users: state.entities.users,
    comments
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removePost: (id) => dispatch(removePost(id)),
    openModal: (postId) => dispatch(openModal(<EditPostContainer postId={postId} />)),
  };
};

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  dateStr () {
    const { post } = this.props
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
    } else if (timeSince < 1000*60*60*24) {
      hours = Math.floor(timeSince/(1000*60*60)%24);
      dateStr = `${hours} hr`;
      if (hours > 1) {
        dateStr += 's';
      }
    } else {
      dateStr = new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return dateStr;
  }

  handleClick() {
    this.setState( { buttonClicked: !this.state.buttonClicked } );
  }

  deletePost() {
    const { post, removePost } = this.props;
    debugger
    removePost(post.id);
  }

  render () {
    const { post, comments, users, openModal } = this.props;
    const postComments = comments.filter(comment => comment.post_id === post.id);
    const dateStr = this.dateStr();
    // const postAuthorHeader = (post.wall_id) ? <Link to={`/u/${post.author_id}`}>{users[post.author_id].full_name}</Link>
    //   <i className="material-icons">play_arrow</i>
    //   <Link to={`/u/${post.wall_id}`}>{users[post.author_id].full_name}</Link>
    //   : <Link to={`/u/${post.author_id}`}>{users[post.author_id].full_name}</Link>;

    const dropdownClasses = (this.state.buttonClicked) ? "shown" : "hidden";
    return (
      <li className="post-index-item">
        <div className='post-item-div'>
          <div className='edit-delete-dropdown' onClick={this.handleClick}>
            <i className="material-icons dropdown">arrow_drop_down</i>
            <ul className={`post-dropdown ${dropdownClasses}`}>
              <li className='dropdown-option' onClick={() => openModal(post.id)}>EDIT</li>
              <li className='dropdown-option' onClick={this.deletePost}>DELETE</li>
            </ul>
          </div>
          <div className='post-author-div'>
            <img src={users[post.author_id].miniPic}/>
            <div className='author-timestamp'>
              <Link to={`/u/${post.author_id}`}>{users[post.author_id].full_name}</Link>
              <div className='post-timestamp-div'>{dateStr}</div>
            </div>
          </div>
          <div className='post-body-div'>{post.body}</div>
        </div>
        <div className='comments-index-div'>
          <ol className='post-comments-list'>
            {postComments.map(comment => <CommentItem key={comment.id} comment={comment} />)}
          </ol>
          <div className='post-comment-form-div'>
            <CreateCommentContainer postId={post.id} />
          </div>
        </div>
      </li>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);
