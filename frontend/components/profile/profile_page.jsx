import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../modal/modal';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      nickname: '',
      address: '',
      phone_number: '',
      work: '',
      college: '',
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
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

  componentDidMount() {
    this.props.fetchProfile(this.props.userId);
  }

  render() {
    const { profile, userId } = this.props;

    // debugger
    if (!profile) { return null; }
    return (
      <div className='total-profile-div'>
        <div className='profile-header-div'>
          <div className='profile-cover-div'></div>
          <div className='profile-nav-bar'></div>
          <div className='profile-pic-div'>
            <input type='file' onChange={this.updateFile}></input>
            <img src={this.state.imageUrl} />
          </div>
        </div>
        <div className='profile-main-div'>
          <div className='profile-posts-div'>
            <div className='profile-post-form-div'></div>
            <div className='profile-posts-div'>
              <ol className='profile-posts-list'></ol>
            </div>
          </div>
          <div className='profile-info-div'>
            <div className='profile-info-details-div'>
              <div className='profile-details-content'>
                <div className='edit-button-div'>
                  <button onClick={this.props.openModal}><i className="material-icons">mode_edit</i></button>
                </div>
                <div className='profile-detail'>Also goes by {profile.nickname ||
                    <a href='#'>"click here to add"<i className="material-icons">mode_edit</i></a> }</div>
                <div className='profile-detail'>Lives at {profile.address || "click here to add" }</div>
                <div className='profile-detail'>Can be reached at {profile.phone_number || "click here to add" }</div>
                <div className='profile-detail'>Works at {profile.work || "click here to add" }</div>
                <div className='profile-detail'>Went to school at {profile.college || "click here to add" }</div>
              </div>
            </div>
            <div className='profile-info-photos-div'>Photos</div>
            <div className='profile-info-friends-div'>Friends</div>
          </div>
        </div>
      </div>

    );
  }

}

export default ProfilePage;
