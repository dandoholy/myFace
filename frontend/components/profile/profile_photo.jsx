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
    const hoveredClass = (this.state.hovered) ? "hovering" : "not-hovering"
    return (
      <div className='profile-photo-container'
        onMouseEnter={ this.handleMouseEnter }
        onMouseLeave={ this.handleMouseLeave }
      >
        <div className={`profile-photo ${hoveredClass}`}><img src={this.props.profile.profile_pic}/></div>
        <div className={`profile-photo ${hoveredClass}`}></div>
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

export default withRouter(connect(null, mapDispatchToProps)(ProfilePhoto));
