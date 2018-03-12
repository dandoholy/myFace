import { connect } from 'react-redux';
import React from 'react';

import ProfilePage from './profile_page';
import { fetchProfile } from '../../actions/profile_actions';
import { getProfByUserId } from '../../reducers/selectors';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditProfileContainer from './edit_profile_container';

const mapStateToProps = ( state, ownProps ) => {
  const userId = ownProps.match.params.userId;
  const profile = getProfByUserId(state, userId);

  return {
    profile,
    userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    fetchProfile: (id) => dispatch(fetchProfile(id)),
    openModal: () => dispatch(openModal(<EditProfileContainer userId={userId}/>)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
