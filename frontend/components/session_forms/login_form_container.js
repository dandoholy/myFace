import { connect } from 'react-redux';

import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log In'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
    demo: () => dispatch(login({ email: 'guest@demo.com', password: 'starwars' }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
