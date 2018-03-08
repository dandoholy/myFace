import React from 'react';

import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SignupFormContainer from '../session_forms/signup_form_container';


const LoggedOutBody = () => {
  return (
    <div className='signup-main-div'>
      <div className='signup-greeting'>
        <h2>Connect with friends and the world around you on MyFace.</h2>
        <i className="far fa-newspaper">where you at</i>
        <span>See photos and updates</span>
        <span> from friends in News Feed.</span>
        <br></br>
        <span>Share what's new</span>
        <span>in your life on your Timeline.</span>
        <br></br>
        <span>Find more</span>
        <span>of what you're looking for with Facebook Search.</span>
      </div>
      <div className='signup-div'>
        <AuthRoute path="/" component={SignupFormContainer} />
      </div>
    </div>
  )
}

export default LoggedOutBody;
