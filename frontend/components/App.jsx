import React from 'react';

import FeedPage from './feed/feed';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoggedOutHeader from './logged_out_splash/logged_out_header';
import LoggedOutBody from './logged_out_splash/logged_out_body';
import HeaderContainer from './header/header_container';
import ProfilePageContainer from './profile/profile_page_container';
import CreatePostForm from './posts/create_post_container';
import PostIndexContainer from './posts/feed_post_index_container';

const App = () => {
  return (
    <div>
      <div className='logged-out-content'>
        <AuthRoute path='/' component={LoggedOutHeader} />
        <AuthRoute path='/' component={LoggedOutBody} />
      </div>
      <ProtectedRoute path='/' component={HeaderContainer} />
      <ProtectedRoute path='/' component={FeedPage} />
      <ProtectedRoute path='/u/:userId' component={ProfilePageContainer} />
      <ProtectedRoute exact path= '/' component={CreatePostForm} />
      <ProtectedRoute exact path= '/' component={PostIndexContainer} />
    </div>
  );
}

export default App;
