export const fetchProfile = id => {
  return $.ajax({
    method: 'get',
    url: `/api/profiles/${id}`
  });
}

export const updateProfile = profile => {
  return $.ajax({
    method: 'patch',
    url: `/api/profiles/${id}`
  })
}
