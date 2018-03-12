export const createPost = post => {
  return (
    $.ajax({
      method: 'post',
      url: `/api/posts`,
      data: { post }
    })
  );
};

export const updatePost = post => {
  return (
    $.ajax({
      method: 'patch',
      url: `/api/posts/${post.id}`,
      data: { post }
    })
  );
};

export const fetchPosts = () => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/posts`,
    })
  );
};

export const fetchPost = id => {
  return (
    $.ajax({
      method: 'get',
      url: `/api/posts/${id}`,
    })
  );
};

export const deletePost = id => {
  return (
    $.ajax({
      method: 'delete',
      url: `/api/posts/${id}`,
    })
  );
};
