import React from 'react';
import { NavLink } from 'react-router-dom';

import CoverPhoto from './cover_photo';
import ProfilePhoto from './profile_photo';
import FriendButton from './friend_button';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverHovered: false,
      profileHovered: false,
    }
  }

  handleMouseEnter(field) {
    return () => {
      if (this.props.user.id === this.props.currentUser.id)
        this.setState({ [`${field}Hovered`]: true });
    }
  }

  handleMouseLeave(field) {
    return () => {
      if (this.props.user.id === this.props.currentUser.id)
        this.setState({ [`${field}Hovered`]: false });
    }
  }

  render() {
    const { profile, userId, fullName, ownProfile } = this.props;
    return (
      <div className='profile-header-total'>
        <div className='profile-cover-photo-div'>
          <CoverPhoto profile={profile} fullName={fullName} />
        </div>
        <div className='profile-nav-bar'>
          <div className='profile-nav-link-div'>
            <NavLink className='profile-nav-link' to={`/u/${userId}`} exact>Timeline</NavLink>
          </div>
          <div className='profile-nav-link-div'>
            <NavLink className='profile-nav-link' to={`/u/${userId}/friends`}>Friends</NavLink>
          </div>
          <div className='profile-nav-link-div'>
            <NavLink className='profile-nav-link' to={`/u/${userId}/photos`}>Photos</NavLink>
          </div>
          {!ownProfile ? <FriendButton /> : null}
        </div>
        <div className='profile-pic-div'>
          <ProfilePhoto profile={profile} />
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
