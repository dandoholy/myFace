import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FriendItem from './friend_item';

const FriendList = ( { friends } ) => {
  const friendItems = friends.map(friend => <FriendItem key={friend.id} friend={friend} />);
  return (
    <div className='friend-list-box'>
      <div className='friend-list-header'>
        <span className='friend-list-span'>
          <div className='friend-list-icon'><i className="material-icons fl-icon">supervisor_account</i></div>
          <div className='friend-list-label'>Friends</div>
          <div className='friend-count'>{friends.length}</div>
        </span>
      </div>
      <div className='friend-list-div'>
        {friendItems}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const friends = Object.values(state.entities.users[userId].friends || []);
  return {
    friends
  };
};

export default withRouter(connect(mapStateToProps, null)(FriendList));

// friends.map(friend => <FriendItem key={friend.id} friend={friend} />)
