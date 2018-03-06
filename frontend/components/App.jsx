import React from 'react';

import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';

const App = () => {
  return (
    <div>
      <h1>Your Face Here</h1>
      <LoginFormContainer />
      <SignupFormContainer />

    </div>
  );
}

export default App;
