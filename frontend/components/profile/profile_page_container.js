import { connect } from 'react-redux';

import ProfilePage from './profile_page';
import { fetchProfile } from '../../actions/profile_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile = (id) => dispatch(fetchProfile(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
