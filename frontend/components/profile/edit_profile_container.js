import { connect } from 'react-redux';

import EditProfileForm from './edit_profile_form';
import { getProfByUserId } from '../../reducers/selectors';
import { fetchProfile, updateProfile } from '../../actions/profile_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( state, ownProps ) => {
  const userId = ownProps.userId;
  const profile = getProfByUserId(state, userId);
  return {
    profile,
    userId
  };
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    fetchProfile: (id) => dispatch(fetchProfile(id)),
    updateProfile: (profile) => dispatch(updateProfile(profile, ownProps.userId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfileForm));
