import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { openModal, closeModal } from '../../actions/modal_actions';
import EditProfileContainer from './edit_profile_container';

const ProfileDetails = ( { profileOwner, profile, openModal } ) => {

  return (profileOwner) ? (
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
              <span className='psuedo-link' onClick={openModal}> -click here to add- </span> }
              </span>
          </div>
          <div className='profile-detail'>
            <span className='profile-detail-icon'><i className="material-icons md-14">home</i></span>
            <span className='profile-detail-text'>
              Lives at {profile.address ||
                <span className='psuedo-link' onClick={openModal}> -click here to add- </span> }
                </span>
          </div>
          <div className='profile-detail'>
            <span className='profile-detail-icon'><i className="material-icons md-14">phone</i></span>
              Can be reached at {profile.phone_number ||
                <span className='psuedo-link' onClick={openModal}> -click here to add- </span> }
          </div>
          <div className='profile-detail'>
            <span className='profile-detail-icon'><i className="material-icons md-14">work</i></span>
            Works at {profile.work ||
              <span className='psuedo-link' onClick={openModal}> -click here to add- </span> }
          </div>
          <div className='profile-detail'>
            <span className='profile-detail-icon'><i className="material-icons md-14">school</i></span>
            Went to school at {profile.college ||
              <span className='psuedo-link' onClick={openModal}> -click here to add- </span> }
          </div>
        </div>
        <div className='edit-button-div'>
          <button onClick={openModal}><i className="material-icons md-12">mode_edit</i></button>
        </div>
      </div>
    </div>
  ) : (
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
              Also goes by { profile.nickname || "--BLANK--"} </span>
          </div>
          <div className='profile-detail'>
            <span className='profile-detail-icon'><i className="material-icons md-14">home</i></span>
            <span className='profile-detail-text'>
              Lives at { profile.address || "--BLANK--"}
                </span>
          </div>
          <div className='profile-detail'>
            <span className='profile-detail-icon'><i className="material-icons md-14">phone</i></span>
              Can be reached at { profile.phone_number || "--BLANK--"}
          </div>
          <div className='profile-detail'>
            <span className='profile-detail-icon'><i className="material-icons md-14">work</i></span>
            Works at { profile.work || "--BLANK--"}
          </div>
          <div className='profile-detail'>
            <span className='profile-detail-icon'><i className="material-icons md-14">school</i></span>
            Went to school at { profile.college || "--BLANK--"}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const profileOwner = (state.session.currentUser.id == ownProps.match.params.userId);
  return {
    profileOwner
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    openModal: () => dispatch(openModal(<EditProfileContainer userId={userId}/>)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDetails));
