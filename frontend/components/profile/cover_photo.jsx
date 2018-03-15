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
    };
    this.updateFile = this.updateFile.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

  render () {
    const { profile, fullName } = this.props;
    const previewing = (this.state.imageUrl) ? "previewing" : "hidden";
    const hoveredClass = (this.state.hovered) ? "hovering" : "not-hovering"
    return (
      <div className='profile-cover-div'
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }
        >
        <div className='profile-cover-pic-container'>
          <img className={`cover-pic-preview ${previewing}`} src={this.state.imageUrl} />
          <img className='cover-pic' src={profile.cover_pic} />
          <div className='cover-pic-uploader'>
            {(this.state.hovered) ? <button><i className="material-icons mini">photo_camera</i> <span>Update Cover Photo</span></button> : <i className="material-icons">photo_camera</i>}
            <div className='display-on-hover'><input type='file' onChange={this.updateFile}></input></div>
            <div className={`cover-update-buttons ${previewing}`}>
              <button className={`cover-cancel-button ${previewing}`} onClick={() => this.setState({ imageUrl: null, imageFile: null })}>Cancel</button>
              <button className={`cover-save-button ${previewing}`} onClick={this.uploadPhoto('cover_pic')}>Save Changes</button>
            </div>
          </div>
        </div>
        <div className='profile-name'>{this.props.fullName}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    updateProfilePhoto: (profile) => dispatch(updateProfilePhoto(profile, userId))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CoverPhoto));
