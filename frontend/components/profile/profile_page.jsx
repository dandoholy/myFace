import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Modal from '../modal/modal';
import WallPostForm from '../posts/wall_post_container';
import ProfileHeader from './profile_header';

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
    const { profile, userId, fullName } = this.props;

    if (!profile) { return null; }
    return (
      <div className='profile-page-background' >
        <div className='total-profile-div'>
          <div className='profile-header-div'>
            <ProfileHeader profile={profile} userId={userId} fullName={fullName} />
          </div>
          <div className='profile-main-div'>
            <div className='profile-info-div'>
              <div className='intro-box'>
                <i className="material-icons intro-icon">account_circle</i>
                <span className='intro-text'>Intro</span>
              </div>
              <div className='profile-info-details-div'>
                <div className='profile-details-content'>
                  <div className='profile-detail'>
                    <span className='profile-detail-icon'><i className="material-icons md-14">fingerprint</i></span>
                    <span className='profile-detail-text'>
                      Also goes by {profile.nickname ||
                        <span className='psuedo-link' onClick={this.props.openModal}> -click here to add- </span> }
                        </span>
                  </div>
                    <div className='profile-detail'>
                      <span className='profile-detail-icon'><i className="material-icons md-14">home</i></span>
                      <span className='profile-detail-text'>
                        Lives at {profile.address ||
                          <span className='psuedo-link' onClick={this.props.openModal}> -click here to add- </span> }
                          </span>
                    </div>
                    <div className='profile-detail'>
                      <span className='profile-detail-icon'><i className="material-icons md-14">phone</i></span>
                        Can be reached at {profile.phone_number ||
                          <span className='psuedo-link' onClick={this.props.openModal}> -click here to add- </span> }
                    </div>
                    <div className='profile-detail'>
                      <span className='profile-detail-icon'><i className="material-icons md-14">work</i></span>
                        Works at {profile.work ||
                          <span className='psuedo-link' onClick={this.props.openModal}> -click here to add- </span> }
                    </div>
                    <div className='profile-detail'>
                      <span className='profile-detail-icon'><i className="material-icons md-14">school</i></span>
                      Went to school at {profile.college ||
                        <span className='psuedo-link' onClick={this.props.openModal}> -click here to add- </span> }
                    </div>
                </div>
                <div className='edit-button-div'>
                  <button onClick={this.props.openModal}><i className="material-icons md-12">mode_edit</i></button>
                </div>
              </div>
            </div>
            <div className='profile-posts-div'>
              <div className='profile-post-form-div'>
                <WallPostForm />
              </div>
              <div className='profile-posts-list-div'>
                <ol className='profile-posts-list'></ol>
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
