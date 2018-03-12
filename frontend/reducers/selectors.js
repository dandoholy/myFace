export const getProfByUserId = ( state , userId ) => {
  const byId = state.entities.profiles.byId;
  const byUserId = state.entities.profiles.byUserId;
  return byId[byUserId[userId]];
};
