import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Modal from '../modal/modal';
import WallPostForm from '../posts/wall_post_container';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  updateFile (e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  uploadPhoto (e) {
    const file = this.state.imageFile;
    const formData = new FormData();
    if (file) formData.append("profile[banner_pic]", file);
    this.props.updateProfilePhoto(formData);
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.userId);
  }

  render() {
    const { profile, userId } = this.props;

    if (!profile) { return null; }
    return (
      <div className='total-profile-div'>
        <div className='profile-header-div'>
          <div className='profile-cover-div'>
            <div className='profile-cover-pic'>
              <img className='cover-pic' src={this.state.imageUrl} />
              <div className='cover-pic-uploader'>
                <input type='file' onChange={this.updateFile}></input>
                <button onClick={this.uploadPhoto}>Update Cover Photo</button>
              </div>
            </div>
            <div className='profile-name'>{this.props.fullName}</div>
          </div>
          <div className='profile-nav-bar'>
            <NavLink className='profile-nav-link' to={`u/${userId}`} exact>Timeline</NavLink>
            <NavLink className='profile-nav-link' to={`u/${userId}/friends`}>Friends</NavLink>
            <NavLink className='profile-nav-link' to={`u/${userId}/photos`}>Photos</NavLink>
          </div>
          <div className='profile-pic-div'>

          </div>
        </div>
        <div className='profile-main-div'>
          <div className='profile-posts-div'>
            <div className='profile-post-form-div'>
              <WallPostForm />
            </div>
            <div className='profile-posts-div'>
              <ol className='profile-posts-list'></ol>
            </div>
          </div>

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
        </div>
      </div>

    );
  }

}

// <div className='profile-info-photos-div'>Photos</div>
// <div className='profile-info-friends-div'>Friends</div>

export default ProfilePage;
