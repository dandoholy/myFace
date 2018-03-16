import { connect } from 'react-redux';
import React from 'react';

import ProfilePage from './profile_page';
import { fetchProfile, updateProfilePhoto } from '../../actions/profile_actions';
import { getProfByUserId } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditProfileContainer from './edit_profile_container';

const mapStateToProps = ( state, ownProps ) => {
  const userId = ownProps.match.params.userId;
  const profile = getProfByUserId(state, userId);
  const ownProfile = (state.session.currentUser.id == userId)
  let fullName;
  if (profile) {
    fullName = profile.user.full_name;
  }
  return {
    profile,
    userId,
    fullName,
    ownProfile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    fetchProfile: (id) => dispatch(fetchProfile(id)),
    openModal: () => dispatch(openModal(<EditProfileContainer userId={userId}/>)),
    closeModal: () => dispatch(closeModal()),
    updateProfilePhoto: (profile) => dispatch(updateProfilePhoto(profile, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
