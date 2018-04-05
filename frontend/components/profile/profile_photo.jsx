import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateProfilePhoto } from '../../actions/profile_actions';

class ProfilePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      hovered: false,
    };
    this.updateFile = this.updateFile.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    this.setState({ hovered: false });
  }

  updateFile (e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: null, imageFile: null });
    }
  }

  uploadPhoto (picCategory) {
    // const { submit, picCategory } = this.props;
    const file = this.state.imageFile;
    const formData = new FormData();
    if (file) formData.append(`profile[${picCategory}]`, file);
    this.props.updateProfilePhoto(formData);
    this.setState({ imageUrl: null, imageFile: null });
  }

  handleClick() {
    this.fileInput.click();
  }

  render () {
    const { profile, fullName, profileOwner } = this.props;
    const previewing = (this.state.imageUrl) ? "previewing" : "not-previewing";
    const hoveredClass = (this.state.hovered) ? "hovering" : "not-hovering"
    const profileUpdate = (profileOwner) ? (
      <div className={`profile-pic-uploader ${hoveredClass}`} onClick={this.handleClick} >
        <button className={`profile-pic-button`} ><i className={`material-icons profile-icon`}>photo_camera</i>
        <div className={`pp-uploader-label`}>Update Profile Photo</div></button>
        <div className={`input hidden`}><input type='file' onChange={this.updateFile} ref={el => this.fileInput = el}></input></div>

      </div>
    ) : null;
    return (
      <div className={`profile-photo-container ${hoveredClass}`}
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }
      >
        <img className={`profile-pic-preview ${previewing}`} src={this.state.imageUrl} />
        <img className={`profile-photo`} src={this.props.profile.profile_pic}/>
        {profileUpdate}
        <div className={`profile-photo-update-buttons ${previewing}`}>
          <button className={`photo-cancel-button ${previewing}`} onClick={() => this.setState({ imageUrl: null, imageFile: null })}>Cancel</button>
          <button className={`photo-save-button ${previewing}`} onClick={() => this.uploadPhoto('profile_pic')}>Save Changes</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const profileOwner = (state.session.currentUser.id == ownProps.match.params.userId);
  return {
    profileOwner
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    updateProfilePhoto: (profile) => dispatch(updateProfilePhoto(profile, userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePhoto));
