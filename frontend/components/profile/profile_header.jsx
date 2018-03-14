import React from 'react';
import { NavLink } from 'react-router-dom';

import CoverPhoto from './cover_photo';

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
    const { profile, userId, fullName } = this.props;
    return (
      <div>
        <div className='profile-cover-photo-div'>
          <CoverPhoto profile={profile} fullName={fullName} />
        </div>
        <div className='profile-nav-bar'>
          <NavLink className='profile-nav-link' to={`/u/${userId}`} exact>Timeline</NavLink>
          <NavLink className='profile-nav-link' to={`/u/${userId}/friends`}>Friends</NavLink>
          <NavLink className='profile-nav-link' to={`/u/${userId}/photos`}>Photos</NavLink>
        </div>
        <div className='profile-pic-div'>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
