import React from 'react';

import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from '../session_forms/login_form_container';

const LoggedOutHeader = () => {
  return (
    <div className='logged-out-banner'>
      <div className='banner-content'>
        <div className='logo'>myface</div>
        <AuthRoute path="/" component={LoginFormContainer} />
      </div>
    </div>
  )
}

export default LoggedOutHeader;
