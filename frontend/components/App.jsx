import React from 'react';

import FeedPage from './feed/feed';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoggedOutHeader from './logged_out_splash/logged_out_header';
import LoggedOutBody from './logged_out_splash/logged_out_body';

const App = () => {
  return (
    <div>
      <LoggedOutHeader />
      <LoggedOutBody />
      <ProtectedRoute path='/' component={FeedPage} />
    </div>
  );
}

export default App;
