export const fetchUser = id => {
  return $.ajax({
    method: 'get',
    url: `/api/users/${id}`
  });
};

export const createFriendship = requested_id => {
  return $.ajax({
    method: 'post',
    url: `/api/users/${requested_id}/friendships`
  });
};

export const updateFriendship = (requested_id, status) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${requested_id}/friendships`,
    data: { friendship: { status } }
  });
};

export const destroyFriendship = (requested_id) => {
  return $.ajax({
    method: 'delete',
    url: `/api/users/${requested_id}/friendships`
  });
};
