import { connect } from 'react-redux';

import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Create Account',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitAction: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
