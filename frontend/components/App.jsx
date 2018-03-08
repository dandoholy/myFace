import React from 'react';

import FeedPage from './feed/feed';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoggedOutHeader from './logged_out_splash/logged_out_header';
import LoggedOutBody from './logged_out_splash/logged_out_body';
import HeaderContainer from './header/header_container';

const App = () => {
  return (
    <div>
      <div className='logged-out-content'>
        <AuthRoute path='/' component={LoggedOutHeader} />
        <AuthRoute path='/' component={LoggedOutBody} />
      </div>
      <ProtectedRoute path='/' component={HeaderContainer} />
      <ProtectedRoute path='/' component={FeedPage} />
    </div>
  );
}

export default App;
