export const fetchProfile = id => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/profiles/${id}`
    })
  );
}

export const fetchUser = id => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}`
  })
};

export const updateProfile = (profile, userId) => {
  return $.ajax({
    method: 'patch',
    url: `/api/profiles/${userId}`,
    data: { profile }
  })
}
