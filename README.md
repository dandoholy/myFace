# my_face README

MyFace is a social media app designed to let you connect with your friends
and make posts.  Users can also comment on Posts and update their profile
with information and pictures.

* www.facechegg.herokuapp.com

## Technologies

* Rails
* React/Redux

## Features

* Profiles
Profiles are linked through user_id's (i.e. User with id: 1 can be found at #/u/1
  even if his profile id is different).  To accomplish this, the profile slice
  of state was separated with two reducers, one for storing the user's Profile ID
  under a key of his User ID and another with the Profile object under a key of
  its ID.  The relevant code snippet from the reducer can be found below
  along with the selector used to retrieve the appropriate profile from the state
  by user ID.
```javascript
// FROM profiles_reducer.js
const profilesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROFILE:
      return merge( {}, { [action.profile.id]: action.profile });
  }
};
const byUserId = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROFILE:
      return merge({}, state, { [action.profile.user_id]: action.profile.id });
  }
}
// FROM selectors.js
export const getProfByUserId = ( state , userId ) => {
  const byId = state.entities.profiles.byId;
  const byUserId = state.entities.profiles.byUserId;
  return byId[byUserId[userId]];
};
```

* Posts
Posts are slightly different in that they can be standalone posts or they
  can be posted on a user's wall (profile) with the associated wall_id as
  an optional field.  Thus, posts needed two containers: one for a generic
  post and another with an embedded wall/profile id which was passed through
  as a property from the Profile component under which it was rendered.
  This was important as the feed from a profile should only include posts
  made by the current User or those that were made on/from that user's profile.
  This opens up further avenues for mentions under posts such that if a User is
  mentioned specifically (i.e. a post is made on User 3's wall but User 2 was
  also mentioned), the message could pop up as though it were posted on both
  walls.

## Upcoming Features

* Live Chat
* Nested Comments
* Photo Uploads
* Likes
* User Search
* Notifications
* Mentions
