import { connect } from 'react-redux';

import ProfilePage from './profile_page';
import { fetchProfile } from '../../actions/profile_actions';
import { getProfByUserId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps ) => {
  const userId = ownProps.match.params.userId;
  const profile = getProfByUserId(state, userId);
  // debugger

  return {
    profile: getProfByUserId(state, userId),
    userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: (id) => dispatch(fetchProfile(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
