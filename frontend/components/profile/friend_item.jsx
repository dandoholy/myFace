import React from 'react';
import { Link } from 'react-router-dom';

const FriendItem = ({ friend }) => {
  return (
    <li className='friend-item'>
      <Link to={`/u/${friend.id}`}>
        <img src={friend.pic} />
        <div className='friend-name'>{friend.full_name}</div>
      </Link>
    </li>
  );
};

export default FriendItem;
