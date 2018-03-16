export const getProfByUserId = ( state , userId ) => {
  const byId = state.entities.profiles.byId;
  const byUserId = state.entities.profiles.byUserId;
  return byId[byUserId[userId]];
};

export const getFriendStatus = ( currentUser, friendId ) => {
  try {
    if (Boolean(currentUser.friends.accepted[friendId])) return "accepted";
  } catch (e) {
  }
  try {
    if (Boolean(currentUser.friends.pendingOut[friendId])) return "pendingOut";
  } catch (e) {
  }
  try {
    if (Boolean(currentUser.friends.pendingIn[friendId])) return "pendingIn";
  } catch (e) {
  }
  try {
    if (Boolean(currentUser.friends.rejectedIn[friendId])) return "rejected";
  } catch (e) {
  }
  return "none"
};
