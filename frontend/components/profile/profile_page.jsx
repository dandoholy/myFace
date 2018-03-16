import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Modal from '../modal/modal';
import WallPostForm from '../posts/wall_post_container';
import ProfileHeader from './profile_header';
import ProfileDetails from './profile_details';
import FriendList from './friends_list';
import PostIndexContainer from '../posts/feed_post_index_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const { userId } = this.props;
    const newUserId = nextProps.match.params.userId;
    if ( userId !== newUserId ) {
      this.props.fetchProfile(newUserId);
    }
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.userId);
  }

  render() {
    const { profile, userId, fullName, ownProfile } = this.props;

    if (!profile) { return null; }
    return (
      <div className='profile-page-background' >
        <div className='total-profile-div'>
          <div className='profile-header-div'>
            <ProfileHeader profile={profile} userId={userId} ownProfile={ownProfile} fullName={fullName} />
          </div>
          <div className='profile-main-div'>
            <div className='profile-sidebar'>
              <ProfileDetails profile={profile} />
              <FriendList />
            </div>
            <div className='profile-posts-div'>
              <div className='profile-post-form-div'>
                <WallPostForm />
              </div>
              <div className='profile-posts-list-div'>
                <ol className='profile-posts-list'>
                  <PostIndexContainer />
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//  PROFILE PHOTO
// <img className='profile-pic-preview' src={this.state.imageUrl} />
// <img className='profile-pic' src={profile.profile_pic} />
// <div className='profile-pic-uploader'>
//   <input type='file' onChange={this.updateFile}></input>
//   <button onClick={this.uploadPhoto('profile_pic')}>Update Profile Photo</button>
// </div>

// <div className='profile-info-photos-div'>Photos</div>
// <div className='profile-info-friends-div'>Friends</div>

export default ProfilePage;
