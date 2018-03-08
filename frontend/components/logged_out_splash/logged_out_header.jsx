import React from 'react';

import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from '../session_forms/login_form_container';

const LoggedOutHeader = () => {
  return (
    <div className='logged-out-banner'>
      <h1>myface</h1>
      <AuthRoute path="/" component={LoginFormContainer} />
    </div>
  )
}

export default LoggedOutHeader;
