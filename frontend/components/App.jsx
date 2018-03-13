import React from 'react';

import FeedPage from './feed/feed';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoggedOutHeader from './logged_out_splash/logged_out_header';
import LoggedOutBody from './logged_out_splash/logged_out_body';
import HeaderContainer from './header/header_container';
import ProfilePageContainer from './profile/profile_page_container';
import Modal from './modal/modal';

const App = () => {
  return (
    <div>
      <Modal />
      <div className='logged-out-content'>
        <AuthRoute path='/' component={LoggedOutHeader} />
        <AuthRoute path='/' component={LoggedOutBody} />
      </div>
      <ProtectedRoute path='/' component={HeaderContainer} />
      <ProtectedRoute exact path='/' component={FeedPage} />
      <ProtectedRoute path='/u/:userId' component={ProfilePageContainer} />
    </div>
  );
}

export default App;


// <ProtectedRoute exact path= '/' component={CreatePostForm} />
// <ProtectedRoute exact path= '/' component={PostIndexContainer} />
