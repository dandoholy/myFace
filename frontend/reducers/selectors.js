export const getProfByUserId = ( state , userId ) => {
  const byId = state.entities.profile.byId;
  const byUserId = state.entities.profile.byUserId;
  return byId[byUserId[userId]];
};
