import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateProfilePhoto } from '../../actions/profile_actions';


class CoverPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      hovered: false,
      buttonClicked: false,
    };
    this.updateFile = this.updateFile.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
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
    return (e) => {
      const file = this.state.imageFile;
      const formData = new FormData();
      if (file) formData.append(`profile[${picCategory}]`, file);
      this.props.updateProfilePhoto(formData);
      this.setState({ imageUrl: null, imageFile: null });
    }
  }

  toggleClick () {
    this.setState({buttonClicked: !this.state.buttonClicked})
  }

  render () {
    const { profile, fullName, profileOwner } = this.props;
    const previewing = (this.state.imageUrl) ? "previewing" : "not-previewing";
    const hoveredClass = (this.state.hovered) ? "hovering" : "not-hovering";
    const clickedClass = (this.state.buttonClicked) ? "clicked" :"hidden";
    const coverUpdate = (profileOwner) ? (
      <div className={`cover-pic-uploader ${hoveredClass}`}>
        <button onClick={this.toggleClick}><i className={`material-icons cover-icon ${hoveredClass}`}>photo_camera</i>
        <div className={`uploader-label ${hoveredClass}`}>Update Cover Photo</div></button>
        <div className={`input ${clickedClass}`}><input type='file' onChange={this.updateFile}></input></div>
        <div className={`cover-update-buttons ${previewing}`}>
          <button className={`cover-cancel-button ${previewing}`} onClick={() => this.setState({ imageUrl: null, imageFile: null })}>Cancel</button>
          <button className={`cover-save-button ${previewing}`} onClick={this.uploadPhoto('cover_pic')}>Save Changes</button>
        </div>
      </div>
    ) : null;
    return (
      <div className='profile-cover-div'
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }
        >
        <div className='profile-cover-pic-container'>
          <img className={`cover-pic-preview ${previewing}`} src={this.state.imageUrl} />
          <img className='cover-pic' src={profile.cover_pic} />
          {coverUpdate}
        </div>
        <div className='profile-name'>{this.props.fullName}</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoverPhoto));
